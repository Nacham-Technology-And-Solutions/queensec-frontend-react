import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LeftIcon from '../Assets/left.png';
import clayIcon from '../Assets/clay.png';
import gypsumIcon from '../Assets/gypsum.png';
import ironOreIcon from '../Assets/ironore.png';
import marbleIcon from '../Assets/marble.png';
import aquariumIcon from '../Assets/aquarium.png';
// import UbuntuFont from '../Assets/Ubuntu/Ubuntu-Regular.ttf';
import folder_C from '../Assets/folder_C.png';
import transactions_C from '../Assets/transactions_C.png';
import notification_N from '../Assets/notification_N.png';
import profile_N from '../Assets/profile_N.png';
import profile_C from '../Assets/profile_C.png';
import folder_N from '../Assets/folder_N.png';
import { useUser } from '../UserContext';

const TransactionPage = () => {
  const navigate = useNavigate();
  const { user } = useUser(); 
  const handleMineralClick = (mineralName) => {
    navigate(-1, { state: { mineralName } });
  };
  const goToDashboard = () => {
    if (user?.accountType === 0) {
      navigate('/Enterprise-Dashboard');
    } else if (user?.accountType === 2) {
      navigate('/Vendors-Dashboard');
    } else {
      navigate('/dashboard-page');
    }
  };

  const goToTransactions = () => navigate('/Transactions-page');
  const goToNotifications = () => navigate('/Notifications-page');
  const goToProfile = () => navigate('/User-Profile');
  return (
    <Container>
      <Header>
        <BackButton src={LeftIcon} alt="Back" onClick={() => navigate(-1)} />
        <Title>Transaction </Title>
      </Header>

      <Transactions>
        <TransactionDate>Today</TransactionDate>
        
        <TransactionItem onClick={() => handleMineralClick('Clay')}>
          <IconContainer><img src={clayIcon} alt="Clay" /></IconContainer>
          <TransactionDetails>
            <ItemTitle>Clay</ItemTitle>
            <ItemCode>Nas/0003</ItemCode>
          </TransactionDetails>
          <AmountContainer>
            <AmountToday>₦21,000</AmountToday>
            <DateText>Today</DateText>
          </AmountContainer>
        </TransactionItem>

        <TransactionItem onClick={() => handleMineralClick('Gypsum')}>
          <IconContainer><img src={gypsumIcon} alt="Gypsum" /></IconContainer>
          <TransactionDetails>
            <ItemTitle>Gypsum</ItemTitle>
            <ItemCode>Nas/0004</ItemCode>
          </TransactionDetails>
          <AmountContainer>
            <AmountToday>₦26,000</AmountToday>
            <DateText>Today</DateText>
          </AmountContainer>
        </TransactionItem>

        <TransactionDate>16 Sep 2024</TransactionDate>

        <TransactionItem onClick={() => handleMineralClick('Iron Ore')}>
          <IconContainer><img src={ironOreIcon} alt="Iron Ore" /></IconContainer>
          <TransactionDetails>
            <ItemTitle>Iron Ore</ItemTitle>
            <ItemCode>Nas/0005</ItemCode>
          </TransactionDetails>
          <AmountContainer>
            <AmountToday>₦40,000</AmountToday>
            <DateText>Today</DateText>
          </AmountContainer>
        </TransactionItem>

        <TransactionItem onClick={() => handleMineralClick('Marble')}>
          <IconContainer><img src={marbleIcon} alt="Marble" /></IconContainer>
          <TransactionDetails>
            <ItemTitle>Marble</ItemTitle>
            <ItemCode>Nas/0006</ItemCode>
          </TransactionDetails>
          <AmountContainer>
            <AmountToday>₦15,000</AmountToday>
            <DateText>Today</DateText>
          </AmountContainer>
        </TransactionItem>

        <TransactionItem onClick={() => handleMineralClick('Aquarium')}>
          <IconContainer><img src={aquariumIcon} alt="Aquarium" /></IconContainer>
          <TransactionDetails>
            <ItemTitle>Aquarium</ItemTitle>
            <ItemCode>Nas/0007</ItemCode>
          </TransactionDetails>
          <AmountContainer>
            <AmountToday>₦26,000</AmountToday>
            <DateText>Today</DateText>
          </AmountContainer>
        </TransactionItem>
          </Transactions>
          
          <BottomNav>
       
       
        <NavIcon src={folder_N} onClick={goToDashboard} alt="Dashboard" />
        <NavIconContainer>
        <NavIcon src={transactions_C} onClick={goToTransactions} alt="Transactions" />
          <DashboardLabel>Transactions</DashboardLabel>
              </NavIconContainer>
              <NavIcon src={notification_N} onClick={goToNotifications}alt="Notifications" />
              <NavIcon src={profile_N} onClick={goToProfile}alt="Profile" />
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
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const BackButton = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const Title = styled.h1`
  font-family: Ubuntu;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0.3799999952316284px;
  text-align: left;
  color:  #6C3ECF;
  margin-left: 28px;
`;

const Transactions = styled.div`
  margin-top: 10px;
`;

const TransactionDate = styled.div`
  font-size: 14px;
  color: #999;
  margin-top: 15px;
`;

const TransactionItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  gap: 15px;
  cursor: pointer;
`;

const IconContainer = styled.div`
  background-color: #f0f0f0;
  padding: 8px;
  border-radius: 50%;
  width: 15px;
  height: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TransactionDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemTitle = styled.span`
  font-weight: bold;
  color: #414D63;
  margin-bottom:  6px; 
`;

const ItemCode = styled.span`
  font-size: 12px;
  color: #67728A;
`;

const AmountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: auto;
`;

const AmountToday = styled.p`
  color: #F07F23;
  font-family: Ubuntu;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.15399999916553497px;
  text-align: left;
  margin-bottom: 4.5px;
`;

const DateText = styled.p`
  font-size: 14px;
  color: #67728A;
  font-weight: 500;
  font-family: Ubuntu, sans-serif;
  line-height: 20px;
  margin: 0;
  margin-bottom: 10px;

  
`;
    
const BottomNav = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
margin-top: 150px;
margin-left: -20px;
padding: 15px 0;
background-color: white;
border-radius: 10px;
width: 110%;
position: relative;

`;

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
`
;

export default TransactionPage;
