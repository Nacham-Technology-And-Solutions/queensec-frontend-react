import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DASHBOARD from '../Assets/DASHBOARD.png';
import folder_C from '../Assets/folder_C.png';
import transactions_N from '../Assets/transactions_N.png';
import notification_N from '../Assets/notification_N.png';
import profile_N from '../Assets/profile_N.png';
import { VictoryChart, VictoryLine, VictoryTheme, VictoryTooltip, VictoryAxis } from 'victory';
import mineral_icon from '../Assets/mineral_icon.png';
import logo from '../Assets/Queensec_1.png';
import Vector from '../Assets/Vector.png'; // Icon for viewing full chart
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

const VendorsDashboard = () => {
  const [userData, setUserData] = useState({
    name: 'Vendor Bako',
    accountType: 'Vendor',
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


          setUserData({
            name: `${user.business_name}`,
            accountType: 'Vendor', // You can customize this logic as needed
          });

          localStorage.setItem('phone', user.phone);
          localStorage.setItem('name', user.first_name);
          localStorage.setItem('email', user.email);
          localStorage.setItem('payer_id', user.id);
          localStorage.setItem('tax_id', user.tax_id);
          localStorage.setItem('username', user.username);
          localStorage.setItem('account_type', user.account_type);
          localStorage.setItem('state', user.state);
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
        const url = `${API_BASE_URL}/transactions/chart`;
        const response = await axios.get(url, {
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
    clay: "Assets/clay.png",
    aquarium: "Assets/aquarium.png",
    gypsum: "Assets/gypsum.png",
    ironore: "Assets/ironore.png",
    marble: "Assets/marble.png",
  };
  
  // Function to get the correct mineral icon or default
  const getMineralIcon = (mineralName) => {
    return mineralIcons[mineralName.toLowerCase()] || "Assets/default.png";
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
    navigate('/Vendor-User-MakePayment-Screen'); // Use navigate to change routes
  };
  
  
  const navigate = useNavigate();
  const truncateText = (text, maxLength) => 
    text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

  const goToDashboard = () => navigate('/dashboard-page');
  const goToTransactions = () => navigate('/Transactions-page');
  const goToNotifications = () => navigate('/Notifications-page');
  const goToProfile = () => navigate('/User-Profile');
  const haulerScreen = () =>  navigate('/Hauler-Lists')
  return (
    <DashboardContainer>
      {/* Header */}
      <Header>
        <DashboardText>
          <h1>Dashboard</h1>
          <DateText>{date}</DateText>
        </DashboardText>
        <Logo src={logo} alt="Logo" />
      </Header>

      {/* Dashboard Card */}
      <DashboardCard background={DASHBOARD}>
        <UserDetails>
          <WelcomeMessage>Welcome,</WelcomeMessage>
          <UserName>{truncateText(userData.name, 10)}</UserName>
          <LabelTextB>Account type</LabelTextB>
          <UserInfoDataB>{userData.accountType}</UserInfoDataB>
        </UserDetails>
        <MakePaymentButton onClick={handleMakePayment}>Make Payment</MakePaymentButton>

      </DashboardCard>
      
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
              tickFormat={(t) => `N ${(t / 1000).toFixed(0)}k`}  // Format Y-axis values as "N 10k"
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
                data: { stroke: '#ffa726' },
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
          {/* onClick={navigate('/Transactions-page') */}
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
          
    <Footer>
        <p>Powered ⚡ by Queensec Global</p>
      </Footer>

      {/* Bottom Navigation */}
      <BottomNav>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <NavIcon src={folder_C} alt="Dashboard" className="selected" />
          <DashboardLabel>Dashboard</DashboardLabel>
        </div>
        <NavIcon src={transactions_N} onClick={goToTransactions} alt="Transactions" />
        <NavIcon src={notification_N} onClick={goToNotifications} alt="Notifications" />
        <NavIcon src={profile_N} onClick={goToProfile} alt="Profile" />
      </BottomNav>
    </DashboardContainer>
  );
};


// Styled Components
const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-family: 'Arial, sans-serif';
  max-width: 400px;
  margin: 0 auto;
  background-color: #f9f9f9;
  height: 100%;
    @media (max-width: 768px) {
    padding: 15px;
  }
  @media (max-width: 480px) {
    padding: 10px;
    border-radius: 15px;
  }
`;

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
const NoDataText = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 16px;
  color: #888;
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

const DashboardCard = styled.div`
  background-size: 100% 100%;
  padding: 30px;
  position: relative;
  border-radius: 10px;
  background-image: url(${(props) => props.background});
  margin-bottom: 20px;
  min-height: 255px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
      @media (max-width: 768px) {
   gap: 30px;
  }
  @media (max-width: 480px) {
   gap: 30px;
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


const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
    @media (max-width: 480px) {
    gap: 5px;
  }
`;

const WelcomeMessage = styled.p`
  font-size: 11px;
  color: #67728A;
  margin-left: 35px;
  margin-bottom: 5px;
  margin-top: 55px;
`;

const UserName = styled.h2`
  font-size: 15px;
  color: #CEECFF;
  margin-left: 35px;
  font-weight: 700;
  margin-top: -3.5px;
  margin-bottom: 57px;
  padding-bottom: 15px;
`;

const LabelTextA = styled.p`
  font-size: 11px;
  color: #67728A;
  margin-left: 35px;
  
`;

const UserInfoDataA = styled.p`
  font-size: 14px;
  color: #CEECFF;
  font-weight: 700;
  margin-left: 35px;
 margin-top: -2px;
`;

const LabelTextB = styled.p`
  font-size: 11px;
  color: #67728A;
  text-align: right;
  margin-top: -115px;
  margin-right: 45px;
`;

const UserInfoDataB = styled.p`
  font-size: 14px;
  color: #CEECFF;
  font-weight: 700;
  text-align: right;
  margin-top: -5px;
  margin-right: 43px;
`;

const MakePaymentButton = styled.button`
  background-color: #FDE5C0;
  color: #F07F23;
  padding: 20px 30px;
  border: none;
  border-radius: 40px;
  font-size: 14px;
  cursor: pointer;
  align-self: flex-end;
  margin-bottom: 27px;
  margin-right: 160px;
    @media (max-width: 480px) {
    font-size: 12px;
    padding: 10px 15px;
  }
`;

const ChartSection = styled.div`
  margin: 20px 0;
  width: 100%;
`;

const ChartHeader = styled.div`
  display: flex;
  align-items: center;
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
  margin-left: 250px;
`;
const TransactionChart = styled.div`
  width: 100%;
`;

const Transactions = styled.div`
  margin-top: 20px;
  background-color: white;
  padding: 10px 15px;
  border-radius: 10px;
  width: 102%;
  margin-left: -19px;
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

const Footer = styled.footer`
  display: flex;
  justify-content: right;
  align-items: right;
  padding: 20px 0;
  background-color: #f9f9f9; /* Light gray background */
  border-top: 1px solid #e0e0e0; /* Subtle top border */
  margin-top: -10px;

  p {
    font-family: 'Ubuntu', sans-serif;
    font-size: 11px;
    font-weight: 200;
    color: #6c3ecf; /* Primary color for branding */
    text-align: center;
  }

  p span {
    font-weight: 400;
    color: #ff9800; /* Highlight for the lightning symbol */
  }
`;

const BottomNav = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px 0;
  background-color: white;
  border-radius: 0px;
  width: 438px;
  position: fixed; /* Fix it to the viewport */
  bottom: 0; /* Always stay at the bottom of the screen */
  margin-left: -19px; /* Align to the left edge of the screen */
  z-index: 100; /* Ensure it stays on top of other content */
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1); /* Optional shadow for better visibility */
    @media (max-width: 480px) {
    padding: 8px 0;
    width: 100%;
  }
`;

const NavIcon = styled.img`
width: 30px;
height: 30px;

&.selected {
  border-bottom: 0px solid #ffc107;
}
`;

const DashboardLabel = styled.span`
color: #421B73;
font-size: 14px;
font-weight: bold;
margin-left: 8px; /* Space between icon and text */
`;


export default VendorsDashboard;
