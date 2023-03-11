//Components
import Data from '../../Data/data.json'
import "./ArtistPageComponent.scss"
import uuid from 'react-uuid';
import { useParams } from 'react-router-dom';

export default function ArtistPageComponent() {

  const params = useParams();
  const artistId = params.id;
  const data = Data.artist[Number(`${artistId}`) - 1];
  
  return (
    <>
      <div className="artistpage-container">
        <div className="artistpage-hero">
          <div className='artist-name-header'>
            <h2>{data.firstname} <span>{data.lastname}</span></h2>
            <p key={data.artistdesc}>{data.artistdesc}</p>
          </div>
          <div className='artist-img-header'>
            <img src={data.dp} alt={data.dp} />
          </div>
        </div>
        <div className="artist-works-container">
          <div className="artist-works">
            {
              data.photos.map( (item) => {
                return (
                  <div className="card" key={uuid()}>
                    <img src={item} alt={item} />
                  </div>
                )
              })
            }
            </div>
        </div>
      </div>
    </>
  )
}
