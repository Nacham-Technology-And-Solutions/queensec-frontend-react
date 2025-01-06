import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import searchIcon from '../assets/searchicon.png';
import calendarIcon from '../assets/calendericon.png';
import LeftIcon from '../assets/left.png';
import clayIcon from '../assets/clay.png';
import gypsumIcon from '../assets/gypsum.png';
import ironOreIcon from '../assets/ironore.png';
import marbleIcon from '../assets/marble.png';
import aquariumIcon from '../assets/aquarium.png';
// import UbuntuFont from '../assets/Ubuntu/Ubuntu-Regular.ttf';

const TransactionHistory = () => {
  const navigate = useNavigate();

  const handleMineralClick = (mineralName) => {
    navigate('/transaction-history-mineral', { state: { mineralName } });
  };

  return (
    <Container>
      <Header>
        <BackButton src={LeftIcon} alt="Back" onClick={() => navigate(-1)} />
        <Title>Transaction History</Title>
      </Header>

      <SearchContainerWrapper>
        <SearchContainer>
          <SearchIcon src={searchIcon} alt="Search" />
          <SearchInput placeholder="Search" />
        </SearchContainer>
        <CalendarIcon src={calendarIcon} alt="Calendar" />
      </SearchContainerWrapper>

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

const SearchContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #FFFFFF;
  border-radius: 8px;
  padding: 18px;
  flex-grow: 1;
  border: 1px black;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  flex-grow: 1;
  padding-left: 10px;
  color: #D9D9D9;
  font-size: 14px;
`;

const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const CalendarIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 10px;
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

export default TransactionHistory;
