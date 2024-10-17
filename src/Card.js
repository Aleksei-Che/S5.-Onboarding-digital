import React from 'react';
import './Card.css';
import Indicator from './Indicator';

const Card = ({ title, description, bgColor, image, nextStep, prevStep, currentStep, totalStep }) => {
    return (
        <div className="card">
            <div className="card-image" style={{ backgroundColor: bgColor }}>
                <img src={image} alt={title} className="card-img" />
            </div>
            <div className="card-content">
                <h4 className='card-title'>{title}</h4>
                <p className='card-text'>{description}</p>
            </div>
            <Indicator totalStep={totalStep} currentStep={currentStep} />
            <div className="card-bottom">
                <div className='button-container'>
                    {currentStep > 0 && (
                        <button className='btn btn-back' onClick={prevStep}>
                            &#9664;
                        </button>
                    )}
                    {currentStep < totalStep - 1 && (
                        <button className='btn btn-next' onClick={nextStep}>
                            &#9654;
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;

