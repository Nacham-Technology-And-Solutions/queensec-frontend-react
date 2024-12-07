import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LeftIcon from '../Assets/left.png';
import clayIcon from '../Assets/clay.png';
import gypsumIcon from '../Assets/gypsum.png';
import ironOreIcon from '../Assets/ironore.png';
import marbleIcon from '../Assets/marble.png';
import aquariumIcon from '../Assets/aquarium.png';
import folder_N from '../Assets/folder_N.png';
import transactions_C from '../Assets/transactions_C.png';
import notification_N from '../Assets/notification_N.png';
import profile_N from '../Assets/profile_N.png';
import { useUser } from '../UserContext';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const TransactionPage = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch transactions when the component loads
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/transactions`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setTransactions(response.data.data); // Assuming `data` contains the transactions array
        setLoading(false);
      } catch (error) {
        console.error('Error fetching transactions:', error);
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [user.token]);

  // const handleMineralClick = (mineralName) => {
  //   navigate(-1, { state: { mineralName } });
  // };

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

  return (
    <Container>
      <Header>
        <BackButton src={LeftIcon} alt="Back" onClick={goToDashboard} />
        <Title>Transactions</Title>
      </Header>

      {loading ? (
        <LoadingMessage>Loading transactions...</LoadingMessage>
      ) : transactions.length === 0 ? (
        <NoTransactionsMessage>No transactions available</NoTransactionsMessage>
      ) : (
        <Transactions>
          {transactions.map((transaction, index) => (
            <TransactionItem
              key={index}
              onClick={() => handleMineralClick(transaction.mineralName)}
            >
              <IconContainer>
                <img
                  src={
                    transaction.mineralName === 'Clay'
                      ? clayIcon
                      : transaction.mineralName === 'Gypsum'
                      ? gypsumIcon
                      : transaction.mineralName === 'Iron Ore'
                      ? ironOreIcon
                      : transaction.mineralName === 'Marble'
                      ? marbleIcon
                      : aquariumIcon
                  }
                  alt={transaction.mineralName}
                />
              </IconContainer>
              <TransactionDetails>
                <ItemTitle>{transaction.mineralName}</ItemTitle>
                <ItemCode>{transaction.reference}</ItemCode>
              </TransactionDetails>
              <AmountContainer>
                <AmountToday>{`₦${transaction.amount}`}</AmountToday>
                <DateText>{transaction.date}</DateText>
              </AmountContainer>
            </TransactionItem>
          ))}
        </Transactions>
      )}

      <BottomNav>
        <NavIcon src={folder_N} onClick={goToDashboard} alt="Dashboard" />
        <NavIconContainer>
          <NavIcon
            src={transactions_C}
            onClick={goToTransactions}
            alt="Transactions"
          />
          <DashboardLabel>Transactions</DashboardLabel>
        </NavIconContainer>
        <NavIcon
          src={notification_N}
          onClick={goToNotifications}
          alt="Notifications"
        />
        <NavIcon src={profile_N} onClick={goToProfile} alt="Profile" />
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
const LoadingMessage = styled.div`
font-size: 16px;
color: #555;
text-align: center;
margin-top: 20px;
`;

const NoTransactionsMessage = styled.div`
font-size: 16px;
color: #999;
text-align: center;
margin-top: 20px;
`;

const BottomNav = styled.div`
// display: flex;
// justify-content: space-around;
// align-items: center;
// margin-bottom: -150px;
// margin-left: -20px;
// padding: 15px 0;
// background-color: white;
// border-radius: 10px;
// width: 110%;
// position: relative;
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
