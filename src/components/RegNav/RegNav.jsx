
import React from 'react';
import { ReactComponent as BackButton } from '../../assets/icons/ph_caret-left-bold.svg';
import Logo from '../../assets/icons/logo.png';
import './RegNav.scss'; // Import the SCSS file

const RegNav = ({ label, onClick }) => {

    return (
        <div className="reg-nav">
            <img src={Logo} alt='Kadamines Logo' />
            <div className="nav-bar" >
                <BackButton width="35" height="35" className='nav-back' onClick={onClick} />
                <span>{label}</span>
            </div>
        </div>
    );
};

export default RegNav;
