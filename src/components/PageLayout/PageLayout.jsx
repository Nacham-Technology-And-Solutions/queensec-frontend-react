import React from 'react';
import PropTypes from 'prop-types';
import './PageLayout.scss'; // Import the SCSS file

/**
 * PageLayout Component
 * A layout wrapper component that provides consistent page structure with header, main content, and footer.
 * 
 * @param {object} props - Component props.
 * @param {React.Node} props.children - The main content to display (required).
 * @param {React.Node} [props.header] - Optional header content.
 * @param {React.Node} [props.footer] - Optional footer content.
 * @param {boolean} [props.centered=false] - If true, centers the main content.
 */
const PageLayout = ({ children, header, footer, centered = false }) => {

    return (
        <div className="page-layout">
            {header && <header className="layout-header" role="banner">{header}</header>}
            <main className={"layout-content " + (centered ? "center" : "")} role="main">{children}</main>
            <footer className="layout-footer" role="contentinfo">
                {footer}
                <div className='powered'>
                    <p>Powered ⚡ by Queensec Global</p>
                </div>
            </footer>
        </div>
    );
};

PageLayout.propTypes = {
    children: PropTypes.node.isRequired,
    header: PropTypes.node,
    footer: PropTypes.node,
    centered: PropTypes.bool,
};

export default PageLayout;
