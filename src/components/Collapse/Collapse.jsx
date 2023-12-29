// Importation du module React et du hook useState
import React, { useState } from 'react'

// Définition du composant de collapsible (collapse)
function Collapse({ title, content }) {
    // State pour gérer l'état ouvert/fermé du collapsible
    const [isOpen, setIsOpen] = useState(false)

    // Fonction pour basculer entre l'état ouvert et fermé du collapsible
    const toggleSection = () => {
        setIsOpen(!isOpen)
    }

    // Rendu du composant collapsible
    return (
        <div className="collapse" onClick={toggleSection}>
            {/* Section du titre avec une flèche indiquant l'état ouvert/fermé */}
            <div className="collapse__title">
                <p>{title}</p>
                {/* La classe 'collapse__title--down' est ajoutée si le collapsible est ouvert */}
                <i className={`fa-solid fa-chevron-up collapse__title--up ${isOpen ? 'collapse__title--down' : ''}`}></i>
            </div>
            {/* Section du contenu avec une classe 'collapse__content--open' si le collapsible est ouvert */}
            <div className={`collapse__content ${isOpen ? 'collapse__content--open' : ''}`}>
                {content}
            </div>
        </div>
    )
}

export default Collapse