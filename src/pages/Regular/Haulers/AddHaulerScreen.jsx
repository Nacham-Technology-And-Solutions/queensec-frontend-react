import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
// import ubuntu from '../../../assets/Ubuntu/Ubuntu-Regular.ttf';
import LeftIcon from '../../../assets/left.png';
import axios from 'axios';


const API_BASE_URL = process.env.REACT_APP_API_BASE_URL; // Replace with actual base URL

const AddHaulerScreen = () => {
  const navigate = useNavigate();
  const [vehicleTypes, setVehicleTypes] = useState([]); // To store fetched vehicle types
  const [selectedVehicle, setSelectedVehicle] = useState(''); // User-selected vehicle
  const [truckName, setTruckName] = useState('');
  const [plateNumber, setPlateNumber] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch vehicle types when the component loads
  useEffect(() => {
    const fetchVehicleTypes = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/haulers/type`);
        if (response.data.success) {
          setVehicleTypes(response.data.data); // Set the vehicle types
        } else {
          alert("Failed to load vehicle types.");
        }
      } catch (error) {
        console.error('Error fetching vehicle types:', error);
        alert('Error loading vehicle types. Please try again later.');
      }
    };

    fetchVehicleTypes();
  }, []);

  const handleAddHauler = async () => {
    if (!truckName || !plateNumber || !selectedVehicle) {
      alert('All fields are required.');
      return;
    }

    const payload = {
      name: truckName,
      number_plate: plateNumber,
      hauler_type_id: selectedVehicle, // Use selected vehicle ID
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
        navigate('/my-haulers-list'); // Navigate to hauler list or dashboard page
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
          value={selectedVehicle}
          onChange={(e) => setSelectedVehicle(e.target.value)}
        >
          <option value="">Select a vehicle</option> {/* Default option */}
          {vehicleTypes.map((vehicle) => (
            <option key={vehicle.id} value={vehicle.id}>
              {vehicle.name}
            </option>
          ))}
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
