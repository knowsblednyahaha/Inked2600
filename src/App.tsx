import {Route, Routes} from 'react-router-dom'

import {Homepage} from './Pages/Homepage';
import {Aboutpage} from './Pages/Aboutpage';
import {Artistpage} from './Pages/Artistpage';

// import LocomotiveScroll from 'locomotive-scroll';
// import {useEffect, useRef} from 'react';
// import React from "react";

function App() {
  // useEffect( () => {
  //   new LocomotiveScroll({
  //     el: document.querySelector('[data-scroll-container]') as any,
  //     smooth: true
  //   });
  // }, []);
  return (
    <>
      <Routes >
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<Aboutpage />} />
        <Route path='/artist/:id' element={<Artistpage />} />
      </Routes>
    </>
  )
}

export default App
