import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useUser } from '../../../context/UserContext';
import QueensecLogo from '../../../assets/Queensec_1.png'; // Import the logo


const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;


const VFWScreenThreePaymentStatus = () => {
  const [loading, setLoading] = useState(true);
  const [newWalletBalance, setNewWalletBalance] = useState('');
  const [amount, setAmount] = useState('');
  const [taxId, setTaxId] = useState('');
  const [status, setStatus] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [transactionType, setTransactionType] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useUser();

  useEffect(() => {
    const fetchPaymentDetails = async () => {
      try {
        const queryParams = new URLSearchParams(location.search);
        const statusParam = queryParams.get('status');
        const txRefParam = queryParams.get('tx_ref');
        const transactionIdParam = queryParams.get('transaction_id');
        const token = localStorage.getItem('token');
        var responseData = {};


        if (statusParam && txRefParam) {
          const response = await axios.post(
            `${API_BASE_URL}/wallet/payment`,
            {
              status: statusParam,
              tx_ref: txRefParam,
              transaction_id: transactionIdParam || '',
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (response.status === 200) {
            responseData = response.data.data;
          }
          // const kindResponse = {
          //   "success": true,
          //   "message": "Payment Updated",
          //   "data": {
          //     "id": 7,
          //     "user_name": "Precious Chikezie",
          //     "payment_id": "KAD/RXM2334",
          //     "order_id": 8,
          //     "mineral_image": null,
          //     "mineral_name": "ANTIMONY ORE",
          //     "amount": "24000.00",
          //     "hauler": "N/A",
          //     "number_plate": "fortzi truck",
          //     "unit": "Ton",
          //     "status": "completed",
          //     "date": "2025-01-12T05:51:29.000000Z",
          //     "validated": false
          //   }
          // }

          // responseData = kindResponse.data;
        }


        if (statusParam === 'cancelled') {
          setStatus('cancelled');
        } else if (statusParam === 'successful') {
          setStatus('completed');
        } else {
          setStatus('failed');
        }

        debugger;
        setTaxId(responseData.wallet_id || '0');
        setNewWalletBalance(responseData.new_wallet_balance || '0');
        setAmount(responseData.amount || '0');
        setTransactionId(responseData.transaction_id || txRefParam || '');
        setTransactionType(responseData.transaction_type || '');
        setPaymentMethod(responseData.payment_method || '');
        setDate(new Date(responseData.date).toLocaleDateString()); // Replace with actual data.date
        setTime(new Date(responseData.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })); // Replace with actual data.date
      } catch (error) {
        console.error('Error fetching payment details:', error.response?.data || error.message);
        alert('Failed to retrieve payment details. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentDetails();
  }, [location]);

  // const handleShare = () => {
  //   if (navigator.share) {
  //     navigator
  //       .share({
  //         title: status === 'completed' ? 'Payment Successful' : 'Payment Cancelled',
  //         text: status === 'completed'
  //           ? `Payment of NGN ${amount} for ${mineralName} was successful! Pay ID: ${payId}`
  //           : `Payment was cancelled. Pay ID: ${payId}`,
  //         url: window.location.href,
  //       })
  //       .then(() => console.log('Successful share'))
  //       .catch((error) => console.log('Error sharing:', error));
  //   } else {
  //     alert('Sharing is not supported in your browser.');
  //   }
  // };

  const goToDashboard = () => {
    if (user?.accountType === 'federal_agency') {
      navigate('/enterprise-dashboard');
    } else if (user?.accountType === 'vendor') {
      navigate('/vendor-dashboard');
    } else if (user?.accountType === 'individual') {
      navigate('/dashboard');
    } else {
      console.warn('Unknown account type');
    }
  };

  if (loading) {
    return (
      <LoadingContainer>
        <Spinner />
        <LoadingText>Loading, please wait...</LoadingText>
      </LoadingContainer>
    );
  }

  return (
    <Container>

      <Centered>
        <Logo src={QueensecLogo} />
      </Centered>
      <Amount>NGN {parseInt(amount).toLocaleString() || '0'}</Amount>
      <Status>
        {status === 'completed'
          ? 'Payment Successful'
          : status === 'cancelled'
            ? 'Payment Cancelled'
            : 'Payment Failed'}
      </Status>
      <Details>
        <InfoRow>

          <DetailItem>
            <Label>New Balance</Label>             
          </DetailItem>

          <AmountContainer>
            <AmountToday>NGN {parseInt(amount).toLocaleString()}</AmountToday>
            <DateText>{date}</DateText>
          </AmountContainer>
        </InfoRow>
        <DetailItem>
          <Label>Wallet ID</Label>
          <Value>{taxId}</Value>
        </DetailItem>
        <DetailItem>
          <Label>Payment Method</Label>
          <Value>{paymentMethod}</Value>
        </DetailItem>
        <DetailItem>
          <Label1>Transaction ID </Label1>
          <Value>{transactionId}</Value>
        </DetailItem>
        <DetailItem>
          <Label>Transaction Type</Label>
          <Value>{transactionType}</Value>
        </DetailItem>
        <DetailItem>
          <Label>Date</Label>
          <Value>{date}</Value>
        </DetailItem>
        <DetailItem>
          <Label>Time</Label>
          <Value>{time}</Value>
        </DetailItem>
      </Details>
      {/* <ShareButton onClick={handleShare}>Share</ShareButton> */}
      <BackButton onClick={goToDashboard}>Return to Dashboard</BackButton>
    </Container>
  );
};

const Centered = styled.div`
  text-align:center;
`;

const Logo = styled.img`

  width: 100px;
  margin-bottom: 20px;
  margin-left : -280px;
  // padding-left: 100px;
`;

// Styled Components
const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f6f6f6;
`;

const Spinner = styled.div`
  border: 5px solid #f3f3f3;
  border-top: 5px solid #6c3ecf;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingText = styled.p`
  font-size: 16px;
  color: #6c3ecf;
  margin-top: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #F7F9FA;
  height: 100%;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 30px;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const Amount = styled.h1`
  font-size: 24px;
  color: #6C3ECF;
  font-weight: bold;
`;

const Label = styled.p`
  color: #67728A;
  font-size: 12px;
  font-weight: 500; 
  line-height: 20px;
  text-align: left;
  flex: 1; /* Takes up available space on the left */
  margin: 0;
`;

const Label1 = styled(Label)`
  margin-right: 0; /* Use the same style, but remove any additional margin */
`;

const Value = styled.p`
  color: #67728A;
  font-size: 14px;
  font-weight: bold; 
  line-height: 20px;
  text-align: right;
  flex: 1; /* Takes up available space on the right */
  margin: 0;
  word-wrap: break-word; /* Ensure long text wraps if necessary */
`;

const AmountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: auto;
  margin-top: -6px;
`;

const AmountToday = styled.p`
  color: #f28500;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 4.5px;
`;

const DateText = styled.p`
  font-size: 14px;
  color: #67728A;
  font-weight: 500; 
  line-height: 20px;
  margin: 0;
  margin-bottom:  10px;
`;

const Status = styled.p`
  color:#414D63;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;

`;

const UserIcon = styled.div`
  background-color: #fde5c0;
  color: #f28500;
  font-weight: bold;
  border-radius: 35%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
    margin-top: 4px;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.p`
  color: #333;
  font-weight: bold;
  font-size: 14px;
  margin-bottom: -5px;
`;

const UserPayId = styled.p`
  color: #666;
  font-size: 12px;
`;


const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px; /* Add spacing between items */
`;

const ShareButton = styled.button`
  background-color: #fde5c0;
  color: #f28500;
  padding: 12px 24px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 50px;
`;

const BackButton = styled.button`
  color: #414D63; 
  font-size: 11px;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
`;

export default VFWScreenThreePaymentStatus;