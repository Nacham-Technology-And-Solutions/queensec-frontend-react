import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

const MPScreenPaymentStatus = () => {
    const [searchParams] = useSearchParams();

    const { user } = useUser(); // Access user from context
    const navigate = useNavigate();

    React.useEffect(() => {
        // Convert the entire searchParams object to a string, e.g. "tx_ref=123&status=success&accountType=vendor"
        const queryString = searchParams.toString();

        navigate(`/mp-five-payment-status?${queryString}`, { replace: true });
        // if (user?.accountType === 'federal_agency') {
            
        //     navigate(`/mp-five-payment-status?${queryString}`, { replace: true });

        // } else if (user?.accountType === 'vendor') {

        //     navigate(`/vendor-mp-five-payment-status?${queryString}`, { replace: true });

        // } else if (user?.accountType === 'individual') {

        //     navigate(`/mp-five-payment-status?${queryString}`, { replace: true });
        // }

    }, [user, searchParams, navigate]);

    return <div>Redirecting based on account type...</div>;
};

export default MPScreenPaymentStatus;
