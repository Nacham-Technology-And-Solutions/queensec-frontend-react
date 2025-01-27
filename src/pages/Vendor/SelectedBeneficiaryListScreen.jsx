import React from 'react';
import styled from 'styled-components';
// import searchIcon from '../../assets/searchicon.png';
import clayIcon from '../../assets/clay.png';
import gypsumIcon from '../../assets/gypsum.png';
import ironOreIcon from '../../assets/ironore.png';
import marbleIcon from '../../assets/marble.png';
import aquariumIcon from '../../assets/aquarium.png';
import LeftIcon from '../../assets/left.png';
import { useNavigate } from 'react-router-dom';
const SelectedBeneficiaryScreen = () => {
    const payments = [
        { mineral: 'Clay', amount: 'N21,000', payId: 'Nas/0003', date: 'Today', icon: clayIcon },
        { mineral: 'Gypsum', amount: 'N26,000', payId: 'Nas/0004', date: 'Yesterday', icon: gypsumIcon },
        { mineral: 'Iron Ore', amount: 'N40,000', payId: 'Nas/0003', date: '01, Sep 2024', icon: ironOreIcon },
        { mineral: 'Marble', amount: 'N15,000', payId: 'Nas/0003', date: '09, Aug 2024', icon: marbleIcon },
        { mineral: 'Aquarium', amount: 'N26,000', payId: 'Nas/0003', date: '08, Aug 2024', icon: aquariumIcon },
    ];
    const navigate = useNavigate();
    return (
        <Container>
            <Header>
                <BackIcon src={LeftIcon} alt="Back"  onClick={() => navigate(-1)} />
                <Title>User One</Title>
            </Header>
         
            <PaymentsSection>
                <SectionHeader>Recent Payments</SectionHeader>
                <PaymentList>
                    {payments.map((payment, index) => (
                        <PaymentItem key={index}>
                            <Icon src={payment.icon} alt={payment.mineral} />
                            <PaymentDetails>
                                <Mineral>{payment.mineral}</Mineral>
                                <PayId>{payment.payId}</PayId>
                            </PaymentDetails>
                            <AmountDetails>
                                <Amount>{payment.amount}</Amount>
                                <Date>{payment.date}</Date>
                            </AmountDetails>
                        </PaymentItem>
                    ))}
                </PaymentList>
            </PaymentsSection>
            <MakePaymentButton>Make new payment</MakePaymentButton>
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
    margin-bottom: 16px;
`;

const BackIcon = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
    margin-right: 12px;
`;

const Title = styled.h1`
 width: 86px;
height: 32px;
gap: 0px;
opacity: 0px;
//styleName: Heading/20;

font-size: 20px;
font-weight: 500;
line-height: 32px;
letter-spacing: 0.3799999952316284px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
    color: #6C3ECF;
`;



const PaymentsSection = styled.div`
    margin-top: 20px;
`;

const SectionHeader = styled.h2`
width: 108px;
height: 20px;
gap: 0px;
opacity: 0px;

//styleName: Paragraph/Normal;

font-size: 14px;
font-weight: 400;
line-height: 20px;
letter-spacing: -0.15399999916553497px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;

    color: #414D63;
    margin-bottom: 25px;
`;

const PaymentList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 45px;
    margin-bottom: 90px;
`;

const PaymentItem = styled.div`
    display: flex;
    align-items: center;

`;

const Icon = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 12px;
    margin-right: 12px;
`;

const PaymentDetails = styled.div`
    flex: 1;
`;

const Mineral = styled.h3`
   width: 55px;
height: 20px;
gap: 0px;
opacity: 0px;
//styleName: Paragraph/Bold;

font-size: 14px;
font-weight: 700;
line-height: 20px;
letter-spacing: -0.15399999916553497px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;

    color: #414D63;
    margin: 0;
`;

const PayId = styled.p`
    
    font-size: 12px;
    color: #67728a;
    margin: 0;
`;

const AmountDetails = styled.div`
    text-align: right;
`;

const Amount = styled.h3`
    
    font-size: 16px;
    font-weight: 700;
    color: #F07F23;

height: 20px;
gap: 0px;
opacity: 0px;

    margin: 0;
`;

const Date = styled.p`
    
    font-size: 12px;
    color: #67728a;
    margin: 0;
`;

const MakePaymentButton = styled.button`
    width: 60%;
    padding: 15px;
    background-color: #FDE5C0;
    color: #F07F23;
    border: none;
    border-radius: 30px;
    
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    margin-top: 24px;
    margin-left: 80px;
`;

export default SelectedBeneficiaryScreen;
