// Importation des composants nécessaires depuis React Router
import { Link, NavLink } from "react-router-dom"
// Importation de l'image du logo depuis le dossier des assets
import Logo from "../../assets/logo-header.svg"

// Définition du composant de l'en-tête (header)
function Header() {
    return (
        <header className="header">
            {/* Logo avec un lien vers la page d'accueil */}
            <Link to="/">
                <img src={Logo} alt="logo kasa" className="header__logo" />
            </Link>

            {/* Navigation avec des liens actifs (NavLink) */}
            <nav className="header__navbar">
                {/* Lien vers la page d'accueil avec classe active si la page est active */}
                <NavLink to="/" className={(link) => (link.isActive ? "header__navbar--active" : "header__navbar--item")}>
                    Accueil
                </NavLink>

                {/* Lien vers la page "À Propos" avec classe active si la page est active */}
                <NavLink to="/about" className={(link) => (link.isActive ? "header__navbar--active" : "header__navbar--item")}>
                    À Propos
                </NavLink>
            </nav>
        </header>
    )
}

export default Header
