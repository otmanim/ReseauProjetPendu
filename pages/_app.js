import '../styles/globals.css'
import { createContext, useContext, useState } from 'react' 

const AppContext = createContext();

function MyApp({ Component, pageProps }) {

  const [gameManagement, setGameManagement] = useState({
    name: '',
    websocket: null,
    playerList: [],
    isLeader: '',
    groupeLeader : '',
    newNotif : [],
    difficulty : 'MEDIUM',
    playerStatut : "available",
    gameStatut : [],
    step : 0,
    hiddenWord : [],
    nbError : 0,
    nbEssaisRestants : 0,
    win : false,
    hints : [],
    timer: 40,
    timeOut : false,
    potentialWords : [],
    turn : '',
    versus : false,
  })

  return (
  <AppContext.Provider value={{
    gameManagement, setGameManagement
  }}>
    <Component {...pageProps} />
  </AppContext.Provider>
  );
}

export function useAppContext(){
  return useContext(AppContext);
}

export default MyApp
