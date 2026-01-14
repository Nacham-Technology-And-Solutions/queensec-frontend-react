// src/components/TextButton/TextButton.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './TextButton.scss'; // Import the SCSS file

/**
 * TextButton Component
 * A reusable text button component with customizable styles and sizes.
 * 
 * @param {object} props - Component props.
 * @param {string} props.label - The text displayed on the button (required).
 * @param {function} props.onClick - The function to call when the button is clicked.
 * @param {string} [props.styleType='primary'] - The style type of the button.
 * @param {string} [props.size='medium'] - The size of the button.
 * @param {string} [props.span=''] - Additional CSS class for span styling.
 */
const TextButton = ({ label, onClick, styleType = 'primary', size = 'medium', span = '', ariaLabel }) => {
    const buttonClass = `text-btn ${styleType} ${size} ${span}`;

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            if (onClick) onClick();
        }
    };

    return (
        <button 
            className={buttonClass} 
            onClick={onClick} 
            onKeyDown={handleKeyDown}
            type="button"
            aria-label={ariaLabel || label}
        >
            {label}
        </button>
    );
};

TextButton.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    styleType: PropTypes.string,
    size: PropTypes.string,
    span: PropTypes.string,
    ariaLabel: PropTypes.string,
};

export default TextButton;
