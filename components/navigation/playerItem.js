import * as React from "react";
import { motion } from "framer-motion";
import Status from "../pastille.js/status";
import { useAppContext } from '../../pages/_app';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export default function PlayerItem({ i, type, name, statut, myName, image, groupeLeader }){

  const {gameManagement, setGameManagement} = useAppContext(); 

  const you = "(you)"

  function invite(){
    gameManagement.playerList.map((player, index)=>{
      if(player.name == myName)
        player.inGroupOf = myName
    })
    gameManagement.isLeader = 'true'
    setGameManagement({...gameManagement})

    const choice = {
      choice: 'groupeInvitation',
      playerName: name,
  };
  gameManagement.websocket.send(JSON.stringify(choice))
  }

  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li variants={variants} className="list-none mb-[20px] flex items-center">
      <div>
      <div className="flex">
        <div>
          <img src={image} width='60'/>
        </div>
        <div>
          <div className="flex">
            <h1 className="font-bold ml-2">{name}</h1>
            {name === myName && <h1 className="font-bold ml-2">{you}</h1>}
          </div>
          <Status type={statut}/>
        </div>
        {statut === 'available' && name != myName && groupeLeader === '' &&
          <motion.button  onClick={invite} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="bg-application-secondary text-white font-bold rounded-xl w-20 ml-10 border-gray-300 border-2">
            <p>Invite</p>
          </motion.button>
        }
      </div>
      <div>
        {groupeLeader !=  ''&& groupeLeader == myName && myName == name && <Status type={'leader'}/>}
        {groupeLeader !=  ''&& groupeLeader != myName && myName == name && <Status type={'inGroupe'} leader={groupeLeader}/>}
        {groupeLeader !=  ''&& groupeLeader != name && myName != name && <Status type={'inGroupe'} leader={groupeLeader}/>}
        {groupeLeader !=  ''&& groupeLeader == name && groupeLeader != myName && name != myName && <Status type={'leader'}/>}
      </div>
      </div>
    </motion.li>
  );
};
