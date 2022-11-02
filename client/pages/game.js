import { motion } from "framer-motion"
import PlayerBanner from "../components/playerBanner";
import GameModeButton from "../components/gamemodeButton";
import LetterButton from "../components/letterButton";
import Link from 'next/link';

export default function Game() {
    return (
        <div className='w-screen h-screen bg-gradient-to-r from-game-background-color1 to-game-background-color2'>
            <div className="w-screen h-2/3">

            </div>
            <div>
                <div className="ml-[5%]">
                    <LetterButton letter={'A'}/>
                    <LetterButton letter={'B'}/>
                    <LetterButton letter={'C'}/>
                    <LetterButton letter={'D'}/>
                    <LetterButton letter={'E'}/>
                    <LetterButton letter={'F'}/>
                    <LetterButton letter={'G'}/>
                    <LetterButton letter={'H'}/>
                    <LetterButton letter={'I'}/>
                    <LetterButton letter={'J'}/>
                    <LetterButton letter={'K'}/>
                </div>
                <div className="ml-[11.5%]">
                    <LetterButton letter={'L'}/>
                    <LetterButton letter={'M'}/>
                    <LetterButton letter={'N'}/>
                    <LetterButton letter={'O'}/>
                    <LetterButton letter={'P'}/>
                    <LetterButton letter={'Q'}/>
                    <LetterButton letter={'R'}/>
                    <LetterButton letter={'S'}/>
                    <LetterButton letter={'T'}/>
                    <LetterButton letter={'U'}/>
                </div>
                <div className="flex ml-[15%]">
                        <LetterButton letter={'V'}/>
                        <LetterButton letter={'W'}/>
                        <LetterButton letter={'X'}/>
                        <LetterButton letter={'Y'}/>
                        <LetterButton letter={'Z'}/>
                        <input className="ml-[6%] w-[40%] h-10 mt-3 rounded-xl bg-notif-background-color" type={'text'}/>
                </div>
            </div>
        </div>
    )
}