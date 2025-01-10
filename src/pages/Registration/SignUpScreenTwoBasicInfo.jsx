import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Button from '../../components/Button/Button';
import RegNav from '../../components/RegNav/RegNav';
import InputFieldx from "../../components/InputField/InputField";

const SignUpScreenTwoBasicInfo = () => {
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
    if (accountType === 'individual') {
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
    const requiredFields = ['first_name', 'last_name'];

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
      <RegNav label="Sign Up" onClick={handleBack} />

      <FormTitle>Basic Information</FormTitle>

      <FormContainer>

        <InputFieldx
          label="First Name"
          type="text"
          name="first_name"
          value={basicInfo.first_name}
          onChange={handleChange}
          placeholder="Enter your first name"
        />

        <InputFieldx
          label="Last Name"
          type="text"
          name="last_name"
          value={basicInfo.last_name}
          onChange={handleChange}
          placeholder="Enter your last name"
        />

        <InputFieldx
          label="Middle Name"
          type="text"
          name="middle_name"
          value={basicInfo.middle_name}
          onChange={handleChange}
          placeholder="Enter your middle name"
          isRequired={false}
        />



        {showBusinessName && (
          <InputFieldx
            label="Business Name"
            type="text"
            name="business_name"
            value={basicInfo.business_name}
            onChange={handleChange}
            placeholder="Enter your business name"
            isRequired={true}
          />
        )}
      </FormContainer>

      <Button label="Next" onClick={handleNext} size='large' isSpanWidth={true} />
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
//   max-width: 280px;
  margin-top: 20px;
  margin-left: 8px;
`;

export default SignUpScreenTwoBasicInfo;
