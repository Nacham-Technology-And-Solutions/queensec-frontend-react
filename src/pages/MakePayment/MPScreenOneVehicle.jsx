import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LeftIcon from '../assets/left.png';
import MiniDashboardIcon from '../assets/MINI_DB.png';
import { useUser } from '../context/UserContext';
import PaymentModel from './DataModels/PaymentModel';
import axios from 'axios';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;


const MPScreenOneVehicle = () => {
  const navigate = useNavigate();

  // Variables
  const [paymentData, setPaymentData] = useState(PaymentModel.fromJson(localStorage.getItem('paymentData')) || new PaymentModel());

  const [taxId, setTaxId] = useState(localStorage.getItem('tax_id') || '');
  const [haulers, setHaulers] = useState(0);
  const [haulerOptions, setHaulerOptions] = useState([]);
  const [haulerType, setHaulerType] = useState('saved');
  const [selectedHauler, setSelectedHauler] = useState('');
  const [vehicleTypes, setVehicleTypes] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const { user } = useUser();


  useEffect(() => {
    const fetchHaulerData = async () => {
      try {
        const token = localStorage.getItem('token');
        const url = `${API_BASE_URL}/haulers`;
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data.success) {
          const haulerData = response.data.data.map((hauler) => ({
            id: hauler.id,
            type: 'Vehicle',
            name: hauler?.name || 'Unknown Name',
            number_plate: hauler?.number_plate || 'Unknown Plate',
          }));
          setHaulerOptions(haulerData);
          setHaulers(haulerData.length);
        }
      } catch (error) {
        console.error('Error fetching hauler data:', error);
      }
    };

    fetchHaulerData();
  }, []);

  const fetchVehicleTypes = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/haulers/type`);
      if (response.data.success) {
        setVehicleTypes(response.data.data);


      }
    } catch (error) {
      console.error('Error fetching vehicle types:', error);
    }
  };
  const handleRadioChange = (type) => {

    setHaulerType(type);
    localStorage.setItem('haulerType', type);
    if (type === 'oneTime') {
      fetchVehicleTypes();
    }
  };
  const handleProceed = () => {


    if (haulerType === 'saved' && selectedHauler) {
      const parsedHauler = JSON.parse(selectedHauler);

      localStorage.setItem("number_plate", parsedHauler.number_plate);
      localStorage.setItem('selected_hauler', selectedHauler);
      localStorage.setItem('hauler_id', parsedHauler.id);
      // setPaymentData(paymentData.copyWith(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,))
    } else if (haulerType === "oneTime" && selectedVehicle && vehiclePlate) {
      const selectedVehicleType = vehicleTypes.find(
        (type) => type.id === parseInt(selectedVehicle)
      );


      if (selectedVehicleType) {
        localStorage.setItem("selected_vehicle", selectedVehicle);
        localStorage.setItem("number_plate", vehiclePlate);
        localStorage.setItem("hauler_type_id", selectedVehicleType.id);
      }
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
            <Value2>{haulers}</Value2>
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
            checked={haulerType === 'saved'}
            onChange={() => handleRadioChange('saved')}
          />
          Saved Hauler
        </RadioLabel>
        <RadioLabel>
          <RadioInput
            type="radio"
            name="haulerType"
            value="oneTime"
            checked={haulerType === 'oneTime'}
            onChange={() => handleRadioChange('oneTime')}
          />
          One Time Hauler
        </RadioLabel>
      </RadioGroup>

      {haulerType === 'saved' && (
        <>
          <SelectDropdown
            value={selectedHauler}
            onChange={(e) => setSelectedHauler(e.target.value)}
          >
            <option value="">-- Select Hauler --</option>
            {haulerOptions.map((hauler) => (
              <option key={hauler.id} value={JSON.stringify(hauler)}>
                {`${hauler.type}: ${hauler.name} (${hauler.number_plate})`}
              </option>
            ))}
          </SelectDropdown>
          <AdditionalInfoText>
            Please select the hauler you want to pay for.
          </AdditionalInfoText>
        </>
      )}

      {haulerType === 'oneTime' && (
        <>
          <SelectDropdown
            value={selectedVehicle}
            onChange={(e) => setSelectedVehicle(e.target.value)}
          >
            <option value="">-- Select Vehicle --</option>
            {vehicleTypes.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </SelectDropdown>
          <InputField
            type="text"
            placeholder="Vehicle plate number"
            value={vehiclePlate}
            onChange={(e) => setVehiclePlate(e.target.value)}
          />
        </>
      )}

      <ProceedButton onClick={handleProceed}>Proceed</ProceedButton>
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

const ProceedButton = styled.button`
  
  
  background-color: #FDE5C0;
  padding: 12px 40px; /* Adjust padding as needed */
  border-radius: 25px;
  border: none;
  width: 90%;
  max-width: 300px;
  cursor: pointer;
  margin-top: 190px; /* Keep margin-top if needed */
  
  /* Text color */
  color:  #F07F23; /* Set text color to #F07F23 */
  
  /* Center the text */
  text-align: center; /* Center the text horizontally */
  display: flex; /* Use flexbox for centering */
  justify-content: center; /* Center the text horizontally */
  align-items: center; /* Center the text vertically */

  /* Hover effect */
  &:hover {
    background-color: #e5b46a;
    color: #fff; /* Change text color on hover */
  }

  /* Additional styles */
  width: 114px; /* Set a fixed width */
  height: 50px; /* Set a fixed height */
  opacity: 1; /* Set opacity to 1 to make it visible */
  position: relative; /* If you want to use top and left, set position */
  top: 0; /* Adjust as needed */
  left: 0; /* Adjust as needed */
  gap: 0; /* gap is not applicable for button */

`;

export default MPScreenOneVehicle;
