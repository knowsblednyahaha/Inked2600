//Components
import Navbar from '../Components/Navbar';
import HomeHero from '../Components/Home/Home-Hero';
import AboutSection from '../Components/Home/About-Section';
import ArtistSection from '../Components/Home/Artist-Section';
import ContactHero from '../Components/Contact-Hero';
import Footer from '../Components/Footer';
import CursorElement from '../Cursor/CursorElement';

// import {useEffect} from 'react';
// import LocomotiveScroll from 'locomotive-scroll';
// import 'locomotive-scroll/src/locomotive-scroll.scss'


export const Homepage = () => {
//   useEffect( () => {
//     new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]') as any,
//     smooth: true
//     });
// }, []);
  return (
    <div data-scroll-container>
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
