import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import QRCode from 'react-qr-code';
import coalpileIcon from '../Assets/coalpile.png';
import mineralIcon from '../Assets/mineral_icon.png';

const PaymentSuccessVendorScreen = () => {
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
                    text: `Payment of NGN{ amount }was successful! Pay ID: ${payId}`,
                    url: window.location.href,
                })

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
                <Row>
                    <Label1>User</Label1>
                    <Value1>Username</Value1>
                </Row>
                <Row>
                    <Label2>Hauler</Label2>
                    <Value2>Truck, Yamaha 201</Value2>
                </Row>
                <Row>
                    <Label3>Plate Number</Label3>
                    <Value3>1234TID</Value3>
                </Row>
                <Row>
                    <Label4>Date</Label4>
                    <Value4>{date}</Value4>
                </Row>
                <Row>
                    <Label5>Time</Label5>
                    <Value5>{time}</Value5>
                </Row>
                <Row>
                    <Label6>Pay ID</Label6>
                    <Value6>{payId}</Value6>
                </Row>

                {showQrCode && (
                    <QRCodeContainer>
                        <QRCode value={`${payId}`} size={150} bgColor="#f6f6f6" fgColor="#6C3ECF" />
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


const Row = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px; /* Reduced margin between rows */
`;
const Label1 = styled.p`
  color: #67728A;
  font-size: 12px;
  margin-right: 280px;
`;

const Value1 = styled.p`
  color: #67728A;
  font-weight: bold;
  font-size: 14px;2
  margin-left: 330px;
`;
const Label2 = styled.p`
  color: #67728A;
  font-size: 12px;
   margin-right: 145px;
`;

const Value2 = styled.p`
  color: #67728A;
  font-weight: bold;
  font-size: 14px;
   margin-left: 75px;
`;
const Label3 = styled.p`
  color: #67728A;
  font-size: 12px;
   margin-right: 249px;
`;

const Value3 = styled.p`
  color: #67728A;
  font-weight: bold;
  font-size: 14px;2
    margin-left: 305px;
`;
const Label4 = styled.p`
  color: #67728A;
  font-size: 12px;
   margin-right: 280px;
`;

const Value4 = styled.p`
  color: #67728A;
  font-weight: bold;
  font-size: 14px;2
   margin-left: 330px;
`;
const Label5 = styled.p`
  color: #67728A;
  font-size: 12px;
   margin-right: 280px;
`;

const Value5 = styled.p`
  color: #67728A;
  font-weight: bold;
  font-size: 14px;2
   margin-left: 330px;
`;
const Label6 = styled.p`
  color: #67728A;
  font-size: 12px;
   margin-right: 280px;
`;

const Value6 = styled.p`
  color: #67728A;
  font-weight: bold;
  font-size: 14px;2
   margin-left: 330px;
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

export default PaymentSuccessVendorScreen;
