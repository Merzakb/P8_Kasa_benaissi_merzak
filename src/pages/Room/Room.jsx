import { useParams, Navigate } from "react-router-dom"
import { roomsList } from "../../utils/roomsList"
import { PageTitle } from "../../utils/PageTilte"

import Rating from "../../components/Rating/Rating"
import Collapse from "../../components/Collapse/Collapse"
import Slide from "../../components/Slide/Slide"

function Room() {
    // Récupérer l'ID de la chambre depuis les paramètres de l'URL
    const { roomId }  = useParams()

    // Trouver la chambre correspondante dans la liste des chambres
    const room = roomsList.find(room => room.id === roomId)

    // Si la chambre n'est pas trouvée, rediriger vers la page NotFound
    if (!room) return <Navigate to="/not-found" />

    // Mettre à jour le titre de la page avec le titre de la chambre
    PageTitle(`Kasa | ${room.title}`)

    return (
        <div className="room">
            {/* Slider pour afficher les images de la chambre */}
            <div className="slider-container">
                <Slide pictures={room.pictures} />
            </div>

            {/* Détails de la chambre */}
            <div className="details">
                {/* Titre et emplacement de la chambre */}
                <div className="details__locations details__item">
                    <h2 className="details__title">{room.title}</h2>
                    <p className="details__location">{room.location}</p>
                </div>

                {/* Informations sur le propriétaire de la chambre */}
                <div className="details__host details__item">
                    <p className="details__host--name">{room.host.name}</p>
                    <img src={room.host.picture} alt="" className="details__host--picture" />
                </div>

                {/* Tags associés à la chambre */}
                <ul className="details__tags details__item">
                    {room.tags.map((tag, index) => (
                        <li key={index} className="details__tags--item">{tag}</li>
                    ))}
                </ul>

                {/* Score de l'annonceur */}
                <div className="details__rating details__item">
                    <Rating rating={room.rating} />
                </div>

                {/* Description de la chambre avec possibilité de collapsage */}
                <div className="details__description details__item">
                    <Collapse title="Description" content={<p>{room.description}</p>} />
                </div>

                {/* Équipements de la chambre avec possibilité de collapsage */}
                <div className="details__equipment details__item">
                    <Collapse
                        title="Équipements"
                        content={
                            <ul>
                                {room.equipments.map((equipment, index) => (
                                    <li key={index}>{equipment}</li>
                                ))}
                            </ul>
                        }
                    />
                </div>
            </div>
        </div>
    )
}

export default Room
