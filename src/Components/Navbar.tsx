import { Link } from 'react-router-dom';
import './Navbar.scss';
import ThemeToggle from './ThemeToggle';
import {useEffect, useRef} from 'react';
import { gsap } from "gsap";

function Navbar() {
    const logo = useRef(null);
    const menu = useRef(null);
    useEffect( () => {
        gsap.from(logo.current, {
            x: 50,
            opacity: 0,
            delay: .4,
            ease: "Power4.easeInOut",
        });
        gsap.from(menu.current, {
            x: 50,
            opacity: 0,
            delay: .6,
            ease: "Power4.easeInOut"
        });
    }, []);
    return(
        <header>
            <nav className="navbar">
                <div className="nav-logo" ref={logo}>
                    <Link to={'/'}><strong>Inked <br/>2600</strong></Link>
                </div>
                <div className="nav-menu" ref={menu}>
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