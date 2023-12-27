import React, { useState } from 'react'

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleSection = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="collapse" onClick={toggleSection}>
            <div className="collapse__title">
                <p>{title}</p>
                <i className={`fa-solid fa-chevron-up collapse__title--up ${isOpen ? 'collapse__title--down' : ''}`}></i>
            </div>
            <div className={`collapse__content ${isOpen ? 'collapse__content--open' : ''}`}>
                {content}
            </div>
        </div>
    )
}

export default Collapse