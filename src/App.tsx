import {Route, Routes} from 'react-router-dom'

import {Homepage} from './Pages/Homepage';
import {Artistpage} from './Pages/Artistpage'

import './Cursor.scss'
import {useEffect} from 'react'
import Cursor from "./js/cursor";

function App() {

  useEffect( () => {
      new Cursor(document.querySelector(".cursor"));
  });

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/artist' element={<Artistpage />} />
      </Routes>
      <div className="cursor"></div>
    </>
  )
}

export default App
