import React, { Component } from 'react'
import { w3cwebsocket as W3CWebSocket } from 'websocket'
import Notification from '../components/notification'
import { useAppContext } from './_app';
import Login from '../components/login';
import Home from '../components/home';
import GameScreen from '../components/game';
import GameScreenGeoHangman from '../components/gameGeoHangman';
import GameScreenServer from '../components/gameServer';
import GameScreenChrono from '../components/gameWithChrono';

//C'est ici qu'il faut modifier l'adresse ip afin de jouer avec le serveur.
const client = new W3CWebSocket('ws://192.168.1.33:8001');

export default function Controller() {

  const {gameManagement, setGameManagement} = useAppContext(); 
  gameManagement.websocket = client

  
  function selectGameMod(step){
    switch(step){
      case 2 :
        return 'playClassicMod'
      case 3 :
        return 'playVersusServer'
      case 4 :
        return 'playWithTime'
      case 5 :
        return 'playGeoHangman'
    }
  }

  function resetGameParameters(){
    gameManagement.playerStatut = 'ingame'
    gameManagement.gameStatut = []
    gameManagement.nbError = 0
    gameManagement.nbEssaisRestants = 8
    gameManagement.timeOut = false
    gameManagement.hints = []
    gameManagement.win = false
    setGameManagement({...gameManagement})
  }


  client.onmessage = (data) => {
    const event = JSON.parse(data.data);
    switch (event.type) {
      case "connection":
        gameManagement.newNotif.push({id: event.id, type : 'New Connection', content : event.player + ' join the server'})
        gameManagement.playerList.push({name : event.player, statut: event.statut, inGroupOf: '', image: event.image})
        break;
      case "getPlayers":
        gameManagement.playerList.push({name : event.player, statut: event.statut, inGroupOf: event.inGroupOf, image: event.image})
        break;
      case "groupeInvitation":
        gameManagement.newNotif.push({id: event.id, type : 'New Invitation', content : event.player + ' invite you in his groupe'})
        break;
      case "newGroupe":
        gameManagement.playerList.map((player, index)=>{
          if(player.name == event.player)
            player.inGroupOf = event.player
        })
        gameManagement.isLeader = 'true'
        gameManagement.groupeLeader = event.player
        break;
      case "newMember":
        gameManagement.playerList.map((player, index)=>{
          if(player.name == event.name)
            player.inGroupOf = event.leader
            gameManagement.groupeLeader = event.leader
        })
        gameManagement.isLeader = 'false'
        break;
      case "gameModeChoice":
        resetGameParameters()
        gameManagement.step = event.game
        gameManagement.nbEssaisRestants = event.nbEssais
        const choice = {
          choice: selectGameMod(event.game),
          versus : event.versus
        };
        gameManagement.websocket.send(JSON.stringify(choice))
        break;
      case "play":
        gameManagement.gameStatut[0].clavier[event.index].inWord = event.isInWord
        if (event.isInWord === "n") {
          gameManagement.nbError += 1
          gameManagement.nbEssaisRestants = event.nbEssaisRestants
        }
        gameManagement.hiddenWord = event.hiddenWord.split('')
        break;
      case "wordSuggested":
        if (event.isInWord == 'n'){
          gameManagement.nbError += 1
          gameManagement.nbEssaisRestants = gameManagement.nbEssaisRestants - 1
        }
        else {
          gameManagement.win = true
        }
        break;
      case "playServer":
        gameManagement.potentialWords = event.motPossibles
        gameManagement.hiddenWord = event.hiddenWord.split('')
        if (event.isInWord === "n") {
          gameManagement.nbError += 1
          gameManagement.nbEssaisRestants = event.nbEssaisRestants
        }
        gameManagement.gameStatut[0].clavier.map((lettre,i)=>{
          if(lettre.letter == event.letter)
            lettre.inWord = event.isInWord

        })
        break;
      case "hints":
        gameManagement.hints = [event.first, event.second, event.third]
        break;
      case "serverError":
        gameManagement.timeOut = true
        break;
      case "serverValidation":
        gameManagement.timeOut = false
        break;
      case "word":
        gameManagement.hiddenWord = event.word.split('')
        gameManagement.turn = event.turn
        break;
      case "end":
        if (!event.win){
          gameManagement.nbEssaisRestants = 0 
        }
        else {
          gameManagement.win = true
        }
        const end = {
          type: 'endGame',
        };
        gameManagement.websocket.send(JSON.stringify(end))
        break;
      case "endServer":
        if (!event.win){
          gameManagement.nbEssaisRestants = 0 
        }
        else {
          gameManagement.win = true
        }
        break;
      case "turn":
        gameManagement.turn = event.turn
        break;
      default:
        throw new Error(`Unsupported event type: ${event.type}.`);
    }
    setGameManagement({...gameManagement})
  };
  
  
    return (
      <div className='bg-application-primary w-screen h-screen'>
        <div className='absolute right-0 top-0 w-[20%]'>
          {gameManagement.newNotif.map((newNotif, index)=>(
            <Notification key={index} type={newNotif.type} content={newNotif.content} index={index}/>
          ))}
        </div>
        {gameManagement.step === 0 && <Login client={client}/>}
        {gameManagement.step === 1 && <Home/>}
        {gameManagement.step === 2 && <GameScreen client={client}/>}
        {gameManagement.step === 3 && <GameScreenServer client={client}/>}
        {gameManagement.step === 4 && <GameScreenChrono client={client}/>}
        {gameManagement.step === 5 && <GameScreenGeoHangman client={client}/>}
      </div>
    )
}
