
import React from 'react';
import { ReactComponent as TickIcon } from '../../assets/icons/teenyicons_tick-circle-outline.svg';
import './AccountTypeSwitch.scss'; // Import the SCSS file

const AccountTypeSwitch = ({ label, onClick, selected, icon }) => {
    const switchStyle = `account-type-switch ${selected ? 'selected' : ''}`;


    return (
        <div className={switchStyle} onClick={onClick}>
            {icon}
            <span>{label}</span>
            <TickIcon width="20" height="20" className='tick' />
        </div>
    );
};

export default AccountTypeSwitch;
