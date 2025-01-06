import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import img_png from './assets/img_png.png'; // Profile image
import signOutIcon from './assets/sign-out.png'; // Sign-out icon
import folder_C from './assets/folder_C.png';
import transactions_N from './assets/transactions_N.png';
import notification_N from './assets/notification_N.png';
import profile_N from './assets/profile_N.png';
import profile_C from './assets/profile_C.png';
import folder_N from './assets/folder_N.png';
import { useUser } from './context/UserContext';
import axios from 'axios';
import QRCode from 'react-qr-code';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL


 const ProfileScreen = () => {
  const { user } = useUser(); // Access user from context
  const navigate = useNavigate();

  const goToDashboard = () => {
    if (user?.accountType === 'federal_agency') {
      navigate('/Enterprise-Dashboard');
    } else if (user?.accountType === 'vendor') {
      navigate('/Vendors-Dashboard');
    }  else if (user?.accountType === 'individual'){
      navigate('/dashboard-page');
    }
  };

  const goToTransactions = () => navigate('/Transactions-page');
  const goToNotifications = () => navigate('/Notifications-page');
  const goToProfile = () => navigate('/User-Profile');

  // Helper function to convert accountType to readable text
  const getAccountTypeText = (accountType) => {
    if (accountType === 'federal_agency') return 'Enterprise';
    if (accountType === 'individual') return 'Individual';
    if (accountType === 'vendor') return 'Vendor';
    return 'Unknown';
  };
   const token = localStorage.getItem('token');

   
  const handleSignOut = async () => {
    const url = `${API_BASE_URL}/auth/user/logout`
    try {
      const response = await axios.post(url, {}, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Replace with your token mechanism
        },
      });

      if (response.data.success) {
        // Clear local storage or cookies related to authentication
        localStorage.removeItem('token');
        localStorage.removeItem('user');
         localStorage.clear();
        // Redirect to login page
        navigate('/Login-Page');
      } else {
        console.error('Failed to log out:', response.statusText);
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };
  const userName = (accountType) => {
    if (accountType === 'federal_agency') {
      return user?.business_name;
    } else if (accountType === 'individual') {
      return user?.userName;
    } else if (accountType === 'vendor') {
      return user?.userName;
    } else {
      return 'Unknown Account Type'; // Optional: Handle unexpected account types
    }
  };
  
const img = localStorage.getItem("image_url") || "https://via.placeholder.com/150";
  return (
    <Container>
      <Header>
        <ProfileHeader>
          <ProfileTitle>Profile</ProfileTitle>
          <SignOutContainer>
            <SignOutText>Sign Out</SignOutText>
            <SignOutButton
              src={signOutIcon}
              alt="Sign Out"
              onClick={handleSignOut} // Replace with proper signOut handling
            />
          </SignOutContainer>
        </ProfileHeader>

        <ProfileImage src={img} alt="Profile" />
        <UserName>{userName(user?.accountType) || ''}</UserName>
      </Header>

      <Details>
        <Label>Tax Identification</Label>
        <Input value={user?.taxId || 'null'} readOnly />

        <Label>Account Type</Label>
        <Input value={getAccountTypeText(user?.accountType)} readOnly />

        <HaulerSection>
  <HaulerLabel>Haulers</HaulerLabel>
  <HaulerValue>
    {Array.isArray(user?.haulers) ? user.haulers.length : 0}
  </HaulerValue>
</HaulerSection>

        <SeeMore>See more</SeeMore>

        <Label>Email</Label>
        <Input value={user?.email || 'Musa96@gmail.com'} readOnly />

        <Label>State</Label>
        <Input value={user?.state || 'Nasarawa'} readOnly />
      </Details>
      <QRCodeContainer>
          <QRCode value={`${user?.taxId }`} size={150} bgColor="#f6f6f6" fgColor="#6C3ECF" />
        </QRCodeContainer>
      <BottomNav>
        <NavIcon src={folder_N} onClick={goToDashboard} alt="Dashboard" />
        <NavIcon src={transactions_N} onClick={goToTransactions} alt="Transactions" />
        <NavIcon src={notification_N} onClick={goToNotifications} alt="Notifications" />
        <NavIconContainer>
          <NavIcon src={profile_C} onClick={goToProfile} alt="Profile" />
          <DashboardLabel>Profile</DashboardLabel>
        </NavIconContainer>
      </BottomNav>
    </Container>
  );
}

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  padding-bottom: 0px;
  background-color: #F7F9FA;
  height: 120vh;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 30px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
`;

const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const ProfileTitle = styled.h1`
  font-size: 24px;
  color: #6C3ECF;
  align-self: flex-start;
`;

const SignOutContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const SignOutButton = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-left: 7px;
`;

const SignOutText = styled.span`
  font-size: 14px;
  color: #414D63;
  margin-left: 5px;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: 10px;
`;

const UserName = styled.h2`
  font-size: 18px;
  color:#414D63;
  margin-top: 10px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: auto;
`;

const Label = styled.label`
  font-size: 14px;
  color: #666;
  margin-top: 20px;
`;

const Input = styled.input`
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-top: 5px;
  background-color: #fff;
`;

const HaulerSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

const HaulerLabel = styled.span`
  font-size: 14px;
  color: #666;
  margin-bottom: 9px;
`;

const HaulerValue = styled.span`
  font-size: 14px;
  color: #333;
  margin-top: 5px;
  margin-left: 10px;
`;

const SeeMore = styled.span`
  font-size: 14px;
  color: #F07F23;
  margin-top: -17px;
  text-align: right;
  cursor: pointer;
`;
const BottomNav = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px 0;
  background-color: white;
  border-radius: 0px;
  width: 438px;
  position: fixed; /* Fix it to the viewport */
  bottom: 0; /* Always stay at the bottom of the screen */
  margin-left: -0px; /* Align to the left edge of the screen */
  z-index: 100; /* Ensure it stays on top of other content */
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1); /* Optional shadow for better visibility */
  @media (max-width: 450px) {
    padding: 8px 0;
     width: 100%;
  }
    @media (max-width: 1150px) {
    padding: 8px 0;
     width: 100%;
  }
`;
const NavIconContainer = styled.div`
  display: flex;
  align-items: center;
`;
const QRCodeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 275px;
  margin-top: 35px;
`;
const NavIcon = styled.img`
  width: 27px;
  height: 27px;
`;

const DashboardLabel = styled.span`
  font-size: 12px;
  color: #421B73;
  margin-left: 5px;
`;

export default ProfileScreen;
