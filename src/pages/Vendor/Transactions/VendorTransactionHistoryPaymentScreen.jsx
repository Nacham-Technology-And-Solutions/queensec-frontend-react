import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useUser } from '../../../context/UserContext';
import QueensecLogo from '../../../assets/Queensec_1.png'; // Import the logo

import LeftIcon from '../../../assets/left.png';


import { getToken } from '../../../utils/tokenStorage';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;


const VendorTransactionHistoryPaymentScreen = () => {

  const { user } = useUser();
  const location = useLocation();
  const navigate = useNavigate();
  const { transactionItem } = location.state || {};

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

  useEffect(() => {
    const fetchPaymentDetails = async () => {
      try {
        const token = getToken();
        var responseData = {};

        const orderResponse = await axios.post(`${API_BASE_URL}/wallet/transaction-pay-history`, { 'transaction_id': transactionItem.payment.payment_ref }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (orderResponse.status === 200) {
          if (orderResponse.data.success) {
            const responseData = orderResponse.data.data;


            if (transactionItem.status === 'COMPLETED') {
              setStatus('Payment Successful');
            } else if (transactionItem.status === 'PENDING') {
              setStatus('Payment Pending');
            } else {
              setStatus('Payment Failed');
            }

            setTaxId(responseData.wallet_id || '0');
            setNewWalletBalance(responseData.new_wallet_balance || 'XXXX');
            setAmount(responseData.amount || '0');
            setTransactionId(responseData.transaction_id || '');
            setTransactionType(responseData.transaction_type || '');
            setPaymentMethod(responseData.payment_method || '');
            setDate(new Date(responseData.date).toLocaleDateString()); // Replace with actual data.date
            setTime(new Date(responseData.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })); // Replace with actual data.date
          }
        }




      } catch (error) {
        console.error('Error fetching payment details:', error.response?.data || error.message);
        alert('Failed to retrieve payment details. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentDetails();
  }, [location]);
 
  
  const handleBack = () => {
    navigate('/vendor-transactions');
  }

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

      <TopBar>
        <BackIcon src={LeftIcon} onClick={handleBack} />
        <Title>Transaction</Title>
      </TopBar>

      <Logo src={QueensecLogo} />
      <Amount>NGN {parseInt(amount).toLocaleString() || '0'}</Amount>
      <Status>
        {status}
      </Status>
      <Details>
        <InfoRow>

          <DetailItem>
            <Label>New Balance</Label>
            <Value>{newWalletBalance}</Value>
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



const TopBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

const BackIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-right: 15px;
`;

const Title = styled.h1`
  color: #6C3ECF;
  
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0.38px;
  text-align: left;
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
 
const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px; /* Add spacing between items */
`;
 
const BackButton = styled.button`
  color: #414D63; 
  font-size: 11px;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
`;

export default VendorTransactionHistoryPaymentScreen;