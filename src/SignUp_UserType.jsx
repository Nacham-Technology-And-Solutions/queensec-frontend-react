import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; 
import LeftIcon from './Assets/left.png';
import TickIcon from './Assets/tick.png';
import BuildingIcon from './Assets/building.png';
import WalletIcon from './Assets/wallet.png';
import AvatarIcon from './Assets/avatar.png';
import QueensecLogo from './Assets/Queensec_1.png';  // Import the logo here
import { useState } from 'react';


const SignUp_UserTypeScreen = () => {
  const navigate = useNavigate(); // Create a navigation handler
  const [selectedAccount, setSelectedAccount] = useState(null);

  const handleSelectAccount = (accountType) => {
    setSelectedAccount(accountType);
  };

  const handleBack = () => {
    navigate('/splash'); 
  };

  const handleNext = () => {
    if (!selectedAccount) {
      alert('Please select an account type.');
      return;
    }

    localStorage.setItem('account_type', selectedAccount);


    // Navigate to Basic Info page
    navigate('/basic-info');
  };

  const handleLogin = () => {
    navigate('/Login-Page');
  };

  return (
    <Container>
      <TopBar>
        <BackIcon src={LeftIcon} onClick={handleBack} />
        <LogoContainer>
          <Logo src={QueensecLogo} />
        </LogoContainer>
        <LoginLink onClick={handleLogin}>Log-in?</LoginLink>
      </TopBar>

      <Heading>Sign up</Heading>
      <SelectionText>Select user type</SelectionText>

      <UserTypeContainer>
        <AccountType
          selected={selectedAccount === 'individual'}
          onClick={() => handleSelectAccount('individual')}
        >
          <Avatar src={AvatarIcon} />
          <AccountText selected={selectedAccount === 'individual'}>Individual</AccountText>
          <Tick src={TickIcon} selected={selectedAccount === 'individual'} />
        </AccountType>

        <AccountType
          selected={selectedAccount === 'federal_agency'}
          onClick={() => handleSelectAccount('federal_agency')}
        >
          <Avatar src={BuildingIcon} />
          <AccountText selected={selectedAccount === 'federal_agency'}>Corporate</AccountText>
          <Tick src={TickIcon} selected={selectedAccount === 'federal_agency'} />
        </AccountType>

        <AccountType
          selected={selectedAccount === 'vendor'}
          onClick={() => handleSelectAccount('vendor')}
        >
          <Avatar src={WalletIcon} />
          <AccountText selected={selectedAccount === 'vendor'}>Vendor</AccountText>
          <Tick src={TickIcon} selected={selectedAccount === 'vendor'} />
        </AccountType>
      </UserTypeContainer>

      <NextButton onClick={handleNext}>
        <ButtonText>Next</ButtonText>
      </NextButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 200px
  background-color: #f6f6f6;
  padding: 20px;
  align-items: center;
    width: 94%; /* Reduce width to bring contents closer */
  max-width: 400px; /* Set a max width so it doesn’t expand too much on large screens */
  margin: 0 auto; /* Center the container horizontally */
`;

// Top bar containing the back icon and logo
const TopBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 30px;
`;

// Back icon styling
const BackIcon = styled.img`
  width: 29px;
  height: 29px;
  cursor: pointer;
//   
    margin-top: 15px;
  margin-right: 25px; /* Bring it closer to the "Sign up" text */
`;

// Container for the logo
const LogoContainer = styled.div`
  position: relative;
  padding-bottom: 110px;
  bottom: 20px; /* Adjust this to place the logo above the back icon */
  left: 0;
`;

// Logo styling
const Logo = styled.img`
 width: 120px;
  height: auto;
margin-left: -50px
`;

const LoginLink = styled.span`
  font-size: 14px;
  color: ;
   font-size: 20px;
  font-weight: bold;
  font-weight: 500;
  cursor: pointer;
  margin-left: 155px;
  margin-top: -144px;
  text-decoration: underline;
    padding-left: 30px;

`;


const Heading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-top: -77px;
   /* Adjust this value to move the text horizontally and align with BackIcon */
  text-align: left; /* Align text to the left to match the BackIcon's alignment */
  position: relative;
  top: -15px; 
  padding-bottom: 95px;
`;


const SelectionText = styled.p`
  font-size: 22.5px;
  color: #666;
  text-align: center;
  margin-top: 10px;
`;

// Container for account types
const UserTypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  width: 100%;
  align-items: center;
  margin-bottom: 45px;
`;

// Account type button styling
const AccountType = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between; 
  padding: 15px;
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 15px;
  border: ${(props) => (props.selected ? '2px solid #FDC57A' : '1px solid #ddd')};
  width: 100%;
  max-width: 280px; 
  box-shadow: ${(props) => (props.selected ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none')};
  cursor: pointer;
  color: ${(props) => (props.selected ? '#F07F23' : '#7E7E7E')};
  transition: all 0.2s;
`;

// Avatar icon styling
const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border: ${(props) => (props.selected ? '2px solid #FDC57A' : 'none')}; /* Highlight when selected */
  border-radius: 50%;
  color: ${(props) => (props.selected ? '#F07F23' : '#7E7E7E')};
`;

// Account text styling (always centered)
const AccountText = styled.p`
  font-size: 16px;
  text-align: center; 
  margin-left: 10px;
  flex-grow: 1;
`;

// Tick icon styling
const Tick = styled.img`
  width: 20px;
  height: 20px;
  visibility: ${(props) => (props.selected ? 'visible' : 'hidden')}; /* Only visible when selected */
`;

// Next button styling
const NextButton = styled.button`
  background-color: #fdc57a;
  padding: 12px 40px;
  border-radius: 50px;
  border: none;
  width: 90%;
  max-width: 400px;
  cursor: pointer;
  margin-bottom: 40px;
  &:hover {
    background-color: #e5b46a; 
  }
`;

// Text inside the next button
const ButtonText = styled.p`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

export default SignUp_UserTypeScreen;

//note to correct the error notifier on account selection