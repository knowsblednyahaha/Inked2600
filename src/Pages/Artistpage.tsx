//Components
import Navbar from '../Components/Navbar';
import ContactHero from '../Components/Contact-Hero';
import Footer from '../Components/Footer';
import CursorElement from '../Cursor/CursorElement';
import ArtistPageComponent from '../Components/Artist/ArtistPageComponent'

export const Artistpage = () => {
  return (
    <>
      <Navbar/>
      <ArtistPageComponent/>
      <ContactHero />
      <Footer />
      <CursorElement/>
    </>
  )
}
