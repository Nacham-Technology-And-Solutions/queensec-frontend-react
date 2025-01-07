// src/components/Button/Button.jsx
import React from 'react';
import './DropDown.scss'; // Import the SCSS file

const DropDown = ({ label, children, name, onChange, error, hasError = false, isRequired = true, isDisabled = false }) => {
    const inputClass = `input-field-drop-down ${hasError ? 'error' : ''}`;
    const labelID = `input-field-drop-down-${label}`;

    return (
        <div className={inputClass}>
            <label htmlFor={labelID}>{label} {isRequired && <span style={{ color: "red" }}>*</span>}</label>
            <select name={name} onChange={onChange} id={labelID} required={isRequired} disabled={isDisabled}>
                {children}
            </select>
            <span className='error'>{error}</span>
        </div >
    );
};

export default DropDown;
