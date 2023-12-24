// Slide.js
import React, { useState, useEffect } from 'react';
 import ArrowLeft from "../../assets/arrow_left.png"
 import ArrowRight from "../../assets/arrow_right.png"

function Slide({ pictures }) {
    
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Réinitialise l'index lorsque la liste des images change
        setCurrentIndex(0);
    }, [pictures]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
    };

    const totalPictures = pictures.length;

    return (
        <div className="slide">
            <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide__image" />
            {totalPictures > 1 && (
                <div>
                    <button onClick={prevSlide} className="slide__button"><img src={ArrowLeft} className=" arrow arrow-left" /></button>
                    <button onClick={nextSlide} className="slide__button"><img src={ArrowRight} className="arrow arrow-right" /></button>
                </div>
            )}
            <div className="slide__counter">{totalPictures > 1 && `${currentIndex + 1}/${totalPictures}`}</div>
        </div>
    );
};

export default Slide;
