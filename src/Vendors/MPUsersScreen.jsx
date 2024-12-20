
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LeftIcon from '../Assets/left.png';
import MiniDashboardIcon from '../Assets/MINI_DB.png';
import GreenTick from '../Assets/greentick.png'; 
import { useUser } from '../UserContext';
import axios from 'axios';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL


const MakePaymentVendorUserScreen = () => {
  const navigate = useNavigate();
  const [taxId, setTaxId] = useState('');
  const [username, setUsername] = useState('');
  const [haulers, setHaulers] = useState(0);
  const [haulerOptions, setHaulerOptions] = useState([]);
  const [selectedHauler, setSelectedHauler] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const token = localStorage.getItem('token');

  const handleTaxIdChange = async (e) => {
    const inputTaxId = e.target.value;
    setTaxId(inputTaxId);

    if (inputTaxId.trim() === '') {
      setErrorMessage('');
      setIsVerified(false);
      return;
    }

    try {
      // Verify Tax ID
      const response = await axios.get(`${API_BASE_URL}/user/verify-tax-id`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
        params: { tax_id: inputTaxId },
      });

      if (response.data.success && response.data.data.found) {
        const user = response.data.data.user;
        const resolvedUsername = user.id === 'federal_agency' ? user.business_name : user.username;
        setUsername(resolvedUsername); // Set username for dashboard card
        localStorage.setItem('resolvedUsername', resolvedUsername); // Save username for subsequent use
        setIsVerified(true);
        setErrorMessage('');

        localStorage.setItem('payee_id', user.id)
        // Fetch Haulers
        const haulerResponse = await axios.get(`${API_BASE_URL}/user/get-user-hauler-by-tax-id`, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
          },
          params: { tax_id: inputTaxId },
        });

        if (haulerResponse.data.success) {
          const haulersList = haulerResponse.data.data.haulers || [];
          setHaulerOptions(haulersList); // Populate dropdown options
          setHaulers(haulersList.length); // Set haulers count for dashboard

          
        }

      } else {
        // Handle invalid Tax ID
        setIsVerified(false);
        setUsername('');
        setHaulers(0);
        setHaulerOptions([]);
        setErrorMessage('User not found, please try again.');
      }
    } catch (error) {
      console.error('Error verifying Tax ID:', error);
      setIsVerified(false);
      setUsername('');
      setHaulers(0);
      setHaulerOptions([]);
      setErrorMessage('An error occurred while verifying the Tax ID.');
    }
  };

  const handleProceed = () => {
    if (selectedHauler) {
      const selectedHaulerData = haulerOptions.find((hauler) => hauler.id === parseInt(selectedHauler, 10));
      if (selectedHaulerData) {
        const savedData = {
          taxId,
          username,
          haulers,
          selectedHauler: selectedHaulerData.name,
          numberPlate: selectedHaulerData.number_plate,
          haulerId: selectedHaulerData.id,
        };
        localStorage.setItem('savedUser', JSON.stringify(savedData)); // Save data to storage
        navigate('/Vendor-Category-MakePayment-Screen');
      }
    } else {
      alert('Please select a hauler before proceeding.');
    }
  };

  const handleBack = () => {
    navigate('/Vendors-Dashboard');
  };

  const handleback = () => {
    navigate('/Beneficiaries-Screen');
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

      <BeneficiaryText onClick={handleback}>Select Previous Beneficiary</BeneficiaryText>

      <MiniDashboard>
        <MiniDashboardIconStyled src={MiniDashboardIcon} />
        <DashboardText>
          <InfoColumn>
            <Label1>User:</Label1>
            <Value1>{username || 'Username'}</Value1>
          </InfoColumn>
          <InfoColumn>
            <Label2>Haulers:</Label2>
            <Value2>{haulers}</Value2>
          </InfoColumn>
        </DashboardText>
      </MiniDashboard>

      <TaxIdContainer>
        <Label3>Tax ID Number:</Label3>
        <InputField
          value={taxId}
          onChange={handleTaxIdChange}
          placeholder="Enter Tax ID Number"
        />
        {isVerified && (
          <Green>
            <GreenTickIcon src={GreenTick} alt="Green Tick" />
            <VerifiedText>{username}</VerifiedText>
          </Green>
        )}
        {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
      </TaxIdContainer>

      <SelectHaulerText>Select Hauler:</SelectHaulerText>
      <SelectDropdown
        value={selectedHauler}
        onChange={(e) => setSelectedHauler(e.target.value)}
      >
        <option value="">Please Select the Hauler</option>
        {haulerOptions.map((hauler) => (
          <option key={hauler.id} value={hauler.id}>
            {hauler.name} ({hauler.number_plate})
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

const BeneficiaryText = styled.div`
  font-size: 16px;
  color: #666;
  margin-top: 10px;
  text-align: right;
  width: 100%;
   margin-bottom: -15px;
   margin-top: 38px;
   cursor: pointer;
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
margin-bottom: -1px;
 @media (max-width: 450px) {
      margin-left: -200px;
  }
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

const InputField = styled.input`
 width: 95%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid ${({ isError, isVerified }) =>
    isError ? 'red' : isVerified ? 'black' : 'black'};
  border-radius: 5px;
  margin-top: 10px;
  outline: none;

  &:focus {
    border-color: ${({ isError }) => (isError ? 'red' : 'black')};
    box-shadow: 0 0 5px rgba(108, 99, 255, 0.5);
  }
`;

const Green = styled.div`
    display: flex;
    flexd-direction: column;
      align-items: center;
      width:  100%;
        margin-left: 500px;
        margin-top: -8px;
          @media (max-width: 768px) {
    gap: 3px; /* Adjust gap for smaller screens */
    margin-left: 350px;
  }
`;
const GreenTickIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 38px;

  @media (max-width: 768px) {
    width: 14px; /* Scale down for smaller devices */
    height: 14px;
  }

  @media (max-width: 480px) {
    width: 12px;
    height: 12px;
  }
`;

const VerifiedText = styled.p`
  color: #32cd32; /* Green color */
  font-size: 14px;
  margin-left: 8px;
    @media (max-width: 768px) {
    font-size: 11px; /* Reduce font size for smaller devices */
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

const SelectHaulerText = styled.p`
  font-size: 16px;
  color: #414D63;
  margin-top: 10px;
  text-align: left;
  width: 100%;
  margin-bottom: -1px;
`;
const ErrorText = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  display: block;
    text-align: right;
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
