import { motion } from "framer-motion"
import Link from 'next/link';

export default function LetterButton({letter}) {
    return (
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="bg-white rounded-xl ml-[3%] w-[5%] border-b-4 border-sky-900">
            <h1 className="font-junegull text-6xl">{letter}</h1>
        </motion.button>
    )
}