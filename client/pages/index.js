import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';
import { motion } from "framer-motion"
import Link from 'next/link';
import Carousel from "framer-motion-carousel";

export default function Home() {

  const [gameMode, setGameMode] = useState(1);
  const colors = ["#f90", "#ef0", "#e0f"];

  const [pictureNumber, setPictureNumber] = useState(1);
  const picture = "/avatars/Groupe " + pictureNumber + ".png";

  function handlePicture() {
    setPictureNumber(pictureNumber + 1)
    { if (pictureNumber == 6){
        setPictureNumber(1)
    }}
  console.log(picture)
  }

  function handleGameMode(){
    {
      gameMode == 1
      ? setGameMode(2)
      : setGameMode(1)
  }
  }

  return (
    <div className='w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500'>
      <div className='w-screen h-[10%]'>
        
      </div>
      <div className='w-[80%] h-[80%] border-2 rounded-xl ml-[10%] border-custom-blue-index'>
        <div className='w-full h-1/3'>
          <img className='w-[26%] ml-[37%] pt-[3%]' src='/icons/logo.png'/>
        </div>
        <div className='flex'>
          <div className='w-[65%] h-2/3'> {/* Composant complet en bas à gauche */}
            <div className=''> {/* Composant complet d'authentification */}
              <div className='flex ml-[5%] text-white font-bold'> {/* Partie du haut*/}

                {gameMode === 1 &&
                  <div className='bg-custom-blue-index w-[50%] rounded-t-md'> {/* Partie de gauche*/}
                    <h1 className='w-[60%] ml-[20%] text-xl font-junegull'>SOLO/ONLINE GAME</h1>
                  </div>
                }
                {gameMode === 1 &&
                  <motion.div whileHover={{ scale: 1.04 }} className='bg-custom-blue-index-dark w-[48%] ml-[1%] rounded-t-md cursor-pointer' onClick={handleGameMode}> {/* Partie de droite*/}
                    <h1 className='w-[40%] ml-[30%] text-xl font-junegull'>VS BOT GAME</h1>
                  </motion.div>
                }

                {gameMode === 2 &&
                  <motion.div whileHover={{ scale: 1.04 }} className='bg-custom-blue-index-dark w-[48%] ml-[1%] mr-[1%] rounded-t-md cursor-pointer' onClick={handleGameMode}> {/* Partie de gauche*/}
                    <h1 className='w-[60%] ml-[20%] text-xl font-junegull'>SOLO/ONLINE GAME</h1>
                  </motion.div>
                }
                {gameMode === 2 &&
                  <div className='bg-custom-blue-index w-[50%] rounded-t-md'> {/* Partie de droite*/}
                    <h1 className='w-[40%] ml-[30%] text-xl font-junegull'>VS BOT GAME</h1>
                  </div>
                }

              </div>
              <div className='bg-custom-blue-index w-[95%] ml-[5%] rounded-b-lg'> {/* Partie du bas*/}
                <div className='flex'>
                  <div className='mt-[5%] ml-[10%]'> {/* Partie avec image*/}
                    <img className='w-[70%]' src={picture} />
                  </div>
                  <div className='mt-[5%]'> {/* Partie du pseudo*/}
                    <h1 className='text-xl font-bold text-white text-center w-[60%] ml-[5%] font-junegull'>PLEASE CHOSE A PICTURE AND A NAME</h1>
                    <input className='h-10 w-60 rounded-lg bg-cyan-800 border-2 border-white text-white text-xl font-bold mt-[5%]' type={"text"} placeholder={"MonPseudo123"} />
                  </div>
                </div>
                <div> {/* Partie du btn*/}
                  <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="bg-white w-[26%] h-10 rounded-lg shadow-xl border-b-4 border-sky-900 flex ml-[37%] mt-[6%]">
                    <Link href="/gamemodeSelection">
                      <div className='flex w-full'>
                        <img className="h-6 mt-1 ml-4" src="/icons/start.png"/>
                        <h1 className="font-bold text-xl ml-5">START</h1>
                      </div>
                    </Link>
                  </motion.button>
                  <p className='ml-[70%] text-custom-blue-index'>B</p>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-custom-blue-index w-[30%] ml-[2.5%] rounded-lg'> {/* Panel de droite / règles*/}
            <h1 className='mt-[2%] font-junegull text-white text-2xl ml-[18%]'>COMMENT JOUER ?</h1>
          </div>
        </div>
        
        <div>
        </div>
      </div>
      <div> {/* Bouton de changement d'avatar*/}
        <motion.button whileHover={{ rotate: 90 }} className='bg-white rounded-full w-[4%] absolute top-[63%] left-[25%]' onClick={handlePicture} >
          <img src='/icons/refresh.png' />
        </motion.button>
      </div>
    </div>
  )
}
