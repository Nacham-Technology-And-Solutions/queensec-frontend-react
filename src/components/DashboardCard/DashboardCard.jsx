
import React from 'react';
import './DashboardCard.scss'; // Import the SCSS file

const DashboardCard = ({ topLeft, topLeftLabel, topRight, topRightLabel, bottomLeft, bottomLeftLabel, bottomRight, bottomRightLabel }) => {

    return (
        <div className="dashboard-card-group">
            <div className="dashboard-card">
                <div className="top">
                    <div className="top-left">
                        <div className="label">{topLeftLabel}</div>
                        {topLeft}
                    </div>
                    <div className="top-right">
                        <div className="label">{topRightLabel}</div>
                        {topRight}
                    </div>
                </div>
                <div className="bottom">
                    <div className="bottom-left">
                        <div className="label">{bottomLeftLabel}</div>
                        {bottomLeft}
                    </div>
                    <div className="label">{bottomRightLabel}</div>
                    <div className="bottom-right">
                        {bottomRight}

                    </div>
                </div>
            </div>
            <div className="shadow-card-one"></div>
            <div className="shadow-card-two"></div>
        </div>
    );
};

export default DashboardCard;
