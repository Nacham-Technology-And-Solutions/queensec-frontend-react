// src/components/Button/Button.jsx
import React from 'react';
import './TextButton.scss'; // Import the SCSS file

const TextButton = ({ label, onClick, styleType = 'primary', size = 'medium', span ='' }) => {
    const buttonClass = `text-btn ${styleType} ${size} ${span}`;

    return (
        <button className={buttonClass} onClick={onClick}>
            {label}
        </button>
    );
};

export default TextButton;
