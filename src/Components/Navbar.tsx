import { Link } from 'react-router-dom';
import './Navbar.scss';
import ThemeToggle from './ThemeToggle';
import {useEffect} from 'react'
import { gsap } from "gsap";

function Navbar() {
    const logo = document.querySelector(".nav-logo");
    const img = document.querySelector(".nav-menu");
    useEffect( () => {
        gsap.from(logo, {
            xPercent: 50,
            opacity: 0,
            delay: .5,
            ease: "Power4.inOut"
        });
        gsap.from(img, {
            xPercent: 50,
            opacity: 0,
            delay: .5,
            ease: "Power4.inOut"
        });
        console.log(logo, img);
    });
    return(
        <header>
            <nav className="navbar">
                <div className="nav-logo">
                    <Link to={'/'}><strong>Inked <br/>2600</strong></Link>
                </div>
                <div className="nav-menu">
                    <div>
                        <ThemeToggle />
                    </div>
                    {/* <h3>Menu</h3> */}
                </div>
            </nav>
            {/* <div classNameName='menu'>
                <div classNameName='exit'>
                    <img src="./img/x-svgrepo-com.svg" alt="" />
                </div>
                <div classNameName='menu-container'>
                    <ul classNameName='nav-list'>
                        <li>
                            <a href='#' classNameName='nav-link'>About</a>
                        </li>
                        <li>
                            <a href='#' classNameName='nav-link'>Artist</a>
                        </li>
                        <li>
                            <a href='#' classNameName='nav-link'>Contact</a>
                        </li>
                    </ul>
                </div>
            </div> */}
        </header>
    )
}

export default Navbar;