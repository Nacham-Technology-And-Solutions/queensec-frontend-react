import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LeftIcon from '../../../assets/left.png';
import MiniDashboardIcon from '../../../assets/MINI_DB.png';
import axios from 'axios';
import { getToken } from '../../../utils/tokenStorage';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

const VFWScreenTwoPaymentMethod = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(localStorage.getItem('amount') || 1);
  const [balance, setBalance] = useState(localStorage.getItem('wallet_balance') || 1);
  const [taxId, setTaxId] = useState(localStorage.getItem('tax_id') || '');
  const [newBalance, setNewBalance] = useState(Number(balance) + Number(amount) || 0);
  const token = getToken();


  const [loading, setLoading] = useState(false);
  const initiatePayment = async () => {
    if (loading) return; // Prevent multiple execution if already loading

    setLoading(true); // Set loading to true when the process starts

    try {

      if (!token || isNaN(amount)) {
        throw new Error('Missing or invalid payment parameters.');
      }


      const payload = {
        amount: amount
      };



      const orderResponse = await axios.post(`${API_BASE_URL}/wallet/fund`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const paymentLink = orderResponse.data?.data?.payment_link;
      if (!paymentLink) {
        throw new Error('Payment link not provided by the backend.');
      }

      // Store payment type before redirect
      localStorage.setItem('paymentType', 'wallet_funding');

      // Redirect to the payment link
      window.location.href = paymentLink;
    } catch (error) {
      console.error('Error initiating payment:', error); //todo
      alert('Failed to initiate payment. Please try again.');
    } finally {
      setLoading(false); // Reset loading state on success or error
    }
  };


  const handleBack = () => {
    navigate('/vendor-fw-one-amount');
  };

  return (
    <Container>
      <TopBar>
        <BackIcon src={LeftIcon} onClick={handleBack} />
        <Title>Fund Wallet</Title>
      </TopBar>

      <TabContainer>
        <Tab $active>Amount</Tab>
        <Tab $active>Confirm Amount</Tab>
        <Tab>Make Payment</Tab>
        <Tab>Success</Tab>
      </TabContainer>

      <MiniDashboard>
        <MiniDashboardIconStyled src={MiniDashboardIcon} />
        <DashboardText>
          <InfoColumn>
            <Label1>Wallet ID:</Label1>
            <Value1>{taxId || 'Wallet ID'}</Value1>
          </InfoColumn>
          <InfoColumnLeft>
            <Label>Balance</Label>
            <ValueBold>₦{parseFloat(balance).toLocaleString()}</ValueBold>

            <Label0>New Balance:</Label0>
            <Value0>₦{parseFloat(newBalance).toLocaleString()}</Value0>
          </InfoColumnLeft>
        </DashboardText>
      </MiniDashboard>

      <AmountContainer>
        <AmountLabel>Amount</AmountLabel>
        <AmountInput
          type="text"
          value={`₦${parseFloat(amount).toLocaleString()}`}
          readOnly
          placeholder="Amount not available"
        />
      </AmountContainer>

      <PayNowButton onClick={initiatePayment} disabled={loading}>
        {loading ? 'Processing...' : 'Proceed to Payment'}
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
  color: ${(props) => (props.$active ? '#F28500' : '#aaa')};
  border-bottom: ${(props) => (props.$active ? '2px solid #F28500' : 'none')};
  cursor: pointer;
  flex: 1;
  text-align: center;
  

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
  // margin-right: 20px;
`;
const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label1 = styled.p`
  font-size: 12px;
  color: #ccc;
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
  @media (max-width: 740px) {
    margin-left: 5px;
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
      @media (max-width: 740px) {
    margin-right: 133px;
  }
`;


const Label = styled.p`
  
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.15399999916553497px;
  text-align: left;
  color: #ccc;
  margin: 0;
    @media (max-width: 768px) {
     font-size: 12px;
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
  
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.15399999916553497px;
  text-align: left;
  color: #ccc;
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
  
  font-size: 16px;
  font-weight: 600;
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
  
`;

const AmountInput = styled.input`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  background-color: #f6f6f6;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 8px;
  width: 90%;
  text-align: left;
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
  margin-top: 50px;
  &:hover {
    background-color: #e5b46a;
    color: #fff;
  }
  width: 114px;
  height: 50px;
  opacity: 1;
  
  diplay:flex;
  flex;-wrap: none;
`;

export default VFWScreenTwoPaymentMethod;
