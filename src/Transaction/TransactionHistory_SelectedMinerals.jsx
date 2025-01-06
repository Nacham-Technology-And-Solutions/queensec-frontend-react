import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import QRCode from 'react-qr-code';
import coalpileIcon from '../assets/coalpile.png';
import mineralIcon from '../assets/mineral_icon.png';
import LeftIcon from '../assets/left.png';
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const TransactionHistory_MineralScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { transactionId, mineralName } = location.state || {};
  const [loading, setLoading] = useState(true);
  const [transaction, setTransaction] = useState(null);

  useEffect(() => {
    const fetchTransactionDetails = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/get-transaction-by-id`, {
          params: {
            order_id: transactionId, // Pass transactionId as a query parameter
          }, headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Retrieve the token from local storage
          },
        });
        setTransaction(response.data.data);

      } catch (error) {
        console.error('Error fetching transaction details:', error);
        alert('Failed to fetch transaction details.');
      } finally {
        setLoading(false);
      }
    };

    if (transactionId) {
      fetchTransactionDetails();
    }
  }, [transactionId]);

  if (loading) {
    return (
      <Container>
        <p>Loading transaction details...</p>
      </Container>
    );
  }

  if (!transaction) {
    return (
      <Container>
        <p>No transaction details available.</p>
      </Container>
    );
  }
  const handleContinuePayment = () => {
    if (transaction.payment_link) {
      window.location.href = transaction.payment_link;
    }
  };


  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: 'Transaction Details',
          text: `Details for ${transaction.mineral_name}: Amount ₦${transaction.amount}, Status: ${transaction.status}`,
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      alert('Sharing is not supported in your browser.');
    }
  };
  // const goToDashboard = () => {
  //   if (user?.accountType === 'federal_agency') {
  //     navigate('/Enterprise-Dashboard');
  //   } else if (user?.accountType === 'vendor') {
  //     navigate('/Vendors-Dashboard');
  //   } else if (user?.accountType === 'individual') {
  //     navigate('/dashboard-page');
  //   } else {
  //     console.warn('Unknown account type');
  //   }
  // };

  return (
    <Container>
      <BackIcon src={LeftIcon} alt="Back" onClick={() => navigate(-1)} />
      <StyledMineralName>{mineralName}</StyledMineralName>
      <Icon src={coalpileIcon} alt="Coalpile Icon" />

      <Amount>NGN {parseFloat(transaction.amount).toLocaleString()}</Amount>
      <Status style={{ color: transaction.status === 'completed' ? '#39e600' : '#cc3300' }}>
        {transaction.status === 'completed' ? 'Payment Successful' : 'Payment Pending'}
      </Status>
      <Details>
        <InfoRow>
                    <UserInfo>
                        <UserIcon>CL</UserIcon>
                        <UserDetails>
                            <UserName>{mineralName}</UserName>
                            <UserPayId>{transaction.payment_id}</UserPayId>
                        </UserDetails>
                    </UserInfo>
                    <AmountContainer>
                        <AmountToday>NGN {parseInt(transaction.amount).toLocaleString()}</AmountToday>
                        <DateText>{new Date(transaction.date).toLocaleDateString()}</DateText>
                    </AmountContainer>
                </InfoRow>
          <DetailItem>
            <Label>Date</Label>
            <Value>{new Date(transaction.date).toLocaleDateString()}</Value>
          </DetailItem>
          <DetailItem>
            <Label>Time</Label>
            <Value>{new Date(transaction.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</Value>
          </DetailItem>
          <DetailItem>
            <Label>Mineral</Label>
            <Value>{transaction.mineral_name}</Value>
          </DetailItem>
          <DetailItem>
            <Label>Amount</Label>
            <Value>₦{parseFloat(transaction.amount).toLocaleString()}</Value>
          </DetailItem>
          <DetailItem>
            <Label>Status</Label>
            <Value>{transaction.status}</Value>
          </DetailItem>
    
      </Details>
      <QRCodeContainer>
        <QRCode value={`${transaction.payment_id}`} size={150} bgColor="#f6f6f6" fgColor="#6C3ECF" />
      </QRCodeContainer>

      {transaction.payment_link && (
        <ContinueButton onClick={handleContinuePayment}>
          Continue Payment
        </ContinueButton>
      )}



      <ShareButton onClick={handleShare}>Share</ShareButton>

    </Container>
  );
};

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #F7F9FA;
  height: 100%;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 30px;
  box-sizing: border-box;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin-bottom: 10px;
`;

const BackIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-right: 300px;
  margin-top: 20px;
  align-item: left;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const StyledMineralName = styled.span`
  font-family: Ubuntu, sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  color: #6C3ECF;
  margin-bottom: 30px;
  margin-top: -30px;
  margin-right: 80px;

`;

const Amount = styled.h1`
  font-size: 24px;
  color: #421B73;
  font-weight: bold;
`;

const Status = styled.p`
  color: #414D63;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
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


const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px; /* Add spacing between items */
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Label = styled.p`
  color: #67728A;
  font-size: 12px;
  font-weight: 500;
  font-family: Ubuntu, sans-serif;
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
  font-family: Ubuntu, sans-serif;
  line-height: 20px;
  text-align: right;
  flex: 1; /* Takes up available space on the right */
  margin: 0;
  word-wrap: break-word; /* Ensure long text wraps if necessary */
`;

const QRCodeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
    margin-top: -20x;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 10px;
  margin-top: auto;
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

const ContinueButton = styled.button`
  background-color: #ede5h1;
  color: #e28591;
  padding: 12px 24px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 50px;
`;

// const BackButton = styled.button`
//   color: #414D63;
//   font-family: Ubuntu, sans-serif;
//   font-size: 11px;
//   font-weight: 500;
//   background: none;
//   border: none;
//   cursor: pointer;
// `;

// const BackButton = styled.button`
//   color: #414D63;
//   font-family: Ubuntu, sans-serif;
//   font-size: 12px;
//   font-weight: 500;
//   background: none;
//   border: none;
//   cursor: pointer;
//   margin-top: -0.5px;
// `;

export default TransactionHistory_MineralScreen;;
