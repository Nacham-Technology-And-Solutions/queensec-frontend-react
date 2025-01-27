
import React from 'react';
import './PageLayout.scss'; // Import the SCSS file
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const PageLayout = ({ children, header, footer, centered = false }) => {

    return (
        <div className="page-layout">
            {/* <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            /> */}

            {header && <header className="layout-header">{header}</header>}
            <main className={"layout-content " + (centered ? "center" : "")}>{children}</main>
            <footer className="layout-footer">
                {footer}
                <div className='powered'>
                    <p>Powered ⚡ by Queensec Global</p>
                </div>
            </footer>
        </div>
    );
};

export default PageLayout;
