// src/components/Button/Button.jsx
import React from 'react';
import './InputField.scss'; // Import the SCSS file

const InputField = ({ label, type = "text", placeholder, name, value = "", onChange, error, hasError = false, isRequired = true, isDisabled = false, hasButton = false, onButtonClick, buttonLabel = "" }) => {
    const inputClass = `input-field ${hasError ? 'error' : ''}`;
    const labelID = `input-field-${label}`;

    return (
        <div className={inputClass}>
            <label htmlFor={labelID}>{label} {isRequired && <span style={{ color: "red" }}>*</span>}</label>
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
                />
                {hasButton ? <button
                    type="button"
                    onClick={onButtonClick}>
                    {buttonLabel}
                </button> : <></>}
            </div>
            <span className='error'>{error}</span>

        </div>
    );
};

export default InputField;
