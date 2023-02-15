import {Route, Routes} from 'react-router-dom'

import {Homepage} from './Pages/Homepage';
import {Artistpage} from './Pages/Artistpage'

import './app.scss'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/artist' element={<Artistpage />} />
        
      </Routes>
    </>
  )
}

export default App
