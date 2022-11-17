import { motion } from "framer-motion"
import { useAppContext } from '../pages/_app';


export default function GameScreen({client}) {

    const {gameManagement, setGameManagement} = useAppContext();

    const handleClick = (event, letter, clavier, index) => {
        const play = {
            index: index,
            letter: letter,
          };
          client.send(JSON.stringify(play));
      };

    const clavier = [
        {letter : 'a', inWord : '?'},
        {letter : 'b', inWord : '?'},
        {letter : 'c', inWord : '?'},
        {letter : 'd', inWord : '?'},
        {letter : 'e', inWord : '?'},
        {letter : 'f', inWord : '?'},
        {letter : 'g', inWord : '?'},
        {letter : 'h', inWord : '?'},
        {letter : 'i', inWord : '?'},
        {letter : 'j', inWord : '?'},
        {letter : 'k', inWord : '?'},
        {letter : 'l', inWord : '?'},
        {letter : 'm', inWord : '?'},
        {letter : 'n', inWord : '?'},
        {letter : 'o', inWord : '?'},
        {letter : 'p', inWord : '?'},
        {letter : 'q', inWord : '?'},
        {letter : 'r', inWord : '?'},
        {letter : 's', inWord : '?'},
        {letter : 't', inWord : '?'},
        {letter : 'u', inWord : '?'},
        {letter : 'v', inWord : '?'},
        {letter : 'w', inWord : '?'},
        {letter : 'x', inWord : '?'},
        {letter : 'y', inWord : '?'},
        {letter : 'z', inWord : '?'},
    ]

    gameManagement.gameStatut.push({id :1 ,clavier : clavier})

    console.log(gameManagement.gameStatut)

    const socle = {
        width: '150px',
        height: '10px',
        backgroundColor: 'white',
        position: 'absolute',
        left: '150px',
        top: '350px'
      };
      const poutreVerticale = {
        width: '10px',
        height: '300px',
        backgroundColor: 'white',
        position: 'absolute',
        left: '160px',
        top: '50px'
      };
      const poutreHorizontale = {
        width: '350px',
        height: '10px',
        backgroundColor: 'white',
        position: 'absolute',
        left: '160px',
        top: '50px'
      };
      const corde = {
        width: '10px',
        height: '20px',
        backgroundColor: 'white',
        position: 'absolute',
        left: '450px',
        top: '60px'
      };
      const tete = {
        width: '60px',
        height: '60px',
        borderColor : 'white',
        borderWidth : '10px',
        borderRadius: '30px',
        position: 'absolute',
        left: '425px',
        top: '75px'
      };
      const corps = {
        width: '10px',
        height: '120px',
        backgroundColor: 'white',
        position: 'absolute',
        left: '450px',
        top: '130px'
      };
      const brasGauche = {
        width: '80px',
        height: '10px',
        backgroundColor: 'white',
        position: 'absolute',
        left: '450px',
        top: '150px'
      };
      const brasDroit = {
        width: '80px',
        height: '10px',
        backgroundColor: 'white',
        position: 'absolute',
        left: '370px',
        top: '150px'
      };
      const jambeGauche = {
        width: '80px',
        height: '10px',
        backgroundColor: 'white',
        position: 'absolute',
        left: '450px',
        top: '250px'
      };
      const jambeDroite = {
        width: '80px',
        height: '10px',
        backgroundColor: 'white',
        position: 'absolute',
        left: '370px',
        top: '250px'
      };

      const pendu = [socle, poutreVerticale, poutreHorizontale, corde, tete, corps, brasDroit, brasGauche, jambeDroite, jambeGauche]

    return (
        <div className="h-full">
            <div className="flex h-1/2">
                <div className="bg-red-600 w-1/2">
                    {pendu.slice(0, gameManagement.nbError).map(
                            (item) => <div style={item} ></div>
                    )}
                </div>
                <div className="w-1/2">
                    <p className="font-bold text-white text-7xl mt-36 ml-32">{gameManagement.hiddenWord}</p>
                </div>
            </div>
            <div>
                <div className="flex flex-wrap ml-10 mt-16">
                    {gameManagement.gameStatut[0].clavier.map((letter,i) => 
                        <div className="">
                            {letter.inWord === '?' && <motion.button onClick={event => handleClick(event, letter.letter, gameManagement.gameStatut[0].clavier, i)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="bg-white text-5xl w-24 h-24 rounded-xl ml-2 mb-5"> {letter.letter} </motion.button>}
                            {letter.inWord === 'y' && <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} disabled className="bg-green-200 text-green-600 text-5xl w-24 h-24 rounded-xl ml-2 mb-5"> {letter.letter} </motion.button>}
                            {letter.inWord === 'n' && <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} disabled className="bg-red-200 text-red-600 text-5xl w-24 h-24 rounded-xl ml-2 mb-5"> {letter.letter} </motion.button>}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}