//Components
import Navbar from '../Components/Navbar';
import ContactHero from '../Components/Contact-Hero';
import Footer from '../Components/Footer';
import CursorElement from '../Cursor/CursorElement';
import {useEffect, useState} from 'react'
import Axios from 'axios'

export const Artistpage = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    Axios
    .get("/data.json")
    .then((res) => setData(res.data))
    .catch(err=>console.log(err))
  },[]);
  console.log({data});

  return (
    <>
      <Navbar/>
        {/* artists.map( data => {
          <div key={data.id}>{JSON.stringify(data)}</div>
        }) */}
          {/* <div className="artist container">
            <div className="">
              <div>
                <h2>{data.artist.firstname}<span>data.lastname</span></h2>
                <p>{data.artistdesc}</p>
              </div>
              <div>
                <img src={data.dp} alt={data.dp} />
              </div>
            </div>
            <div className="artist-works">
              <div>{data.photos}</div>
            </div>
          </div> */}
      <ContactHero />
      <Footer />
      <CursorElement/>
    </>
  )
}
