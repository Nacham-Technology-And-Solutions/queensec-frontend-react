
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LeftIcon from '../Assets/left.png';
import MiniDashboardIcon from '../Assets/MINI_DB.png';
import GreenTick from '../Assets/greentick.png'; // Import green tick icon

const MakePaymentVendorUserScreen = () => {
  const navigate = useNavigate();
  const [taxId, setTaxId] = useState('Nas/Nas/0013'); // Example tax ID
  const [haulers, setHaulers] = useState(2); // Example haulers count
  const [haulerOptions, setHaulerOptions] = useState([]);
  const [selectedHauler, setSelectedHauler] = useState('');

  useEffect(() => {
    fetch('/api/haulers')
      .then(response => response.json())
      .then(data => setHaulerOptions(data))
      .catch(error => console.error('Error fetching hauler data:', error));
  }, []);

  const handleBack = () => {
    navigate('/Vendors-Dashboard');
  };

  const handleProceed = () => {
    if (selectedHauler) {
      console.log('Proceeding with selected hauler:', selectedHauler);
      navigate('/Vendor-Category-MakePayment-Screen'); // Navigate to the MP_CategoryScreen
    } else {
      alert('Please select a hauler before proceeding.'); // Alert if no hauler is selected
    }
  };

  return (
    <Container>
      <TopBar>
        <BackIcon src={LeftIcon} onClick={handleBack} />
        <Title>Make Payment</Title>
      </TopBar>

      <TabContainer>
        <Tab active>User</Tab>
        <Tab>Category</Tab>
        <Tab>Bank details</Tab>
      </TabContainer>

      <BeneficiaryText>Select Previous Beneficiary</BeneficiaryText>

      <MiniDashboard>
        <MiniDashboardIconStyled src={MiniDashboardIcon} />
        <DashboardText>
          <InfoColumn>
            <Label1>User:</Label1>
            <Value1>Username</Value1>
          </InfoColumn>
          <InfoColumn>
            <Label2>Haulers:</Label2>
            <Value2>{haulers}</Value2>
          </InfoColumn>
        </DashboardText>
      </MiniDashboard>

      <TaxIdContainer>
        <Label3>Tax ID Number</Label3>
        <InputField>{taxId}</InputField>
      
      </TaxIdContainer>
  <Green>
        <GreenTickIcon src={GreenTick} alt="Green Tick" />
          <VerifiedText>Username</VerifiedText>
          </Green>
      <SelectHaulerText>Select Hauler:</SelectHaulerText>
      <SelectDropdown
        value={selectedHauler}
        onChange={(e) => setSelectedHauler(e.target.value)}
      >
        <option value="">Please Select the Hauler</option>
        {haulerOptions.map((hauler) => (
          <option key={hauler.id} value={hauler.id}>
            {hauler.name} ({hauler.id})
          </option>
        ))}
      </SelectDropdown>

      <AdditionalInfoContainer>
        <AdditionalInfoText>Please Select the Hauler you want to pay for</AdditionalInfoText>
      </AdditionalInfoContainer>

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
  font-family: Ubuntu;
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

const BeneficiaryText = styled.p`
  font-size: 16px;
  color: #666;
  margin-top: 10px;
  text-align: right;
  width: 100%;
   margin-bottom: -15px;
   margin-top: 38px;
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
const Label3 = styled.p`
  font-size: 12px;
  color: #414D63;
  font-family: Ubuntu;
font-size: var(--sds-typography-body-size-medium);
font-weight: 400;
line-height: 22.4px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
margin-left: -280px;
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
  width: 100%;
`;

const InputField = styled.div`
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  flex: 1;
  width: 95%;
  height: 190px;
`;

const Green = styled.div`
    display: flex;
    flexd-direction: column;
      align-items: center;
      width:  100%;
        margin-left: 550px;
        margin-top: -18px;
`
const GreenTickIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 38px;
`;

const VerifiedText = styled.p`
  color: #32cd32; /* Green color */
  font-size: 14px;
  margin-left: 8px;
`;

const SelectHaulerText = styled.p`
  font-size: 16px;
  color: #414D63;
  margin-top: 10px;
  text-align: left;
  width: 100%;
`;

const SelectDropdown = styled.select`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  font-size: 16px;
`;

const AdditionalInfoContainer = styled.div`
  margin-top: 10px;
  text-align: center;
`;

const AdditionalInfoText = styled.p`
width: 315px;
height: 47px;
top: 609px;
left: 25px;
gap: 0px;
opacity: 0px;
color: #414D63;

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

export default MakePaymentVendorUserScreen;
