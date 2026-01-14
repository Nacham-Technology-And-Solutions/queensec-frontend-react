import React from 'react';
import PropTypes from 'prop-types';
import './PaymentNavIndicator.scss'; // Import the SCSS file 

/**
 * PaymentNavIndicator Component
 * A navigation indicator component showing the current step in the payment process.
 * 
 * @param {object} props - Component props.
 * @param {number} [props.currentPage=1] - The current page/step in the payment flow (1-4).
 */
const PaymentNavIndicator = ({ currentPage = 1 }) => {
    const steps = [
        { number: 1, label: 'Vehicle' },
        { number: 2, label: 'Trip Data' },
        { number: 3, label: 'Category' },
        { number: 4, label: 'Bank Details' },
    ];

    return (
        <nav className="payment-nav-indicator" role="navigation" aria-label="Payment process steps">
            {steps.map((step) => (
                <div
                    key={step.number}
                    className={currentPage >= step.number ? "passed" : ""}
                    aria-current={currentPage === step.number ? "step" : undefined}
                    role="listitem"
                >
                    {step.label}
                </div>
            ))}
        </nav>
    );
};

PaymentNavIndicator.propTypes = {
    currentPage: PropTypes.number,
};

export default PaymentNavIndicator;
