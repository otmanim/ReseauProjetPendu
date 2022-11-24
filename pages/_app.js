import '../styles/globals.css'
import { createContext, useContext, useState } from 'react' 

const AppContext = createContext();

function MyApp({ Component, pageProps }) {

  const [gameManagement, setGameManagement] = useState({
    name: '',
    websocket: null,
    playerList: [{name : 'admin', statut : 'available', inGroupOf: ''}],
    isLeader: '',
    groupeLeader : '',
    newNotif : [],
    difficulty : 'easy',
    playerID : 'test',
    playerStatut : "available",
    games : [],
    gameStatut : [],
    mainPlayer : '',
    step : 0,
    hiddenWord : [],
    nbError : 0,
    hints : [],
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
