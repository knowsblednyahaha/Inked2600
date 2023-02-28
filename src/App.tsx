import {Route, Routes} from 'react-router-dom'

import {Homepage} from './Pages/Homepage';
import {Aboutpage} from './Pages/Aboutpage';
import {Artistpage} from './Pages/Artistpage';
import CursorElement from './Cursor/CursorElement';



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<Aboutpage />} />
        <Route path='/artist' element={<Artistpage />} />
      </Routes>
      <CursorElement/>
    </>
  )
}

export default App
