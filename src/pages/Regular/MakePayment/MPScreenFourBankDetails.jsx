
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LeftIcon from '../../../assets/left.png';
import MiniDashboardIcon from '../../../assets/MINI_DB.png';
import VisaIcon from '../../../assets/Visa.png';
import MasterCardIcon from '../../../assets/mastercard.png';
import PayUIcon from '../../../assets/payu.png';

import axios from 'axios';
import Button from '../../../components/Button/Button';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

const MPScreenFourBankDetails = () => {
  const navigate = useNavigate();
  const [taxId] = useState(localStorage.getItem('tax_id') || 'Nas/Nas/0013');
  const [plateNumber] = useState(localStorage.getItem('number_plate') || 'null');
  const [amount] = useState(() => {
    const savedAmount = localStorage.getItem('selectedCategoryPrice');
    return savedAmount || '0';
  });


  const parsedAmount = parseFloat(amount.replace(/[^0-9.]/g, ''));
  if (isNaN(parsedAmount) || parsedAmount <= 0) {
    console.error('Invalid amount:', amount);
  }


  const [loading, setLoading] = useState(false);

  const initiatePayment = async () => {
    if (loading) return;

    setLoading(true);

    try {
      const payerId = localStorage.getItem('payer_id');
      const mineralId = localStorage.getItem('mineral_id');
      const mineralSubId = localStorage.getItem('fee_category_id');
      const parsedAmount = parseFloat(localStorage.getItem('selectedCategoryPrice').replace('NGN', '').replace(',', '').trim());
      const token = localStorage.getItem('token');
      const haulerTypeMode = localStorage.getItem('haulerTypeMode');

      const driverName = localStorage.getItem('driverName');
      const phoneNumber = localStorage.getItem('phoneNumber');
      const loadingPoint = localStorage.getItem('loadingPoint');
      const offloadingPoint = localStorage.getItem('offloadingPoint');

      if (!driverName || !phoneNumber || !loadingPoint || !offloadingPoint) {
        throw new Error('Incomplete trip data. Please ensure all fields are filled.');
      }


      const payload = {
        // payer_id: payerId,
        payee_id: payerId,
        // mineral_id: mineralId,
        fee_category_id: mineralSubId,
        // total_amount: parsedAmount.toFixed(2),

        driver_name: driverName,
        phone_number: phoneNumber,
        loading_point: loadingPoint,
        offloading_point: offloadingPoint,
      };
      // debugger;
      if (haulerTypeMode === 'saved') {
        const haulerId = localStorage.getItem('payee_hauler_id');
        if (!haulerId) {
          throw new Error('Hauler ID is missing.');
        }
        payload.payee_hauler_id = haulerId;
      } else if (haulerTypeMode === 'oneTime') {
        const haulerTypeId = localStorage.getItem('hauler_type_id');
        const plateNumber = localStorage.getItem('number_plate');
        if (!haulerTypeId || !plateNumber) {
          throw new Error('Hauler type or plate number is missing for one-time hauler.');
        }
        payload.hauler_type_id = haulerTypeId;
        payload.number_plate = plateNumber;
      } else {
        throw new Error('Invalid hauler type selected.');
      }


      const orderResponse = await axios.post(`${API_BASE_URL}/orders`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const paymentLink = orderResponse.data?.data?.payment_link;
      if (!paymentLink) {
        throw new Error('Payment link not provided by the backend.');
      }

      window.location.href = paymentLink;
    } catch (error) {
      console.error('Error initiating payment:', error);
      alert('Failed to initiate payment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <TopBar>
        <BackIcon src={LeftIcon} onClick={() => navigate('/mp-three-fee-category')} />
        <Title>Make Payment</Title>
      </TopBar>

      <TabContainer>
        <Tab active>Vehicle</Tab>
        <Tab active>Trip Data</Tab>
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


      <Button label={loading ? 'Processing...' : 'Pay Now'} onClick={initiatePayment} size='large' isDisabled={loading} />
       
    </Container>
  );
};
// const handlePayNow = () => {
//   navigate('/mp-five-payment-status');
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
  @media (max-width: 667px) {
      height: 100%;
  }
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
      @media (max-width: 280px) {
    max-width: 90%; /* Full width for very small devices */
    padding: 38px;
  }
;`

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
  width: 95%;
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
export default MPScreenFourBankDetails;