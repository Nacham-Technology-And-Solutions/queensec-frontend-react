// src/components/Button/Button.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss'; // Import the SCSS file 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

/**
 * Button Component
 * A reusable button component with loading state and multiple style options
 * 
 * @param {string} label - Button text
 * @param {function} onClick - Click handler function
 * @param {string} styleType - Button style ('primary', 'secondary', etc.)
 * @param {string} size - Button size ('small', 'medium', 'large', 'mini')
 * @param {boolean} isSpanWidth - Whether button should span full width
 * @param {boolean} isShort - Whether button should be short height
 * @param {boolean} isDisabled - Whether button is disabled
 * @param {boolean} isLoading - Whether button is in loading state
 */
const Button = ({ label, onClick, styleType = 'primary', size = 'medium', isSpanWidth = false, isShort = false, isDisabled = false, isLoading = false, ariaLabel }) => {

    const handleKeyDown = (event) => {
        if ((event.key === 'Enter' || event.key === ' ') && !isDisabled && !isLoading) {
            event.preventDefault();
            if (onClick) onClick();
        }
    };

    if (isLoading) {
        const buttonClass = `btn ${styleType} ${size} ${isSpanWidth ? 'span' : ''} ${isShort ? 'short' : ''} disabled text-center`;

        return (
            <button 
                className={buttonClass} 
                disabled={true}
                aria-label={ariaLabel || label}
                aria-busy="true"
                type="button"
            >
                <FontAwesomeIcon icon={faSpinner} spin={true} fontSize='20px' aria-hidden="true" />
                <span className="sr-only">{label}</span>
            </button>
        );
    } else {

        const buttonClass = `btn ${styleType} ${size} ${isSpanWidth ? 'span' : ''} ${isShort ? 'short' : ''} ${isDisabled ? 'disabled' : ''}`;
        return (
            <button 
                className={buttonClass} 
                onClick={onClick} 
                onKeyDown={handleKeyDown}
                disabled={isDisabled}
                aria-label={ariaLabel || label}
                type="button"
            >
                {label}
            </button>
        );
    }
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    styleType: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large', 'mini']),
    isSpanWidth: PropTypes.bool,
    isShort: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    ariaLabel: PropTypes.string,
};

export default Button;
