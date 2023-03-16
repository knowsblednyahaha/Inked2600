import './Cursor.scss'
import {useEffect} from 'react'
import Cursor, {} from "./cursor";
import { gsap } from "gsap";

export default function CursoElement()  {
    const body = document.querySelector("body");
    const logo = document.querySelector(".nav-logo");
    const img = document.querySelector(".nav-menu");
    useEffect( () => {
        gsap.from(body, {
            opacity: 0,
            duration: .7,
            ease: "Power3.easeInOut",
        });
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
        new Cursor(document.querySelector(".cursor"));
    });
    return (
    <div className="cursor">
        <div className="cursor-big-circle"></div>
        <div className='cursor-about-hover'></div>
        <div className="cursor-artist-hover">View <br/> Portfolio</div>
        <div className="cursor-contact-hover">👋</div>
    </div>
    )
}
