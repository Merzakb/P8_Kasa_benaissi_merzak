
function Rating  ({ rating }) {

    const emptyIcon =  <i className="fa-solid fa-star empty-star"></i>
    const fullIcon = <i className="fa-solid fa-star "></i>

    const renderStars = () => {

        const filledStars = Array.from({ length: rating }, (_, index) => (
            <span key={index}>{fullIcon}</span> // étoile pleine
        ))

        const emptyStars = Array.from({ length: 5 - rating }, (_, index) => (
            <span key={index + rating}>{emptyIcon}</span> // étoile vide
        ))

        return [...filledStars, ...emptyStars]
    }

    return (
        <div>
            {renderStars()}
        </div>
    )
}

export default Rating
