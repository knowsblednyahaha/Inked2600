//Components
import Navbar from '../Components/Navbar';
import HomeHero from '../Components/Home-Hero';
import AboutSection from '../Components/About-Section';
import ArtistSection from '../Components/Artist-Section';
import ContactHero from '../Components/Contact-Hero';
import Footer from '../Components/Footer';
import CursorElement from '../Cursor/CursorElement';

export const Homepage = () => {
  
  return (
    <div>
      <Navbar/>
      <HomeHero/>
      <AboutSection/>
      <ArtistSection/>
      <ContactHero/>
      <Footer/>
      <CursorElement/>
    </div>
  )
}
