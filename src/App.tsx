import {Route, Routes} from 'react-router-dom'

import {Homepage} from './Pages/Homepage';
import {Aboutpage} from './Pages/Aboutpage';
import {Artistpage} from './Components/Artist/Artistpage';



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<Aboutpage />} />
        <Route path='/artist/:id' element={<Artistpage />} />
      </Routes>
    </>
  )
}

export default App
