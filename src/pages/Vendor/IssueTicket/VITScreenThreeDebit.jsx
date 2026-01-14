
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LeftIcon from '../../../assets/left.png';
import MiniDashboardIcon from '../../../assets/MINI_DB.png';
import InputFieldx from "../../../components/InputField/InputField";
import axios from 'axios';
import { getToken } from '../../../utils/tokenStorage';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

const VITScreenThreeDebit = () => {
  const navigate = useNavigate();

  const [sufficient, setSufficient] = useState(false);
  const [sufficiency, setSufficiency] = useState('Sufficient Balance');

  const [btnLabel, setBtnLabel] = useState("Proceed");
  const [difference, setDifference] = useState(0);
  const [amount, setAmount] = useState(localStorage.getItem('amount') || 1);
  const [balance, setBalance] = useState(localStorage.getItem('wallet_balance') || 1);
  const [taxId, setTaxId] = useState(localStorage.getItem('tax_id') || '');
  const token = getToken();
  const [feeCategory, setFeeCategory] = useState(JSON.parse(localStorage.getItem('fee_category')) || null);
  const [haulerType, setHaulerType] = useState(JSON.parse(localStorage.getItem('hauler_type')) || null);

  const [feeCategoryId, setFeeCategoryId] = useState(localStorage.getItem('fee_category_id') || 1);
  const [haulerTypeId, setHaulerTypeId] = useState(localStorage.getItem('hauler_type_id') || 1);
  const [numberPlate, setNumberPlate] = useState(localStorage.getItem('number_plate') || '');
  const [driverName, setDriverName] = useState(localStorage.getItem('driver_name') || 'null');
  const [phoneNumber, setPhoneNumber] = useState(localStorage.getItem('phone_number') || 'null');
  const [loadingPoint, setLoadingPoint] = useState(localStorage.getItem('loading_point') || 'null');
  const [offloadingPoint, setOffloadingPoint] = useState(localStorage.getItem('offloading_point') || 'null');

  const handleAmountChange = async (e) => {
    const inputTaxId = e.target.value;
    setAmount(inputTaxId);

  };

  useEffect(() => {
    // Extract Data for Placing Order  
    setDifference(balance - amount); // Check if the cost can be subtracted from the wallet balance without negatives
    // If sufficient funds are in the wallet,
    // change the proceed button to lead to ticket generation area. 
    // lock and debit the wallet.
    // Issue Ticket.
    if ((balance - amount) > -1) {
      setSufficient(true);
      setSufficiency("Sufficient Balance");
      setBtnLabel("Issue Ticket");
    } else {
      // If insufficient funds,
      // change the proceed button to lead the fund screen.
      setSufficient(false)
      setSufficiency("Insufficient Balance")
      setBtnLabel("Fund Wallet");
    }

  }, [amount, balance, haulerType]);


  const handleProceed = async () => {

    if (sufficient) {

      if (!feeCategoryId || !haulerTypeId || !numberPlate || !token) {
        throw new Error('Incomplete Ticket data. Please ensure all fields are filled.');
      }

      const payload = {
        fee_category_id: feeCategoryId,
        hauler_type_id: haulerTypeId,
        number_plate: numberPlate,
        driver_name: driverName,
        phone_number: phoneNumber,
        loading_point: loadingPoint,
        offloading_point: offloadingPoint,
      };
      try {
        const orderResponse = await axios.post(`${API_BASE_URL}/wallet/issue-ticket`, payload, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (orderResponse.status === 201) {
          if (orderResponse.data.success) {
            const responseData = orderResponse.data.data;

            localStorage.setItem('responseData', JSON.stringify(responseData));

          }
        }

        navigate('/vendor-it-four-success');
      } catch (error) {
        console.error('Error Issuing Ticket:', error);
      }


    } else {
      // Navigate to fund wallet flow,
      navigate('/vendor-fw-one-amount');
    }

  }

  const handleBack = () => navigate('/vendor-it-two-details');

  return (
    <Container>
      <TopBar>
        <BackIcon src={LeftIcon} onClick={handleBack} />
        <Title>Issue Ticket</Title>
      </TopBar>

      <TabContainer>
        <Tab $active>Issue Method</Tab>
        <Tab $active>Details</Tab>
        <Tab $active>Debit</Tab>
        <Tab>Ticket</Tab>
      </TabContainer>


      <MiniDashboard>
        <MiniDashboardIconStyled src={MiniDashboardIcon} />
        <DashboardText>
          <InfoColumn>
            <Label1>Wallet ID:</Label1>
            <Value1>{taxId || 'Wallet ID'}</Value1>
          </InfoColumn>
          <InfoColumnLeft>
            <Label>Number Plate: </Label>
            <ValueBold>{numberPlate}</ValueBold>

            <Label0>Balance:</Label0>
            <Value0>₦{parseInt(balance).toLocaleString()}</Value0>
          </InfoColumnLeft>
        </DashboardText>
      </MiniDashboard>

      <TaxIdContainer>

        <p>You want to issue ticket for [ {feeCategory.name} ] in a [ {haulerType.name} ], Which will Cost [ ₦{parseInt(amount).toLocaleString()} ]?</p>
        <InputFieldx
          label="Mineral Cost"
          type="number"
          name="amount"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Enter Fund Amount"
          isDisabled
          isRequired={false}
        />

        <Feedback>
          {sufficient && (<PositiveFeedBack>{sufficiency}</PositiveFeedBack>)}
          {!sufficient && (<NegativeFeedBack>{sufficiency}</NegativeFeedBack>)}
        </Feedback>
        {
          !sufficient && (
            <>
              <p>
                You will need to fund your wallet to continue to issue this ticket.

                <PositiveFeedBack>Wallet: ₦{parseInt(balance).toLocaleString()}</PositiveFeedBack>
                <NegativeFeedBack>Cost: ₦{parseInt(amount).toLocaleString()}</NegativeFeedBack>
                <OrangeFeedBack>Fund Needed: ₦{parseInt(difference).toLocaleString()}</OrangeFeedBack>
              </p>
            </>
          )
        }

      </TaxIdContainer>

      <ProceedButton onClick={handleProceed}>{btnLabel}</ProceedButton>
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

const TaxIdContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
  margin-top: 20px;
  width: 100%;
`;


const Feedback = styled.div`
    display: flex;
    flexd-direction: column;
      align-items: center;
      width:  100%;
        margin-left: 500px;
        margin-top: -8px;
          @media (max-width: 768px) {
    gap: 3px; /* Adjust gap for smaller screens */
    margin-left: 350px;
  }
`;
const PositiveFeedBack = styled.p`
  color: #00C7BE; /* Feedback color */
  font-size: 18px;
  font-weight: 600;
  margin-left: 8px;
    @media (max-width: 768px) {
     
    font-size: 16px; /* Reduce font size for smaller devices */
  }

  @media (max-width: 480px) {
   
    font-size: 14px;
  }
`;

const NegativeFeedBack = styled.p`
  color: #FF3B30; /* Feedback color */
  font-size: 18px;
  font-weight: 600;
  margin-left: 8px;
    @media (max-width: 768px) {
     
    font-size: 16px; /* Reduce font size for smaller devices */
  }

  @media (max-width: 480px) {
   
    font-size: 14px;
  }
`;

const OrangeFeedBack = styled.p`
  color: #FF9500; /* Feedback color */
  font-size: 18px;
  font-weight: 600;
  margin-left: 8px;
    @media (max-width: 768px) {
     
    font-size: 16px; /* Reduce font size for smaller devices */
  }

  @media (max-width: 480px) {
   
    font-size: 14px;
  }
`;


const InfoColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 25px;
  margin-right: 20px;
`;


const Label = styled.p`
  
  font-size: 11px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.15399999916553497px;
  text-align: left;
  color: #67728A;
  margin: 0;
    @media (max-width: 768px) {
     font-size: 11px;
   margin-right: 5px;
  }

  @media (max-width: 480px) {
     font-size: 11px;
  }
  @media (max-width: 1180px) {
      font-size: 11px;
  }
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
   @media (max-width: 768px) {
     font-size: 14px;
   
  }

  @media (max-width: 480px) {
     font-size: 14px;
  }
  @media (max-width: 1180px) {
      font-size: 14px;
  }
`;

// const InfoColumn = styled.div`
//   display: flex;
//   flex-direction: column;
// `;


const Label0 = styled.p`
  
  font-size: 11px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.15399999916553497px;
  text-align: left;
  color: #67728A;
  margin: 0;
  margin-top: 13px;
   @media (max-width: 768px) {
     font-size: 11px;
   
  }

  @media (max-width: 480px) {
     font-size: 11px;
  }
  @media (max-width: 1180px) {
      font-size: 11px;
  }
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
   @media (max-width: 768px) {
     font-size: 14px;
   
  }

  @media (max-width: 480px) {
     font-size: 14px;
  }
  @media (max-width: 1180px) {
      font-size: 14px;
  }
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

export default VITScreenThreeDebit;
