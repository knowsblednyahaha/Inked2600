import './Cursor.scss'
import {useEffect} from 'react'
import Cursor, {} from "./cursor";
import { gsap } from "gsap";

export default function CursoElement()  {
    const body = document.querySelector("body");
    useEffect( () => {
        gsap.from(body, {
            opacity: 0,
            duration: 1,
            ease: "Power3.easeInOut",
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
