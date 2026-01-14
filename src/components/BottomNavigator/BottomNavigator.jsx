// src/components/BottomNavigator/BottomNavigator.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as DashboardIcon } from '../../assets/icons/nav-dashboard-icon.svg';
import { ReactComponent as TransactionIcon } from '../../assets/icons/nav-transactions-icon.svg';
import { ReactComponent as NotificationIcon } from '../../assets/icons/nav-notification-icon.svg';
import { ReactComponent as ProfileIcon } from '../../assets/icons/nav-avatar-icon.svg';
import './BottomNavigator.scss'; // Import the SCSS file 

/**
 * BottomNavigator Component
 * A bottom navigation bar component with icons and labels for main app sections.
 * 
 * @param {object} props - Component props.
 * @param {'dashboard' | 'transactions' | 'notifications' | 'profile'} [props.currentPage='dashboard'] - The currently active page.
 * @param {string} [props.dashboardLink='#'] - The route for the dashboard navigation.
 * @param {string} [props.transactionLink='#'] - The route for the transactions navigation.
 * @param {string} [props.notificationLink='#'] - The route for the notifications navigation.
 * @param {string} [props.profileLink='#'] - The route for the profile navigation.
 */
const BottomNavigator = ({ currentPage = "dashboard", dashboardLink = "#", transactionLink = "#", notificationLink = "#", profileLink = "#", }) => {
    const iconSize = 25;
    const navigate = useNavigate();

    const handleNavigation = (link, pageName) => {
        if (link !== '#') {
            navigate(link);
        }
    };

    const handleKeyDown = (event, link, pageName) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleNavigation(link, pageName);
        }
    };

    return (
        <nav className="bottom-navigator" role="navigation" aria-label="Main navigation">
            <button
                className={currentPage === "dashboard" ? "selected-page" : ""}
                onClick={() => handleNavigation(dashboardLink, 'dashboard')}
                onKeyDown={(e) => handleKeyDown(e, dashboardLink, 'dashboard')}
                aria-label="Navigate to Dashboard"
                aria-current={currentPage === "dashboard" ? "page" : undefined}
                type="button"
            >
                <DashboardIcon width={iconSize} height={iconSize} className='icon' aria-hidden="true" />
                <div>Dashboard</div>
            </button>
            <button
                className={currentPage === "transactions" ? "selected-page" : ""}
                onClick={() => handleNavigation(transactionLink, 'transactions')}
                onKeyDown={(e) => handleKeyDown(e, transactionLink, 'transactions')}
                aria-label="Navigate to Transactions"
                aria-current={currentPage === "transactions" ? "page" : undefined}
                type="button"
            >
                <TransactionIcon width={iconSize} height={iconSize} className='icon' aria-hidden="true" />
                <div>Transactions</div>
            </button>
            <button
                className={currentPage === "notifications" ? "selected-page" : ""}
                onClick={() => handleNavigation(notificationLink, 'notifications')}
                onKeyDown={(e) => handleKeyDown(e, notificationLink, 'notifications')}
                aria-label="Navigate to Notifications"
                aria-current={currentPage === "notifications" ? "page" : undefined}
                type="button"
            >
                <NotificationIcon width={iconSize} height={iconSize} className='icon' aria-hidden="true" />
                <div>Notifications</div>
            </button>
            <button
                className={currentPage === "profile" ? "selected-page" : ""}
                onClick={() => handleNavigation(profileLink, 'profile')}
                onKeyDown={(e) => handleKeyDown(e, profileLink, 'profile')}
                aria-label="Navigate to Profile"
                aria-current={currentPage === "profile" ? "page" : undefined}
                type="button"
            >
                <ProfileIcon width={iconSize} height={iconSize} className='icon' aria-hidden="true" />
                <div>Profile</div>
            </button>
        </nav>
    );
};

BottomNavigator.propTypes = {
    currentPage: PropTypes.oneOf(['dashboard', 'transactions', 'notifications', 'profile']),
    dashboardLink: PropTypes.string,
    transactionLink: PropTypes.string,
    notificationLink: PropTypes.string,
    profileLink: PropTypes.string,
};

export default BottomNavigator;