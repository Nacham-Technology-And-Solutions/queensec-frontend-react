import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import signOutIcon from './assets/sign-out.png'; // Sign-out icon
import { useUser } from './context/UserContext';
import axios from 'axios';
import QRCode from 'react-qr-code';
import BottomNavigator from './components/BottomNavigator/BottomNavigator';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL


const ProfileScreen = () => {
  const { user } = useUser(); // Access user from context
  const navigate = useNavigate();

  const goToDashboard = () => {
    if (user?.accountType === 'federal_agency') {
      return '/Enterprise-Dashboard';
    } else if (user?.accountType === 'vendor') {
      return '/Vendors-Dashboard';
    } else if (user?.accountType === 'individual') {
      return '/dashboard-page';
    }
  };

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
        navigate('/login-page');
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
        <QRCode value={`${user?.taxId}`} size={150} bgColor="#f6f6f6" fgColor="#6C3ECF" />
      </QRCodeContainer>
       


      {/* Bottom Navigation */}
      <BottomNavigator
        currentPage='profile'
        dashboardLink={goToDashboard()} // 
        transactionLink='/transactions'
        notificationLink='/Notifications-page'
        profileLink='/user-profile'
      />

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

const QRCodeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 275px;
  margin-top: 35px;
`;

export default ProfileScreen;
