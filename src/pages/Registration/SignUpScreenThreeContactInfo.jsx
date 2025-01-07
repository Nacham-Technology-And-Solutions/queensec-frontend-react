import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '../../components/Button/Button';
import RegNav from '../../components/RegNav/RegNav';
import InputFieldx from "../../components/InputField/InputField";
import DropDown from "../../components/DropDown/DropDown";


const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

const SignUpScreenThreeContactInfo = () => {
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
    const contactInfo = JSON.parse(localStorage.getItem('contactInfo')) || {};

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
    setContactInfo(contactInfo);
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
      <RegNav label="Sign Up" onClick={handleBack} />

      <FormTitle>Contact Information</FormTitle>

      <FormContainer>

        <InputFieldx
          label="Email"
          type="email"
          name="email"
          value={contactInfo.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        <InputFieldx
          label="Phone"
          type="text"
          name="phone"
          value={contactInfo.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
        />

        <SideBySideFields>
          {loading ? (

            <DropDown label="State" name="state" isDisabled>
              <option>Loading...</option>
            </DropDown>

          ) : error ? (

            <DropDown label="State" name="state" isDisabled error={error}>
              <option>{error}</option>
            </DropDown>

          ) : (

            <DropDown label="State" name="state" onChange={handleChange}>
              <option value="">Select a state</option>
              {locations.map((state) => (
                <option key={state.code} value={state.code}>
                  {state.name}
                </option>
              ))}
            </DropDown>


          )}

          {localities.length > 0 ? (

            <DropDown label="Locality" name="locality" onChange={handleChange}>
              <option value="">Select a locality</option>
              {localities.map((locality) => (
                <option key={locality.code} value={locality.code} >
                  {locality.name}
                </option>
              ))}
            </DropDown>

          ) : (
            <DropDown label="Locality" name="locality" isDisabled>
              <option>{contactInfo.state ? 'No localities available' : 'Select a state first'}</option>
            </DropDown>
          )}

        </SideBySideFields>
        
      </FormContainer>

      <Button label="Next" onClick={handleNext} size='large' span='span' />
    </Container >
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
 
const SideBySideFields = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;
 
export default SignUpScreenThreeContactInfo;
