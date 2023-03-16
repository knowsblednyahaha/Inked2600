import {useEffect} from 'react'
import { gsap } from "gsap";

export const animation = () => {
    //navbar
    const logo = document.querySelector(".nav-logo");
    const img = document.querySelector(".nav-menu");
    useEffect( () => {
        gsap.from(logo, {
            xPercent: 50,
            opacity: 0,
            delay: .4,
            ease: "Power4.inOut"
        });
        gsap.from(img, {
            xPercent: 50,
            opacity: 0,
            delay: .4,
            ease: "Power4.inOut"
        });
    });
  return (
    <></>
  )
}
