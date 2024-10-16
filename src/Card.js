import React from 'react';
import './Card.css'

const Card = ({title, description, bgColor, image, nextStep, prevStep, currentStep, totalStep }) => {
return (
    <div className = "card" style={{backgroundColor: bgColor}}>
        <img src={image} />
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{description}</p>
       <div className='button-container'>
        {currentStep > 0 && (
            <button className='btn btn-back' onClick={prevStep}>
                &#9664;
            </button>
        )}
        {currentStep < totalStep - 1 && (
            <button className='btn btn=nrxt' onClick={nextStep}>
                &#9654;
            </button>
        )}
       </div>
    </div>
);
};

export default Card;