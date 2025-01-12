import React, { useEffect, useState } from 'react';
import styled , { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LeftIcon from '../../../assets/left.png';
import AddIcon from '../../../assets/add.png';
import MiniDashboardIcon from '../../../assets/MINI_DB.png';
import HaulerIcon from '../../../assets/haulericon.png';
import { useUser } from '../../../context/UserContext';
import QRCode from 'react-qr-code'; 
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const HaulersListScreen = () => {
  const navigate = useNavigate();
  // const { user } = useUser();
  const [haulers, setHaulers] = useState([]);
  const [haulerTypes, setHaulerTypes] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedHauler, setSelectedHauler] = useState(null);
  const [tooltipVisible, setTooltipVisible] = useState(null);
const user  = useUser();
const token = localStorage.getItem("token");


  const fetchHaulers = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/haulers`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setHaulers(response.data.data);
    } catch (error) {
      console.error("Error fetching haulers:", error);
    }
  };

  const fetchHaulerTypes = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/haulers/type`);
      if (response.data.success) {
        setHaulerTypes(response.data.data); // Save the hauler types in state
      } else {
        console.error("Failed to load hauler types.");
      }
    } catch (error) {
      console.error("Error fetching hauler types:", error);
    }
  };


  useEffect(() => {
    fetchHaulers();
    fetchHaulerTypes();
  }, [token]);

  const handleHaulerClick = (hauler) => {
    setSelectedHauler(hauler);
    setModalVisible(true); // Show the modal
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedHauler(null);
  };
  const handleAddHauler = () => {
    navigate('/add-hauler');
  };

  
const handleEditHauler = async (haulerId) => {
  const updatedName = prompt("Enter new name for the hauler:");
  const updatedPlateNumber = prompt("Enter new plate number:");
  if (updatedName && updatedPlateNumber) {
    try {
      await axios.put(
        `${API_BASE_URL}/haulers`,
        {
          hauler_id: haulerId,
          name: updatedName,
          number_plate: updatedPlateNumber,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchHaulers(); // Refresh the haulers list after editing
      alert("Hauler updated successfully!");
    } catch (error) {
      console.error("Error editing hauler:", error);
      alert("Failed to update hauler.");
    }
  }
};

const handleDeleteHauler = async (haulerId) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this hauler?"
  );
  if (confirmDelete) {
    try {
      await axios.delete(`${API_BASE_URL}/haulers/${haulerId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchHaulers(); // Refresh the haulers list after deletion
      alert("Hauler deleted successfully!");
    } catch (error) {
      console.error("Error deleting hauler:", error);
      alert("Failed to delete hauler.");
    }
  }
};

  const toggleTooltip = (index) => {
    if (tooltipVisible === index) {
      setTooltipVisible(null);
    } else {
      setTooltipVisible(index);
    }
  };

  // const haulerTypeReverseMapping = {
  //   '1': 'Truck',
  //   '2': 'Keke',
  // };
const taxId = localStorage.getItem('tax_id')
  return (
    <Container>
      <TopBar>
        <BackIcon src={LeftIcon} onClick={() => navigate(-1)} />
        <Title>Haulers</Title>
      </TopBar>
      <Subtitle>You can add as many haulers as you want</Subtitle>

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
          <HaulerItem key={hauler.id} onClick={() => handleHaulerClick(hauler)}>
            <HaulerIconStyled src={HaulerIcon} alt="Hauler Icon" />
            <HaulerDetails>
            <VehicleType>
                {
                  haulerTypes.find((type) => type.id === hauler.hauler_type_id)?.name || "Unknown Type"
                }
              </VehicleType>              <HaulerInfo>{`${hauler.name}, ${hauler.number_plate}`}</HaulerInfo>
            </HaulerDetails>
            <MoreText onClick={(e) => {
    e.stopPropagation();
    toggleTooltip(index);
  }}>More</MoreText>
            {tooltipVisible === index && (
              <Tooltip onClick={(e) => e.stopPropagation()}>
                <TooltipOption onClick={() => handleEditHauler(hauler.id)}>Edit</TooltipOption>
                <TooltipOption onClick={() => handleDeleteHauler(hauler.id)}>Delete Vehicle</TooltipOption>
              </Tooltip>
            )}
          </HaulerItem>
        ))}
      </HaulersContainer>

       {/* Modal for QR Code */}
       {modalVisible && selectedHauler && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <QRCode value={selectedHauler.number_plate} size={200} bgColor="#f6f6f6" fgColor="#6C3ECF"/>
            <HaulerModalInfo>
              <strong>{selectedHauler.name}</strong>
              <p>{selectedHauler.number_plate}</p>
            </HaulerModalInfo>
            <CloseButton onClick={closeModal}>Close</CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}


      <AddHaulerButton onClick={handleAddHauler}>
        {/* <AddIconStyled src={AddIcon} alt="Add Icon" />  */}
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
    @media (max-width: 280px) {
    max-width: 90%; /* Full width for very small devices */
    padding: 38px;
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
        @media (max-width: 768px) {
     margin-left: 80px;
   
  }

  @media (max-width: 480px) {
   margin-left: 80px;
  }
  @media (max-width: 1180px) {
      margin-left: 80px;
  }
`;


const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 0.3s ease-in-out;
   z-index: 100;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  animation: ${fadeIn} 0.3s ease-in-out;
`;

const HaulerModalInfo = styled.div`
  margin-top: 16px;
`;

const CloseButton = styled.button`
  margin-top: 16px;
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const AddIconStyled = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

export default HaulersListScreen;