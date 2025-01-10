import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LeftIcon from '../assets/left.png';
// import clayIcon from '../assets/clay.png';
// import gypsumIcon from '../assets/gypsum.png';
// import ironOreIcon from '../assets/ironore.png';
// import marbleIcon from '../assets/marble.png';
import aquariumIcon from '../assets/aquarium.png'; 
import { useUser } from '../context/UserContext';
import BottomNavigator from '../components/BottomNavigator/BottomNavigator';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const TransactionPage = () => {
  const navigate = useNavigate();
  const { user } = useUser(); // Assuming useUser provides user details
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  // const statusParam = queryParams.get('status');

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/transactions`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        if (response.data?.data?.transactions) {
          setTransactions(response.data.data.transactions);
        }
      } catch (error) {
        console.error('Error fetching transactions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [user.token]);

  const handleMineralClick = (transactionId, mineralName) => {
    navigate('/transaction-history-mineral', { state: { transactionId, mineralName } });
  };

  const goToDashboard = () => {
    if (user?.accountType === 'federal_agency') {
      navigate('/Enterprise-Dashboard');
    } else if (user?.accountType === 'vendor') {
      navigate('/Vendors-Dashboard');
    } else if (user?.accountType === 'individual') {
      navigate('/dashboard-page');
    } else {
      console.warn('Unknown account type');
    }
  };


  // if (statusParam === 'cancelled') {
  //   setStatus('cancelled');
  // } else if (statusParam === 'completed') {
  //   setStatus('completed');
  // } else {
  //   setStatus('failed');
  // }
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
              onClick={() => handleMineralClick(transaction.id, transaction.mineral_name)}
            >
              <IconContainer>
                <img
                  src={transaction.mineral_image || aquariumIcon}
                  alt={transaction.mineral_name}
                />
              </IconContainer>
              <TransactionDetails>
                <ItemTitle>{transaction.mineral_name}</ItemTitle>
                <Status style={{ color: transaction.status === 'completed' ? '#39e600' : '#cc3300' }}>
                  {transaction.status}
                </Status>
              </TransactionDetails>
              <AmountContainer>
                <AmountToday>{`₦${parseFloat(transaction.amount).toLocaleString()}`}</AmountToday>
                <DateText>{new Date(transaction.date).toLocaleDateString()}</DateText>
              </AmountContainer>
            </TransactionItem>

          ))}
        </Transactions>
      )}

      <BottomNavigator
        currentPage='transactions'
        dashboardLink='/dashboard-page'
        transactionLink='#' ///transactions
        notificationLink='/Notifications-page'
        profileLink='/user-profile'
      />

      {/* <BottomNav>
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
      </BottomNav> */}
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

const Status = styled.div`
  color: ${({ status }) => (status === 'completed' ? 'black' : 'red')};
  font-size: 11.5px;
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
  max-height: 100vh; /* Set maximum height relative to viewport */
  overflow-y: auto; /* Enable vertical scrolling */
  padding: 7px; /* Add padding for spacing */
  box-sizing: border-box;
  margin-top: 10px;
`;

const TransactionDate = styled.div`
  font-size: 14px;
  color: #999;
  margin-top: 15px;
`;

const TransactionItem = styled.div`
  display: flex;
  justify-content: space-between; /* Distribute space evenly */
  align-items: center; /* Align vertically */
  padding: 10px 0;
  border-bottom: 0px solid #e0e0e0; /* Separator */
  cursor: pointer;
  flex-wrap: wrap; /* Allow wrapping on small screens */

  // &:last-child {
  //   border-bottom: none; /* Remove border for the last item */
  // }
`;

const IconContainer = styled.div`
  background-color: transparent;
  padding: -10px; /* Add padding for proper spacing */
  border-radius: 50%;
  width: 48px;
  height: 48px; /* Consistent size for icons */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px; /* Add spacing from text */
  margin-left: -10px; /* Add spacing from text */

`;



const TransactionDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* Allow details to take up remaining space */
  margin-right: 10px; /* Adjust for spacing */
  overflow: hidden; /* Prevent overflow */
  text-overflow: ellipsis; /* Ensure long text is truncated */
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
  margin-left: auto; /* Push to the right */
`;


const AmountToday = styled.p`
  color: #f07f23;
  font-family: Ubuntu;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.15399999916553497px;
  margin-bottom: 4px;
`;

const DateText = styled.p`
  font-size: 14px;
  color: #67728A;
  font-family: Ubuntu, sans-serif;
  font-weight: 500;
  margin: 0;
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

// Responsive Media Queries for Transactions Container
const StyledContainer = styled.div`
  @media (max-width: 768px) {
    ${Transactions} {
      max-height: 50vh; /* Reduce height for smaller screens */
    }

    ${TransactionItem} {
      flex-direction: column; /* Stack items vertically on small screens */
      align-items: flex-start; /* Align items to the start */
      gap: 10px; /* Add spacing between elements */
    }
  }
`;

export default TransactionPage;
