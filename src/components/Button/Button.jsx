// src/components/Button/Button.jsx
import React from 'react';
import './Button.scss'; // Import the SCSS file

const Button = ({ label, onClick, styleType = 'primary', size = 'medium', span ='' }) => {
    const buttonClass = `btn ${styleType} ${size} ${span}`;

    return (
        <button className={buttonClass} onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;
