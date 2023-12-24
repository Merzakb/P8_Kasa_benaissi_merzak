import React, { useState } from 'react'

const Collaps = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSection = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="collaps">
            <div onClick={toggleSection} className="collaps__title">
                <p>{title}</p>
                <i className="fa-solid fa-chevron-up"></i>
            </div>
            {isOpen && (
                <div className="collaps__content">
                    {content}
                </div>
            )}
        </div>
    )
}

export default Collaps
