// src/components/Button/Button.jsx
import React from 'react';
import './Button.scss'; // Import the SCSS file 

const Button = ({ label, onClick, styleType = 'primary', size = 'medium', isSpanWidth = false, isShort = false, isDisabled = false }) => {
    const buttonClass = `btn ${styleType} ${size} ${isSpanWidth ? 'span' : ''} ${isShort ? 'short' : ''} ${isDisabled ? 'disabled' : ''}`;

    return (
        <button className={buttonClass} onClick={onClick} disabled={isDisabled}>
            {label}
        </button>
    );
};

export default Button;
