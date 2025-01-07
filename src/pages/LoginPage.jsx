import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import QueensecLogo from '../assets/Queensec_1.png'; // Import the logo
import { useUser } from '../context/UserContext';
import TextButton from "../components/TextButton/TextButton";
import InputFieldx from "../components/InputField/InputField";
import Button from "../components/Button/Button";

// import { postData } from '../utils/apiServce';
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
      'login-type': 'normal', // Uncomment or modify this ebubes on backend requirements
    };

    // Validate fields
    if (!loginInfo.email || !loginInfo.password) {
      alert('Please fill in all fields.');
      return;

    }
    const url = `${API_BASE_URL}/auth/user/login`;


    try {
      // postData()
      const response = await axios.post(url, payload);

      if (response.status >= 200 && response.status < 300) {


        localStorage.setItem("token", response.data.data.access_token);
        localStorage.setItem("image_url", response.data.data.image_url);
        localStorage.setItem("business_name", response.data.data.business_name);
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
          business_name: response.data.data.business_name,
          image_url: response.data.data.image_url || 'https://example.com/default-image.jpg',
        };



        saveUser(userData);
        const accountType = response.data.data.user?.account_type;


        if (accountType === 'federal_agency') {
          navigate('/Enterprise-Dashboard');
        } else if (accountType === 'vendor') {
          navigate('/Vendors-Dashboard');
        } else if (accountType === 'individual') {
          navigate('/dashboard-page');

        }
      } else {
        alert(`Login failed: ${response.data.message || 'Please try again.'}`);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login. Please try again.');
    }
  }

  const handleSigUp = () => {
    navigate('/sign-up-user-type');
  };

  return (
    <Container>
      <Logo src={QueensecLogo} /> 
      
      <Heading>Login</Heading>
      <FormTitle> Please enter your email and password to login.</FormTitle>

      <FormContainer>
        <InputFieldx
          label="Email"
          type="email"
          name="email"
          value={loginInfo.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        <InputFieldx
          label="Password"
          type="password"
          name="password"
          value={loginInfo.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
        
      </FormContainer>
      <Bottom>
        <Button label="Login" onClick={handleSubmit} size='large' span='span' />
        <br />
        <span>New to Kadamines? &nbsp; <TextButton onClick={handleSigUp} label="Sign-Up" /></span>
      </Bottom>

    </Container>
  );
};

// Styled Components
const Container = styled.div`
 display: flex;
 flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 90%;
  background-color: #f6f6f6;
  padding: 20px;
  align-items: center;
  max-width: 400px;  
  margin: 0px auto; 
  border-radius: 19px;
`;

const Logo = styled.img`

  width: 100px;
  margin-bottom: 20px;
  margin-left : -280px;
  // padding-left: 100px;
`;

const Heading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
  text-decoration: underline;
`;
const FormTitle = styled.p`
  font-size: 18.5px;
  color: #666;
  text-align: center;
  margin-top: 5px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
`;

export default LoginPage;
