import React from 'react';
import './PaymentNavIndicator.scss'; // Import the SCSS file 

const PaymentNavIndicator = ({ currentPage = 1, }) => {
    return (
        <div class="payment-nav-indicator">
            <div class={ currentPage >= 1 ? "passed" : ""}>Vehicle</div>
            <div class={ currentPage >= 2 ? "passed" : ""}>Trip Data</div>
            <div class={ currentPage >= 3 ? "passed" : ""}>Category</div>
            <div class={ currentPage >= 4 ? "passed" : ""}>Bank Details</div>
        </div>
    );
};

export default PaymentNavIndicator;
