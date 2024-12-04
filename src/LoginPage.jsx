import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import QueensecLogo from './Assets/Queensec_1.png'; // Import the logo
import { useUser } from './UserContext';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL


const LoginPage = () => {
  const navigate = useNavigate();
  const { saveUser } = useUser();
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
    // loginType: 'normal',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const payload = {
      email: loginInfo.email,
      password: loginInfo.password,
      'login-type': 'normal', // Uncomment or modify this based on backend requirements
    };
    
    // Validate fields
    if (!loginInfo.email || !loginInfo.password) {
      alert('Please fill in all fields.');
      return;
       
    }
      const url = `${API_BASE_URL}/auth/user/login`
    try {
      const response = await axios.post(url, payload);
    
      if (response.status >= 200 && response.status < 300) {
        console.log('Login successful:', response.data);
    
        // Store tokens and credentials in localStorage
        localStorage.setItem("token", response.data.data.access_token);
        localStorage.setItem("email", payload.email);
        localStorage.setItem("password", payload.password);
    
        const userData = {
          token: response.data.data.access_token,
          email: loginInfo.email,
          accountType: response.data.data.user?.account_type,
          userName: response.data.data.user?.name || 'Haulage Solutions',
          taxId: response.data.data.user?.tax_id || 'Nas/Nas/00013',
          haulers: response.data.data.user?.haulers || '2 Vehicles',
          state: response.data.data.user?.state || 'Nasarawa',
        };
        
        saveUser(userData);
        const accountType = response.data.data.user?.account_type;
        console.log('Account Type:', accountType);
    
        if (accountType === 0) {
          navigate('/Enterprise-Dashboard');
        } else if (accountType === 2) {
          navigate('/Vendors-Dashboard');
        } else {
          navigate('/dashboard-page');
          console.log('payload:', payload);  // Logging the payload for debugging
        }
    
      } else {
        alert(`Login failed: ${response.data.message || 'Please try again.'}`);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login. Please try again.');
    }
  }
    
  return (
    <Container>
      <Logo src={QueensecLogo} />

          <Heading>Login</Heading>
          <FormTitle> Please enter your email and password to login.</FormTitle>

      <FormContainer>
        <InputField>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={loginInfo.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </InputField>

        <InputField>
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            value={loginInfo.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </InputField>
{/* 
        <InputField>
          <Label>Login Type</Label>
          <Select
            name="loginType"
            value={loginInfo.loginType}
            onChange={handleChange}
          >
            <option value="normal">Normal</option>
          </Select>
        </InputField> */}
      </FormContainer>

      <LoginButton onClick={handleSubmit}>
        <ButtonText>Login</ButtonText>
      </LoginButton>
    </Container>
  );
};

// Styled Components
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

const Logo = styled.img`

  width: 100px;
  margin-bottom: 20px;
  margin-left : -280px;
`;

const Heading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  text-decoration: underline;
`;
const FormTitle = styled.p`
  font-size: 18.5px;
  color: #666;
  text-align: center;
  margin-top: 20px;
`;


const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
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

const Select = styled.select`
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

const LoginButton = styled.button`
  background-color: #fdc57a;
  padding: 6px 20px;
  border-radius: 50px;
  border: none;
  width: 100%;
  max-width: 400px;
  cursor: pointer;

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

export default LoginPage;
