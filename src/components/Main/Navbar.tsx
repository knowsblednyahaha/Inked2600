import './Navbar.scss';

function Navbar() {
    return(
        <header>
            <nav className="navbar">
                <div className="nav-logo">
                    <h1>Inked <br/>2600</h1>
                </div>
                <div className="nav-menu">
                    <h3>Menu</h3>
                </div>
            </nav>
            <div className='menu'>
                <div className='exit'>
                    <img src="./img/x-svgrepo-com.svg" alt="" />
                </div>
                <div className='menu-container'>
                    <ul className='nav-list'>
                        <li>
                            <a href='#' className='nav-link'>About</a>
                        </li>
                        <li>
                            <a href='#' className='nav-link'>Artist</a>
                        </li>
                        <li>
                            <a href='#' className='nav-link'>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Navbar;