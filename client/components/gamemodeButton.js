import { motion } from "framer-motion"
import Link from 'next/link';

export default function GameModeButton({gamemodePicture, gamemodeName}) {
    return (
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="bg-white rounded-xl ml-[10%] mt-[2%] border-b-4 border-sky-900">
            <Link href="/">
                <div>
                    <img className="w-1/3 ml-[33%]" src={gamemodePicture}/>
                    <h1 className="font-bold font-junegull text-xl">{gamemodeName}</h1>
                </div>
            </Link>
        </motion.button>
    )
}