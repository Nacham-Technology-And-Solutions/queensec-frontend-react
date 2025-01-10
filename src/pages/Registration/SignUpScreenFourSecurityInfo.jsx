import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios for HTTP requests
import Button from '../../components/Button/Button';
import RegNav from '../../components/RegNav/RegNav';
import InputFieldx from "../../components/InputField/InputField";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL


const SignUpScreenFourSecurityInfo = () => {
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
      middle_name: basicInfo.middle_name,
      state: contactInfo.state,
      locality: contactInfo.locality,
      business_name:
        accountType === 'federal_agency' || accountType === 'vendor'
          ? basicInfo.business_name || ''
          : 'None',// Always include
    };



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

      <RegNav label="Sign Up" onClick={handleBack} />


      <FormTitle>Security Information</FormTitle>

      <FormContainer>
        <InputFieldx
          label="Password"
          type="password"
          name="password"
          value={securityInfo.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />

        <InputFieldx
          label="Password"
          type="password"
          name="confirmPassword"
          value={securityInfo.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm your password"
        />
      </FormContainer>

      <Button label="Next" onClick={handleSubmit} size='large' isSpanWidth={true}  />

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

export default SignUpScreenFourSecurityInfo;
