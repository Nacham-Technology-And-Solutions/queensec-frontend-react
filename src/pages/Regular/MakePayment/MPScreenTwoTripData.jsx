import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LeftIcon from '../../../assets/left.png';
import MiniDashboardIcon from '../../../assets/MINI_DB.png';
import Button from '../../../components/Button/Button';

const MPScreenTwoTripData = () => {
  const navigate = useNavigate();
  const [tripData, setTripData] = useState({
    driverName: localStorage.getItem('driverName') || '',
    phoneNumber: localStorage.getItem('phoneNumber') || '',
    loadingPoint: localStorage.getItem('loadingPoint') || '',
    offloadingPoint: localStorage.getItem('offloadingPoint') || '',
  });
  const [haulersCount, setHaulersCount] = useState(localStorage.getItem('haulers_count') || 0);



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTripData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleProceed = () => {
    const { driverName, phoneNumber, loadingPoint, offloadingPoint } = tripData;

    if (driverName && phoneNumber && loadingPoint && offloadingPoint) {
      // Save data to local storage
      localStorage.setItem('driverName', driverName);
      localStorage.setItem('phoneNumber', phoneNumber);
      localStorage.setItem('loadingPoint', loadingPoint);
      localStorage.setItem('offloadingPoint', offloadingPoint);

      navigate('/mp-three-fee-category'); // Navigate to the next screen
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <Container>
      <TopBar>
        <BackIcon src={LeftIcon} onClick={() => navigate('/mp-one-vehicle')} />
        <Title>Trip Data</Title>
      </TopBar>

      <TabContainer>
        <Tab active>Vehicle</Tab>
        <Tab active>Trip Data</Tab>
        <Tab>Category</Tab>
        <Tab>Bank details</Tab>
      </TabContainer>

      <MiniDashboard>
        <MiniDashboardIconStyled src={MiniDashboardIcon} />
        <DashboardText>
          <InfoColumn>
            <Label1>Tax ID:</Label1>
            <Value1>{localStorage.getItem('tax_id') || 'N/A'}</Value1>
          </InfoColumn>
          <InfoColumn>
            <Label2>Haulers:</Label2>
            <Value2>{haulersCount}</Value2>
          </InfoColumn>
        </DashboardText>
      </MiniDashboard>

      {/* Form Inputs */}
      <InputFieldWrapper>
        <Label htmlFor="driverName">Driver Name</Label>
        <InputField
          type="text"
          id="driverName"
          name="driverName"
          value={tripData.driverName}
          onChange={handleInputChange}
          placeholder="Enter Driver Name"
          required
        />
      </InputFieldWrapper>

      <InputFieldWrapper>
        <Label htmlFor="phoneNumber">Phone Number</Label>
        <InputField
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={tripData.phoneNumber}
          onChange={handleInputChange}
          placeholder="Enter Phone Number"
          required
        />
      </InputFieldWrapper>

      <InputFieldWrapper>
        <Label htmlFor="loadingPoint">Loading Point</Label>
        <InputField
          type="text"
          id="loadingPoint"
          name="loadingPoint"
          value={tripData.loadingPoint}
          onChange={handleInputChange}
          placeholder="Enter Loading Point"
          required
        />
      </InputFieldWrapper>

      <InputFieldWrapper>
        <Label htmlFor="offloadingPoint">Offloading Point</Label>
        <InputField
          type="text"
          id="offloadingPoint"
          name="offloadingPoint"
          value={tripData.offloadingPoint}
          onChange={handleInputChange}
          placeholder="Enter Offloading Point"
          required
        />
      </InputFieldWrapper>

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
  border-radius: 30px;
     @media (max-width: 768px) {
     height: 100%; /* Scale icon down for smaller devices */
   
  }

  @media (max-width: 480px) {
     height: 100%;
  }
  @media (max-width: 1180px) {
      height: 100%;
  }
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
  color: #6c3ecf; 
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0.38px;
  text-align: left;
`;

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
  padding-bottom: 55px;
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
  // @media (max-width: 1024px) {
  //     margin-top: 05px;
  //      height: 250px;
  // }
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
const Label = styled.label`
  font-size: 12px;
  color: #67728a;
  margin-bottom: 5px;
  display: block;
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

const InputFieldWrapper = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

const InputField = styled.input`
  width: 90%;
  padding: 10px; 
  font-size: 14px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;

  &:focus {
    outline: none;
    border-color: #6c3ecf;
    box-shadow: 0 0 5px rgba(108, 62, 207, 0.3);
  }
`;
 

export default MPScreenTwoTripData;
