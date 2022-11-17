import { motion } from 'framer-motion';
import { useAppContext } from '../pages/_app';

export default function Notification({type, content, index}) {
    
    const {gameManagement, setGameManagement} = useAppContext();

    function deleteNotif(){
        gameManagement.newNotif = gameManagement.newNotif.filter((item, i) => i != index)
        setGameManagement({...gameManagement})
    }

    const handleGroupResponse = (event, response) => {
        gameManagement.newNotif = gameManagement.newNotif.filter((item, i) => i != index)
        setGameManagement({...gameManagement})
        const choice = {
            choice: 'groupeResponse',
            response: response
        };
        gameManagement.websocket.send(JSON.stringify(choice))
      };

    return (
        <div>
            {type != "New Invitation" &&
                <motion.div onClick={deleteNotif} initial={{ opacity: 0, scale: 0.5 }} whileHover={{ scale: 1.2 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="bg-gradient-to-r from-notification-color-1 to-notification-color-2 mt-3 pt-3 pb-3 rounded-xl cursor-pointer">
                    <h1 className="font-bold ml-5 text-black">{type}</h1>
                    <h1 className="ml-5 text-black">{content}</h1>
                </motion.div>
            }
            {type == "New Invitation" &&
                <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="bg-gradient-to-r from-notification-color-1 to-notification-color-2 mt-3 pt-3 pb-3 rounded-xl">
                    <h1 className="font-bold ml-5 text-black">{type}</h1>
                    <h1 className="ml-5 text-black">{content}</h1>
                    <div className='flex'>
                        <motion.button onClick={event => handleGroupResponse(event, 'accepte')} whileHover={{ scale: 1.1 }} className='bg-green-200 rounded-lg text-green-600 p-2 ml-5'>Accepte</motion.button>
                        <motion.button onClick={event => handleGroupResponse(event, 'decline')} whileHover={{ scale: 1.1 }} className='bg-red-200 rounded-lg text-red-600 p-2 ml-5' >Decline</motion.button>
                    </div>
                </motion.div>
            }
            
        </div>
    )
}