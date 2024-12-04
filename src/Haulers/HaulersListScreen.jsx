import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react' 
import LeftIcon from '../Assets/left.png';
import AddIcon from '../Assets/add.png';
import MiniDashboardIcon from '../Assets/MINI_DB.png';
import HaulerIcon from '../Assets/haulericon.png';

const HaulersListScreen = () => {
  const navigate = useNavigate();
  const haulers = [
    { vehicle: 'Truck', name: 'High lander 101', plateNumber: '4321TID' },
    { vehicle: 'Keke', name: 'Yamaha 201', plateNumber: '1234TID' },
  ];
  const taxId = 'Nas/Nas/0013';

  const handleAddHauler = () => {
    navigate('/Add-Hauler');
  };
  const [tooltipVisible, setTooltipVisible] = useState(null);

  const toggleTooltip = (index) => {
    if (tooltipVisible === index) {
      setTooltipVisible(null); // Hide tooltip if already visible
    } else {
      setTooltipVisible(index); // Show tooltip for the clicked hauler
    }
  };

  return (
    <Container>
      <TopBar>
        <BackIcon src={LeftIcon} onClick={() => navigate(-1)} />
        <Title>Add Hauler</Title>
      </TopBar>
      <Subtitle>You can add as many Haulers as you want</Subtitle>

      {/* Mini Dashboard */}
      <MiniDashboard>
        <MiniDashboardIconStyled src={MiniDashboardIcon} alt="Dashboard Icon" />
        <DashboardText>
        <InfoColumn>
            <Label1>Tax ID Number:</Label1>
            <Value1>{taxId}</Value1>
          </InfoColumn>
          <InfoColumn>
            <Label2>Haulers:</Label2>
            <Value2>{haulers.length}</Value2>
          </InfoColumn>
        </DashboardText>
      </MiniDashboard>

      <HaulersContainer>
        <HaulersLabel>Haulers:</HaulersLabel>
        {haulers.map((hauler, index) => (
          <HaulerItem key={index}>
            <HaulerIconStyled src={HaulerIcon} alt="Hauler Icon" />
            <HaulerDetails>
              <VehicleType>{hauler.vehicle}</VehicleType>
              <HaulerInfo>{`${hauler.name}, ${hauler.plateNumber}`}</HaulerInfo>
            </HaulerDetails>
            <MoreText onClick={() => toggleTooltip(index)}>More</MoreText>
            {tooltipVisible === index && (
              <Tooltip>
                <TooltipOption>Edit</TooltipOption>
                <TooltipOption>Delete Vehicle</TooltipOption>
              </Tooltip>
              
                  )}
          </HaulerItem>
        ))}
      </HaulersContainer>

      <AddHaulerButton onClick={handleAddHauler}>
      
        Add Hauler
      </AddHaulerButton>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 20px;
  background-color: #F7F9FA;
  height: 100vh;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 30px; /* More rounded borders */
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
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

const Subtitle = styled.p`
  font-size: 16px;
  color: #555;
  margin-top: 8px;
  margin-left:37px;
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
  margin-left: 28px;
`;

const Label2 = styled.p`
  font-size: 12px;
  color: #67728A;
  margin: 0;
  margin-top: 25px;
  margin-right: 60px;
`;

const Value1 = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #CEECFF;
  margin-top: 9px;
  margin-left: 28px;
`;

const Value2 = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #CEECFF;
  margin-top: 9px;
  margin-left: 32px;
`;

const HaulersContainer = styled.div`
  margin-top: 20px;
`;

const HaulersLabel = styled.h3`
  font-size: 18px;
  color: #414D63;
`;

const HaulerItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 0px solid #ddd;
`;

const HaulerIconStyled = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 12px;
`;

const HaulerDetails = styled.div`
  flex: 1;
`;

const VehicleType = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #414D63;
`;

const HaulerInfo = styled.div`
  font-size: 14px;
  color: #67728A;
`;

const MoreText = styled.span`

  color: #67728A;
  font-family: Ubuntu;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.154px; /* Adjusted for consistency */
  text-align: left;
  
  cursor: pointer; /* Add cursor pointer */
  
  &:hover {
    /* You can add hover styles here if needed */
    text-decoration: underline; /* Example hover effect */
  }
`;
const Tooltip = styled.div`
    position: absolute;
  top: 58%; 
  left: 900px;
  background-color: #f0f4f8;
  padding: 8px 12px;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  opacity: 1;
  transform: translateY(5px); /* Add a small transform for transition effect */

`;

const TooltipOption = styled.p`
  margin: 0;
  padding: 5px 0;
  color: #414D63;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #e5e5e5;
  }
`;

const AddHaulerButton = styled.button`
  
  background-color: #FDE5C0;
  padding: 12px 40px; /* Adjust padding as needed */
  border-radius: 25px;
  border: none;
  width: 100%;
  max-width: 400px;
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
  width: 140px; /* Set a fixed width */
  height: 50px; /* Set a fixed height */
  opacity: 1; /* Set opacity to 1 to make it visible */
  position: relative; /* If you want to use top and left, set position */
  top: 0; /* Adjust as needed */
  left: 0; /* Adjust as needed */
  gap: 0; /* gap is not applicable for button */
    margin-left:150px;
     white-space: nowrap;
`;


const AddIconStyled = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

export default HaulersListScreen;