//Components
import Navbar from '../Components/Navbar';

import Data from '../Data/data.json'

export const Artistpage = () => {
  return (
    <>
      <Navbar/>
      {
        Data.artist.map( data => {
          <div className="artist container">
            <div></div>
            <div>
              <img src={data.dp} alt={data.dp} />
            </div>
          </div>
        })
      }
    </>
  )
}
