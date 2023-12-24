import { useParams, Navigate } from "react-router-dom"
import { roomsList } from "../../data/roomsList"



import Rating from "../../components/Rating/Rating"
import Collaps from "../../components/Collaps/Collaps"
import Slide from "../../components/Slide/Slide"

function Room() {
    const {roomId}  = useParams()
    const room = roomsList.find(room => room.id === roomId)
   
    //Si l'annonce n'est pas trouvée, rediriger automatiquement vers la page NotFound
    if (!room) {
        return <Navigate to="/not-found" />
    }

    return (
        <div className="room">
            <div className="slider-container">
                <Slide pictures={room.pictures} />
            </div>

            <div className="details">

                {/* location et titre de l'annonce */}
                <div className="details__locations details__item">
                    <h2 className="details__title">{room.title}  </h2>
                    <p className="details__location">{room.location}</p>
                </div>

                 {/* les information du propriétaire */}
                <div className="details__host details__item">
                    <p className="details__host--name">{room.host.name}</p>
                    <img src={room.host.picture} alt="" className="details__host--picture" />
                </div>

                {/* les tags de l'annonce */}
                <ul className="details__tags details__item">
                    {room.tags.map((tag, index) => (
                        <li key={index} className="details__tags--item">{tag}</li>
                    ))}
                </ul>

                {/* le score de l'annonceur */}
                <div className="details__rating details__item">
                    <Rating rating={room.rating} />
                </div>

                {/* la desciption de l'annonce */}
                <div className="details__description details__item">
                    <Collaps title="Description" content={<p>{room.description}</p>} />
                </div>

                {/* les équipements de l'annonce */}
                <div className="details__equipment details__item">
                    <Collaps
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
