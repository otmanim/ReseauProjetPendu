import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimension";
import { MenuToggle } from "./MenuToggle";
import Navigation from "./Navigation";
import { useAppContext } from '../../pages/_app';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export default function PlayerList() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const {gameManagement, setGameManagement} = useAppContext(); 

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className='absolute top-0 left-0 bottom-0 w-[300px]'
    >
      <motion.div className="absolute top-0 left-0 bottom-0 w-[300px] bg-white" variants={sidebar} />
      <Navigation playerListe={gameManagement.playerList}/>
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
