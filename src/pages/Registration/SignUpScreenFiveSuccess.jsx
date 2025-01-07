import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import QueensecLogo from '../../assets/Queensec_1.png';  // Import logo
import CompletedImage from '../../assets/images/undraw_completed_m9ci.svg';  // Import the completed illustration
import Button from '../../components/Button/Button';

const SignUpScreenFiveSuccess = () => {
  const navigate = useNavigate();

  const handleDashboard = () => {
    //Delete All Registration Data
    localStorage.removeItem('basicInfo');
    localStorage.removeItem('contactInfo');
    localStorage.removeItem('account_type');
    localStorage.removeItem('password');
    localStorage.removeItem('password_confirmation');

    navigate('/login-page');  // Navigate to the dashboard
  };

  return (
    <Container>
      <TopBar>
        <LogoContainer>
          <Logo src={QueensecLogo} />
        </LogoContainer>
      </TopBar>

      <Heading>Success</Heading>
      <SubHeading>
        Registration Completed
      </SubHeading>

      <ImageContainer>
        <Completed src={CompletedImage} alt="Registration Completed" />
      </ImageContainer>

      <Button label="Go to Dashboard" onClick={handleDashboard} size='large' span='span' />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  height: 100vh;
  background-color: #f6f6f6;
  padding: 20px;
  align-items: center;
  max-width: 400px; /* Set a max width so it doesn’t expand too much on large screens */
  margin: 0 auto; /* Center the container horizontally */
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 30px;
`;

const LogoContainer = styled.div`
  position: relative;
  padding-bottom: 110px;
  left: 55px;
`;

const Logo = styled.img`
  width: 120px;
  height: auto;
  margin-left: -50px;
`;

const Heading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-top: -30px;
  text-align: center;
`;

const SubHeading = styled.div`
  font-size: 20px;
  color: #666;
  text-align: center;
  margin-top: 10px;
`;

// const HighlightedText = styled.span`
//   background-color: #fdc57a;
//   padding: 0 5px;
//   border-radius: 4px;
// `;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const Completed = styled.img`
  width: 120px;  /* Adjust the size of the image */
  height: auto;
`;

const DashboardButton = styled.button`
  background-color: #fdc57a;
  padding: 12px 40px;
  border-radius: 50px;
  border: none;
  width: 90%;
  max-width: 400px;
  cursor: pointer;
  margin-bottom: 40px;

  &:hover {
    background-color: #e5b46a; 
  }
`;

const ButtonText = styled.p`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

export default SignUpScreenFiveSuccess;
