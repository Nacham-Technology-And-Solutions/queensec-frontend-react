import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import QRCode from 'react-qr-code';
import coalpileIcon from '../../../assets/coalpile.png';
import axios from 'axios';
import { useUser } from '../../../context/UserContext';

import LeftIcon from '../../../assets/left.png';


import { getToken } from '../../../utils/tokenStorage';
import { getValidatorUrl } from '../../../utils/urlUtils';
import { logger } from '../../../utils/logger';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;


const VendorTicketStatusByTicketId = () => {

  // const [searchParams] = useSearchParams();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const ticketIdParam = queryParams.get('ticket_id');


  const [loading, setLoading] = useState(true);
  const [userName] = useState('');
  const [scanned, setScanned] = useState('0');
  const navigate = useNavigate();
  const { user } = useUser();

  const token = getToken();

  const [status, setStatus] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [amount, setAmount] = useState('');
  const [haulerTypeName, setHaulerTypeName] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [numberPlate, setNumberPlate] = useState('');
  const [mineralName, setMineralName] = useState('');
  const [mineralSymbol, setMineralSymbol] = useState('XL');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [ticketId, setTicketId] = useState('');

  useEffect(() => {
    const fetchPaymentDetails = async () => {

      try {
        const orderResponse = await axios.post(`${API_BASE_URL}/wallet/ticket-status`, { 'ticket_id': ticketIdParam }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (orderResponse.status === 200) {
          if (orderResponse.data.success) {
            const responseData = orderResponse.data.data;

            setAmount(responseData.amount || '0');
            setHaulerTypeName(responseData.hauler_type_name || '');
            setTransactionId(responseData.wallet_transaction_id || '');
            setNumberPlate(responseData.number_plate || '');
            setMineralName(responseData.mineral_name || '');
            setMineralSymbol(responseData.mineral_symbol || '');
            setDate(new Date(responseData.date).toLocaleDateString());
            setTime(new Date(responseData.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })); // Replace with actual data.date 
            setTicketId(responseData.ticket_id || '');
            setStatus(responseData.status || '');
            setStatusMessage(responseData.status_message || '');
            setScanned(responseData.scanned || '');
          }
        }


      } catch (error) {
        logger.error('Error fetching ticket details', error, 'VendorTicketStatusByTicketId');
      } finally {
        setLoading(false);
      }
    }

    fetchPaymentDetails();
  }, [ticketIdParam, token]);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: status,
          text: statusMessage,
          url: window.location.href,
        })
        .then(() => logger.log('Successful share'))
        .catch((error) => logger.error('Error sharing', error, 'VendorTicketStatusByTicketId'));
    } else {
      alert('Sharing is not supported in your browser.');
    }
  };

  const handleBack = () => {

    navigate('/validator');
  }

  const goToDashboard = () => {
    if (user?.accountType === 'federal_agency') {
      navigate('/enterprise-dashboard');
    } else if (user?.accountType === 'vendor') {
      navigate('/vendor-dashboard');
    } else if (user?.accountType === 'individual') {
      navigate('/dashboard');
    } else {
      logger.warn('Unknown account type');
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
        <Title>Ticket Status By Ticket ID</Title>
      </TopBar>


      {(transactionId === '') && (<p>No Ticket Found</p>)}
      {(transactionId !== '') && (<>



        <Icon src={coalpileIcon} alt="Coalpile Icon" />
        <Amount>NGN {parseInt(amount).toLocaleString() || '0'}</Amount>
        <Status>
          {status}
        </Status>
        <Details>
          <InfoRow>
            <UserInfo>
              <UserIcon>{mineralSymbol}</UserIcon>
              <UserDetails>
                <UserName>{mineralName}</UserName>
                <UserPayId>{transactionId}</UserPayId>
              </UserDetails>
            </UserInfo>
            <AmountContainer>
              <AmountToday>NGN {parseInt(amount).toLocaleString()}</AmountToday>
              <DateText>{date}</DateText>
            </AmountContainer>
          </InfoRow>
          <DetailItem>
            <Label>User</Label>
            <Value>{userName}</Value>
          </DetailItem>
          <DetailItem>
            <Label>Vehicle Type</Label>
            <Value>{haulerTypeName}</Value>
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
            <Label>Ticket ID</Label>
            <Value>{ticketId}</Value>
          </DetailItem>
        </Details>
        <QRCodeContainer>
          <QRCode value={getValidatorUrl(ticketId)} size={150} bgColor="#f6f6f6" fgColor="#6C3ECF" />
          {/* <QRCode value={`${ticketId}`} size={150} bgColor="#f6f6f6" fgColor="#6C3ECF" /> */}
        </QRCodeContainer>
        <ShareButton onClick={handleShare}>Share</ShareButton>
        <BackButton onClick={goToDashboard}>Go to Dashboard</BackButton>
      </>)}

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
  font-size: 11px;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
`;

export default VendorTicketStatusByTicketId;
