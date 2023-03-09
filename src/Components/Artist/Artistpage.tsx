//Components
import Navbar from '../Navbar';
import ContactHero from '../Contact-Hero';
import Footer from '../Footer';
import CursorElement from '../../Cursor/CursorElement';
import Data from '../../Data/data.json'
import "./Artistpage.scss"
import { useParams } from 'react-router-dom';

export const Artistpage = () => {

  const params = useParams();
  const artistId = params.id;
  const data = Data.artist[Number(`${artistId}`) - 1];
  
  return (
    <>
      <Navbar/>
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
        <div className="artist-works">
          <div>{data.photos}</div>
        </div>
      </div>
      <ContactHero />
      <Footer />
      <CursorElement/>
    </>
  )
}
