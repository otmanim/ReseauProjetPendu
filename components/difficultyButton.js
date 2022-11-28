import { motion } from "framer-motion"
import { useAppContext } from '../pages/_app';

export default function DifficultyButton({difficulty, selected}){
    
    const {gameManagement, setGameManagement} = useAppContext(); 

    const changeDifficulty = (difficulty) => {
        gameManagement.difficulty = difficulty
        setGameManagement({...gameManagement})
        console.log(gameManagement.difficulty)
      };
    
    return (
        <div>
            {difficulty == 'EASY' && selected != 'EASY' &&
                <motion.button onClick={event => changeDifficulty('EASY')} className="w-[80%] font-bold text-xl ml-[10%] bg-gray-700 rounded-full hover:bg-gradient-to-br from-EASY1 to-EASY2 h-16 mt-[7%]" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    EASY
                </motion.button>
            }

            {difficulty == 'EASY' && selected == 'EASY' &&
                <motion.button className="w-[80%] ml-[10%] font-bold text-xl text-black bg-white rounded-full h-16 mt-[7%] cursor-default">
                    EASY
                </motion.button>
            }

            {difficulty == 'MEDIUM' && selected != 'MEDIUM' &&
                <motion.button onClick={event => changeDifficulty('MEDIUM')} className="w-[80%] font-bold text-xl ml-[10%] bg-gray-700 rounded-full hover:bg-gradient-to-br from-MEDIUM1 to-MEDIUM2 h-16 mt-[7%]" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    MEDIUM
                </motion.button>
            }

            {difficulty == 'MEDIUM' && selected == 'MEDIUM' &&
                <motion.button className="w-[80%] ml-[10%] font-bold text-xl text-black bg-white rounded-full h-16 mt-[7%] cursor-default">
                    MEDIUM
                </motion.button>
            }

            {difficulty == 'HARD' && selected != 'HARD' &&
                <motion.button onClick={event => changeDifficulty('HARD')} className="w-[80%] font-bold text-xl ml-[10%] bg-gray-700 rounded-full hover:bg-gradient-to-br from-HARD1 to-HARD2 h-16 mt-[7%]" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    HARD
                </motion.button>
            }

            {difficulty == 'HARD' && selected == 'HARD' &&
                <motion.button className="w-[80%] ml-[10%] font-bold text-xl text-black bg-white rounded-full h-16 mt-[7%] cursor-default">
                    HARD
                </motion.button>
            }
        </div>
    )
}