import { useRef, useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";

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

export const Menu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  useEffect(()=>{
    if(isOpen){
      document.getElementById("body").classList.add("menu-opened");
    }else{
      document.getElementById("body").classList.remove("menu-opened");
    }

  },[isOpen])

  return (
    <motion.nav
      style={!isOpen ? {position:  "relative"} : {position:  "absolute"}}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <div className={isOpen ? "" : "menu-closed"}>
      <motion.div className="background" variants={sidebar} />

      <Navigation />
      </div>
        
        
      <MenuToggle  toggle={() => toggleOpen()} />
      
    </motion.nav>
  );
};
