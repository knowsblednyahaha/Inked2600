//Components
import Navbar from '../Components/Navbar';

import Data from '../Data/data.json'

export const Artistpage = () => {
  return (
    <>
      <Navbar/>
      {
        Data.artist.map( data => {
          
        })
      }
    </>
  )
}
