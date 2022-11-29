import React, { useState, useEffect } from 'react';
import { useAppContext } from '../pages/_app';

export default function Timer({time, client}){
  const [seconds, setSeconds] = useState(time);
  const [isActive, setIsActive] = useState(true);
  const {gameManagement, setGameManagement} = useAppContext();

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    clearInterval(interval);
    console.log("lessgo")
    if (isActive) {
      if (seconds > 0 && gameManagement.timeOut == false){
        interval = setInterval(() => {
          setSeconds(seconds => seconds - 1);
        }, 1000);
      }
      else if (seconds == 0){  
        const play = {
          type: "endGame"
        };
        client.send(JSON.stringify(play));
        gameManagement.timeOut = true
        setGameManagement({...gameManagement})
        setSeconds(time);
      }
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div>
      {seconds < 10 && 
        <div className="w-40 h-40 bg-red-400 text-red-600 bg-opacity-50 text-5xl font-bold text-center rounded-xl ml-40 mt-[30%]">
          <div className="pt-[30%]">
            {seconds}s
          </div>
        </div>
      }
      {seconds >= 10 && 
        <div className="w-40 h-40 bg-gray-400 text-black bg-opacity-50 text-5xl font-bold text-center rounded-xl ml-40 mt-[30%]">
          <div className="pt-[30%]">
            {seconds}s
          </div>
        </div>
      }
      
    </div>
    
  );
};