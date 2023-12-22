import { Link } from "react-router-dom"
import Logo from "../../assets/logo-header.svg"

function Header() {
    return (
        <header className="header">
            <Link to="/">
                <img src={Logo}  alt="logo kasa" className="header__logo" />
            </Link>
            <nav className="header__navbar">
                <Link to="/" className="header__navbar--item">Acceuil</Link>
                <Link to="/about" className="header__navbar--item">A Propos</Link>
            </nav>
        </header>
  );
}

export default Header;
