import './Home-Hero.scss';
import {useEffect} from 'react'
// import { gsap } from "gsap";

function HomeHero() {
    const mask = document.querySelectorAll(".home-image");
    const img = document.querySelectorAll(".home-image img");
    useEffect( () => {
        // gsap.from(mask, {
        //     xPercent: -100,
        //     duration: 1.5,
        //     ease: "Power2.out"
        // });
        console.log(mask, img);
    });

    return(
        <section className='home-hero'>
            <div className='text-header-container noselect'>
                <h1 className='text-header'>Distinctive</h1>
                <h1 className='text-header'>Tattoo Artists</h1>
                <h1 className='text-header'>in Baguio City</h1>
            </div>
            <div className='home-image-container'>
                <div className='home-image'>
                    <img src="/img/home-1.jpg" alt="" />
                </div>
                <div className='home-image'>
                    <img src="/img/home-2.jpg" alt="" />
                </div>
                <div className='home-image'>
                    <img src="/img/home-3.jpg" alt="" />
                </div>
            </div>
        </section>
    )
}

export default HomeHero;