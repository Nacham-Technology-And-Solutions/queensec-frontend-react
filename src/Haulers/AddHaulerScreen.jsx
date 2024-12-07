import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
// import ubuntu from '../assets/Ubuntu/Ubuntu-Regular.ttf';
import LeftIcon from '../Assets/left.png';
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL; // Replace with actual base URL

const AddHaulerScreen = () => {
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState('Truck'); // Default selected vehicle
  const [truckName, setTruckName] = useState('');
  const [plateNumber, setPlateNumber] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAddHauler = async () => {
    if (!truckName || !plateNumber || !vehicle) {
      alert("All fields are required.");
      return;
    }

    // Map vehicle to hauler_type_id (adjust mapping as needed based on your backend)
    const haulerTypeMapping = {
      Truck: '1', // Example ID for Truck
      Keke: '2',  // Example ID for Keke
    };
    const haulerTypeId = haulerTypeMapping[vehicle];

    const payload = {
      name: truckName,
      number_plate: plateNumber,
      hauler_type_id: haulerTypeId,
    };

    setLoading(true); // Start loading
    try {
      const token = localStorage.getItem('token'); // Retrieve token from local storage
      const response = await axios.post(`${API_BASE_URL}/haulers`, payload, {
        headers: {
          Authorization: `Bearer ${token}`, // Add the Authorization header
        },
      });

      if (response.status === 201) {
        alert('Hauler added successfully!');
        navigate('/Hauler-Lists'); // Navigate to hauler list or dashboard page
      }
    } catch (error) {
      console.error('Error adding hauler:', error);
      alert('Failed to add hauler. Please try again.');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <Container>
      <Header>
        <BackIcon src={LeftIcon} onClick={() => navigate(-1)} />
        <Title>Add Hauler</Title>
      </Header>

      <Form>
        <Label>Select Vehicle</Label>
        <Select
          value={vehicle}
          onChange={(e) => setVehicle(e.target.value)}
        >
          <option value="Truck">Truck</option>
          <option value="Keke">Keke</option>
          {/* Add more vehicle options if needed */}
        </Select>

        <Label>Truck Name</Label>
        <Input
          type="text"
          value={truckName}
          onChange={(e) => setTruckName(e.target.value)}
          placeholder="Enter truck name"
        />

        <Label>Vehicle Plate Number</Label>
        <Input
          type="text"
          value={plateNumber}
          onChange={(e) => setPlateNumber(e.target.value)}
          placeholder="Enter plate number"
        />

        <AddButton onClick={handleAddHauler} disabled={loading}>
          {loading ? 'Adding...' : 'Add Hauler'}
        </AddButton>
      </Form>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #F7F9FA;
  height: 100vh;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 30px;
  font-family: 'Ubuntu', sans-serif;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
 
`;

const BackIcon = styled.img`
    width: 24px;
  height: 24px;
  cursor: pointer;
`;

const Title = styled.h2`
  margin-left: 16px;
  font-size: 24px;
  color: #6C3ECF;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px; /* Adds space between form fields */
`;

const Label = styled.label`
  font-size: var(--sds-typography-body-size-medium);
  font-weight: 400;
  line-height: 22.4px;
  color: #414D63;
  margin-bottom: -2px;
  text-align: left;
`;

const Select = styled.select`
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: var(--sds-typography-body-size-medium);
  line-height: 16px;
  color: #333;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: var(--sds-typography-body-size-medium);
  line-height: 16px;
  color: #1E1E1E;
`;

const AddButton = styled.button`
  background-color: #FDE5C0;
  padding: 12px 40px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  color: #F07F23;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  max-width: 200px;
  margin: 40px auto 0 auto; /* Centers button and adds space at the top */
  font-size: var(--sds-typography-body-size-medium);
  font-weight: 400;
  white-space: nowrap;
  margin-top: 195px;
  &:hover {
    background-color: #e5b46a;
    color: #fff;
  }
`;

export default AddHaulerScreen;
