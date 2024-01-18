import { Link } from "react-router-dom";
import "./Navbar.scss";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Navbar() {
  const logo = useRef(null);
  const menu = useRef(null);
  useEffect(() => {
    gsap.from(logo.current, {
      x: 50,
      opacity: 0,
      delay: 0.4,
      ease: "Power4.easeInOut",
    });
    gsap.from(menu.current, {
      x: 50,
      opacity: 0,
      delay: 0.6,
      ease: "Power4.easeInOut",
    });
  }, []);
  return (
    <header data-scroll-section>
      <nav className="navbar">
        <div className="nav-logo" ref={logo}>
          <Link to={"/"}>
            <strong>
              Inked <br />
              2600
            </strong>
          </Link>
        </div>
        <div className="nav-menu" ref={menu}>
          <div>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
