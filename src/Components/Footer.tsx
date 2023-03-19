import './Footer.scss';

function Footer() {
    return(
        <footer className="footer-container">
            <div className="copyright-text">
                © 2022 - Inked 2600
            </div>
            <div className="credit" style={{display: "none"}}>
                <a href='#'>Site Credit</a>
            </div>
        </footer>
    )
}
export default Footer;