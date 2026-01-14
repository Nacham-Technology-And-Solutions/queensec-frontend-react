
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LeftIcon from '../../../assets/left.png';
import MiniDashboardIcon from '../../../assets/MINI_DB.png';
import InputFieldx from "../../../components/InputField/InputField";
import axios from 'axios';
import { getToken } from '../../../utils/tokenStorage';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

const VITScreenTwoDetails = () => {
  const navigate = useNavigate();
  const [vehicleTypes, setVehicleTypes] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(localStorage.getItem('hauler_type_id') || '');

  const [feeCategory, setFeeCategory] = useState(JSON.parse(localStorage.getItem('fee_category')) || null);
  const [haulerType, setHaulerType] = useState(JSON.parse(localStorage.getItem('hauler_type')) || null);

  const [balance, setBalance] = useState(localStorage.getItem('wallet_balance') || 1);
  const [taxId, setTaxId] = useState(localStorage.getItem('tax_id') || '');
  const token = getToken();

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(localStorage.getItem('fee_category_id') || '');
  const [loadingCategories, setLoadingCategories] = useState(false);

  // const [feeCategoryId, setFeeCategoryId] = useState(localStorage.getItem('fee_category_id') || 0);
  // const [haulerTypeId, setHaulerTypeId] = useState(localStorage.getItem('hauler_type_id') || 0);
  const [numberPlate, setNumberPlate] = useState(localStorage.getItem('number_plate') || '');
  // const [driverName, setDriverName] = useState(localStorage.getItem('driver_name') || 'null');
  // const [phoneNumber, setPhoneNumber] = useState(localStorage.getItem('phone_number') || 'null');
  // const [loadingPoint, setLoadingPoint] = useState(localStorage.getItem('loading_point') || 'null');
  // const [offloadingPoint, setOffloadingPoint] = useState(localStorage.getItem('offloading_point') || 'null');


  // Fetch fee categories
  const fetchCategories = useCallback(async (haulerTypeId) => {

    try {
      if (!token) {
        console.error("No token found, please log in.");
        return;
      }

      const url = `${API_BASE_URL}/user/get-fee-category-by-hauler-type?hauler_type_id=${haulerTypeId}`;


      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        setCategories(response.data.data || []);

      }
    } catch (error) {
      console.error('Error fetching fee categories:', error);
    }

    setLoadingCategories(false);
  });

  useEffect(() => {
    fetchVehicleTypes();

    if (selectedVehicle) {
      fetchCategories(selectedVehicle);
    }
  }, [selectedVehicle, fetchCategories]);

  const handleVehicleChange = async (e) => {
    const value = e.target.value;
    setSelectedVehicle(value);
    setLoadingCategories(true);
    setSelectedCategory('');
    fetchCategories(value);
  };

  const handleCategoriesChange = async (e) => {
    const value = e.target.value;
    setSelectedCategory(value);
  };

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





  const handleProceed = () => {
    // TODO: Extract Data to local storage
    if (selectedCategory && numberPlate && selectedVehicle) {

      localStorage.setItem('fee_category_id', selectedCategory);
      localStorage.setItem('number_plate', numberPlate);
      localStorage.setItem('hauler_type_id', selectedVehicle);

      localStorage.setItem('driver_name', 'null');
      localStorage.setItem('phone_number', 'null');
      localStorage.setItem('loading_point', 'null');
      localStorage.setItem('offloading_point', 'null');

      const selCat = categories.find(item => Number(item.id) === Number(selectedCategory));
      const selVeh = vehicleTypes.find(item => Number(item.id) === Number(selectedVehicle));

      localStorage.setItem('fee_category', JSON.stringify(selCat));
      localStorage.setItem('hauler_type', JSON.stringify(selVeh));
      localStorage.setItem('amount', Number(selCat.price));


      navigate('/vendor-it-three-debit');
    } else {
      alert("Ensure you have selected a vehicle type, entered a number plate and a Mineral");
    }

  }


  const handleBack = () => navigate('/vendor-it-one-ticket-mode');

  return (
    <Container>
      <TopBar>
        <BackIcon src={LeftIcon} onClick={handleBack} />
        <Title>Issue Ticket</Title>
      </TopBar>

      <TabContainer>
        <Tab $active>Issue Method</Tab>
        <Tab $active>Details</Tab>
        <Tab>Debit</Tab>
        <Tab>Ticket</Tab>
      </TabContainer>

      <MiniDashboard>
        <MiniDashboardIconStyled src={MiniDashboardIcon} />
        <DashboardText>
          <InfoColumn>
            <Label1>Wallet ID:</Label1>
            <Value1>{taxId || 'Wallet ID'}</Value1>
          </InfoColumn>
          <InfoColumn>
            <Label2>Balance:</Label2>
            <Value2>₦ {parseInt(balance).toLocaleString()}</Value2>
          </InfoColumn>
        </DashboardText>
      </MiniDashboard>

      <SelectLabelText>Vehicle Type:</SelectLabelText>
      <SelectDropdown
        value={selectedVehicle}
        onChange={(e) => handleVehicleChange(e)}
      >
        <option value="">-- Select Vehicle --</option>
        {vehicleTypes.map((type) => (
          <option key={type.id} value={type.id}>
            {type.name}
          </option>
        ))}
      </SelectDropdown>

      <InputFieldx
        label="Vehicle Number Plate"
        type="text"
        name="email"
        value={numberPlate}
        onChange={(e) => setNumberPlate(e.target.value)}
        placeholder="Enter Vehicle Number Plate"
      />


      {(categories.length > 0 && !loadingCategories) && (
        <>

          <SelectLabelText>Fee Category: </SelectLabelText>
          <SelectDropdown
            value={selectedCategory}
            onChange={(e) => handleCategoriesChange(e)}
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option
                key={category.id}
                value={category.id}
              >
                {category.name} - NGN {category.price}
              </option>
            ))}
          </SelectDropdown>

        </>
      )}

      <ProceedButton onClick={handleProceed}>Proceed</ProceedButton>
    </Container>
  );
};

// Styled Components
const SelectLabelText = styled.p`
  font-size: 16px;
  color: #414D63;
  margin-top: 10px;
  text-align: left;
  width: 100%;
  margin-bottom: 17px;
  // paddin-bottom: 30px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f6f6f6;
  height: 100vh;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 30px;
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
  
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0.38px;
  text-align: left;
`;
const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px; /* Adds space between tabs */
  width: 100%;
  margin-top: 10px;
`;

const Tab = styled.div`
  padding: 10px;
  font-size: 16px;
  color: ${(props) => (props.$active ? '#F28500' : '#aaa')};
  border-bottom: ${(props) => (props.$active ? '2px solid #F28500' : '1px solid #aaa')};
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
  width: 90%;
  margin: 20px 0;
  height: 116px;
  position: relative;
 


  @media (max-width: 280px) {
    max-width: 90%; /* Full width for very small devices */
    padding: 38px;
  }
`;

const MiniDashboardIconStyled = styled.img`
  position: absolute;
  top: -19px;
  left: -30px;
  width: 450px;
  height: 220px;
  z-index: 0;
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
  position: relative;
  z-index: 1;
`;




const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label1 = styled.p`
  font-size: 12px;
  color: #67728A;
  margin-left: 30px;
`;

const Value1 = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #CEECFF;
  margin: 0;
  letter-spacing: -0.15px;
   margin-left: 30px;
`;
const Label2 = styled.p`
  font-size: 12px;
  color: #67728A;
  margin-right: 40px;
`;

const Value2 = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #CEECFF;
  margin: 0;
  letter-spacing: -0.15px;
`;

const InputField1 = styled.input`
 width: 95%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid ${({ isError, isVerified }) =>
    isError ? 'red' : isVerified ? 'black' : 'black'};
  border-radius: 5px;
  margin-top: 10px;
  outline: none;

  &:focus {
    border-color: ${({ isError }) => (isError ? 'red' : 'black')};
    box-shadow: 0 0 5px rgba(108, 99, 255, 0.5);
  }
    margin-bottom: 80px;
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


const ProceedButton = styled.button`
  background-color: #FDE5C0;
  padding: 15px 30px 15px 30px;
  border-radius: 25px;
  border: none;
  color: #F07F23;
  cursor: pointer;
  &:hover {
    background-color: #e5b46a;
    color: #fff;
  }
  width: 114px;]
  max-width: 300px;
  text-align: center;
`;

export default VITScreenTwoDetails;
