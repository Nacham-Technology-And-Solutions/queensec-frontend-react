import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import QRCode from 'react-qr-code';
import coalpileIcon from '../../../assets/coalpile.png'; 
import axios from 'axios';
import { useUser } from '../../../context/UserContext';


const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;


const VITScreenFourSuccess = () => {
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
        const token = localStorage.getItem('token');
        var responseData = {};


        if (statusParam && txRefParam) {
          const response = await axios.post(
            `${API_BASE_URL}/payments`,
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
          // const kindResponse =  {
            //     "success": true,
            //     "message": "Ticket Issued.",
            //     "data": {
            //         "payer_id": 1,
            //         "mineral_id": 1,
            //         "fee_category_id": 2,
            //         "amount": "360000.00",
            //         "status": "completed",
            //         "updated_at": "2025-05-29T05:07:18.000000Z",
            //         "created_at": "2025-05-29T05:07:18.000000Z",
            //         "id": 9,
            //         "transaction_id": 9,
            //         "ticket_id": 8,
            //         "mineral": {
            //             "id": 1,
            //             "name": "ANTIMONY ORE",
            //             "advalorem": "3",
            //             "market_value": "200000.00",
            //             "royalty_rate": "6000.00",
            //             "measurement_unit": "TON",
            //             "description": "180000 SMALL TRUCK \\/ 360000 BIG TRUCK",
            //             "img": null,
            //             "active": "1",
            //             "deleted_at": null,
            //             "created_at": "2025-05-29T04:50:37.000000Z",
            //             "updated_at": "2025-05-29T04:50:37.000000Z"
            //         },
            //         "transaction": {
            //             "id": 9,
            //             "wallet_id": "1",
            //             "type": "FEE_PAYMENT",
            //             "amount": "-360000",
            //             "status": "COMPLETED",
            //             "related_order_id": null,
            //             "metadata": {
            //                 "wallet_order_id": 9
            //             },
            //             "deleted_at": null,
            //             "created_at": "2025-05-29T05:07:18.000000Z",
            //             "updated_at": "2025-05-29T05:07:18.000000Z"
            //         },
            //         "ticket": {
            //             "id": 8,
            //             "price": "360000.00",
            //             "orderable_type": "App\\Models\\WalletTicketOrder",
            //             "orderable_id": "9",
            //             "vehicle_owner_id": null,
            //             "status": "active",
            //             "valid_from": "2025-05-29",
            //             "valid_until": "2025-06-05",
            //             "enforcer_check_status": "not_checked",
            //             "deleted_at": null,
            //             "created_at": "2025-05-29T05:07:18.000000Z",
            //             "updated_at": "2025-05-29T05:07:18.000000Z"
            //         },
            //         "trip_data": {
            //             "id": 9,
            //             "orderable_type": "App\\Models\\WalletTicketOrder",
            //             "orderable_id": "9",
            //             "driver_name": "null",
            //             "phone_number": "null",
            //             "number_plate": "X12X",
            //             "hauler_type_id": "2",
            //             "loading_point": "null",
            //             "offloading_point": "null",
            //             "deleted_at": null,
            //             "created_at": "2025-05-29T05:07:18.000000Z",
            //             "updated_at": "2025-05-29T05:07:18.000000Z"
            //         }
            //     }
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
        setAmount(responseData.amount || '0'); // Replace with actual data.amount from backend if available
        setPayId(responseData.payment_id || txRefParam || '');
        setUserName(responseData.user_name || ''); // Replace with actual data.user_name
        setHauler(responseData.hauler || ''); // Replace with actual data.hauler
        setNumberPlate(responseData.number_plate || ''); // Replace with actual data.number_plate
        setMineralName(responseData.mineral_name || ''); // Replace with actual data.mineral_name
        setDate(new Date(responseData.date).toLocaleDateString()); // Replace with actual data.date
        setTime(new Date(responseData.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })); // Replace with actual data.date
        // setDate(new Date().toLocaleDateString()); // Replace with actual data.date
        // setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })); // Replace with actual data.date
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
          title: status === 'completed' ? 'Payment Successful' : 'Payment Cancelled',
          text: status === 'completed'
            ? `Payment of NGN ${amount} for ${mineralName} was successful! Pay ID: ${payId}`
            : `Payment was cancelled. Pay ID: ${payId}`,
          url: window.location.href,
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing:', error));
    } else {
      alert('Sharing is not supported in your browser.');
    }
  };

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
      <Icon src={coalpileIcon} alt="Coalpile Icon" />
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
          <UserInfo>
            <UserIcon>CL</UserIcon>
            <UserDetails>
              <UserName>{mineralName}</UserName>
              <UserPayId>{payId}</UserPayId>
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
        <QRCode value={`${payId}`} size={150} bgColor="#f6f6f6" fgColor="#6C3ECF" />
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

export default VITScreenFourSuccess;
