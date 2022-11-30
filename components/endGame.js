import { motion } from "framer-motion"
import { useAppContext } from '../pages/_app';
import ButtonHome from "./button/buttonHome";

export default function EndGameScreen({status, clavier}){
    const {gameManagement, setGameManagement} = useAppContext();

    function backHome() {
        gameManagement.playerStatut = 'available'
        gameManagement.gameStatut[0].clavier = clavier
        gameManagement.nbError = 0
        gameManagement.nbEssaisRestants = 8
        gameManagement.step = 1
        gameManagement.timeOut = false
        gameManagement.hints = []
        gameManagement.win = false
        setGameManagement({...gameManagement})
      }

    function play() {
        gameManagement.playerStatut = 'ingame'
        gameManagement.gameStatut[0].clavier = clavier
        gameManagement.nbError = 0
        gameManagement.nbEssaisRestants = 8
        gameManagement.timeOut = false
        gameManagement.hints = []
        gameManagement.win = false
        setGameManagement({...gameManagement})
        const choice = {
            choice: 'leaderChoice',
            step: gameManagement.step,
        };
        gameManagement.websocket.send(JSON.stringify(choice))
      }

    return(
        <div className="absolute w-2/3 h-2/3 bg-gradient-to-b from-violet-500 to-violet-900 rounded-xl z-10 left-60 top-20 border-white border-8">
            {status == 'perdu' && 
                <div className="text-center text-9xl font-bold mt-10">
                    <h1 className="text-white">GAME</h1>
                    <h1 className="text-white">OVER</h1>
                </div>
            }
            {status == 'gagne' && 
                <div className="text-center text-5xl font-bold mt-5">
                    <h1 className="text-white">Felicitation, vous avez</h1>
                    <h1 className="text-green-400 mt-2">GAGNE...</h1>
                </div>
            }
            <div className="text-center mt-5">
                <h1 className="text-3xl font-bold text-white">PLAY AGAIN ?</h1>
            </div>
            <div className="text-center">
                <motion.button 
                    onClick={backHome}
                    whileHover={{ scale: 1.1 }}
                    className="text-white bg-gradient-to-tr from-orange-200 to-red-600 w-16 h-16 text-xl font-bold rounded-full border-white border-2 mt-10">
                        NO
                </motion.button>
                <motion.button 
                    onClick={play}
                    whileHover={{ scale: 1.1 }}
                    className="text-white bg-gradient-to-tr from-emerald-200 to-green-600 w-16 h-16 text-xl font-bold rounded-full border-white border-2 mt-10 ml-10">
                        YES
                </motion.button>
            </div>
        </div>
    )
}