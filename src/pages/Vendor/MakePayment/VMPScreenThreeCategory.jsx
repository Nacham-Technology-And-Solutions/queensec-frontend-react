import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LeftIcon from '../../../assets/left.png';
import MiniDashboardIcon from '../../../assets/MINI_DB.png';
import axios from 'axios';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL


const VMPScreenThreeCategory = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [truckInfo, setTruckInfo] = useState('');
  const [plateNumber, setPlateNumber] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [paymentOption, setPaymentOption] = useState('');

  useEffect(() => {


    // Fetch and parse user data from localStorage
    const savedPaymentOption = localStorage.getItem('haulerType');
    setPaymentOption(savedPaymentOption);

    if (savedPaymentOption === 'savedHauler') {
      const savedDataString = localStorage.getItem('savedUser');


      if (savedDataString) {
        try {
          const savedData = JSON.parse(savedDataString);
          setUsername(savedData.username || 'Unknown User');
          setTruckInfo(savedData.haulers?.toString() || 'Unknown');
          setPlateNumber(savedData.numberPlate)
        } catch (error) {
          console.error('Error parsing savedUser data:', error);
        }
      }
    } else if (savedPaymentOption === 'oneTimeTrip') {
      const oneTimeTrip = localStorage.getItem('oneTimeTripData');
      if (oneTimeTrip) {
        try {
          const oneTimeTripData = JSON.parse(oneTimeTrip);
          setUsername('OTP');
          setTruckInfo('N/A');
          setPlateNumber(oneTimeTripData.vehiclePlateNumber);
        } catch (error) {
          console.error('Error parsing oneTimeTripData:', error);
        }
      }
    }


    // Fetch fee categories
    const fetchCategories = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error("No token found, please log in.");
          return;
        }
        const vehicleTypeId = localStorage.getItem("VehiclTypeId");
        const savedHaulerId = localStorage.getItem('haulerId')


        const isOneTime = vehicleTypeId && vehicleTypeId !== savedHaulerId;
        const url = isOneTime
          ? `${API_BASE_URL}/user/get-fee-category-by-hauler-type?hauler_type_id=${vehicleTypeId}`
          : `${API_BASE_URL}/user/get-fee-category?hauler_id=${savedHaulerId}`;
        // /user/get-fee-category


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
    };

    fetchCategories();
  }, []);

  const handleBack = () => {
    navigate('/vendor-mp-two-trip-data');
  };

  const handleProceed = () => {
    if (!selectedCategory) {
      alert('Please select a fee category before proceeding.');
      return;
    }

    // Save selected category for the next screen
    const selectedCategoryData = categories.find((cat) => cat.id === parseInt(selectedCategory, 10));


    if (selectedCategoryData) {
      localStorage.setItem('selectedCategory', JSON.stringify(selectedCategoryData));
      localStorage.setItem('mineral_id', selectedCategoryData.mineral_id);
      localStorage.setItem('fee_category_id', selectedCategoryData.id);
      localStorage.setItem('selectedCategoryPrice', selectedCategoryData.price);


      localStorage.setItem('selectedCategoryName', selectedCategoryData.name);
    }

    navigate('/vendor-mp-four-bank-details');
  };

  return (
    <Container>
      <TopBar>
        <BackIcon src={LeftIcon} onClick={handleBack} />
        <Title>Make Payment</Title>
      </TopBar>

      <TabContainer>
        <Tab active>User</Tab>
        <Tab active>Trip Data</Tab>
        <Tab active>Category</Tab>
        <Tab>Bank details</Tab>
      </TabContainer>

      <MiniDashboard>
        <MiniDashboardIconStyled src={MiniDashboardIcon} />
        <DashboardText>
          <InfoColumn>
            <Label1>User:</Label1>
            <Value1>{username || 'user'}</Value1>
          </InfoColumn>
          <InfoColumnLeft>
            <Label>Hauler</Label>
            <ValueBold>{truckInfo}</ValueBold>
            <Label0>Plate Number:</Label0>
            <Value0>{plateNumber}</Value0>
          </InfoColumnLeft>
        </DashboardText>
      </MiniDashboard>

      <SelectCategoryText>Fee Category</SelectCategoryText>
      <SelectDropdown
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
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
  text-align: left;
  width: 141px;
height: 32px;


`;

const TabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
  gap: 10px;
`;

const Tab = styled.div`
  padding: 10px;
  font-size: 16px;
  color: ${(props) => (props.active ? '#F28500' : '#aaa')};
  border-bottom: ${(props) => (props.active ? '2px solid #F28500' : '1px solid #aaa')};
  cursor: pointer;
  flex: 1;
  text-align: center;
  

  &:first-child {
    margin-right: 12px; /* Add space between tabs */
  }
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
  margin-bottom: 49px;
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
  justify-content: flex-end;
  width: 100%;
  position: relative;
  z-index: 1;
  margin-right: 20px;
`;

const InfoColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
    align-items: left;
`;

const Label1 = styled.p`
  font-size: 12px;
  color: #67728A;

  margin: 0;
  margin-top: 27px;

        @media (max-width: 768px) {
    
     margin-left: -3px; 
  }

  @media (max-width: 480px) {
    margin-left: -3px;
  }
  @media (max-width: 280px) {
    margin-left: -3px;
  }
  @media (max-width: 740px) {
    margin-left: 5px;
  }

`;

const Value1 = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #CEECFF;
  margin-top: 9px;
  margin-right: 186.5px;
     @media (max-width: 768px) {
    
     margin-right: 186.5px; 
  }

  @media (max-width: 480px) {
    margin-right: 186.5px;
  }
  @media (max-width: 1180px) {
    margin-right: 186.5px;
  }
      @media (max-width: 280px) {
    margin-left: -3px;
  }
      @media (max-width: 740px) {
    margin-right: 133px;
  }


`;


const Label = styled.p`
  
  font-size: 11px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.15399999916553497px;
  text-align: left;
  color: #67728A;
  margin: 0;
`;

const ValueBold = styled.p`
  
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.15399999916553497px;
  text-align: right;
  color: #CEECFF;
  margin: 0;

  padding: 2px 4px;
  border-radius: 4px;
`;

const Value = styled.p`
  
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.15399999916553497px;
  text-align: right;
  color: #CEECFF;
  margin: 0;
  
  padding: 2px 4px;
  border-radius: 4px;
`;
const Label0 = styled.p`
  
  font-size: 11px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.15399999916553497px;
  text-align: left;
  color: #67728A;
  margin: 0;
  margin-top: 13px;
`;

const ValueBold0 = styled.p`
  
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.15399999916553497px;
  text-align: right;
  color: #CEECFF;
  margin: 0;

  padding: 2px 4px;
  border-radius: 4px;
`;

const Value0 = styled.p`
  
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.15399999916553497px;
  text-align: right;
  color: #CEECFF;
  margin: 0;
  
  padding: 2px 4px;
  border-radius: 4px;
`;

const SelectCategoryText = styled.p`
  font-size: 16px;
  color: #666;
  margin-top: 10px;
  text-align: left;
  width: 100%;
  
  margin-bottom: -4px;
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
  padding: 12px 40px;
  border-radius: 25px;
  border: none;
  width: 90%;
  max-width: 300px;
  cursor: pointer;
  color: #F07F23;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 190px;
  &:hover {
    background-color: #e5b46a;
    color: #fff;
  }
  width: 114px;
  height: 50px;
  opacity: 1;
  
`;

export default VMPScreenThreeCategory;

