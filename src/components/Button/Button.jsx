// src/components/Button/Button.jsx
import React from 'react';
import './Button.scss'; // Import the SCSS file 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Button = ({ label, onClick, styleType = 'primary', size = 'medium', isSpanWidth = false, isShort = false, isDisabled = false, isLoading = false }) => {

    if (isLoading) {
        const buttonClass = `btn ${styleType} ${size} ${isSpanWidth ? 'span' : ''} ${isShort ? 'short' : ''} disabled text-center`;

        return (
            <button className={buttonClass} disabled={true}>
                <FontAwesomeIcon icon={faSpinner} spin={true} fontSize='20px' />
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
