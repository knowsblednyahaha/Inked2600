import {Route, Routes} from 'react-router-dom'

import {Homepage} from './Pages/Homepage';
import {Artistpage} from './Pages/Artistpage'


function App() {

  return (
    <main>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/artist' element={<Artistpage />} />
        
      </Routes>
    </main>
  )
}

export default App
