import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LeftIcon from '../Assets/left.png';
import MiniDashboardIcon from '../Assets/MINI_DB.png';
import VisaIcon from '../Assets/Visa.png';
import MasterCardIcon from '../Assets/mastercard.png';
import PayUIcon from '../Assets/payu.png';
import axios from 'axios';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

const MP_BankDetailsVendorScreen = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('Username');
    const [truckInfo, setTruckInfo] = useState('Truck, Yamaha 201'); // Example truck info
    const [plateNumber, setPlateNumber] = useState('1234TID'); // Example plate number
    const [categories, setCategories] = useState([]);
    const [amount] = useState(() => {
      const savedAmount = localStorage.getItem('selectedCategoryPrice');
      return savedAmount || '0';
    });
  // const user = localStorage.getItem('savedUser')
  const [loading, setLoading] = useState(false);
  const initiatePayment = async () => {
    if (loading) return; // Prevent multiple execution if already loading

    setLoading(true); // Set loading to true when the process starts

    try {
      const savedUser = JSON.parse(localStorage.getItem('savedUser'));
        // Retrieve required data from localStorage
        const token = localStorage.getItem('token');
        const payerId = localStorage.getItem('payer_id');
        const haulerId = savedUser?.haulerId;

        const mineralId = localStorage.getItem('mineral_id');
        const mineralSubId = localStorage.getItem('mineral_sub_id');
        const payee_id = localStorage.getItem('payee_id');
        const parsedAmount = parseFloat(localStorage.getItem('selectedCategoryPrice').replace('NGN', '').replace(',', '').trim());

  
        if (!token || !payerId || !haulerId || !mineralId || !mineralSubId || isNaN(amount)) {
          throw new Error('Missing or invalid payment parameters.');
        }
    
        // Make the payment initiation request
        const response = await axios.post(`${API_BASE_URL}/orders`, {
          payer_id: payerId,
          payee_id: payee_id,
          payee_hauler_id: haulerId,
          mineral_id: mineralId,
          mineral_sub_id: mineralSubId,
          total_amount: parsedAmount.toFixed(2),
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
    
        const paymentLink = response.data?.data?.payment_link;
        if (!paymentLink) {
          throw new Error('Payment link not provided by the backend.');
        }
    
        // Redirect to the payment link
        window.location.href = paymentLink;
      } catch (error) {
        console.error('Error initiating payment:', error);
        alert('Failed to initiate payment. Please try again.');
      }finally {
        setLoading(false); // Reset loading state on success or error
      }
    };
    

  const handleBack = () => {
    navigate('/Vendor-Category-MakePayment-Screen');
  };

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('savedUser'));
    if (savedUser) {
      setUsername(savedUser.username || 'Username');
      setTruckInfo(savedUser.selectedHauler || 'Truck Info');
      setPlateNumber(savedUser.numberPlate || 'Plate Number');
     
    }
  }, []);
  
  // const handlePayNow = () => {
  //   // Pass the amount as state to PaymentSuccessScreen
  //   navigate('MP_PaymentSuccessScreen', { state: { amount } });
  // };
 
  return (
    <Container>
      <TopBar>
        <BackIcon src={LeftIcon} onClick={handleBack} />
        <Title>Make Payment</Title>
      </TopBar>

      <TabContainer>
        <Tab active>User</Tab>
        <Tab active>Category</Tab>
        <Tab active>Bank details</Tab>
      </TabContainer>

      <MiniDashboard>
        <MiniDashboardIconStyled src={MiniDashboardIcon} />
              <DashboardText>
              <InfoColumn>
             <Label1>User:</Label1>
             <Value1>{username}</Value1>
        </InfoColumn>
          <InfoColumnLeft>
            <Label>Hauler</Label>
            <ValueBold>{truckInfo}</ValueBold>
            <Label0>Plate Number:</Label0>
            <Value0>{plateNumber}</Value0>
          </InfoColumnLeft>
        </DashboardText>
      </MiniDashboard>

      <AmountContainer>
        <AmountLabel>Amount</AmountLabel>
        <AmountInput
        type="text"
        value={amount}
        readOnly
        placeholder="Amount not available"
        />
      </AmountContainer>

      <PaymentMethodTitle>Add Payment Method</PaymentMethodTitle>
      <PaymentMethods>
        <PaymentMethod>
          <PaymentMethodText>Debit or credit card</PaymentMethodText>
          <PaymentIcons>
            <PaymentIcon src={MasterCardIcon} alt="MasterCard" />
            <PaymentIcon src={VisaIcon} alt="Visa" />
          </PaymentIcons>
        </PaymentMethod>
        <PaymentMethod>
          <PaymentMethodText>Naira Payment with MasterCard/Visa</PaymentMethodText>
          <PaymentIcons>
            <PaymentIcon1 src={PayUIcon} alt="PayU" />
          </PaymentIcons>
        </PaymentMethod>
      </PaymentMethods>

      <PayNowButton onClick={initiatePayment} disabled={loading}>
        {loading ? 'Processing...' : 'Pay Now'}
      </PayNowButton>
    </Container>
  );
};

// Styled Components

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f6f6f6;
  height: 100vh;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 30px;
   @media (max-width: 1180px) {
    height: 100%;
  }
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
  font-family: Ubuntu;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  text-align: left;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`;

const Tab = styled.div`
  padding: 10px;
  font-size: 16px;
  color: ${(props) => (props.active ? '#F28500' : '#aaa')};
  border-bottom: ${(props) => (props.active ? '2px solid #F28500' : 'none')};
  cursor: pointer;
  flex: 1;
  text-align: center;
  font-family: ubuntu;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;
const MiniDashboard = styled.div`
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 31px;
  padding: 15px;
  display: flex;
  align-items: center;
  width: 90%;
  margin: 20px 0;
  height: 116px;
  position: relative;
  margin-bottom: 49px;
    @media (max-width: 280px) {
    max-width: 90%; /* Full width for very small devices */
    padding: 38px;
  }
`;

const MiniDashboardIconStyled = styled.img`
  position: absolute;
  top: -19px;
  left: -30px;
  width: 450px;
  height: 220px;
  z-index: 0;
      @media (max-width: 768px) {
     max-width: 90%; /* Scale icon down for smaller devices */
   
  }

  @media (max-width: 480px) {
      max-width: 117%;
  }
  @media (max-width: 1180px) {
      max-width: 117%;
  }
`;

const DashboardText = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  position: relative;
  z-index: 1;
  margin-right: 20px;
`;

const InfoColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 25px;
  margin-right: 20px;
`;
const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label1 = styled.p`
  font-size: 12px;
  color: #67728A;
  margin: 0;
  margin-top: 47px;
  margin-right: 150px;
      @media (max-width: 768px) {
     font-size: 12px;

     margin-top: 47px;
  margin-right: 150px;
  padding-left: 10px;
  }
      @media (max-width: 740px) {
     font-size: 12px;

     margin-top: 47px;
  margin-right: 150px;
  padding-left: 10px;
  }

`;

const Value1 = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #CEECFF;
  margin-top: 5px;
  margin-right: 150px;
      @media (max-width: 768px) {
     font-size: 14px;
     margin-top: 5px;
  margin-right: 150px;
  padding-left: 10px;
  }
      @media (max-width: 740px) {
     font-size: 14px;
     margin-top: 5px;
  margin-right: 150px;
  padding-left: 10px;
  }

`;


const Label = styled.p`
  font-family: Ubuntu;
  font-size: 11px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.15399999916553497px;
  text-align: left;
  color: #67728A;
  margin: 0;
    @media (max-width: 768px) {
     font-size: 11px;
   margin-right: 5px;
  }

  @media (max-width: 480px) {
     font-size: 11px;
  }
  @media (max-width: 1180px) {
      font-size: 11px;
  }
`;

const ValueBold = styled.p`
  font-family: Ubuntu;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.15399999916553497px;
  text-align: right;
  color: #CEECFF;
  margin: 0;

  padding: 2px 4px;
  border-radius: 4px;
   @media (max-width: 768px) {
     font-size: 14px;
   
  }

  @media (max-width: 480px) {
     font-size: 14px;
  }
  @media (max-width: 1180px) {
      font-size: 14px;
  }
`;


const Label0 = styled.p`
  font-family: Ubuntu;
  font-size: 11px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.15399999916553497px;
  text-align: left;
  color: #67728A;
  margin: 0;
  margin-top: 13px;
   @media (max-width: 768px) {
     font-size: 11px;
   
  }

  @media (max-width: 480px) {
     font-size: 11px;
  }
  @media (max-width: 1180px) {
      font-size: 11px;
  }
`;

const Value0 = styled.p`
  font-family: Ubuntu;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.15399999916553497px;
  text-align: right;
  color: #CEECFF;
  margin: 0;
  
  padding: 2px 4px;
  border-radius: 4px;
   @media (max-width: 768px) {
     font-size: 14px;
   
  }

  @media (max-width: 480px) {
     font-size: 14px;
  }
  @media (max-width: 1180px) {
      font-size: 14px;
  }
`;

const AmountContainer = styled.div`
  width: 100%;
  margin-top: 10px;
`;

const AmountLabel = styled.p`
  font-size: 16px;
  color: #666;
  text-align: left;
  width: 100%;
  font-family: ubuntu;
`;

const AmountInput = styled.input`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  background-color: #f6f6f6;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 8px;
  width: 100%;
  text-align: left;
`; 
const PaymentMethodTitle = styled.p`
  font-size: 18px;
  color: #414D63;
  font-weight: bold;
  width: 100%;
  text-align: left;
  margin-top: 20px;
`;

const PaymentMethods = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
`;

const PaymentMethod = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 0px solid #ddd;
`;

const PaymentMethodText = styled.p`
  font-size: 14px;
  color: #414D63;
`;

const PaymentIcons = styled.div`
  display: flex;
  align-items: center;
`;

const PaymentIcon = styled.img`
  width: 50px;
  height: auto;
  margin-left: 10px;
`;
const PaymentIcon1 = styled.img`
  width: 100px;
  height: 30px;
  margin-left: 10px;
`;

const PayNowButton = styled.button`
 background-color: #FDE5C0;
  padding: 12px 40px;
  border-radius: 25px;
  border: none;
  width: 90%;
  max-width: 300px;
  cursor: pointer;
  color: #F07F23;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 90px;
  &:hover {
    background-color: #e5b46a;
    color: #fff;
  }
  width: 114px;
  height: 50px;
  opacity: 1;
  font-family: ubuntu;
  diplay:flex;
  flex;-wrap: none;
`;

export default MP_BankDetailsVendorScreen;
