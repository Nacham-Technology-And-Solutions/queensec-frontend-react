import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LeftIcon from '../Assets/left.png';
import MiniDashboardIcon from '../Assets/MINI_DB.png';
import VisaIcon from '../Assets/Visa.png';
import MasterCardIcon from '../Assets/mastercard.png';
import PayUIcon from '../Assets/payu.png';
// import ubuntu from '../Assets/Ubuntu/Ubuntu-Regular.ttf';
import axios from 'axios';
const API_BASE_URL = process.env.VITE_API_BASE_URL;

const MP_BankDetailsScreen = () => {
  const navigate = useNavigate();
  const [taxId] = useState(localStorage.getItem('tax_id') || 'Nas/Nas/0013'); 
  const [plateNumber] = useState(localStorage.getItem('number_plate') || 'null');
  const [amount] = useState(() => {
    const savedAmount = localStorage.getItem('selectedCategoryPrice');
    return savedAmount || '0';
  });
  // Retrieve customer details from localStorage
  const email = localStorage.getItem('email') || 'leolindgren@example.net';
  const phone = localStorage.getItem('phone') || '';
  const name = localStorage.getItem('name') || '';
  const payerId = localStorage.getItem('payer_id') || '';
  const haulerId = localStorage.getItem('hauler_id') || '';
  const mineralId = localStorage.getItem('mineral_id') || '';
console.log(name);
console.log(email);
  console.log(phone);
  
const parsedAmount = parseFloat(amount.replace(/[^0-9.]/g, ''));
if (isNaN(parsedAmount) || parsedAmount <= 0) {
  console.error('Invalid amount:', amount);
}
  console.log(parsedAmount);
  const initiatePayment = async () => {
    try {
      // Step 1: Mock the Order Response
      const mockOrderResponse = {
        data: {
          success: true,
          message: 'Order Created',
          data: {
            orderId: 'mock_order_123', // Mock Order ID
            totalAmount: parsedAmount,
            payerId: payerId,
            payeeHaulerId: haulerId,
            mineralId: mineralId,
          },
        },
        status: 201, // HTTP Status: Created
      };
  
      console.log('Mock Order Response:', mockOrderResponse);
  
    const url = `${API_BASE_URL}/orders`
      const flutterwaveResponse = await axios.post(
        'https://api.flutterwave.com/v3/payments',
        {
          tx_ref: `trx_${Date.now()}`, // Unique transaction reference
          amount: parsedAmount,
          currency: 'NGN',
          redirect_url: `${window.location.origin}/MP_PaymentSuccessScreen`,
          customer: {
            email: email,
            name: name,
            phonenumber: phone,
          },
          customizations: {
            title: 'Hauler Payment',
            description: 'Selected Hauler Payment',
            logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
          },
        },
        {
          headers: {
            Authorization: `Bearer FLWSECK_TEST-d82c623bb373e93863d29dd817f5b41e-X`,
            'Content-Type': 'application/json',
          },
        }
      );
  
      if (flutterwaveResponse.status === 200 && flutterwaveResponse.data?.data?.link) {
        console.log('Flutterwave payment link:', flutterwaveResponse.data.data.link);
  
        // Redirect to payment link
        window.location.href = flutterwaveResponse.data.data.link;
      } else {
        console.error('Error creating payment link:', flutterwaveResponse.data);
        alert('Payment initiation failed.');
      }
    } catch (err) {
      console.error('Error during payment initiation:', err);
      alert('An error occurred. Please try again.');
    }
  };
  
// const initiatePayment = async () => {
//   const token = localStorage.getItem('token');
//   if (!token) {
//     alert('Authentication error: Please log in again.');
//     navigate('/login');
//     return;
//   }

//   const parsedAmount = parseFloat(amount.replace(/[^0-9.]/g, ''));
//   if (isNaN(parsedAmount) || parsedAmount <= 0) {
//     alert('Invalid amount. Please check and try again.');
//     return;
//   }

//   if (!payerId || !haulerId || !mineralId) {
//     alert('Missing critical information. Please refresh and try again.');
//     return;
//   }

//   try {
//     // Step 1: Create Order on Backend
//     const orderData = {
//       payer_id: payerId,
//       payee_id: payerId, // Replace with actual ID
//       payee_hauler_id: haulerId,
//       mineral_id: mineralId,
//       total_amount: parsedAmount,
//     };

//     const orderResponse = await axios.post(
//       'http://127.0.0.1:5000/api/orders',
//       orderData,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     if ((orderResponse.status === 200 || orderResponse.status === 201) && orderResponse.data) {
//       console.log('Order created successfully:', orderResponse.data);

//       // Step 2: Initiate Flutterwave Payment
//       const flutterwaveResponse = await axios.post(
//         'https://api.flutterwave.com/v3/payments',
//         {
//           tx_ref: `trx_${Date.now()}`,
//           amount: parsedAmount,
//           currency: 'NGN',
//           redirect_url: `${window.location.origin}/MP_PaymentSuccessScreen`,
//           customer: {
//             email,
//             name,
//             phonenumber: phone,
//           },
//           customizations: {
//             title: 'Hauler Payment',
//             description: 'Selected Hauler Payment',
//             logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
//           },
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${process.env.REACT_APP_FLW_API_KEY}`,
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       if (flutterwaveResponse.status === 200 && flutterwaveResponse.data?.data?.link) {
//         console.log('Flutterwave payment link:', flutterwaveResponse.data.data.link);
//         window.location.href = flutterwaveResponse.data.data.link;
//       } else {
//         console.error('Error creating payment link:', flutterwaveResponse.data);
//         alert('Payment initiation failed.');
//       }
//     } else {
//       console.error('Error creating order:', orderResponse);
//       alert('Failed to create order. Please try again.');
//     }
//   } catch (err) {
//     console.error('Error during payment initiation:', err);
//     alert('An error occurred. Please try again.');
//   }
// };


  return (
    <Container>
      <TopBar>
        <BackIcon src={LeftIcon} onClick={() => navigate('/MP_CategoryScreen')} />
        <Title>Make Payment</Title>
      </TopBar>

      <TabContainer>
        <Tab active>Vehicle</Tab>
        <Tab active>Category</Tab>
        <Tab active>Bank details</Tab>
      </TabContainer>

      <MiniDashboard>
        <MiniDashboardIconStyled src={MiniDashboardIcon} />
        <DashboardText>
          <InfoColumn>
            <Label1>Tax ID Number:</Label1>
            <Value1>{taxId}</Value1>
          </InfoColumn>
          <InfoColumn>
            <Label2>Plate Number:</Label2>
            <Value2>{plateNumber}</Value2>
          </InfoColumn>
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
            <PaymentIcon src={PayUIcon} alt="PayU" />
          </PaymentIcons>
        </PaymentMethod>
      </PaymentMethods>

     
      <PayNowButton onClick={initiatePayment}>Pay Now</PayNowButton>
    </Container>
  );
  PayNowButton
};
// const handlePayNow = () => {
//   navigate('/MP_PaymentSuccessScreen');
//   <FlutterWaveButton {...fwConfig} />

// }
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
`;

const MiniDashboardIconStyled = styled.img`
  position: absolute;
  top: -19px;
  left: -30px;
  width: 450px;
  height: 220px;
  z-index: 0;
`;

const DashboardText = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  z-index: 1;
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label1 = styled.p`
  font-size: 12px;
  color: #67728A;
  margin: 0;
  margin-top: 27px;
  margin-left: 28px;
`;

const Label2 = styled.p`
  font-size: 12px;
  color: #67728A;
  margin: 0;
  margin-top: 25px;
  margin-right: 60px;
`;

const Value1 = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #CEECFF;
  margin-top: 9px;
  margin-left: 28px;
`;

const Value2 = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #CEECFF;
  margin-top: 9px;
  margin-left: 40.5px;
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
  color: #333;
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
  border-bottom: 1px solid #ddd;
`;

const PaymentMethodText = styled.p`
  font-size: 14px;
  color: #666;
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
`;

export default MP_BankDetailsScreen;
