import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DASHBOARD from '../../assets/DASHBOARD.png';
import { VictoryChart, VictoryLine, VictoryTheme, VictoryTooltip, VictoryAxis } from 'victory';
import mineral_icon from '../../assets/mineral_icon.png';
import logo from '../../assets/Queensec_1.png';
import Vector from '../../assets/Vector.png'; // Icon for viewing full chart
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BottomNavigator from '../../components/BottomNavigator/BottomNavigator';
import PageLayout from '../../components/PageLayout/PageLayout';
import DashboardCardx from '../../components/DashboardCard/DashboardCard';
import Button from '../../components/Button/Button';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const Dashboard = () => {
  const [userData, setUserData] = useState({
    name: 'Musa Bako',
    taxID: 'Nas/Nas/0013',
    accountType: 'Individual',
  });

  const [date, setDate] = useState('');

  useEffect(() => {
    const now = new Date();
    const formattedDate = `${String(now.getDate()).padStart(2, '0')} ${now.toLocaleString('en', { month: 'short' })}`;
    setDate(formattedDate);

    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');



        if (!token) {
          console.error('No token found in localStorage.');
          return;
        }

        const url = `${API_BASE_URL}/user`;
        const response = await axios.get(url, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.status === 200 && response.data) {
          const user = response.data;

          // Update state with user data
          setUserData({
            name: `${user.first_name} ${user.last_name}`,
            taxID: user.tax_id || 'null',
            accountType: user.account_type === 'individual'
              ? 'Individual'
              : 'me' // Default case if account_type doesn't match 1, 2, or 3

          });
          localStorage.setItem('phone', user.phone);
          localStorage.setItem('name', user.first_name);
          localStorage.setItem('email', user.email);
          localStorage.setItem('payer_id', user.id);
          localStorage.setItem('tax_id', user.tax_id);
          localStorage.setItem('username', user.username);
          localStorage.setItem('account_type', user.account_type);
          localStorage.setItem('state', user.state);


          localStorage.setItem('tax_id', user.tax_id);

        } else {
          console.error('Failed to fetch user data:', response.data.message || 'Unknown error.');
        }
      } catch (error) {
        console.error('Error fetching user data:', error.response?.data || error.message);
      }
    };

    fetchUserData();
  }, []);

  const [chartData, setChartData] = useState([
    { day: 'Mon', amount: 10000 },
    { day: 'Tue', amount: 15000 },
    { day: 'Wed', amount: 12000 },
    { day: 'Thu', amount: 8000 },
    { day: 'Fri', amount: 18000 },
    { day: 'Sat', amount: 25000 },
    { day: 'Sun', amount: 10000 },
  ]);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const token = localStorage.getItem('token');
        const uri = `${API_BASE_URL}/transactions/chart`
        const response = await axios.get(uri, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data.success) {
          const rawData = response.data.data;
          // Transform the data to the desired format
          const transformedData = [
            { day: 'Mon', amount: rawData.monday },
            { day: 'Tue', amount: rawData.tuesday },
            { day: 'Wed', amount: rawData.wednesday },
            { day: 'Thu', amount: rawData.thursday },
            { day: 'Fri', amount: rawData.friday },
            { day: 'Sat', amount: rawData.saturday },
            { day: 'Sun', amount: rawData.sunday },
          ];
          setChartData(transformedData);


        } else {
          console.error('Failed to load chart data:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching chart data:', error.response?.data || error.message);
      }
    };

    fetchChartData();
  }, []);

  const mineralIcons = {
    clay: "assets/clay.png",
    aquarium: "assets/aquarium.png",
    gypsum: "assets/gypsum.png",
    ironore: "assets/ironore.png",
    marble: "assets/marble.png",
  };

  // Function to get the correct mineral icon or default
  const getMineralIcon = (mineralName) => {
    return mineralIcons[mineralName.toLowerCase()] || "assets/default.png";
  };

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const token = localStorage.getItem("token");
        const url = `${API_BASE_URL}/transactions`;
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data.success) {
          // Access the transactions array
          const transactions = response.data.data.transactions;

          const transactionList = transactions.map((transaction, index) => ({
            id: transaction.id || index + 1, // Use transaction ID or fallback to index
            name: transaction.mineral_name || "Unknown Mineral",
            mineralNumber: transaction.ticket_id ? `Nas/${transaction.ticket_id.id}` : "N/A",
            amount: `₦${transaction.amount || 0}`, // Ensure amount is handled properly
            date: transaction.date
              ? new Date(transaction.date).toLocaleDateString()
              : "Today", // Format or fallback to 'Today'
          }));
          setTransactions(transactionList.slice(0, 5));
        } else {
          console.error("Failed to load transactions:", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching transactions:", error.response?.data || error.message);
      }
    };

    fetchTransactions();
  }, []);




  const [transactions, setTransactions] = useState([

  ]);





  const handleMakePayment = () => {

    // Delete All old Payment Data if set 
    localStorage.removeItem('mineral_id');
    localStorage.removeItem('mineral_sub_id');
    localStorage.removeItem('selectedCategoryPrice');
    localStorage.removeItem('selectedCategory');
    localStorage.removeItem('haulerTypeMode');
    localStorage.removeItem('driverName');
    localStorage.removeItem('phoneNumber');
    localStorage.removeItem('loadingPoint');
    localStorage.removeItem('offloadingPoint');
    localStorage.removeItem('payee_hauler_id');
    localStorage.removeItem('hauler_type_id');
    localStorage.removeItem('number_plate');
    localStorage.removeItem('haulers_count');
    localStorage.removeItem('haulers');
    localStorage.removeItem('haulerTypes');

    navigate('/mp-one-vehicle'); // Use navigate to change routes
  };
  const navigate = useNavigate();

  const goToTransactions = () => navigate('/transactions');

  const truncateText = (text, maxLength) =>
    text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

  const haulerScreen = () => navigate('/my-haulers-list')
  return (
    <PageLayout>
      {/* Header */}
      <Header>
        <DashboardText>
          <h1>Dashboard</h1>
          <DateText>{date}</DateText>
        </DashboardText>
        <Logo src={logo} alt="Logo" />
      </Header>

      {/* Dashboard Card */}
      <DashboardCardx
        topLeft={truncateText(userData.name, 17)} topLeftLabel={"Welcome,"}
        topRight={userData.accountType} topRightLabel={"Account Type:"}
        bottomLeft={userData.taxID} bottomLeftLabel={"Tax ID Number:"}
        bottomRight={<Button label="Make Payment" onClick={handleMakePayment} size='mini' isShort={true} />} bottomRightLabel={""}
      />

      <HaulersBtn onClick={haulerScreen}>Haulers</HaulersBtn>

      {/* Transaction Chart */}
      <ChartSection>
        <ChartHeader>
          <ChartTitle>Transactions Chart</ChartTitle>
          <ViewFullChartIcon src={Vector} alt="View full chart" />
        </ChartHeader>
        <TransactionChart>
          <VictoryChart theme={VictoryTheme.material} domainPadding={{ x: 20, y: 20 }}>
            {/* X-axis */}
            <VictoryAxis
              style={{
                tickLabels: { fontSize: 12, padding: 5, fill: '#333' },
              }}
            />

            {/* Y-axis with formatted labels */}
            <VictoryAxis
              dependentAxis
              tickFormat={(t) => `N ${(t / 1000).toFixed(0)}k`} // Format Y-axis values as "N 10k"
              style={{
                tickLabels: { fontSize: 12, padding: 5, fill: '#333' },
              }}
            />

            <VictoryLine
              data={chartData}
              x="day"
              y="amount"
              labels={({ datum }) => `₦${datum.amount}`}
              labelComponent={<VictoryTooltip />}
              style={{
                data: { stroke: '#ffa726', strokeWidth: 2 },
                parent: { border: '1px solid #ccc' },
              }}
            />
          </VictoryChart>
        </TransactionChart>
      </ChartSection>

      {/* Transaction List */}
      <Transactions>
        <TransactionsHeader>
          <h3>Transactions</h3>
          <ViewAllButton onClick={goToTransactions}>View All</ViewAllButton>
        </TransactionsHeader>
        <ul>
          {transactions.map((transaction) => (
            <TransactionItem key={transaction.id}>
              <TransactionLeft>
                <img src={transaction.mineral_image || mineral_icon} alt="mineral icon" />
                <TextContainer>
                  <span>{transaction.name}</span>
                  <span>{transaction.mineralNumber}</span>
                </TextContainer>
              </TransactionLeft>
              <TransactionRight>
                <span className="amount">{transaction.amount}</span>
                <span className="date">{transaction.date}</span>
              </TransactionRight>
            </TransactionItem>
          ))}
        </ul>
      </Transactions>

      {/* Bottom Navigation */}
      <BottomNavigator
        currentPage='dashboard'
        dashboardLink='#' // /dashboard
        transactionLink='/transactions'
        notificationLink='/Notifications-page'
        profileLink='/user-profile'
      />

    </PageLayout>
  );
};

// Styled Components


const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const DashboardText = styled.div`
  color: #6C3ECF;
  h1 {
    font-size: 20px;
    margin: 0;
  }
`;

const DateText = styled.p`
  font-size: 14px;
  color: #AEC1CC;
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;
   @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`;

const HaulersBtn = styled.button`
color: #F07F23;
padding: none;
font-family: Ubuntu;
font-size: 14px;
font-weight: 500;
line-height: 20px;
letter-spacing: -0.15399999916553497px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
width: 49px;
height: 20px;
gap: 0px;
opacity: 0px;

margin-bottom: -30px;
background: none; 
  background-color: transparent; 
  border: none; 
  cursor: pointer
`

const ChartSection = styled.div`
  margin: 20px 0;
  width: 100%;
`;

const ChartHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const ChartTitle = styled.p`
  color: #414D63;
  font-family: 'Ubuntu', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.154px;
  margin-right: 8px;
`;

const ViewFullChartIcon = styled.img`
  width: 20px;
  height: 20px;
  // margin-left: 250px;
`;
const TransactionChart = styled.div`
  width: 100%;
`;

const Transactions = styled.div`
  margin-top: 20px;
  background-color: white;
  padding: 10px 15px;
  padding-bottom: 20px;
  border-radius: 10px;
  width: 100%;
    margin-left: -15px;
     padding-bottom: 15px;
`;

const TransactionsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    color: #414D63;
    font-family: Ubuntu;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.15399999916553497px;
    text-align: left;
  }
`;

const ViewAllButton = styled.button`
  background: transparent;
  border: none;
  color: #414D63;
  font-weight: bold;
  cursor: pointer;
`;

const TransactionItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 0px solid #eee;

`;
const TransactionLeft = styled.div`
  display: flex;
  align-items: center; 
  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    margin-left: -42px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-size: 14px;
    color: #414D63;
  }
`;

const TransactionRight = styled.div`
  text-align: right;
  span {
    display: flex;
  }

  span.amount {
    color: #F07F45; /* Changed color for the amount */
    font-weight: bold;
    font-family: Ubuntu;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.15399999916553497px;
    text-align: left;

  }

  span.date {
    font-family: Ubuntu;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.15399999916553497px;
    text-align: left;
    color: #67728A;
  }
`;

export default Dashboard;
