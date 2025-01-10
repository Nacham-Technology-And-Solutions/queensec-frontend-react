import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as CorperateIcon } from '../../assets/icons/ph_building-office.svg';
import { ReactComponent as VendorIcon } from '../../assets/icons/fluent_payment-32-regular.svg';
import { ReactComponent as IndividualIcon } from '../../assets/icons/carbon_user-avatar-filled-alt.svg';
import { useState } from 'react';
import AccountTypeSwitch from '../../components/AccountTypeSwitch/AccountTypeSwitch';
import Button from '../../components/Button/Button';
import TextButton from '../../components/TextButton/TextButton';
import RegNav from '../../components/RegNav/RegNav';


const SignUpScreenOneUserType = () => {
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

    // Delete All old Registration Data if set
    localStorage.removeItem('basicInfo');
    localStorage.removeItem('contactInfo');
    localStorage.removeItem('account_type');
    localStorage.removeItem('password');
    localStorage.removeItem('password_confirmation');

    // Set New Data
    localStorage.setItem('account_type', selectedAccount);



    // Navigate to Basic Info page
    navigate('/basic-info');
  };

  const handleLogin = () => {
    navigate('/login-page');
  };

  return (
    <Container>
      <RegNav label="Sign Up" onClick={handleBack} />

      <SelectionText>Select user type</SelectionText>

      <UserTypeContainer>
        <AccountTypeSwitch
          label="Individual"
          icon={<IndividualIcon width="35" height="35" />}
          selected={selectedAccount === 'individual'}
          onClick={() => handleSelectAccount('individual')}
        />

        <AccountTypeSwitch
          label="Corporate"
          icon={<CorperateIcon width="35" height="35" />}
          selected={selectedAccount === 'federal_agency'}
          onClick={() => handleSelectAccount('federal_agency')}
        />

        <AccountTypeSwitch
          label="Vendor"
          icon={<VendorIcon width="35" height="35" />}
          selected={selectedAccount === 'vendor'}
          onClick={() => handleSelectAccount('vendor')}
        />

      </UserTypeContainer>


      <Button label="Next" onClick={handleNext} size='large' isSpanWidth={true}  />
      <div>
        <br />
        <span>Have an account? &nbsp; <TextButton onClick={handleLogin} label="Log-In" /></span>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background-color: #f6f6f6;
  padding: 20px;
  align-items: center;
  max-width: 400px; /* Set a max width so it doesn’t expand too much on large screens */
  margin: 0 auto; /* Center the container horizontally */
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

export default SignUpScreenOneUserType;