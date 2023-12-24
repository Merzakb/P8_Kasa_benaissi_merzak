import { roomsList } from "../../data/roomsList"
import { Link } from "react-router-dom"


function Cards(){
    return (
        <section className="roomsCards">
            {roomsList.map(({ id, cover, title }) => (
                <Link  key={id} to={`room/${id}`}>
                    <article className="card">
                        <img src={cover} alt={`${title} cover`} className="card__img"/>
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