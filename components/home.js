import PlayerList from "./navigation/playerList"
import ButtonHome from "./button/buttonHome"
import { motion } from "framer-motion"
import { useAppContext } from '../pages/_app';
import React, { useState } from 'react';
import DifficultyButton from "./difficultyButton";
import Timer from "./Timer";

export default function Home() {

    const {gameManagement, setGameManagement} = useAppContext();
    const color = 'text-white bg-gradient-to-br from-'+gameManagement.difficulty+'1 to-'+gameManagement.difficulty+'2 w-[30%] rounded-2xl ml-[15%] mt-[3%]'

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
                    <ButtonHome title={'PLAY'} balise={'playVersusServer'} step={3}/>
                </div>
            </div>
            <div className="flex">
                <div className={color}>
                    <h1 className="font-bold text-lg ml-[5%] pt-[5%]">PARAMETERS</h1>
                    <h1 className="font-bold text-5xl ml-[5%]">DIFFICULTY</h1>
                    <h1 className="text-sm ml-[5%] w-[80%]">Choose in which difficulty you want to play. This one will have an impact on the number of lifes you'll have.</h1>
                    <DifficultyButton difficulty={'EASY'} selected={gameManagement.difficulty}/>
                    <DifficultyButton difficulty={'MEDIUM'} selected={gameManagement.difficulty}/>
                    <DifficultyButton difficulty={'HARD'} selected={gameManagement.difficulty}/>
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
                                <ButtonHome title={'PLAY'} balise={'playWithTime'} step={4}/>
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
                                <ButtonHome title={'PLAY'} balise={'playGeoHangman'} step={5}/>
                                <p className="text-application-secondary">Ecart</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}