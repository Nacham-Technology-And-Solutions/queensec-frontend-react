import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate  } from 'react-router-dom';
import LeftIcon from './assets/left.png';
import QueensecLogo from './assets/Queensec_1.png';
import DownIcon from './assets/down.png';  // Import the down icon
import axios from 'axios';


const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

const ContactInfoScreen = () => {
  const navigate = useNavigate();

  const [contactInfo, setContactInfo] = useState({
    email: '',
    phone: '',
    state: '',
    locality: '',
  });

  const [locations, setLocations] = useState([]); // To store states and localities
  const [localities, setLocalities] = useState([]); // To store localities for the selected state
  const [loading, setLoading] = useState(false); // Loading state for dropdowns
  const [error, setError] = useState(null); // Error handling

  useEffect(() => {
    // Fetch locations data on mount
    const fetchLocations = async () => {
      setLoading(true);
      setError(null);
      // https://admin.queensecglobal.com/api/locations
      const url = `${API_BASE_URL}/locations`;
      try {
        const response = await axios.get(url); // Replace with your backend API URL
        if (response.data.success) {

          setLocations(response.data.data); // Assuming the `data` contains the array of states
        } else {
          setError('Failed to load locations');
        }
      } catch (err) {
        console.error('Error fetching locations:', err);
        setError('Failed to load locations');
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

  const handleBack = () => {
    navigate('/basic-info');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setContactInfo((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Update localities when a new state is selected
    if (name === 'state') {
      const selectedState = locations.find((state) => state.code === value);

      setLocalities(selectedState?.localities || []); // Update localities for the selected state
      setContactInfo((prev) => ({ ...prev, state: value, locality: '' })); // Reset locality
    }
  };

  const handleNext = () => {
    if (!contactInfo.email || !contactInfo.phone || !contactInfo.state || !contactInfo.locality) {
      alert('Please fill in all fields.');
      return;
    }

    // Save contact info to localStorage
    try {
      localStorage.setItem('contactInfo', JSON.stringify(contactInfo));

    } catch (error) {
      console.error('Error saving contactInfo to localStorage:', error);
    }

    navigate('/security-info'); // Adjust path to the next screen
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
      <FormTitle>Contact Information</FormTitle>

      <FormContainer>
        <InputField>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={contactInfo.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </InputField>

        <InputField>
          <Label>Phone</Label>
          <Input
            type="text"
            name="phone"
            value={contactInfo.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
        </InputField>

        <SideBySideFields>
          <InputField>
            <Label>State</Label>
            <Dropdown>
              {loading ? (
                <Select disabled>
                  <option>Loading...</option>
                </Select>
              ) : error ? (
                <Select disabled>
                  <option>{error}</option>
                </Select>
              ) : (
                <Select name="state" value={contactInfo.state} onChange={handleChange}>
                  <option value="">Select a state</option>
                  {locations.map((state) => (
                    <option key={state.code} value={state.code}>
                      {state.name}
                    </option>
                  ))}
                </Select>
              )}
              <DropdownIcon src={DownIcon} />
            </Dropdown>
          </InputField>

          <InputField>
            <Label>Locality</Label>
            <Dropdown>
              {localities.length > 0 ? (
                <Select name="locality" value={contactInfo.locality} onChange={handleChange}>
                  <option value="">Select a locality</option>
                  {localities.map((locality) => (
                    <option key={locality.code} value={locality.code}>
                      {locality.name}
                    </option>
                  ))}
                </Select>
              ) : (
                <Select disabled>
                  <option>{contactInfo.state ? 'No localities available' : 'Select a state first'}</option>
                </Select>
              )}
              <DropdownIcon src={DownIcon} />
            </Dropdown>
          </InputField>
        </SideBySideFields>
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

const SideBySideFields = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;
const Dropdown = styled.div`
  position: relative;
  width: auto; /* Allow the container to take the width of the select element */
  display: inline-block;
`;

const Select = styled.select`
  padding: 10px 35px 10px 10px; /* Add right padding for the dropdown icon */
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  appearance: none;
  width: auto; /* Make select width auto to grow based on content */
  min-width: 120px; /* Optional: Set a minimum width to prevent it from being too small */
  cursor: pointer;
`;

const DropdownIcon = styled.img`
  position: absolute;
  top: 50%;
  right: 10px; /* Position the icon inside the select box */
  width: 15px;
  height: 15px;
  transform: translateY(-50%);
  pointer-events: none;
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

export default ContactInfoScreen;
