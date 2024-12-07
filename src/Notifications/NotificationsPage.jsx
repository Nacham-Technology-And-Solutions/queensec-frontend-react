import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import transactions_N from '../Assets/transactions_N.png';
import notification_C from '../Assets/notifications_C.png';
import profile_N from '../Assets/profile_N.png';
import profile_C from '../Assets/profile_C.png';
import folder_N from '../Assets/folder_N.png';
import planeIcon from '../Assets/planeicon.png';
import { useUser } from '../UserContext';
const NotificationPage = () => {

    const navigate = useNavigate();
  const { user } = useUser(); 
  // const accountType = localStorage.getItem()
    const goToDashboard = () => {
      if (user?.accountType === 'federal_agency') {
        navigate('/Enterprise-Dashboard');
      } else if (user?.accountType === 'vendor') {
        navigate('/Vendors-Dashboard');
      }  else if (user?.accountType === 'individual') {
        navigate('/dashboard-page');
      }
    };
    const goToTransactions = () => navigate('/Transactions-page');
    const goToNotifications = () => navigate('/Notifications-page');
    const goToProfile = () => navigate('/User-Profile');
    // const Navigationdetailspage = () => navigate('/User-Profile');

    return (
        <Container>
            <Header>
                <Title>Transaction</Title>
            </Header>

            <Date>16 Sep 2024</Date>


            <NotificationContainer onClick={() => navigate('/Notifications-Details-page')}>

                <PlaneIcon src={planeIcon} alt="Plane Icon" />
                <IconContainer>
                    <NotificationText>More ways to pay your tax</NotificationText>
             </IconContainer>
                <PreviewMessage>
                    We have added two payment gateways to make your payment experience faster
                    </PreviewMessage>
               
            </NotificationContainer>   

         <BottomNav>
                <NavIcon onClick={goToDashboard} src={folder_N} alt="Dashboard" />
                <NavIcon onClick={goToTransactions} src={transactions_N} alt="Transactions" />
                <NavIconContainer onClick={goToNotifications}>
                    <NavIcon src={notification_C} alt="Notifications" />
                    <DashboardLabel>Notifications</DashboardLabel>
                </NavIconContainer>
                <NavIcon onClick={goToProfile} src={profile_N} alt="Profile" />
            </BottomNav>
        </Container>
    );
};

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #F7F9FA;
  height: 100vh;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 30px;
  font-family: 'Ubuntu', sans-serif;
    position: relative;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  font-family: Ubuntu;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0.38px;
  color: #6C3ECF;
  margin-bottom: 45px;
`;

const Date = styled.p`
  font-family: Ubuntu;
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
  font-family: Ubuntu;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.154px;
  color: #414D63;
  margin-left: 40px;
  margin-top: 40px;
`;

const PreviewMessage = styled.p`
  font-family: Ubuntu;
  font-size: 11px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.154px;
  color: #67728A;
  margin-top: -5px;
  margin-left: 40px;
`;

const BottomNav = styled.div`
 display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px 0;
  background-color: white;
  border-radius: 10px;
  width: 100%;
  position: absolute; /* Position it at the bottom of the container */
  bottom: 0px; /* Add spacing from the bottom edge of the container */
  left: 0; /* Align to the left edge of the container */
`
;

const NavIconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavIcon = styled.img`
  width: 27px;
  height: 27px;
`;

const DashboardLabel = styled.span`
  font-size: 12px;
  color: #421B73;
  margin-left: 5px;
`;

export default NotificationPage;
