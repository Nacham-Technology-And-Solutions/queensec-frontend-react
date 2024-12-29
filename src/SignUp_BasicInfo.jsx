import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; 
import LeftIcon from './Assets/left.png';  // Back icon
import QueensecLogo from './Assets/Queensec_1.png';  // Import the logo
import { useState,useEffect } from 'react';

const BasicInfoScreen = () => {
  const navigate = useNavigate();

  const [basicInfo, setBasicInfo] = useState({
    first_name: '',
    last_name: '',
    middle_name: '',
    username: '',
    business_name: '',
  });

  const [showBusinessName, setShowBusinessName] = useState(true); // State to control the visibility of business_name

  useEffect(() => {
    // Load saved data from localStorage on component mount
    const savedBasicInfo = JSON.parse(localStorage.getItem('basicInfo')) || {};
    const accountType = localStorage.getItem('account_type');



    // Determine whether to show the business_name field
    if (accountType === 'individual' ) {
      setShowBusinessName(false);
    } else {
      setShowBusinessName(true);
    }

    setBasicInfo(savedBasicInfo);
  }, []);

  const handleBack = () => {
    navigate('/sign-up-user-type');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBasicInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = () => {
    const requiredFields = ['first_name', 'last_name', 'middle_name'];
    if (showBusinessName) {
      requiredFields.push('business_name');
    }

    const isFormValid = requiredFields.every((field) => basicInfo[field]?.trim());

    if (!isFormValid) {
      alert('Please fill in all required fields.');
      return;
    }

    // Save data to localStorage
    try {
      localStorage.setItem('basicInfo', JSON.stringify(basicInfo));

    } catch (error) {
      console.error('Error saving data to localStorage:', error);
    }

    navigate('/contact-info'); // Adjust path to the ContactInfoScreen
  };

  return (
    <Container>
      <TopBar>
        <BackIcon src={LeftIcon} onClick={handleBack} />
        <LogoContainer>
          <Logo src={QueensecLogo} />
        </LogoContainer>
      </TopBar>

      <Heading>Sign up</Heading>
      <FormTitle>Basic Information</FormTitle>

      <FormContainer>
        <InputField>
          <Label>First name</Label>
          <Input
            type="text"
            name="first_name"
            value={basicInfo.first_name}
            onChange={handleChange}
            placeholder="Enter your first name"
          />
        </InputField>

        <InputField>
          <Label>Last name</Label>
          <Input
            type="text"
            name="last_name"
            value={basicInfo.last_name}
            onChange={handleChange}
            placeholder="Enter your last name"
          />
        </InputField>

        <InputField>
          <Label>Middle Name</Label>
          <Input
            type="text"
            name="middle_name"
            value={basicInfo.middle_name}
            onChange={handleChange}
            placeholder="Enter your middle name"
          />
        </InputField>


        {showBusinessName && (
          <InputField>
            <Label>Business name</Label>
            <Input
              type="text"
              name="business_name"
              value={basicInfo.business_name}
              onChange={handleChange}
              placeholder="Enter your business name"
            />
          </InputField>
        )}
      </FormContainer>

      <NextButton onClick={handleNext}>
        <ButtonText>Next</ButtonText>
      </NextButton>
    </Container>
  );
};


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
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
  margin-left: -20px;
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
//   max-width: 280px;
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

export default BasicInfoScreen;
