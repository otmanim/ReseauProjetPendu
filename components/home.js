import PlayerList from "./navigation/playerList"
import ButtonHome from "./button/buttonHome"
import { motion } from "framer-motion"
import { useAppContext } from '../pages/_app';
import React, { useState } from 'react';

export default function Home() {

    const {gameManagement, setGameManagement} = useAppContext(); 
    

    return (
        <div>
            <PlayerList/>
            <div className="flex h-[300px] pt-[2%]">
                <div className="bg-application-secondary w-[50%] ml-[15%] rounded-2xl flex">
                    <div className="w-[50%]">
                        <img className="w-[122px] ml-32" src="hangman.png" />
                    </div>
                    <div className="text-white ml-[10%] mt-[5%]">
                        <h1 className="font-bold text-lg">SOLO AND MULTI MODE</h1>
                        <h1 className="font-bold text-5xl">THE CLASSIC</h1>
                        <h1 className="text-sm">Server pick a word and you try to guess it, the classic hangman game.</h1>
                        <ButtonHome title={'PLAY'} balise={'playClassicMod'} step={2}/>
                    </div>
                </div>
                <div className="bg-application-secondary w-[22%] ml-[2%] rounded-2xl text-white">
                    <h1 className="font-bold text-lg ml-[10%] mt-[10%]">SOLO MODE</h1>
                    <h1 className="font-bold text-4xl ml-[10%]">CHALLENGE THE SERVER</h1>
                    <h1 className="text-sm ml-[10%] w-[80%]">Special mode where the server try to guess your own word.</h1>
                    <ButtonHome title={'PLAY'}/>
                </div>
            </div>
            <div className="flex">
                <div className="text-white bg-application-secondary w-[30%] rounded-2xl ml-[15%] mt-[3%]">
                    <h1 className="font-bold text-lg ml-[5%] pt-[5%]">SOLO AND MULTI MODE</h1>
                    <h1 className="font-bold text-5xl ml-[5%]">SPECIAL T</h1>
                    <h1 className="text-sm ml-[5%] w-[80%]">Play with a special dictionnary according to the choosen theme.</h1>
                    <motion.button className="w-[80%] ml-[10%] bg-gray-700 rounded-full hover:bg-blue-500 h-16 mt-[7%]" whileHover={{ scale: 1.1 }}>
                        LOGO DU THEME
                    </motion.button>
                    <motion.button className="w-[80%] ml-[10%] bg-gray-700 rounded-full hover:bg-red-500 h-16 mt-[3%]" whileHover={{ scale: 1.1 }}>
                        LOGO DU THEME
                    </motion.button>
                    <motion.button className="w-[80%] ml-[10%] bg-gray-700 rounded-full hover:bg-green-500 h-16 mt-[3%] mb-[3%]" whileHover={{ scale: 1.1 }}>
                        LOGO DU THEME
                    </motion.button>
                </div>
                <div className="mt-[3%] ml-[2%] w-[45%]">
                    <h1 className="text-white font-bold text-5xl">SPECIAL MODS</h1>
                    <div className="bg-white w-full h-1"></div>
                    <div className="flex">
                        <div className="bg-application-secondary rounded-xl mt-[5%] w-[45%]">
                            <div className="">
                                <img className="w-36 ml-14 mt-3 mb-2" src="chrono.png" />
                            </div>
                            <div className="text-white ml-[10%]">
                                <h1 className="font-bold">SOLO AND MULTI MODE</h1>
                                <h1 className="font-bold text-3xl">BEAT THE TIME</h1>
                                <h1 className="w-[90%]">Try to gess the word before the end of the time</h1>
                                <ButtonHome title={'PLAY'}/>
                            </div>
                        </div>
                        <div className="bg-application-secondary ml-[5%] rounded-xl mt-[5%] w-[45%]">
                            <div className="">
                                <img className="w-48 ml-12 mt-3 mb-2" src="earth.png" />
                            </div>
                            <div className="text-white ml-[10%]">
                                <h1 className="font-bold">SOLO AND MULTI MODE</h1>
                                <h1 className="font-bold text-3xl">GEOHANGMAN</h1>
                                <h1 className="w-[90%]">Try to guess the hidden country with the help of hints. </h1>
                                <ButtonHome title={'PLAY'}/>
                                <p className="text-application-secondary">Ecart</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}