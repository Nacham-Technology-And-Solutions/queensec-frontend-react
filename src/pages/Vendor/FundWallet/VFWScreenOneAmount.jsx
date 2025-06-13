
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LeftIcon from '../../../assets/left.png';
import MiniDashboardIcon from '../../../assets/MINI_DB.png';
import InputFieldx from "../../../components/InputField/InputField";

const VFWScreenOneAmount = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(localStorage.getItem('amount') || 1);
  const [balance, setBalance] = useState(localStorage.getItem('wallet_balance') || 1);
  const [taxId, setTaxId] = useState(localStorage.getItem('tax_id') || '');
  const [newBalance, setNewBalance] = useState(Number(balance) + Number(amount) || 0);

  const handleAmountChange = async (e) => {
    const inputTaxId = e.target.value;
    setAmount(inputTaxId);

    setNewBalance(Number(balance) + Number(inputTaxId));
  };

  const handleProceed = () => {
    // Save amount to memory.
    localStorage.setItem('amount', amount);

    // Navigate to Second Screen
    if (amount > 1000) {
      navigate('/vendor-fw-two-payment-method');
    }

    else {
      alert('Please enter amount to fund greater than ₦1,000.');
    }
  }

  const handleBack = () => navigate('/vendor-dashboard');

  return (
    <Container>
      <TopBar>
        <BackIcon src={LeftIcon} onClick={handleBack} />
        <Title>Fund Wallet</Title>
      </TopBar>

      <TabContainer>
        <Tab active>Amount</Tab>
        <Tab>Payment Method</Tab>
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
          <InfoColumn>
            <Label2>Balance:</Label2>
            <Value2>₦{parseFloat(balance).toLocaleString()}</Value2>
          </InfoColumn>
        </DashboardText>
      </MiniDashboard>

      <TaxIdContainer>
        <InputFieldx
          label="Amount"
          type="number"
          name="email"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Enter Fund Amount"
        />

        <Green>
          <VerifiedText>New Balance: ₦{parseFloat(newBalance).toLocaleString()}</VerifiedText>
        </Green>
      </TaxIdContainer>


      <ProceedButton onClick={handleProceed}>Proceed</ProceedButton>
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
const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px; /* Adds space between tabs */
  width: 100%;
  margin-top: 10px;
`;

const Tab = styled.div`
  padding: 10px;
  font-size: 16px;
  color: ${(props) => (props.active ? '#F28500' : '#aaa')};
  border-bottom: ${(props) => (props.active ? '2px solid #F28500' : '1px solid #aaa')};
  cursor: pointer;
  text-align: center;
  width: 100px; /* Set fixed width for tabs */
  border-radius: 0px; /* Adds rounded corners */
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
  margin-left: 30px;
`;

const Value1 = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #CEECFF;
  margin: 0;
  letter-spacing: -0.15px;
   margin-left: 30px;
`;
const Label2 = styled.p`
  font-size: 12px;
  color: #67728A;
  margin-right: 40px;
`;

const Value2 = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #CEECFF;
  margin: 0;
  letter-spacing: -0.15px;
`;

const TaxIdContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
  margin-top: 20px;
  width: 100%;
`;


const Green = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: right;
    width:  100%;
    // margin-left: 500px;
    margin-top: -8px;
    @media (max-width: 768px) {
      gap: 3px; /* Adjust gap for smaller screens */
      margin-left: 350px;
  }
`;
const VerifiedText = styled.p`
  color: #FF9500; /* Green color */
  font-size: 18px;
  font-weight: 600;
  margin-right: 8px;
    @media (max-width: 768px) {
     
    font-size: 16px; /* Reduce font size for smaller devices */
  }

  @media (max-width: 480px) {
   
    font-size: 14px;
  }
`;


const ProceedButton = styled.button`
  background-color: #FDE5C0;
  padding: 15px 30px 15px 30px;
  border-radius: 25px;
  border: none;
  color: #F07F23;
  cursor: pointer;
  &:hover {
    background-color: #e5b46a;
    color: #fff;
  }
  width: 114px;]
  max-width: 300px;
  text-align: center;
`;

export default VFWScreenOneAmount;
