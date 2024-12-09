import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import QRCode from 'react-qr-code';
import coalpileIcon from '../Assets/coalpile.png';
import mineralIcon from '../Assets/mineral_icon.png';
import axios from 'axios';
import { useUser } from '../UserContext';
const PaymentSuccessScreen = () => {
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState('');
  const [payId, setPayId] = useState('');
  const [userName, setUserName] = useState('');
  const [hauler, setHauler] = useState('');
  const [numberPlate, setNumberPlate] = useState('');
  const [mineralName, setMineralName] = useState('');
  const [status, setStatus] = useState('');
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

        if (statusParam && txRefParam && transactionIdParam) {
          const response = await axios.post(`${API_BASE_URL}/payments`, {
            status: statusParam,
            tx_ref: txRefParam,
            transaction_id: transactionIdParam,
          });

          const data = response.data.data;

          setAmount(data.amount || '0');
          setPayId(data.payment_id || '');
          setUserName(data.user_name || '');
          setHauler(data.hauler || '');
          setNumberPlate(data.number_plate || '');
          setMineralName(data.mineral_name || '');
          setStatus(data.status || '');
          setDate(new Date(data.date).toLocaleDateString() || '');
          setTime(new Date(data.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }) || '');
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

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: 'Payment Successful',
          text: `Payment of NGN ${amount} for ${mineralName} was successful! Pay ID: ${payId}`,
          url: window.location.href,
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing:', error));
    } else {
      alert('Sharing is not supported in your browser.');
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
    const goToDashboard = () => {
      if (user?.accountType === 'federal_agency') {
        navigate('/Enterprise-Dashboard');
      } else if (user?.accountType === 'vendor') {
        navigate('/Vendors-Dashboard');
      } else if (user?.accountType === 'individual') {
        navigate('/dashboard-page');
      } else {
        console.warn('Unknown account type');
      }
    };

    return (
      <Container>
        <Icon src={coalpileIcon} alt="Coalpile Icon" />
        <Amount>NGN {parseInt(amount).toLocaleString() || '0'}</Amount>
        <Status>{status === 'completed' ? 'Payment Successful' : 'Payment Failed'}</Status>
        <Details>
        <InfoRow>
                    <UserInfo>
                        <UserIcon>CL</UserIcon>
                        <UserDetails>
                            <UserName>{mineralName}</UserName>
                            <UserPayId>{payId}</UserPayId>
                        </UserDetails>
                    </UserInfo>
                    <AmountContainer>
                        <AmountToday>NGN {parseInt(amount).toLocaleString()}</AmountToday>
                        <DateText>Today</DateText>
                    </AmountContainer>
                </InfoRow>
          <DetailItem>
            <Label>User</Label>
            <Value>{userName}</Value>
          </DetailItem>
          <DetailItem>
            <Label>Hauler</Label>
            <Value>{hauler}</Value>
          </DetailItem>
          <DetailItem>
            <Label1>Number Plate </Label1>
            <Value>{numberPlate}</Value>
          </DetailItem>
          <DetailItem>
            <Label>Mineral</Label>
            <Value>{mineralName}</Value>
          </DetailItem>
          <DetailItem>
            <Label>Date</Label>
            <Value>{date}</Value>
          </DetailItem>
          <DetailItem>
            <Label>Time</Label>
            <Value>{time}</Value>
          </DetailItem>
          <DetailItem>
            <Label>Pay ID</Label>
            <Value>{payId}</Value>
          </DetailItem>
        </Details>
        <QRCodeContainer>
          <QRCode value={`Payment ID: ${payId}`} size={150} bgColor="#f6f6f6" fgColor="#6C3ECF" />
        </QRCodeContainer>
        <ShareButton onClick={handleShare}>Share</ShareButton>
        <BackButton onClick={goToDashboard}>Return to Dashboard</BackButton>
      </Container>
    );
  };
  

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
  font-family: Ubuntu, sans-serif;
  line-height: 20px;
  text-align: left;
  margin-right: 335px; 
`;
const Label1 = styled.p`
  color: #67728A;
  font-size: 12px;
  font-weight: 500;
  font-family: Ubuntu, sans-serif;
  line-height: 20px;
  text-align: left;
  margin-right: 310px; 
`;

const Value = styled.p`
  color: #67728A;
  font-size: 14px;
  font-weight: bold;
  font-family: Ubuntu, sans-serif;
  line-height: 20px;
  text-align: right;
  margin-left: 335; /* Align values to the right */
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
  font-family: Ubuntu, sans-serif;
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

const DateTimeRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;

const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

// const Label = styled.p`
//   color: #67728A;
//   font-size: 12px;
  
// `;

// const Value = styled.p`
//   color: #67728A;
//   font-weight: bold;
//   font-size: 14px;
// `;

const QRCodeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
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
  font-family: Ubuntu, sans-serif;
  font-size: 11px;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
`;

export default PaymentSuccessScreen;
