import { useAppContext } from '../pages/_app';
import { motion } from 'framer-motion';

export default function Login({client}){

    const {gameManagement, setGameManagement} = useAppContext(); 

    function login() {
        const nom = document.getElementById('msg').value
        client.send(document.getElementById('msg').value)
        gameManagement.name = nom
        gameManagement.step = 1
        setGameManagement({...gameManagement})
      }

    return (
        <div className='w-1/2 h-1/3 rounded-xl ml-[25%] pt-[10%]'>
          <div>
            <img src='logo.png' className='w-[30%] ml-[35%] mb-[5%]' />
          </div>
          <div>
            <input className='w-1/2 ml-[25%] rounded-xl text-2xl text-center' id='msg' type={'text'} placeholder='Your Name' />
          </div>
          <div>
            <motion.button whileHover={{ scale: 1.2 }} onClick={login} className='text-white text-xl bg-button-primary w-[30%] h-10 rounded-2xl ml-[35%] mt-7'>Connect</motion.button>
          </div>
        </div>
    )
}