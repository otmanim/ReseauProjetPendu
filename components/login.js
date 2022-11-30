import { useAppContext } from '../pages/_app';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Login({client}){

    const {gameManagement, setGameManagement} = useAppContext(); 
    const [imgID, setImgID] = useState(1)
    const image = '/avatars/avatar'+imgID+'.png'

    function login() {
        const nom = document.getElementById('msg').value
        client.send(document.getElementById('msg').value)
        gameManagement.name = nom
        gameManagement.step = 1
        setGameManagement({...gameManagement})
      }

    function changePicture(){
      if (imgID < 17){
        setImgID(imgID + 1)
      }
      else {
        setImgID(1)
      }
    }

    return (
        <div className='w-1/2 h-1/3 rounded-xl ml-[25%] pt-[10%]'>
          <div>
            <img src='logo.png' className='w-[30%] ml-[35%] mb-[5%]' />
          </div>
          <div className='flex ml-40 mb-10'>
            <img src={image} width='200'/>
            <motion.button 
              className='bg-gradient-to-r from-button-home-1 to-button-home-2 h-10 text-xl font-bold text-white px-3 py-1 rounded-xl mt-20 ml-5' 
              onClick={changePicture} 
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}>
              Change Picture
            </motion.button>
          </div>
          <div>
            <input className='w-1/2 ml-[25%] rounded-xl text-2xl text-center' id='msg' type={'text'} placeholder='Your Name' />
          </div>
          <div>
            <motion.button whileHover={{ scale: 1.2 }} onClick={login} className='text-white font-bold text-xl bg-gradient-to-r from-button-home-1 to-button-home-2 w-[30%] h-10 rounded-2xl ml-[35%] mt-7'>Connect</motion.button>
          </div>
        </div>
    )
}