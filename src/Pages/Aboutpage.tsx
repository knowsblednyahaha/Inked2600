//Components
import Navbar from '../Components/Navbar';
import AboutpageContent from "../Components/About/AboutpageContent"
import ContactHero from '../Components/Contact-Hero';
import Footer from '../Components/Footer';
import CursorElement from '../Cursor/CursorElement';


export const Aboutpage = () => {
    return (
    <>
        <Navbar/>
        <AboutpageContent/>
        <ContactHero/>
        <Footer/>
        <CursorElement/>
    </>
    )
}
