import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LeftIcon from '../assets/left.png';
import MiniDashboardIcon from '../assets/MINI_DB.png';
import { useUser } from '../context/UserContext';
import { getHaulers, getHaulerTypes } from '../utils/userApiRequests';
import Button from '../components/Button/Button'

// Select Vehicle
// hauler type mode saved/single-trip
// Get users vehicles - saved
// Or single trip.
// if saved hauler then use hauler_id
// if single-trip then user hauler_type_id & number_plate
// requests get haulers and hauler_types

const MakePaymentVehicleScreen = () => {
  const navigate = useNavigate();
  const [taxId, setTaxId] = useState(localStorage.getItem('tax_id') || '');
  // const [haulerTypeMode, setHaulerTypeMode] = useState(localStorage.getItem('haulerTypeMode') || 'saved'); // hauler type mode saved/oneTime

  const [haulerTypeMode, setHaulerTypeMode] = useState(() => {
    const storedValue = localStorage.getItem('haulerTypeMode');
    return storedValue !== null && storedValue !== '' && storedValue !== 'undefined' && storedValue !== undefined ? storedValue : 'saved';
  });

  const [haulers, setHaulers] = useState([]);
  const [haulersCount, setHaulersCount] = useState(localStorage.getItem('haulers_count') || 0);
  const [selectedHaulerID, setSelectedHaulerID] = useState(localStorage.getItem('payee_hauler_id') || 0);

  const [haulerTypes, setHaulerTypes] = useState([]);
  const [selectedHaulerTypeID, setSelectedHaulerTypeID] = useState(localStorage.getItem('hauler_type_id') || 0);
  const [numberPlate, setNumberPlate] = useState(localStorage.getItem('number_plate') || '');

  const { user } = useUser();
  useEffect(() => {
    // Get User Haulers
    const retrievedSavedHaulers = getHaulers();

    retrievedSavedHaulers.then((value) => {
      const haulerData = value.map((hauler) => ({
        id: hauler.id,
        hauler_type_id: hauler?.hauler_type_id,
        hauler_type_name: hauler?.hauler_type.name,
        name: hauler?.name || 'Unknown Name',
        number_plate: hauler?.number_plate || 'Unknown Plate',
      }));

      setHaulers(haulerData);
      setHaulersCount(haulerData.length);
      localStorage.setItem('haulers_count', haulerData.length);
      localStorage.setItem('haulers', haulerData);
    });


    // Get Hauler Types
    const retrievedHaulerTypes = getHaulerTypes();

    retrievedHaulerTypes.then((value) => {
      const haulerTypesData = value.map((haulerType) => ({
        id: haulerType.id,
        name: haulerType?.name || 'No Name',
        volume: haulerType?.volume || 'No Volume',
        description: haulerType?.description || 'No Description',
        img: haulerType?.img || 'Place Holder',
      }));
      setHaulerTypes(haulerTypesData);
      localStorage.setItem('haulerTypes', haulerTypesData);
    })

  }, []);

  const handleRadioChange = (type) => {

    setHaulerTypeMode(type);
    localStorage.setItem('haulerTypeMode', type);

  };

  const handleProceed = () => {

    // If Saved Hauler
    if (haulerTypeMode === 'saved' && selectedHaulerID) {
      localStorage.setItem('payee_hauler_id', selectedHaulerID);

      // Find Selected Hauler Data from the list of user haulers gotten from db.
      const selectedHauler = haulers.find(
        (hauler) => hauler.id === parseInt(selectedHaulerID)
      );
      localStorage.setItem("number_plate", selectedHauler.number_plate);

    } else if (haulerTypeMode === "oneTime" && selectedHaulerTypeID && numberPlate) {
      localStorage.setItem("hauler_type_id", selectedHaulerTypeID);
      localStorage.setItem("number_plate", numberPlate);

      // Find Selected Hauler Type Data from the list of user haulers gotten from db.
      // const selectedHaulerType = haulerTypes.find(
      //   (haulerType) => haulerType.id === parseInt(selectedHaulerTypeID)
      // );
    } else {
      console.error("Missing required fields for the selected hauler type.");
      alert("Please fill all required fields.");
      return;
    }


    navigate('/mp-trip-data');
  };

  const goToDashboard = () => {
    if (user?.accountType === 'federal_agency') {
      navigate('/Enterprise-Dashboard');
    } else if (user?.accountType === 'vendor') {
      navigate('/Vendors-Dashboard');
    } else if (user?.accountType === 'individual') {
      navigate('/dashboard-page');
    } else {
      console.warn('Unknown account type');
    }
  };
  const handleBack = () => {
    goToDashboard();
  };

  return (
    <Container>
      <TopBar>
        <BackIcon src={LeftIcon} onClick={handleBack} />
        <Title>Make Payment</Title>
      </TopBar>

      <TabContainer>
        <Tab active>Vehicle</Tab>
        <Tab>Trip Data</Tab>
        <Tab>Category</Tab>
        <Tab>Bank details</Tab>
      </TabContainer>

      <MiniDashboard>
        <MiniDashboardIconStyled src={MiniDashboardIcon} />
        <DashboardText>
          <InfoColumn>
            <Label1>Tax ID Number:</Label1>
            <Value1>{taxId}</Value1>
          </InfoColumn>
          <InfoColumn>
            <Label2>Haulers:</Label2>
            <Value2>{haulersCount}</Value2>
          </InfoColumn>
        </DashboardText>
      </MiniDashboard>

      <SelectHaulerText>Select Hauler:</SelectHaulerText>
      <RadioGroup>
        <RadioLabel>
          <RadioInput
            type="radio"
            name="haulerType"
            value="saved"
            checked={haulerTypeMode === 'saved'}
            onChange={() => handleRadioChange('saved')}
          />
          Saved Hauler
        </RadioLabel>
        <RadioLabel>
          <RadioInput
            type="radio"
            name="haulerType"
            value="oneTime"
            checked={haulerTypeMode === 'oneTime'}
            onChange={() => handleRadioChange('oneTime')}
          />
          One Time Hauler
        </RadioLabel>
      </RadioGroup>

      {haulerTypeMode === 'saved' && (
        <>
          <SelectDropdown
            value={selectedHaulerID}
            onChange={(e) => setSelectedHaulerID(e.target.value)}
          >
            <option value="">-- Select Hauler --</option>
            {haulers.map((hauler) => (
              <option key={hauler.id} value={hauler.id} >
                {`${hauler.hauler_type_name}: ${hauler.name} (${hauler.number_plate})`}
              </option>
            ))}
          </SelectDropdown>
          <AdditionalInfoText>
            Please select the hauler you want to pay for.
          </AdditionalInfoText>
        </>
      )}

      {haulerTypeMode === 'oneTime' && (
        <>
          <SelectDropdown
            value={selectedHaulerTypeID}
            onChange={(e) => setSelectedHaulerTypeID(e.target.value)}
          >
            <option value="">-- Select Vehicle --</option>
            {haulerTypes.map((type) => (
              <option key={type.id} value={type.id} >
                {type.name}
              </option>
            ))}
          </SelectDropdown>
          <InputField
            type="text"
            placeholder="Vehicle plate number"
            value={numberPlate}
            onChange={(e) => setNumberPlate(e.target.value)}
          />
        </>
      )}

      <Button label="Proceed" onClick={handleProceed} size='large' />
    </Container>
  );
};



// Styled Components

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f6f6f6;
  height: 100vh;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 30px; /* More rounded borders */
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

const BackIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-right: 15px;
`;

const Title = styled.h1`
  

  color: #6C3ECF;

font-family: Ubuntu;
font-size: 20px;
font-weight: 500;
line-height: 32px;
letter-spacing: 0.3799999952316284px;
text-align: left;

`;

const TabContainer = styled.div`
  display: flex;1
  justify-content: center;
  gap: 10px; /* Adds space between tabs */
  width: 100%;
  margin-top: 10px;
`;
const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px; /* Spacing between radio options */
  margin-bottom: 20px;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  font-family: Ubuntu, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.15px;
  color: #67728a;
  cursor: pointer;
`;

const RadioInput = styled.input`
  appearance: none;
  width: 16px;
  height: 16px;
  border: 2px solid #6c3ecf;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;

  &:checked {
    background-color: #6c3ecf;
    border: 5px solid #ffffff; /* Inner white circle */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #d6b8ff;
  }
`;
const InputField = styled.input`
  width: 92%;
  padding: 10px 15px;
  font-family: Ubuntu, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.15px;
  color: #333333;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  background-color: #ffffff;

  /* Add focus styles */
  &:focus {
    outline: none;
    border-color: #6c3ecf; /* Purple border for focus */
    box-shadow: 0 0 5px rgba(108, 62, 207, 0.3); /* Subtle glow effect */
  }

  /* Add hover effect */
  &:hover {
    border-color: #a5a5a5; /* Light gray hover border */
  }

  /* Disabled state */
  &:disabled {
    background-color: #f5f5f5;
    color: #a5a5a5;
    border-color: #e0e0e0;
    cursor: not-allowed;
  }
`;
const Tab = styled.div`
  padding: 10px;
  font-size: 16px;
  color: ${(props) => (props.active ? '#F28500' : '#aaa')};
  border-bottom: ${(props) => (props.active ? '2px solid #F28500' : '1px solid #aaa')};
  cursor: pointer;
  text-align: center;
  width: 100px; /* Set fixed width for tabs */
  border-radius: 0px; /* Adds rounded corners */
`;

const MiniDashboard = styled.div`
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 31px;
  padding: 15px;
  display: flex;
  align-items: center;
  width: 90%; /* Reduced width */
  margin: 20px 0;
  height: 116px;
  position: relative; /* Set relative positioning */
    @media (max-width: 280px) {
    max-width: 90%; /* Full width for very small devices */
    padding: 38px;
  }
    @media (max-width: 667px) {
    max-width: 90%; /* Full width for very small devices */
    padding-bottom: 25px;
  }
`;

const MiniDashboardIconStyled = styled.img`
  position: absolute; /* Position it absolutely */
  top: -19px;
  left: -30px;
  width: 450px; /* Ensure it covers the entire MiniDashboard */
  height: 220px;
  z-index: 0; /* Set z-index to 0 */
      @media (max-width: 768px) {
     max-width: 90%; /* Scale icon down for smaller devices */
   
  }

  @media (max-width: 480px) {
      max-width: 117%;
  }
  @media (max-width: 1180px) {
      max-width: 117%;
  }
`;

const DashboardText = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative; /* Set relative positioning to ensure it appears above the icon */
  z-index: 1; /* Set z-index to 1 to be above the icon */
 
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label1 = styled.p`
  font-size: 12px;
  color: #67728A;
  margin: 0;
  margin-top: 27px;
  margin-left: 24px;
`;
const Label2 = styled.p`
  font-size: 12px;
  font-family:  ubuntu;
  color: #67728A;
  margin: 0;
  margin-top: 25px;
  margin-left: -90px;
`;

const Value1 = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #CEECFF;
  margin-top: 9;
    margin-left: 25px;
    margin-right: -15px;
`;
const Value2 = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #CEECFF;
  margin-top: 9;
    margin-left: -59.5px;
`;

const SelectHaulerText = styled.p`
  font-size: 16px;
  color: #666;
  margin-top: 10px;
  text-align: left;
  width: 100%;
`;

const SelectDropdown = styled.select`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  font-size: 16px;
`;

const AdditionalInfoText = styled.p`
  font-size: 14px;
  color: #666;
  text-align: center;
  margin: 10px 0 20px;
`;

export default MakePaymentVehicleScreen;
