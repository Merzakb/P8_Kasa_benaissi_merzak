// Importation du composant Link depuis React Router
import { Link } from "react-router-dom"
// Importation de l'image du logo depuis le dossier des assets
import Logo from "../../assets/logo-footer.png"

// Définition du composant du pied de page (footer)
function Footer() {
    return (
        <footer>
            {/* Contenu du pied de page */}
            <div className="footer">
                {/* Logo avec un lien vers la page d'accueil */}
                <Link to="/">
                    <img src={Logo} alt="logo kasa" className="footer__logo" />
                </Link>
                {/* Texte du pied de page avec l'année et les droits d'auteur */}
                <p className="footer__right">© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer
