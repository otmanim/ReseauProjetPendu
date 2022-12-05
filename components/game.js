import { motion } from "framer-motion"
import { useState } from "react";
import { useAppContext } from '../pages/_app';
import EndGameScreen from "./endGame";


export default function GameScreen({client}) {

    const {gameManagement, setGameManagement} = useAppContext();
    const [errorText, setErrorText] = useState(false)
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~éèçà]/;

    const handleClick = (event, letter, clavier, index) => {
        const play = {
          type: "play",
              index: index,
              letter: letter,
          };
          client.send(JSON.stringify(play));
      };

    const suggestWord = (event) => {
      if(!format.test(document.getElementById('wordSuggested').value)){
        setErrorText(false)
        const play = {
          type: "play-word",
          word: document.getElementById('wordSuggested').value.toLowerCase(),
        };
        client.send(JSON.stringify(play));
        document.getElementById('wordSuggested').value = ""
      }
      else {
        setErrorText(true)
      }
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
        <div className="bg-gradient-to-r from-button-home-1 to-button-home-2 h-full">
          <div className="text-center">
              <h1 className="text-black bg-white rounded-b-xl ml-[30%] w-[40%] font-bold text-xl">Nombre d'essais restants : {gameManagement.nbEssaisRestants}</h1>
          </div>
          {gameManagement.nbEssaisRestants == 0 && <EndGameScreen status={'perdu'} clavier={clavier} />}
          {gameManagement.win == true && <EndGameScreen status={'gagne'} clavier={clavier} />}
            <div className="flex h-1/2">
                <div className="w-1/2">
                  {gameManagement.difficulty === 'EASY' && 
                    pendu.slice(0, gameManagement.nbError).map(
                      (item) => <div style={item} ></div>
                    )
                  }
                  {gameManagement.difficulty === 'MEDIUM' && gameManagement.nbError <= 6 &&
                    pendu.slice(0, gameManagement.nbError).map(
                      (item) => <div style={item} ></div>
                    )
                  }
                  {gameManagement.difficulty === 'MEDIUM' && gameManagement.nbError > 6 &&
                    pendu.slice(0, gameManagement.nbError+2).map(
                      (item) => <div style={item} ></div>
                    )
                  } 
                  {gameManagement.difficulty === 'HARD' && 
                    pendu.slice(0, gameManagement.nbError*2).map(
                      (item) => <div style={item} ></div>
                    )
                  }  
                </div>
                <div className="w-1/2 flex mt-40 ml-40">
                  {gameManagement.hiddenWord.map((i) => 
                        <div className="bg-white w-16 h-16 rounded-xl text-center text-3xl font-bold pt-2 ml-2">
                            <h1>{i}</h1>
                        </div>
                    )}
                </div>
            </div>
            <div>
              <div className="flex">
                <div className="bg-red-200 w-80 text-center rounded-full ml-[40%]">
                  {gameManagement.turn === gameManagement.name && 
                    <h1 className="font-bold text-xl text-green-600">C'est à votre tour !</h1>
                  }
                  {gameManagement.turn != gameManagement.name && 
                    <h1 className="font-bold text-xl text-red-600">C'est au tour de {gameManagement.turn} !</h1>
                  }
                </div>
              </div>
                <div className="flex flex-wrap ml-10 mt-5">
                    {gameManagement.gameStatut[0].clavier.map((letter,i) => 
                        <div className="">
                            {letter.inWord === '?' && gameManagement.turn === gameManagement.name && <motion.button onClick={event => handleClick(event, letter.letter, gameManagement.gameStatut[0].clavier, i)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="bg-white text-5xl w-24 h-24 rounded-xl ml-2 mb-5"> {letter.letter} </motion.button>}
                            {letter.inWord === 'y' && <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} disabled className="bg-green-200 text-green-600 text-5xl w-24 h-24 rounded-xl ml-2 mb-5"> {letter.letter} </motion.button>}
                            {letter.inWord === 'n' && <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} disabled className="bg-red-200 text-red-600 text-5xl w-24 h-24 rounded-xl ml-2 mb-5"> {letter.letter} </motion.button>}
                        </div>
                    )}
                </div>
                <div className="flex ml-[500px]">
                  <input id="wordSuggested" className="w-80 h-10 text-3xl text-center rounded-tl-full rounded-bl-full" type={'text'}/>
                  <button onClick={event => suggestWord(event)} className="bg-black text-white w-24 h-10 rounded-tr-full rounded-br-full text-xl font-bold">Send</button>
                </div>
                { errorText && 
                    <h1 className="text-red-500 text-2xl text-center">Le mot ne doit contenir ni caractères spéciaux, ni accents !</h1>
                  }
            </div>
        </div>
    )
}