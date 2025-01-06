import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import backIcon from '../assets/left.png';

const NotificationDetailsPage = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Header>
                <BackButton onClick={() => navigate(-1)}>
                    <BackIcon src={backIcon} alt="Back" />
                </BackButton>
            </Header>
            <Title>More ways to pay your tax</Title>
            <Message>
                We have added two payment gateways to make your payment experience faster.
                <br /><br />
                Lorem ipsum vase sonat. Tivis rutrad fastän nide att sassok kyr. Are hartad. Ler fonoskop i hypovis.
                Derade stenora mäligt, plasperas bloggosfär. Du kan vara drabbad.
                <br /><br />
                Kack. Bonus malus kapselbryggare. Heteor lar, ahar belagt är atis. Treng eurotkig kaning. Vuvís rul,
                dimåras, lökott.
            </Message>
        </Container>
    );

};

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #F7F9FA;
  height: 100vh;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 30px;
  font-family: 'Ubuntu', sans-serif;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const BackIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const Title = styled.h1`
  font-family: Ubuntu, sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  color: #414D63;
  margin-top: 10px;
  margin-bottom: 20px;
  text-align: left;
`;

const Message = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  color: #67728A;
  padding: 10px;
  height: 100%; /* Adjusts the message content to fill 79% of the container */
  overflow-y: auto; /* Adds scroll if the text exceeds the container height */
`;

export default NotificationDetailsPage;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
// import planeIcon from '../assets/planeicon.png';

// const NotificationPage = ({ notifications }) => {
//     const navigate = useNavigate();

//     const handleNotificationClick = (id) => {
//         navigate(`/Notifications-page/${id}`);
//     };

//     const getPreviewMessage = (message) => {
//         return message.length > 60 ? `${message.substring(0, 60)}...` : message;
//     };

//     return (
//         <Container>
//             <Header>
//                 <Title>Transaction</Title>
//             </Header>

//             {notifications.map((notification) => (
//                 <NotificationContainer key={notification.id} onClick={() => handleNotificationClick(notification.id)}>
//                     <NotificationDate>{notification.date || new Date().toLocaleDateString()}</NotificationDate>
//                     <NotificationContent>
//                         <PlaneIcon src={planeIcon} alt="Plane Icon" />
//                         <div>
//                             <NotificationTitle>{notification.title}</NotificationTitle>
//                             <NotificationMessage>{getPreviewMessage(notification.message)}</NotificationMessage>
//                         </div>
//                     </NotificationContent>
//                 </NotificationContainer>
//             ))}

//             {/* Bottom Navigation (assuming it’s already styled and functional as shown before) */}
//             <BottomNav>
//                 {/* Other navigation icons */}
//             </BottomNav>
//         </Container>
//     );
// };

// // Styled Components
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 20px;
//   background-color: #F7F9FA;
//   height: 100vh;
//   max-width: 400px;
//   margin: 0 auto;
//   border-radius: 30px;
//   font-family: 'Ubuntu', sans-serif;
// `;

// const Header = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 20px;
// `;

// const Title = styled.h1`
//   font-family: Ubuntu;
//   font-size: 20px;
//   font-weight: 500;
//   line-height: 32px;
//   letter-spacing: 0.3799999952316284px;
//   text-align: left;
//   color: #6C3ECF;
//   margin-left: 28px;
// `;

// const NotificationContainer = styled.div`
//   background-color: white;
//   padding: 15px;
//   border-radius: 10px;
//   margin-bottom: 15px;
//   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
//   cursor: pointer;
// `;

// const NotificationDate = styled.p`
//   font-family: Ubuntu;
//   font-size: 14px;
//   font-weight: 400;
//   line-height: 20px;
//   letter-spacing: -0.153px;
//   color: #414D63;
// `;

// const NotificationContent = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const PlaneIcon = styled.img`
//   width: 20px;
//   height: 20px;
//   margin-right: 10px;
// `;

// const NotificationTitle = styled.h2`
//   font-family: Ubuntu;
//   font-size: 14px;
//   font-weight: 500;
//   line-height: 20px;
//   letter-spacing: -0.153px;
//   color: #414D63;
//   margin: 0;
// `;

// const NotificationMessage = styled.p`
//   font-family: Ubuntu;
//   font-size: 11px;
//   font-weight: 400;
//   line-height: 20px;
//   letter-spacing: -0.153px;
//   color: #67728A;
//   margin: 0;
// `;

// // Example data for notifications (for testing)
// const notifications = [
//     {
//         id: 1,
//         title: "More ways to pay your tax",
//         message: "We have added two payment gateways to make your payment experience faster.",
//         date: "16 Sep 2024"
//     },
//     // More notifications...
// ];

// export default NotificationPage;
