import './Cursor.scss'
import {useEffect} from 'react'
import Cursor, {} from "./cursor";
import { gsap } from "gsap";

export default function CursoElement()  {
    const body = document.querySelector("body");
    const logo = document.querySelector(".nav-logo");
    const menu = document.querySelector(".nav-menu");
    const wrapper = document.querySelectorAll(".image-wrapper");
    const header = document.querySelectorAll(".text-header");
    useEffect( () => {
        gsap.from(body, {
            opacity: 0,
            duration: .7,
            ease: "Power3.easeInOut",
        });
        gsap.from(logo, {
            x: 50,
            opacity: 0,
            delay: .4,
            ease: "Power4.easeInOut"
        });
        gsap.from(menu, {
            x: 50,
            opacity: 0,
            delay: .6,
            ease: "Power4.easeInOut"
        });
        gsap.from(wrapper, {
            width: "100%",
            delay: 1.3,
            ease: "Power3.inOut"
        });
        gsap.from(header, {
            y: 50,
            opacity: 0,
            delay: .8,
            ease: "Power4.easeInOut"
        });
        

        new Cursor(document.querySelector(".cursor"));
    }, []);
    return (
    <div className="cursor">
        <div className="cursor-big-circle"></div>
        <div className='cursor-about-hover'></div>
        <div className="cursor-artist-hover">View <br/> Portfolio</div>
        <div className="cursor-contact-hover">👋</div>
    </div>
    )
}
