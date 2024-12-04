import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
// import ubuntu from '../assets/Ubuntu/Ubuntu-Regular.ttf';
import LeftIcon from '../Assets/left.png';

const AddHaulerScreen = () => {
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState('Truck'); // Default selected vehicle
  const [truckName, setTruckName] = useState('');
  const [plateNumber, setPlateNumber] = useState('');

  const handleAddHauler = () => {
    console.log('Vehicle:', vehicle);
    console.log('Truck Name:', truckName);
    console.log('Plate Number:', plateNumber);
    // Save or proceed with hauler data as needed
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

        <AddButton onClick={handleAddHauler}>Add Hauler</AddButton>
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
