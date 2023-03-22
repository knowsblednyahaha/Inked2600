import './Home-Hero.scss';
import {useEffect, useRef} from 'react';
import { gsap } from "gsap";

function HomeHero() {
    const header = useRef([]) as any;
    let wrapper = useRef([]) as any;
    // console.log(wrapper)
    useEffect( () => {
        gsap.from(header.current, {
            y: 50,
            opacity: 0,
            delay: .8,
            ease: "Power4.easeInOut",
            stagger: {
                amount: 0.2
            }
        });
        gsap.from(wrapper.current, {
            width: "100%",
            delay: 1.3,
            ease: "Power3.inOut",
            stagger: {
                amount: 0.2
            }
        });
    }, []);
    return(
        <section className='home-hero' data-scroll-section>
            <div className='text-header-container noselect'>
                <h1 className='text-header' ref={el => {header.current[0] = el;}} data-scroll>Distinctive</h1>
                <h1 className='text-header' ref={el => {header.current[1] = el;}} data-scroll>Tattoo Artists</h1>
                <h1 className='text-header' ref={el => {header.current[2] = el;}} data-scroll>in Baguio City</h1>
            </div>
            <div className='home-image-container'>
                <div className='home-image'>
                    <img src="/img/home-1.jpg" alt="" data-scroll />
                    <div className="image-wrapper" ref={el => {wrapper.current[0] = el;}} ></div>
                </div>
                <div className='home-image'>
                    <img src="/img/home-2.jpg" alt="" data-scroll />
                    <div className="image-wrapper" ref={el => {wrapper.current[1] = el;}}></div>
                </div>
                <div className='home-image'>
                    <img src="/img/home-3.jpg" alt="" data-scroll />
                    <div className="image-wrapper" ref={el => {wrapper.current[2] = el;}}></div>
                </div>
            </div>
        </section>
    )
}

export default HomeHero;