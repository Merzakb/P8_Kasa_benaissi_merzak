
import { Link } from "react-router-dom"
import Logo from "../../assets/logo-footer.png"

function Footer() {
    return (
        <footer>
            <div className="footer">
                <Link to="/">
                    <img src={Logo}  alt="logo kasa" className="footer__logo" />
                </Link>
                <p className="footer__right">© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
  );
}

export default Footer;
