
import React from 'react';
import './PageLayout.scss'; // Import the SCSS file

const PageLayout = ({ children, header, footer }) => {

    return (
        <div className="page-layout">
            {header && <header className="layout-header">{header}</header>}
            <main className="layout-content">{children}</main>
            {footer && <footer className="layout-footer">{footer}</footer>}
        </div>
    );
};

export default PageLayout;
