import PropTypes from 'prop-types'


// Définition du composant Banner
function Banner({ img, alt, title }) {
    // Rendu du composant
    return (
        <div className="banner">
            {/* Image de la bannière avec un texte alternatif basé sur la description */}
            <img src={img} alt={alt} className="banner__img" />
            {/* Overlay de la bannière avec le titre */}
            <div className="banner__overlay">
                {/* Titre de la bannière */}
                <h1 className="banner__overlay--title">{title}</h1>
            </div>
        </div>
    );
}

Banner.propTypes = {
    img : PropTypes.string,
    alt : PropTypes.string,
    title: PropTypes.string
} 

export default Banner

