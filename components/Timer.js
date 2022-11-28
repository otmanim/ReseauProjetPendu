import React, { useState, useEffect } from 'react';

export default function Timer({time}){
  const [seconds, setSeconds] = useState(time);
  const [isActive, setIsActive] = useState(true);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      if (seconds > 0){
        interval = setInterval(() => {
          setSeconds(seconds => seconds - 1);
        }, 1000);
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