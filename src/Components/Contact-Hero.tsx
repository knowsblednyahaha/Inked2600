import './Contact-Hero.scss';
import {useEffect, useRef} from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function ContactHero() {
    const hi = useRef(null);
    const textDesc = useRef(null);
    let line = useRef([]) as any;
    let socmed = useRef([]) as any;
    useEffect( () => {
        gsap.from(hi.current, {
            opacity: 0,
            duration: .8,
            delay: .2,
            ease: "Power4.easeInOut",
            scrollTrigger: {
                trigger: hi.current as any,
            },
        });
        gsap.from(textDesc.current, {
            y: 30,
            opacity: 0,
            duration: 1,
            delay: .2,
            ease: "Power4.easeInOut",
            scrollTrigger: {
                trigger: textDesc.current as any,
            },
        });
        gsap.from(line.current, {
            width: "0",
            duration: .5,
            delay: .15,
            ease: "Power4.easeInOut",
            scrollTrigger: {
                trigger: line.current as any,
            },
        });
        gsap.from(socmed.current, {
            y: 50,
            opacity: 0,
            duration: 1.5,
            delay: .25,
            ease: "Power4.easeOut",
            stagger: {
                amount: 0.3
            },
            scrollTrigger: {
                trigger: socmed.current,
            },
        });
    }, []);
    return(
        <section className='contact-hero-container noselect' data-scroll-section>
            <div className='marquee'>
                <h5 data-scroll>
                    get to <span className='white'>know</span> us - get to <span className='white'>know</span> us -
                    get to <span className='white'>know</span> us - get to <span className='white'>know</span> us -
                    get to <span className='white'>know</span> us - get to <span className='white'>know</span> us -
                    get to <span className='white'>know</span> us - get to <span className='white'>know</span> us -
                    get to <span className='white'>know</span> us - get to <span className='white'>know</span> us -
                    get to <span className='white'>know</span> us - get to <span className='white'>know</span> us -
                    get to <span className='white'>know</span> us - get to <span className='white'>know</span> us -
                    get to <span className='white'>know</span> us - get to <span className='white'>know</span> us
                </h5>
                <br />
                <h5 data-scroll>
                    get to <span className='white'>know</span> us - get to <span className='white'>know</span> us -
                    get to <span className='white'>know</span> us - get to <span className='white'>know</span> us -
                    get to <span className='white'>know</span> us - get to <span className='white'>know</span> us -
                    get to <span className='white'>know</span> us - get to <span className='white'>know</span> us -
                    get to <span className='white'>know</span> us - get to <span className='white'>know</span> us -
                    get to <span className='white'>know</span> us - get to <span className='white'>know</span> us -
                    get to <span className='white'>know</span> us - get to <span className='white'>know</span> us -
                    get to <span className='white'>know</span> us - get to <span className='white'>know</span> us
                </h5>
            </div>
            <div className='contact-text-container'>
                <div className='big-text-container' ref={hi}>
                    <h5 data-scroll> Say <a href='mailto:inked2600@gmail.com' data-scroll> Hi!</a></h5>
                </div>
                <div className='description-container'>
                    <div className='text-description' ref={textDesc} data-scroll>
                        By looking at both our tattoo fill in and our workmanship, one can see that we are unique yet dependable, and that we can adapt to a wide range of styles and bearings.
                    </div>
                    <div className='social-media-container'>
                        <div className='social-media-item' ref={element => {line.current[0] = element;}}>
                            <a href='https://www.facebook.com/profile.php?id=100087213424052' target="_blank" rel="noopener noreferrer" ref={element => {socmed.current[0] = element;}} data-scroll>Facebook</a>
                        </div>
                        <div className='social-media-item' ref={element => {line.current[1] = element;}}>
                            <a href='https://www.instagram.com/inkedtwosixx/' target="_blank" rel="noopener noreferrer"  ref={element => {socmed.current[1] = element;}} data-scroll>Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactHero;