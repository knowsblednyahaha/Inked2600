import {Route, Routes} from 'react-router-dom'
import { useEffect, useState } from "react";

import {Homepage} from './Pages/Homepage';
import {Artistpage} from './Pages/Artistpage'

import './app.scss'
import { motion } from "framer-motion";


function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");


  useEffect(() => {
    const mouseMove = (e: { clientX: any; clientY: any; }) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "yellow",
      mixBlendMode: "difference"
    }
  }

  // const textEnter = () => setCursorVariant("text");
  // const textLeave = () => setCursorVariant("default");

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/artist' element={<Artistpage />} />
        
      </Routes>
      <motion.div
        className='cursor'
        // variants={variants}
        animate={cursorVariant}
      />
    </>
  )
}

export default App
