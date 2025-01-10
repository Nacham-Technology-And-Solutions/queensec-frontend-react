import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import QueensecLogo from '../assets/Queensec_1.png';
import OrderRideImage from '../assets/images/undraw_order_ride_re_372k_1.svg';
import Button from '../components/Button/Button';
import TextButton from '../components/TextButton/TextButton';


const SplashScreen = () => {
  const navigate = useNavigate();


  localStorage.clear();

  const handleClickSignUp = () => {
    navigate('/sign-up-user-type');
  }
  
  const handleClick = () => {
    navigate('/login-page');
  }

  return (
    <Wrapper>
      <ContentWrapper>

        <HeaderText>Hello,</HeaderText>
        <SubText>Welcome to your tax gateway</SubText>

        <IconsWrapper>
          <LogoImage src={QueensecLogo} alt="Queensec Logo" />
        </IconsWrapper>


        <IconsWrapper>
          <RideImage src={OrderRideImage} alt="Order Ride Illustration" />
        </IconsWrapper>


        <ButtonWrapper>
          <Button onClick={handleClick} label="Sign In" isSpanWidth={true}  size='large'/>
          {/* <NextButton onClick={handleClick}>Next</NextButton> */}
        </ButtonWrapper>
        <br />
        <ButtonWrapper>
          New to Kadamines? &nbsp;
          <TextButton onClick={handleClickSignUp} label="Sign Up" span='span' size='large'/> 
        </ButtonWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

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
  height: 100vh; /* Full screen height */
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

export default SplashScreen;