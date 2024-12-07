import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios for HTTP requests
import LeftIcon from './Assets/left.png'; // Back icon
import QueensecLogo from './Assets/Queensec_1.png'; // Import the logo
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL
const SecurityInfoScreen = () => {
  const navigate = useNavigate();
  const [securityInfo, setSecurityInfo] = useState({
    password: '',
    confirmPassword: '',
  });
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleBack = () => {
    navigate('/contact-info'); // Navigate back to contact info screen
  };

  const handleChange = (e) => {
    setSecurityInfo({
      ...securityInfo,
      [e.target.name]: e.target.value,
    });
  };

  const allowedAccountTypes = [
    'individual',
    'corperate',
    'federal_agency',
    'vendor',
  ];
  
  const handleSubmit = async () => {
    if (!securityInfo.password || !securityInfo.confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }
  
    if (securityInfo.password !== securityInfo.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
  
    // Save password and confirmPassword to localStorage
    localStorage.setItem('password', securityInfo.password);
    localStorage.setItem('password_confirmation', securityInfo.confirmPassword);
  
    const basicInfo = JSON.parse(localStorage.getItem('basicInfo') || '{}'); // Defaults to an empty object if not found
    const contactInfo = JSON.parse(localStorage.getItem('contactInfo') || '{}'); // Same for contactInfo
    const accountType = localStorage.getItem('account_type'); // Retrieve account_type directly
  
    // Validate account_type against allowed values
    if (!allowedAccountTypes.includes(accountType)) {
      alert(`Invalid account type. Allowed values are: ${allowedAccountTypes.join(', ')}`);
      return;
    }
  
    // Map parsed data to the finalData object
    const finalData = {
      first_name: basicInfo.first_name,
      last_name: basicInfo.last_name,
      email: contactInfo.email,
      phone: contactInfo.phone,
      password: localStorage.getItem('password'),
      password_confirmation: localStorage.getItem('password_confirmation'),
      account_type: accountType, // Pass the string value directly
      username: basicInfo.username,
      middle_name: basicInfo.middle_name,
      state: contactInfo.state,
      locality: contactInfo.locality,
      business_name: basicInfo.business_name,
    };
  
    console.log('Final data being sent:', finalData);
  
    // Validate all fields
    const isValidData = Object.values(finalData).every((value) => value !== null && value !== '');
    if (!isValidData) {
      alert('Please ensure all fields are filled correctly.');
      return;
    }
  
    setIsLoading(true); // Show loading screen
  
    try {
      const url = `${API_BASE_URL}/auth/user/register`;
      const response = await axios.post(url, finalData);
  
      if (response.status >= 200 && response.status < 300) {
        console.log('Registration successful:', response.data);
        alert('Registration completed successfully!');
        navigate('/success');
      } else {
        alert(`Registration failed: ${response.data.message || 'Please try again.'}`);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      if (error.response && error.response.data && error.response.data.errors) {
        // Display the backend error messages
        alert(`Error: ${error.response.data.errors.account_type || 'Unknown error occurred.'}`);
      } else {
        alert('An error occurred during registration. Please try again.');
      }
    } finally {
      setIsLoading(false); // Hide loading screen
    }
  };
  return (
    <Container>
      {isLoading && (
        <LoadingOverlay>
          <LoadingText>Processing...</LoadingText>
        </LoadingOverlay>
      )}
      <TopBar>
        <BackIcon src={LeftIcon} onClick={handleBack} />
        <LogoContainer>
          <Logo src={QueensecLogo} />
        </LogoContainer>
      </TopBar>

      <Heading>Sign up</Heading>
      <FormTitle>Security Information</FormTitle>

      <FormContainer>
        <InputField>
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            value={securityInfo.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </InputField>

        <InputField>
          <Label>Confirm Password</Label>
          <Input
            type="password"
            name="confirmPassword"
            value={securityInfo.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
          />
        </InputField>
      </FormContainer>

      <NextButton onClick={handleSubmit}>
        <ButtonText>Next</ButtonText>
      </NextButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 100%;
  background-color: #f6f6f6;
  padding: 20px;
  align-items: center;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 19px;
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 30px;
`;

const BackIcon = styled.img`
  width: 29px;
  height: 29px;
  cursor: pointer;
  margin-right: 20px;
`;

const LogoContainer = styled.div`
  position: relative;
  padding-bottom: 110px;
  left: 0;
`;

const Logo = styled.img`
  width: 120px;
  height: auto;
  margin-left: -50px;
`;

const Heading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-top: -50px;
  text-align: left;
`;

const FormTitle = styled.p`
  font-size: 22.5px;
  color: #666;
  text-align: center;
  margin-top: 20px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 89%;
  margin-top: 20px;
  margin-left: 8px;
`;

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  transition: border-color 0.3s;

  &:focus {
    border-color: #fdc57a;
    outline: none;
  }
`;

const NextButton = styled.button`
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

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const LoadingText = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export default SecurityInfoScreen;
