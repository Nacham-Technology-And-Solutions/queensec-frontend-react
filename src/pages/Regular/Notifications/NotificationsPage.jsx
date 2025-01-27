import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; 
import planeIcon from '../../../assets/planeicon.png';

import { useUser } from '../../../context/UserContext';
import BottomNavigator from '../../../components/BottomNavigator/BottomNavigator';
import PageLayout from '../../../components/PageLayout/PageLayout';
const NotificationPage = () => {

  const navigate = useNavigate();
  const { user } = useUser();
  // const accountType = localStorage.getItem()
  const goToDashboard = () => {
    if (user?.accountType === 'federal_agency') {
      return '/enterprise-dashboard';
    } else if (user?.accountType === 'vendor') {
      return '/vendor-dashboard';
    } else if (user?.accountType === 'individual') {
      return '/dashboard';
    }
  };

  return (
    <PageLayout>
      <Header>
        <Title>Transaction</Title>
      </Header>

      <Date>16 Sep 2024</Date>


      <NotificationContainer onClick={() => navigate('/notifications-details')}>

        <PlaneIcon src={planeIcon} alt="Plane Icon" />
        <IconContainer>
          <NotificationText>More ways to pay your tax</NotificationText>
        </IconContainer>
        <PreviewMessage>
          We have added two payment gateways to make your payment experience faster
        </PreviewMessage>

      </NotificationContainer>

      {/* Bottom Navigation */}
      <BottomNavigator
        currentPage='notifications'
        dashboardLink={goToDashboard()} // 
        transactionLink='/transactions'
        notificationLink='/notifications'
        profileLink='/user-profile'
      />

    </PageLayout>
  );
};

// Styled Components
const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Title = styled.h1` 
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0.38px;
  color: #6C3ECF;
  margin-bottom: 45px;
`;

const Date = styled.p` 
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.154px;
  color: #414D63;
  margin: 0;
  margin-bottom: 35px;
`;

const NotificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PlaneIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  margin-bottom: -60px;
`;

const NotificationText = styled.h2` 
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.154px;
  color: #414D63;
  margin-left: 40px;
  margin-top: 40px;
`;

const PreviewMessage = styled.p` 
  font-size: 11px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.154px;
  color: #67728A;
  margin-top: -5px;
  margin-left: 40px;
`;

export default NotificationPage;
