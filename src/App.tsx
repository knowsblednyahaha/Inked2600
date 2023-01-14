import './App.scss'
import Navbar from './components/Main/Navbar';
import HomeHero from './components/Main/Home-Hero';
import AboutSection from './components/Main/About-Section';
import ArtistSection from './components/Main/Artist-Section';
import ContactHero from './components/Main/Contact-Hero';
import Footer from './components/Footer';

function App() {

  return (
    <main>
      <Navbar/>
      <HomeHero/>
      <AboutSection/>
      <ArtistSection/>
      <ContactHero/>
      <Footer/>
    </main>
  )
}

export default App
