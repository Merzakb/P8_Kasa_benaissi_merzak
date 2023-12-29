// Importation de la liste des chambres depuis le module contenant les données (roomsList)
import { roomsList } from "../../utils/roomsList"
// Importation du composant Link depuis React Router
import { Link } from "react-router-dom"

// Définition du composant Cards
function Cards() {
    // Rendu du composant
    return (
        <section className="roomsCards">
            {/* Mapping à travers la liste des chambres pour créer des cartes (cards) */}
            {roomsList.map(({ id, cover, title }) => (
                // Chaque carte est enveloppée dans un lien vers la page de détails de la chambre
                <Link key={id} to={`room/${id}`}>
                    <article className="card">
                        {/* Image de la chambre avec un texte alternatif basé sur le titre */}
                        <img src={cover} alt={`${title} cover`} className="card__img" />
                        {/* Overlay de la carte avec le titre de la chambre */}
                        <div className="card__overlay">
                            <h2 className="card__overlay--title">{title}</h2>
                        </div>
                    </article>
                </Link>
            ))}
        </section>
    )
}

export default Cards