// src/components/DropDown/DropDown.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './DropDown.scss'; // Import the SCSS file

/**
 * DropDown Component
 * A reusable dropdown/select component with label, error handling, and validation.
 * 
 * @param {object} props - Component props.
 * @param {string} props.label - The label for the dropdown field (required).
 * @param {React.Node} props.children - The option elements to display in the dropdown.
 * @param {string} props.name - The name attribute for the select element (required).
 * @param {function} [props.onChange] - The function to call when the selection changes. Optional when disabled.
 * @param {string} [props.error] - An error message to display below the dropdown.
 * @param {boolean} [props.hasError=false] - If true, applies error styling to the dropdown.
 * @param {boolean} [props.isRequired=true] - If true, marks the dropdown as required.
 * @param {boolean} [props.isDisabled=false] - If true, disables the dropdown field.
 */
const DropDown = ({ label, children, name, onChange = () => {}, error, hasError = false, isRequired = true, isDisabled = false }) => {
    const inputClass = `input-field-drop-down ${hasError ? 'error' : ''}`;
    const labelID = `input-field-drop-down-${label}`;

    return (
        <div className={inputClass}>
            <label htmlFor={labelID}>{label} {isRequired && <span style={{ color: "red" }}>*</span>}</label>
            <select 
                name={name} 
                onChange={onChange} 
                id={labelID} 
                required={isRequired} 
                disabled={isDisabled}
                aria-label={label}
                aria-required={isRequired}
                aria-invalid={hasError}
                aria-describedby={error ? `${labelID}-error` : undefined}
            >
                {children}
            </select>
            {error && <span className='error' id={`${labelID}-error`} role="alert">{error}</span>}
        </div >
    );
};

DropDown.propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    error: PropTypes.string,
    hasError: PropTypes.bool,
    isRequired: PropTypes.bool,
    isDisabled: PropTypes.bool,
};

export default DropDown;
