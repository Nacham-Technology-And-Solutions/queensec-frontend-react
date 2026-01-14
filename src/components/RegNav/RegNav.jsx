import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as BackButton } from '../../assets/icons/ph_caret-left-bold.svg';
import Logo from '../../assets/icons/logo.png';
import './RegNav.scss'; // Import the SCSS file

/**
 * RegNav Component
 * A navigation bar component for registration screens with back button and label.
 * 
 * @param {object} props - Component props.
 * @param {string} props.label - The label text to display in the navigation bar (required).
 * @param {function} props.onClick - The function to call when the back button is clicked (required).
 */
const RegNav = ({ label, onClick }) => {

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onClick();
        }
    };

    return (
        <nav className="reg-nav" role="navigation" aria-label="Registration navigation">
            <img src={Logo} alt='Queensec Logo' />
            <div className="nav-bar">
                <button
                    className='nav-back-button'
                    onClick={onClick}
                    onKeyDown={handleKeyDown}
                    aria-label="Go back"
                    type="button"
                >
                    <BackButton width="35" height="35" className='nav-back' aria-hidden="true" />
                </button>
                <span>{label}</span>
            </div>
        </nav>
    );
};

RegNav.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default RegNav;
