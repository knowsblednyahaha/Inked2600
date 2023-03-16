import {Route, Routes} from 'react-router-dom'

import {Homepage} from './Pages/Homepage';
import {Aboutpage} from './Pages/Aboutpage';
import {Artistpage} from './Pages/Artistpage';

import {animation} from './gsap/animation';
 


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<Aboutpage />} />
        <Route path='/artist/:id' element={<Artistpage />} />
      </Routes>
      {animation}
    </>
  )
}

export default App
