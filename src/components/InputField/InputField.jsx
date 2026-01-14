// src/components/InputField/InputField.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './InputField.scss'; // Import the SCSS file

/**
 * InputField Component
 * A reusable input field component with label, error handling, and optional button
 * 
 * @param {string} label - Field label text
 * @param {string} type - Input type (text, email, password, etc.)
 * @param {string} placeholder - Placeholder text
 * @param {string} name - Input name attribute
 * @param {string} value - Input value
 * @param {function} onChange - Change handler function
 * @param {string} error - Error message to display
 * @param {boolean} hasError - Whether field has an error
 * @param {boolean} isRequired - Whether field is required
 * @param {boolean} isDisabled - Whether field is disabled
 * @param {boolean} hasButton - Whether field has a button (e.g., password visibility toggle)
 * @param {function} onButtonClick - Button click handler
 * @param {string|ReactNode} buttonLabel - Button label or icon
 */
const InputField = ({ label, type = "text", placeholder, name, value = "", onChange, error, hasError = false, isRequired = true, isDisabled = false, hasButton = false, onButtonClick, buttonLabel = "" }) => {
    const inputClass = `input-field ${hasError ? 'error' : ''}`;
    const labelID = `input-field-${label}`;
    const errorID = `${labelID}-error`;
    const buttonID = `${labelID}-button`;

    const handleButtonKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            if (onButtonClick) onButtonClick();
        }
    };

    return (
        <div className={inputClass}>
            <label htmlFor={labelID}>
                {label} {isRequired && <span style={{ color: "red" }} aria-label="required">*</span>}
            </label>
            <div className='field'>
                <input
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                    id={labelID}
                    required={isRequired}
                    disabled={isDisabled}
                    aria-label={label}
                    aria-required={isRequired}
                    aria-invalid={hasError}
                    aria-describedby={error ? errorID : (hasButton ? buttonID : undefined)}
                />
                {hasButton && (
                    <button
                    type="button"
                        onClick={onButtonClick}
                        onKeyDown={handleButtonKeyDown}
                        id={buttonID}
                        aria-label={`Toggle ${label} visibility`}
                    >
                    {buttonLabel}
                    </button>
                )}
            </div>
            {error && (
                <span className='error' id={errorID} role="alert" aria-live="polite">
                    {error}
                </span>
            )}
        </div>
    );
};

InputField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
    hasError: PropTypes.bool,
    isRequired: PropTypes.bool,
    isDisabled: PropTypes.bool,
    hasButton: PropTypes.bool,
    onButtonClick: PropTypes.func,
    buttonLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default InputField;
