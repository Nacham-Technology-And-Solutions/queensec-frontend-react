
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LeftIcon from '../../../assets/left.png';
import AccountTypeSwitch from '../../../components/AccountTypeSwitch/AccountTypeSwitch';

import { ReactComponent as CorperateIcon } from '../../../assets/icons/ph_building-office.svg';
import { ReactComponent as VendorIcon } from '../../../assets/icons/fluent_payment-32-regular.svg';

const VITScreenOneTicketMode = () => {
  const navigate = useNavigate();
  const [selectedIssueMethod, setSelectedIssueMethod] = useState(null);

  const handleSelectAccount = (issueMethod) => {
    setSelectedIssueMethod(issueMethod);
  };

  const handleProceed = () => {
    // Save amount to memory.
    localStorage.setItem('issue_method', selectedIssueMethod);

    // Navigate to Second Screen
    if (selectedIssueMethod) {
      navigate('/vendor-it-two-details');
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
        <Title>Issue Ticket</Title>
      </TopBar>

      <TabContainer>
        <Tab active>Issue Method</Tab>
        <Tab>Details</Tab>
        <Tab>Debit</Tab>
        <Tab>Ticket</Tab>
      </TabContainer>

      <UserTypeContainer>
        <AccountTypeSwitch
          label="Registered User"
          icon={<VendorIcon width="35" height="35" />}
          selected={selectedIssueMethod === 'registered_user'}
          onClick={() => handleSelectAccount('registered_user')}
        />

        <AccountTypeSwitch
          label="Quick Sales"
          icon={<CorperateIcon width="35" height="35" />}
          selected={selectedIssueMethod === 'quick_sales'}
          onClick={() => handleSelectAccount('quick_sales')}
        />

      </UserTypeContainer>


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

export default VITScreenOneTicketMode;
