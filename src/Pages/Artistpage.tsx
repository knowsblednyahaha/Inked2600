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
            <div className="">
              <div>
                <h2>{data.firstname}<span>data.lastname</span></h2>
                <p>{data.artistdesc}</p>
              </div>
              <div>
                <img src={data.dp} alt={data.dp} />
              </div>
            </div>
            <div className="artist-works">
              <div>{data.photos}</div>
            </div>
          </div>
        })
      }
    </>
  )
}
