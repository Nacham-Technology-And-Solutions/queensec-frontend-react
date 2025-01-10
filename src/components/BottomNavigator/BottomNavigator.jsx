// src/components/BottomNavigator/BottomNavigator.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as DashboardIcon } from '../../assets/icons/nav-dashboard-icon.svg';
import { ReactComponent as TransactionIcon } from '../../assets/icons/nav-transactions-icon.svg';
import { ReactComponent as NotificationIcon } from '../../assets/icons/nav-notification-icon.svg';
import { ReactComponent as ProfileIcon } from '../../assets/icons/nav-avatar-icon.svg';
import './BottomNavigator.scss'; // Import the SCSS file 

const BottomNavigator = ({ currentPage = "dashboard", dashboardLink = "#", transactionLink = "#", notificationLink = "#", profileLink = "#", }) => {
    const iconSize = 25;
    const navigate = useNavigate();

    return (
        <div className="bottom-navigator" >
            <div className={currentPage === "dashboard" ? "selected-page" : ""}>
                <DashboardIcon width={iconSize} height={iconSize} className='icon' onClick={() => { navigate(dashboardLink); }} />
                <div>Dashboard</div>
            </div>
            <div className={currentPage === "transactions" ? "selected-page" : ""}>
                <TransactionIcon width={iconSize} height={iconSize} className='icon' onClick={() => { navigate(transactionLink); }} />
                <div>Transactions</div>
            </div>
            <div className={currentPage === "notifications" ? "selected-page" : ""}>
                <NotificationIcon width={iconSize} height={iconSize} className='icon' onClick={() => { navigate(notificationLink); }} />
                <div>Notifications</div>
            </div>
            <div className={currentPage === "profile" ? "selected-page" : ""}>
                <ProfileIcon width={iconSize} height={iconSize} className='icon' onClick={() => { navigate(profileLink); }} />
                <div>Profile</div>
            </div>
        </div>
    );
};

export default BottomNavigator;