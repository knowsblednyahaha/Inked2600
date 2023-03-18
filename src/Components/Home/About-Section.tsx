import { Link } from 'react-router-dom';
import './About-Section.scss'
import {useEffect, useRef} from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


function AboutSection() {
    const text = useRef(null);
    useEffect( () => {
        gsap.from(text.current, {
            y: 200,
            opacity: 0,
            duration: 1.5,
            ease: "Power4.easeInOut",
            scrollTrigger: {
                trigger: text.current as any,
            },
        });
    }, []);
    return(
        <section className='about-container'>
            <p className='about-text noselect' ref={text}>
                As a group of artists we want to show our art piece
                and share them with you so you can get to&nbsp;
                <Link to={'/about'} onClick={() => window.scrollTo(0, 0)}><span className='hover-text'>know us</span></Link> 
            </p>
        </section>
    )
}

export default AboutSection;