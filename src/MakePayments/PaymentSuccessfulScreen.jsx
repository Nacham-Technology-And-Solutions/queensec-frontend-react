import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import QRCode from 'react-qr-code';
import coalpileIcon from '../Assets/coalpile.png';
import mineralIcon from '../Assets/mineral_icon.png';

const PaymentSuccessScreen = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { amount } = location.state || { amount: '0' };
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [payId, setPayId] = useState('');
    const [showQrCode, setShowQrCode] = useState(true);

    useEffect(() => {
        // Set current date and time
        const currentDate = new Date();
        setDate(currentDate.toLocaleDateString());
        setTime(currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit',  hour12: true }));

        // Generate Pay ID in the specified format
        const randomNumber = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
        const formattedPayId = `Nas/00${randomNumber.slice(-2)}`;
        setPayId(formattedPayId);
    }, []);

    const handleShare = () => {
        if (navigator.share) {
            navigator
                .share({
                    title: 'Payment Successful',
                    text: `Payment of NGN 21,000 was successful! Pay ID: ${payId}`,
                    url: window.location.href,
                })
                .then(() => console.log('Successful share'))
                .catch((error) => console.log('Error sharing:', error));
        } else {
            alert('Sharing is not supported in your browser.');
        }
    };

    return (
        <Container>
            <Icon src={coalpileIcon} alt="Coalpile Icon" />
            <Amount>NGN {parseInt(amount).toLocaleString()}</Amount>
            <Status>Payment Successful</Status>
            <Details>
                <InfoRow>
                    <UserInfo>
                        <UserIcon>CL</UserIcon>
                        <UserDetails>
                            <UserName>Clay</UserName>
                            <UserPayId>{payId}</UserPayId>
                        </UserDetails>
                    </UserInfo>
                    <AmountContainer>
                        <AmountToday>NGN {parseInt(amount).toLocaleString()}</AmountToday>
                        <DateText>Today</DateText>
                    </AmountContainer>
                </InfoRow>
                <DateTimeRow>
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
                </DateTimeRow>
                {showQrCode && (
                    <QRCodeContainer>
                        <QRCode value={`Payment ID: ${payId}`} size={150} bgColor="#f6f6f6" fgColor="#6C3ECF" />
                    </QRCodeContainer>
                )}
            </Details>
            <ShareButton onClick={handleShare}>Share</ShareButton>
            <BackButton onClick={() => navigate('./Dashbaord')}>Return to Dashboard</BackButton>
        </Container>
    );
};

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #F7F9FA;
  height: 100vh;
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

const Label = styled.p`
  color: #67728A;
  font-size: 12px;
`;

const Value = styled.p`
  color: #67728A;
  font-weight: bold;
  font-size: 14px;
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
  font-family: Ubuntu, sans-serif;
  font-size: 11px;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
`;

export default PaymentSuccessScreen;
