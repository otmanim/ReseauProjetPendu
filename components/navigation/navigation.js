import * as React from "react";
import { motion } from "framer-motion";
import PlayerItem from "./playerItem";
import { useAppContext } from '../../pages/_app';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const itemIds = [0, 1, 2, 3, 4];

export default function Navigation({playerListe}){

  const {gameManagement, setGameManagement} = useAppContext(); 

  return (
    <motion.ul variants={variants} className='pl-[25px] pt-[100px] absolute top-100 width-[230px]' >
    {playerListe.map(i => (
      <PlayerItem i={i} type='available' name={i.name} statut={i.statut} myName={gameManagement.name} groupeLeader={i.inGroupOf} key={i} />
    ))}
  </motion.ul>
  )
};


