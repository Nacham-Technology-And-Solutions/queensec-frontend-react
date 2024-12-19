import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LeftIcon from '../Assets/left.png';
import MiniDashboardIcon from '../Assets/MINI_DB.png';
import { useUser } from '../UserContext';
import axios from 'axios';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;


const MakePaymentVehicleScreen = () => {
  const navigate = useNavigate();
  const [taxId, setTaxId] = useState(localStorage.getItem('tax_id') || 'Nas/Nas/0013'); // Tax ID from localStorage or default
  const [haulers, setHaulers] = useState(0); // Number of active haulers
  const [haulerOptions, setHaulerOptions] = useState([]); // List of haulers
  const [selectedHauler, setSelectedHauler] = useState(localStorage.getItem('selected_hauler') || ''); // Selected hauler from localStorage
  const { user, addHaulerData } = useUser(); 
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
            type: 'Vehicle', // Default type until backend provides hauler_type
            name: hauler?.name || 'Unknown Name',
            number_plate: hauler?.number_plate || 'Unknown Plate',
          }));

        
          addHaulerData(haulerData);
          // Save a single hauler_id (e.g., the first one) to localStorage
          // if (haulerData.length > 0) {
          //   localStorage.setItem('hauler_id', haulerData[0].id); // Save the first hauler's ID
          
          // }
  
          // Alternatively, save all hauler IDs as an array
          const haulerIds = haulerData.map((hauler) => hauler.id);
          localStorage.setItem('hauler_ids', JSON.stringify(haulerIds)); // Save as JSON string
  

          setHaulerOptions(haulerData);
          setHaulers(haulerData.length); // Number of haulers = total hauler count
        } else {
          console.error('Failed to load haulers:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching hauler data:', error.response?.data || error.message);
      }
    };
  
    fetchHaulerData();
  }, []);
  
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

  const handleProceed = () => {
    if (selectedHauler) {
      const parsedHauler = JSON.parse(selectedHauler); // Parse the selected hauler object

      localStorage.setItem('selected_hauler', selectedHauler); // Save the entire selected hauler
      localStorage.setItem('number_plate', parsedHauler.number_plate);
      localStorage.setItem('hauler_id', parsedHauler.id);

      
      navigate('/MP_CategoryScreen'); // Navigate to the next screen
    } else {
      alert('Please select a hauler before proceeding.'); // Alert if no hauler is selected
    }
  };

  return (
    <Container>
      <TopBar>
        <BackIcon src={LeftIcon} onClick={handleBack} />
        <Title>Make Payment</Title>
      </TopBar>

      <TabContainer>
        <Tab active>Vehicle</Tab>
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
        Please select the hauler you want to pay for
      </AdditionalInfoText>

      <ProceedButton onClick={handleProceed}>
        Proceed
      </ProceedButton>
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
`;

const MiniDashboardIconStyled = styled.img`
  position: absolute; /* Position it absolutely */
  top: -19px;
  left: -30px;
  width: 450px; /* Ensure it covers the entire MiniDashboard */
  height: 220px;
  z-index: 0; /* Set z-index to 0 */
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
const Value2= styled.p`
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

export default MakePaymentVehicleScreen;
