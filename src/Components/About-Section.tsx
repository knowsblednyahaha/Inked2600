import { Link } from 'react-router-dom';
import './About-Section.scss'

function AboutSection() {
    return(
        <section className='about-container'>
            <p className='about-text noselect'>
                As a group of artists we want to show our art piece
                and share them with you so you can get to <Link to={'/about'} onClick={() => window.scrollTo(0, 0)}><span className='hover-text'>know us</span></Link> 
            </p>
        </section>
    )
}

export default AboutSection;