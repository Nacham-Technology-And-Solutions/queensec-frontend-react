
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LeftIcon from '../Assets/left.png';
import MiniDashboardIcon from '../Assets/MINI_DB.png';
import VisaIcon from '../Assets/Visa.png';
import MasterCardIcon from '../Assets/mastercard.png';
import PayUIcon from '../Assets/payu.png';

import axios from 'axios';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

const MakePaymentBankDetailsScreen = () => {
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

  
const parsedAmount = parseFloat(amount.replace(/[^0-9.]/g, ''));
if (isNaN(parsedAmount) || parsedAmount <= 0) {
  console.error('Invalid amount:', amount);
}


    const [loading, setLoading] = useState(false); // Add a loading state

    const initiatePayment = async () => {
      if (loading) return; // Prevent multiple execution if already loading

      setLoading(true); // Set loading to true when the process starts

      try {
        // Retrieve values from localStorage
        // Get mineral_sub_id from localStoragew
        const payerId = localStorage.getItem('payer_id'); // Example retrieval, replace with actual logic
        const haulerId = localStorage.getItem('hauler_id'); // Example retrieval
        const mineralId = localStorage.getItem('mineral_id'); // Example retrieval
        const parsedAmount = parseFloat(localStorage.getItem('selectedCategoryPrice').replace('NGN', '').replace(',', '').trim()); // Parse the amount
        const email = localStorage.getItem('email'); // Example retrieval
        const name = localStorage.getItem('name'); // Example retrieval
        const phone = localStorage.getItem('phone'); // Example retrieval
        const token = localStorage.getItem('token');
        const mineralSubId = localStorage.getItem('mineral_sub_id'); // Retrieve mineral_sub_id

        const orderResponse = await axios.post(`${API_BASE_URL}/orders`, {
          payer_id: payerId,
          payee_id: payerId,
          payee_hauler_id: haulerId,
          mineral_id: mineralId,
          mineral_sub_id: mineralSubId,
          total_amount: parsedAmount.toFixed(2),
        }, {
          headers: {
            Authorization: `Bearer ${token}`, // Add token to the headers
          },
        }
        );
  
        const paymentLink = orderResponse.data?.data?.payment_link;
        if (!paymentLink) {
          throw new Error('Payment link not provided by the backend.');
        }
    
        // Redirect to the payment link
        window.location.href = paymentLink
      } catch (error) {
        console.error('Error initiating payment:', error);
        alert('Failed to initiate payment. Please try again.');
      } finally {
        setLoading(false); // Reset loading state on success or error
      }
    }
  
  

  

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
;`

const TopBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
;`

const BackIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-right: 15px;
;`

const Title = styled.h1`
  color: #6C3ECF;
  font-family: Ubuntu;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  text-align: left;
;
`
const TabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
;
`
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
  }`
;

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
;`

const MiniDashboardIconStyled = styled.img`
  position: absolute;
  top: -19px;
  left: -30px;
  width: 450px;
  height: 220px;
  z-index: 0;
;`

const DashboardText = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  z-index: 1;
;`

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
;`

const Label1 = styled.p`
  font-size: 12px;
  color: #67728A;
  margin: 0;
  margin-top: 27px;
  margin-left: 28px;
;`

const Label2 = styled.p`
  font-size: 12px;
  color: #67728A;
  margin: 0;
  margin-top: 25px;
  margin-right: 60px;
;
`
const Value1 = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #CEECFF;
  margin-top: 9px;
  margin-left: 28px;
;`

const Value2 = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #CEECFF;
  margin-top: 9px;
  margin-left: 10.5px;
;`
const AmountContainer = styled.div`
  width: 100%;
  margin-top: 10px;
;
`
const AmountLabel = styled.p`
  font-size: 16px;
  color: #666;
  text-align: left;
  width: 100%;
  font-family: ubuntu;
;`

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
; `
const PaymentMethodTitle = styled.p`
  font-size: 18px;
  color: #333;
  font-weight: bold;
  width: 100%;
  text-align: left;
  margin-top: 20px;
;
`
const PaymentMethods = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
;`

const PaymentMethod = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
;
`
const PaymentMethodText = styled.p`
  font-size: 14px;
  color: #666;
;
`
const PaymentIcons = styled.div`
  display: flex;
  align-items: center;
;
`
const PaymentIcon = styled.img`
  width: 50px;
  height: auto;
  margin-left: 10px;
;`
const PaymentIcon1 = styled.img`
  width: 100px;
  height: 30px;
  margin-left: 10px;
;
`
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
;
`
export default MakePaymentBankDetailsScreen;