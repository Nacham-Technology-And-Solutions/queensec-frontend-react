import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import QueensecLogo from './Assets/Queensec_1.png';
import OrderRideImage from './Assets/undraw_order_ride_re_372k_1.png';


const SplashScreen = () => {
  const navigate = useNavigate();

  
  localStorage.clear();

  const handleNext = () => {
    navigate('/sign-up-user-type');
    
  }
  return (
    <Wrapper>
      <ContentWrapper>
  
        <HeaderText>Hello,</HeaderText>
        <SubText>Welcome you to your tax gateway</SubText>
      
        <IconsWrapper>
          <LogoImage src={QueensecLogo} alt="Queensec Logo" />
        </IconsWrapper>
        
      
        <IconsWrapper>
          <RideImage src={OrderRideImage} alt="Order Ride Illustration" />
        </IconsWrapper>
        
        <ButtonWrapper>
          <NextButton onClick={handleNext}>Next</NextButton>
        </ButtonWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default SplashScreen;

// Styled Components
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;


const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  width: 100%;
  max-width: 375px;
  padding: 20px;
  background-color: white;
  border-radius: 12px;
  margin-top: -50px; /* Move the entire content up */
  height: 85vh; /* Full screen height */
  padding: 40px; /* Add more padding for space */
`;

const HeaderText = styled.h1`
  font-size: 40px;
  font-weight: bold;
  margin-right: 60px; /* Add some padding to the left for spacing */

`;

const SubText = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 40px; /* Increased space between subtext and logo */
`;
const IconsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-top: 20px; /* Add space between elements */
`;

const LogoImage = styled.img`
  width: 120px;
  height: auto;
  margin-right: 60px;
  margin-bottom: 80px;
  margin-top: -40px; /* Move the logo up */
`;

const RideImage = styled.img`
  width: 100%; /* Make the image full width */
  height: auto;
  margin-left: 0; /* Center it, so no margin-left */
  margin-bottom: 60px; /* Add some space below the image if needed */
  margin-top: 45px;
`;


const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const NextButton = styled.button`
  background-color: #f7c28e;
  font-size: 18px;
  color: #e06500;
  border: none;
  padding: 15px 30px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;
  width: 320px;
  text-align: center;
   margin-top: 10px; /*
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
   transition: background-color 0.3s;
`;