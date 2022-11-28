import { ReactDOM } from 'react-dom'
import React, { Component } from 'react'
import { w3cwebsocket as W3CWebSocket } from 'websocket'
import {useRef} from 'react';
import { useState } from 'react';
import Notification from '../components/notification'
import { useAppContext } from './_app';
import { motion } from 'framer-motion';
import Login from '../components/login';
import Home from '../components/home';
import GameScreen from '../components/game';
import GameScreenGeoHangman from '../components/gameGeoHangman';
import GameScreenServer from '../components/gameServer';
import GameScreenChrono from '../components/gameWithChrono';

const client = new W3CWebSocket('ws://127.0.0.1:8001');
//const client = new WebSocket('ws://127.0.0.1:8001')


//On va ajouter un array de notif (peut etre en usecontext ?? à voir) et ajouter une notif à chaque fois quon reçoit
//un msg de connexion (normalement ça marche mon pote)




export default function Controller() {

  const {gameManagement, setGameManagement} = useAppContext(); 
  gameManagement.websocket = client

  function selectGameMod(step){
    switch(step){
      case 2 :
        return 'playClassicMod'
        break;
      case 3 :
        return 'playVersusServer'
        break;
      case 4 :
        return 'playWithTime'
        break;
      case 5 :
        return 'playGeoHangman'
        break;
    }
  }


  client.onmessage = (data) => {
    const event = JSON.parse(data.data);
    switch (event.type) {
      case "connection":
        gameManagement.newNotif.push({id: event.id, type : 'New Connection', content : event.player + ' join the server'})
        gameManagement.playerList.push({name : event.player, statut: event.statut, inGroupOf: ''})
        gameManagement.playerID = event.id
        break;
      case "getPlayers":
        gameManagement.playerList.push({name : event.player, statut: event.statut, inGroupOf: event.inGroupOf})
        break;
      case "groupeInvitation":
        gameManagement.newNotif.push({id: event.id, type : 'New Invitation', content : event.player + ' invite you in his groupe'})
        break;
      case "newGroupe":
        gameManagement.playerList.map((player, index)=>{
          if(player.name == event.player)
            player.inGroupOf = event.player
        })
        console.log('CREATION DE GROUPE DE '+ event.name)
        break;
      case "newMember":
        gameManagement.playerList.map((player, index)=>{
          if(player.name == event.name)
            player.inGroupOf = event.leader
        })
        gameManagement.isLeader = 'false'
        console.log(gameManagement.playerList)
        break;
      case "gameModeChoice":
        gameManagement.step = event.game
        console.log('On verifie le jeu selectionne, il s\'agit du ' + event.game)
        console.log('Pret pour jouer au mode classique !')
        const choice = {
          choice: selectGameMod(event.game)
        };
        gameManagement.websocket.send(JSON.stringify(choice))
        console.log('Procédure terminée!')
        break;
      case "play":
        gameManagement.gameStatut[0].clavier[event.index].inWord = event.isInWord
        if (event.isInWord === "n") {
          gameManagement.nbError += 1
          gameManagement.nbEssaisRestants = event.nbEssaisRestants
        }
        gameManagement.hiddenWord = event.hiddenWord.split('')
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
      case "word":
        gameManagement.hiddenWord = event.word.split('')
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
