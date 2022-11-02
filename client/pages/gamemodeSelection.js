import { motion } from "framer-motion"
import PlayerBanner from "../components/playerBanner";
import GameModeButton from "../components/gamemodeButton";
import Link from 'next/link';

export default function GameModeSelection() {
    return (
        <div className='w-screen h-screen bg-gradient-to-r from-custom-gamemode-background-color1 to-custom-gamemode-background-color2'>
            <div className='w-screen h-[10%]'>
        
            </div>
            <div className='w-[80%] h-[80%] border-2 rounded-xl ml-[10%] border-gamemode-listPlayer-color'>
                <div className="mt-[2%] mb-[2%] ml-[2%]">{/* Partie du haut : Btn retour + logo*/}
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="bg-white w-[10%] rounded-lg shadow-xl border-b-4 border-sky-900">
                    <Link href="/">
                        <h1 className="font-bold text-xl">Retour</h1>
                    </Link>
                    </motion.button>
                </div>
                <div className="flex">{/* Partie du milieu*/}
                    <div className="bg-gamemode-listPlayer-color w-[35%] ml-[2%] rounded-tl-3xl rounded-tr-xl rounded-br-xl rounded-bl-xl">
                        <h1 className="font-junegull text-2xl ml-[30%] pt-[5%] mb-[5%] text-white">JOUEURS 1/4</h1>
                        <PlayerBanner profilPicture={'/avatars/Groupe 1.png'} userName={'Lilianno974'}/>
                        <PlayerBanner profilPicture={'/avatars/Groupe 2.png'} userName={'Mamarito567'}/>
                        <PlayerBanner profilPicture={'/avatars/Groupe 0.png'} userName={'No PLayer'}/>
                        <PlayerBanner profilPicture={'/avatars/Groupe 0.png'} userName={'No PLayer'}/>
                        <p className="text-gamemode-listPlayer-color cursor-default">EndZone</p>
                    </div>
                    <div className="w-[59%] ml-[2%] bg-gamemode-modeListe-color rounded-xl">{/* Sous composant de droite*/}
                        <div>{/* Sous sous composant de choix du mode de jeu*/}
                        <h1 className="font-junegull text-2xl mt-[3%] ml-[32%] text-white">GAMEMODE CHOICE</h1>
                        <div className="flex">
                            <GameModeButton gamemodePicture={'/icons/gamemode1.png'} gamemodeName={'CLASSIC'}/>
                            <GameModeButton gamemodePicture={'/icons/gamemode1.png'} gamemodeName={'MORE DIFFICULT '}/>
                        </div>
                        <div className="flex">
                            <GameModeButton gamemodePicture={'/icons/gamemode1.png'} gamemodeName={'CLASSIC'}/>
                            <GameModeButton gamemodePicture={'/icons/gamemode1.png'} gamemodeName={'MORE DIFFICULT '}/>
                        </div>
                        </div>
                        <div>{/* Sous sous composant avec btn*/}
                            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="bg-white w-[26%] h-10 rounded-lg shadow-xl border-b-4 border-sky-900 flex ml-[37%] mt-[6%]">
                                <Link href="/game">
                                    <div className='flex w-full'>
                                    <img className="h-6 mt-1 ml-4" src="/icons/start.png"/>
                                    <h1 className="font-bold text-xl ml-5">START</h1>
                                    </div>
                                </Link>
                            </motion.button>
                        </div>
                        <p className="text-gamemode-modeListe-color cursor-default">EndZone</p>
                    </div>
                </div>
            </div>
        </div>
    )
}