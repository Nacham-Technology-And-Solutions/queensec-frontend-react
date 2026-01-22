import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as TickIcon } from '../../assets/icons/teenyicons_tick-circle-outline.svg';
import './AccountTypeSwitch.scss'; // Import the SCSS file

/**
 * AccountTypeSwitch Component
 * A switch/button component for selecting account types during registration.
 * 
 * @param {object} props - Component props.
 * @param {string} props.label - The label text for the account type (required).
 * @param {function} props.onClick - The function to call when the switch is clicked (required).
 * @param {boolean} props.selected - If true, the switch is in the selected state (required).
 * @param {React.Node} props.icon - The icon to display for the account type (required).
 */
const AccountTypeSwitch = ({ label, onClick, selected, icon }) => {
    const switchStyle = `account-type-switch ${selected ? 'selected' : ''}`;

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onClick();
        }
    };

    return (
        <button
            className={switchStyle}
            onClick={onClick}
            onKeyDown={handleKeyDown}
            aria-label={`Select ${label} account type`}
            aria-checked={selected}
            type="button"
            role="radio"
        >
            {icon && <span aria-hidden="true">{icon}</span>}
            <span>{label}</span>
            <TickIcon width="20" height="20" className='tick' aria-hidden="true" />
        </button>
    );
};

AccountTypeSwitch.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired,
    icon: PropTypes.node.isRequired,
};

export default AccountTypeSwitch;
