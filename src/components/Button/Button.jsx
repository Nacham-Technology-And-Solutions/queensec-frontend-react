// src/components/Button/Button.jsx
import React from 'react';
import './Button.scss'; // Import the SCSS file 

const Button = ({ label, onClick, styleType = 'primary', size = 'medium', isSpanWidth = false, isShort = false, isDisabled = false, isLoading = false }) => {

    if (isLoading) {
        const buttonClass = `btn ${styleType} ${size} ${isSpanWidth ? 'span' : ''} ${isShort ? 'short' : ''} disabled text-center`;

        return (
            <button className={buttonClass} disabled={true}>
                <span className="loading loading-spinner loading-lg "></span>
            </button>
        );
    } else {

        const buttonClass = `btn ${styleType} ${size} ${isSpanWidth ? 'span' : ''} ${isShort ? 'short' : ''} ${isDisabled ? 'disabled' : ''}`;
        return (
            <button className={buttonClass} onClick={onClick} disabled={isDisabled}>
                {label}
            </button>
        );
    }
};

export default Button;
