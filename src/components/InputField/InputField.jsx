// src/components/Button/Button.jsx
import React from 'react';
import './InputField.scss'; // Import the SCSS file

const InputField = ({ label, type = "text", placeholder, name, value = "", onChange, error, hasError = false, isRequired = true, isDisabled = false }) => {
    const inputClass = `input-field ${hasError ? 'error' : ''}`;
    const labelID = `input-field-${label}`;

    return (
        <div className={inputClass}>
            <label htmlFor={labelID}>{label} {isRequired && <span style={{ color: "red" }}>*</span>}</label>
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                id={labelID}
                required={isRequired}
                disabled={isDisabled}
            />
            <span className='error'>{error}</span>
        </div>
    );
};

export default InputField;
