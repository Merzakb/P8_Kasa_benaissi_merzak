import { Link, NavLink } from "react-router-dom"
import Logo from "../../assets/logo-header.svg"

function Header() {
    return (
        <header className="header">
            <Link to="/">
                <img src={Logo}  alt="logo kasa" className="header__logo" />
            </Link>
            <nav className="header__navbar">
                <NavLink to="/" className= {(link) => (link.isActive? "header__navbar--active" :"header__navbar--item")}>Accueil</NavLink>
                <NavLink to="/about" className={(link) => (link.isActive? "header__navbar--active" :"header__navbar--item")}>À Propos</NavLink>
            </nav>
        </header>
  );
}

export default Header;
