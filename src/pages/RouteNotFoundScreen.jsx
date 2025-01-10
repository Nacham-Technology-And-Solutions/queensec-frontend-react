 
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; 
import QueensecLogo from '../assets/Queensec_1.png'; // Import the logo 
import TextButton from "../components/TextButton/TextButton"; 
import Button from "../components/Button/Button";
 


const RouteNotFoundScreen = () => {
  const navigate = useNavigate(); 

  const returnHistory = () => {
    navigate('/dashboard-page');
  };

  const handleSigUp = () => {
    navigate('/sign-up-user-type');
  };

  return (
    <Container>
      <Logo src={QueensecLogo} /> 
      
      <Heading>Not Found</Heading>
      <FormTitle> Ops seems you are lost?.</FormTitle>

       
      <Bottom>
        <Button label="Return to Dashboard" onClick={returnHistory} size='large' isSpanWidth={true} />
        <br />
        <span>New to Kadamines? &nbsp; <TextButton onClick={handleSigUp} label="Sign-Up" /></span>
      </Bottom>

    </Container>
  );
};

// Styled Components
const Container = styled.div`
 display: flex;
 flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 90%;
  background-color: #f6f6f6;
  padding: 20px;
  align-items: center;
  max-width: 400px;  
  margin: 0px auto; 
  border-radius: 19px;
`;

const Logo = styled.img`

  width: 100px;
  margin-bottom: 20px;
  margin-left : -280px;
  // padding-left: 100px;
`;

const Heading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
  text-decoration: underline;
`;
const FormTitle = styled.p`
  font-size: 18.5px;
  color: #666;
  text-align: center;
  margin-top: 5px;
`; 

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
`;

export default RouteNotFoundScreen;
