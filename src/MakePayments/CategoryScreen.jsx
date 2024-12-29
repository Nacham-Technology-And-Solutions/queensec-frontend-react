import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LeftIcon from '../Assets/left.png';
import MiniDashboardIcon from '../Assets/MINI_DB.png';
// import ubuntu from '../Assets/Ubuntu/Ubuntu-Regular.ttf'
import axios from 'axios';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

const MakePaymentCategoryScreen = () => {
  const navigate = useNavigate();
  const [taxId, setTaxId] = useState(localStorage.getItem('tax_id') || 'Nas/Nas/0013'); // Example tax ID
  const [plateNumber, setPlateNumber] = useState(localStorage.getItem('number_plate') || 'null'); // Example plate number
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const token = localStorage.getItem("token"); 
        if (!token) {
          console.error("No token found, please log in.");
          return; 
        }
  
        
        const haulerTypeId = localStorage.getItem("hauler_type_id"); 
        const savedHaulerId = localStorage.getItem("hauler_id"); 

  
     
        const isOneTime = haulerTypeId && haulerTypeId !== savedHaulerId;
        const url = isOneTime
          ? `${API_BASE_URL}/user/get-fee-category-by-hauler-type?hauler_type_id=${haulerTypeId}`
          : `${API_BASE_URL}/fee-category?hauler_id=${savedHaulerId}`;
  

        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
  
        if (response.data.success) {
          const categories = response.data.data; 
          setCategories(categories);
  
         
          if (categories.length > 0 && categories[0].mineral_id) {
            localStorage.setItem("mineral_id", categories[0].mineral_id);
          } else {
            console.warn("No categories found or mineral_id missing.");
          }
        } else {
          console.error("Error fetching categories:", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching category data:", error.response?.data || error.message);
      }
    };
  
    fetchCategories();
  }, []);
  const handleBack = () => {
    navigate('/Trip-Data');
  };
const handleProceed = () => {
  if (!selectedCategory) {
    alert("Please select a category before proceeding.");
    return;
  }


  const [selectedMineralId, selectedMineralSubId] = selectedCategory.split("-").map(Number);


  const selectedCategoryData = categories.find(
    (category) =>
      category.mineral_id === selectedMineralId &&
      category.mineral_sub_id === selectedMineralSubId
  );

  if (selectedCategoryData) {
    const formattedPrice = `NGN ${parseFloat(selectedCategoryData.price).toLocaleString()}`;
    localStorage.setItem("selectedCategoryPrice", formattedPrice); 

    localStorage.setItem("mineral_sub_id", selectedCategoryData.mineral_sub_id);
    const categoryWithSubId = {
      ...selectedCategoryData,
      mineral_sub_id: selectedCategoryData.mineral_sub_id, 
    };
    localStorage.setItem("selectedCategory", JSON.stringify(categoryWithSubId));


  } else {
    console.error("Category not found for selected ID:", selectedCategory);
  }

  // Navigate to the Bank Details screen
  navigate("/MP_BankDetailsScreen");
};

  return (
    <Container>
      <TopBar>
        <BackIcon src={LeftIcon} onClick={handleBack} />
        <Title>Make Payment</Title>
      </TopBar>
  
      <TabContainer>
        <Tab active>Vehicle</Tab>
        <Tab active>Trip Data</Tab>
        <Tab active>Category</Tab>
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
            <Label2>Plate Number:</Label2>
            <Value2>{plateNumber}</Value2>
          </InfoColumn>
        </DashboardText>
      </MiniDashboard>
  
      <SelectCategoryText>Fee Category</SelectCategoryText>
      <SelectDropdown
  value={selectedCategory} // Ensure this state correctly matches the selected option
  onChange={(e) => {
    const selectedValue = e.target.value;
    setSelectedCategory(selectedValue); // Update the state correctly

    // Optionally log for debugging

  }}
>
  <option value="">Select a category</option>
  {categories.map((category) => (
    <option
    key={`${category.mineral_id}-${category.mineral_sub_id}`} 
    value={`${category.mineral_id}-${category.mineral_sub_id}`} 
    >
      {category.name} - NGN {parseFloat(category.price).toLocaleString()} {/* Format price */}
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
  font-family: Ubuntu;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  text-align: left;
`;
// const TabContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 100%;
//   margin-top: 10px;
// `;
// const Tab = styled.div`
//   padding: 10px;
//   font-size: 16px;
//   color: ${(props) => (props.active ? '#F28500' : '#aaa')};
//   border-bottom: ${(props) => (props.active ? '2px solid #F28500' : '1px solid #aaa')};
//   cursor: pointer;
//   text-align: center;
//   width: 100px;
// `;
// const TabContainer = styled.div`
//   display: flex;
//   justify-content: space-around; /* Evenly distribute space between tabs */
//   width: 100%;
//   margin-top: 10px;
// `;

// const Tab = styled.div`
//   flex: 1; /* Each tab takes up equal space */
//   text-align: center;
//   padding: 10px;
//   font-size: 16px;
//   color: ${(props) => (props.active ? '#F28500' : '#aaa')};
//   border-bottom: ${(props) => (props.active ? '2px solid #F28500' : '1px solid #aaa')};
//   cursor: pointer;
// `;
const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
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
  width: 100px;
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
  margin: 0;
  margin-top: 27px;
  margin-left: 28px;
`;
const Label2 = styled.p`
  font-size: 12px;
  font-family:  ubuntu;
  color: #67728A;
  margin: 0;
  margin-top: 25px;
  margin-right: 60px;
`;

const Value1 = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #CEECFF;
  margin-top: 9;
    margin-left: 28px;
     @media (max-width: 1180px) {
font-size: 12.5px;
  }
`;
const Value2= styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #CEECFF;
  margin-top: 9;
    margin-left: 10.5px;
`;

const SelectCategoryText = styled.p`
  font-size: 16px;
  color: #666;
  margin-top: 10px;
  text-align: left;
  width: 100%;
  font-family: ubuntu;
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
  font-family: ubuntu;
`;

export default MakePaymentCategoryScreen;


