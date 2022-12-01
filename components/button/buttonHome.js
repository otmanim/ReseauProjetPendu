import { motion } from 'framer-motion';
import { useState } from 'react';
import { useAppContext } from '../../pages/_app';

export default function ButtonHome({title, balise, step}) {

    const {gameManagement, setGameManagement} = useAppContext(); 
    const [statutPlayer, setStatutPLayer] = useState('');

    function play() {
        gameManagement.playerStatut = 'ingame'
        if (title == 'VERSUS'){
            gameManagement.versus = true
        }
        else {
            gameManagement.versus = false
        }
        setGameManagement({...gameManagement})
        const choice = {
            choice: 'leaderChoice',
            step: step,
            versus : gameManagement.versus
        };
        gameManagement.websocket.send(JSON.stringify(choice))
      }

    return (
        <div>
        {(statutPlayer == '' || statutPlayer == gameManagement.name) &&
        <motion.button 
            whileHover={{ scale: 1.1 }}
            className="bg-gradient-to-r from-button-home-1 to-button-home-2 w-[10rem] rounded-full border-2 border-white ml-[10%] mt-[10%]"
            onClick={play} >
            <h1 className='font-bold text-white text-xl py-2'>{title}</h1>
        </motion.button>
        }
        </div>
    )
}