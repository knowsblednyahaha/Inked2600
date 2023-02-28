import { Link } from 'react-router-dom';
import './Navbar.scss';
import ThemeToggle from './ThemeToggle';

function Navbar() {
    return(
        <header>
            <nav className="navbar">
                <div className="nav-logo">
                    <Link to={'/'}><h1>Inked <br/>2600</h1></Link>
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