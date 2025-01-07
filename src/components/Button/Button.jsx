// src/components/Button/Button.jsx
import React from 'react';
import './Button.scss'; // Import the SCSS file 

const Button = ({ label, onClick, styleType = 'primary', size = 'medium', span, isDisabled = false }) => {
    const buttonClass = `btn ${styleType} ${size} ${span} ${isDisabled ? 'disabled' : ''}`;

    return (
        <button className={buttonClass} onClick={onClick} disabled={isDisabled}>
            {label}
        </button>
    );
};

export default Button;
