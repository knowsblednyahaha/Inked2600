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
        <section className='contact-hero-container noselect'>
            <div className='marquee'>
                <h5>
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
                <h5>
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
                    <h5> Say <a href='mailto:inked2600@gmail.com'> Hi!</a></h5>
                </div>
                <div className='description-container'>
                    <div className='text-description' ref={textDesc}>is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been 
                        the industry's standard dummy text ever 
                        since the 1500s, when an unknown printer 
                        took a galley of type and scrambled it to 
                        make a type specimen book. It has survived 
                        not only five centuries,
                    </div>
                    <div className='social-media-container'>
                        <div className='social-media-item' ref={element => {line.current[0] = element;}}>
                            <a href='https://www.facebook.com/profile.php?id=100087213424052' target="_blank" rel="noopener noreferrer" ref={element => {socmed.current[0] = element;}}>Facebook</a>
                        </div>
                        <div className='social-media-item' ref={element => {line.current[1] = element;}}>
                            <a href='https://www.instagram.com/inkedtwosixx/' target="_blank" rel="noopener noreferrer"  ref={element => {socmed.current[1] = element;}}>Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactHero;