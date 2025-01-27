import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import backIcon from '../../../assets/left.png';

const NotificationDetailsPage = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Header>
                <BackButton onClick={() => navigate(-1)}>
                    <BackIcon src={backIcon} alt="Back" />
                </BackButton>
            </Header>
            <Title>More ways to pay your tax</Title>
            <Message>
                We have added two payment gateways to make your payment experience faster.
                <br /><br />
                Lorem ipsum vase sonat. Tivis rutrad fastän nide att sassok kyr. Are hartad. Ler fonoskop i hypovis.
                Derade stenora mäligt, plasperas bloggosfär. Du kan vara drabbad.
                <br /><br />
                Kack. Bonus malus kapselbryggare. Heteor lar, ahar belagt är atis. Treng eurotkig kaning. Vuvís rul,
                dimåras, lökott.
            </Message>
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
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const BackIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const Title = styled.h1` 
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  color: #414D63;
  margin-top: 10px;
  margin-bottom: 20px;
  text-align: left;
`;

const Message = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  color: #67728A;
  padding: 10px;
  height: 100%; /* Adjusts the message content to fill 79% of the container */
  overflow-y: auto; /* Adds scroll if the text exceeds the container height */
`;

export default NotificationDetailsPage;