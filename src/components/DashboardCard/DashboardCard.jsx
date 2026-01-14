import React from 'react';
import PropTypes from 'prop-types';
import './DashboardCard.scss'; // Import the SCSS file

/**
 * DashboardCard Component
 * A card component for displaying dashboard information in a structured layout.
 * 
 * @param {object} props - Component props.
 * @param {React.Node} props.topLeft - Content for the top-left section.
 * @param {string} [props.topLeftLabel] - Label for the top-left section.
 * @param {React.Node} props.topRight - Content for the top-right section.
 * @param {string} [props.topRightLabel] - Label for the top-right section.
 * @param {React.Node} props.bottomLeft - Content for the bottom-left section.
 * @param {string} [props.bottomLeftLabel] - Label for the bottom-left section.
 * @param {React.Node} props.bottomRight - Content for the bottom-right section.
 * @param {string} [props.bottomRightLabel] - Label for the bottom-right section.
 */
const DashboardCard = ({ topLeft, topLeftLabel, topRight, topRightLabel, bottomLeft, bottomLeftLabel, bottomRight, bottomRightLabel }) => {

    return (
        <article className="dashboard-card-group" role="region" aria-label="Dashboard information card">
            <div className="dashboard-card">
                <div className="top">
                    <div className="top-left">
                        {topLeftLabel && <div className="label">{topLeftLabel}</div>}
                        {topLeft}
                    </div>
                    <div className="top-right">
                        {topRightLabel && <div className="label">{topRightLabel}</div>}
                        {topRight}
                    </div>
                </div>
                <div className="bottom">
                    <div className="bottom-left">
                        {bottomLeftLabel && <div className="label">{bottomLeftLabel}</div>}
                        {bottomLeft}
                    </div>
                    {bottomRightLabel && <div className="label">{bottomRightLabel}</div>}
                    <div className="bottom-right">
                        {bottomRight}
                    </div>
                </div>
            </div>
            <div className="shadow-card-one" aria-hidden="true"></div>
            <div className="shadow-card-two" aria-hidden="true"></div>
        </article>
    );
};

DashboardCard.propTypes = {
    topLeft: PropTypes.node,
    topLeftLabel: PropTypes.string,
    topRight: PropTypes.node,
    topRightLabel: PropTypes.string,
    bottomLeft: PropTypes.node,
    bottomLeftLabel: PropTypes.string,
    bottomRight: PropTypes.node,
    bottomRightLabel: PropTypes.string,
};

export default DashboardCard;
