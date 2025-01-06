// src/components/Button/Button.jsx
import React from 'react';
import './InputField.scss'; // Import the SCSS file

const InputField = ({ label, type = "text", placeholder, name, value, onChange }) => {
    const inputClass = `input-field`;
    const labelID = `input-field-${label}`;

    return (
        <div className={inputClass}>
            <label htmlFor={labelID}>{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                id={labelID}
            />
        </div>
    );
};

export default InputField;
