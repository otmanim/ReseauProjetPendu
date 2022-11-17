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

const client = new W3CWebSocket('ws://127.0.0.1:8001');
//const client = new WebSocket('ws://127.0.0.1:8001')


//On va ajouter un array de notif (peut etre en usecontext ?? à voir) et ajouter une notif à chaque fois quon reçoit
//un msg de connexion (normalement ça marche mon pote)




export default function Controller() {

  const {gameManagement, setGameManagement} = useAppContext(); 
  gameManagement.websocket = client


  client.onmessage = (data) => {
    const event = JSON.parse(data.data);
    switch (event.type) {
      case "connection":
        gameManagement.newNotif.push({id: event.id, type : 'New Connection', content : event.player + ' join the server'})
        gameManagement.playerList.push({name : event.player, statut: event.statut, inGroupOf: ''})
        gameManagement.playerID = event.id
        setGameManagement({...gameManagement})
        break;
      case "getPlayers":
        gameManagement.playerList.push({name : event.player, statut: event.statut, inGroupOf: event.inGroupOf})
        setGameManagement({...gameManagement})
        break;
      case "groupeInvitation":
        gameManagement.newNotif.push({id: event.id, type : 'New Invitation', content : event.player + ' invite you in his groupe'})
        setGameManagement({...gameManagement})
        break;
      case "newGroupe":
        gameManagement.playerList.map((player, index)=>{
          if(player.name == event.player)
            player.inGroupOf = event.player
        })
        setGameManagement({...gameManagement})
        console.log('CREATION DE GROUPE DE '+ event.name)
        break;
      case "newMember":
        gameManagement.playerList.map((player, index)=>{
          if(player.name == event.name)
            player.inGroupOf = event.leader
        })
        gameManagement.isLeader = 'false'
        setGameManagement({...gameManagement})
        console.log(gameManagement.playerList)
        break;
      case "gameModeChoice":
        gameManagement.step = event.game
        console.log('On verifie le jeu selectionne, il s\'agit du ' + event.game)
        switch(event.game){
          case 2 :
            console.log('Pret pour jouer au mode classique !')
            const choice = {
              choice: 'playClassicMod'
            };
            gameManagement.websocket.send(JSON.stringify(choice))
            console.log('Procédure terminée!')
            break
          default :
            break
        }
        setGameManagement({...gameManagement})
        break;
      case "play":
        gameManagement.gameStatut[0].clavier[event.index].inWord = event.isInWord
        if (event.isInWord === "n") {
          gameManagement.nbError += 1
        }
        gameManagement.hiddenWord = event.hiddenWord
        setGameManagement({...gameManagement})
        break;
      default:
        throw new Error(`Unsupported event type: ${event.type}.`);
    }
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
      </div>
    )
}
