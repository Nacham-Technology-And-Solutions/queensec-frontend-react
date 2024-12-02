import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import img_png from './Assets/img_png.png'; // Profile image
import signOutIcon from './Assets/sign-out.png'; // Sign-out icon
import folder_C from './Assets/folder_C.png';
import transactions_N from './Assets/transactions_N.png';
import notification_N from './Assets/notification_N.png';
import profile_N from './Assets/profile_N.png';
import profile_C from './Assets/profile_C.png';
import folder_N from './Assets/folder_N.png';
import { useUser } from './UserContext';

 const ProfileScreen = () => {
  const { user } = useUser(); // Access user from context
  const navigate = useNavigate();

  const goToDashboard = () => {
    if (user?.accountType === 0) {
      navigate('/Enterprise-Dashboard');
    } else if (user?.accountType === 2) {
      navigate('/Vendors-Dashboard');
    } else {
      navigate('/dashboard-page');
    }
  };

  const goToTransactions = () => navigate('/Transactions-page');
  const goToNotifications = () => navigate('/Notifications-page');
  const goToProfile = () => navigate('/User-Profile');

  // Helper function to convert accountType to readable text
  const getAccountTypeText = (accountType) => {
    if (accountType === 0) return 'Enterprise';
    if (accountType === 1) return 'Individual';
    if (accountType === 2) return 'Vendor';
    return 'Unknown';
  };

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
              onClick={() => console.log('Sign out')} // Replace with proper signOut handling
            />
          </SignOutContainer>
        </ProfileHeader>

        <ProfileImage src={img_png} alt="Profile" />
        <UserName>{user?.userName || 'Haulage Solutions'}</UserName>
      </Header>

      <Details>
        <Label>Tax Identification</Label>
        <Input value={user?.tax_id || 'null'} readOnly />

        <Label>Account Type</Label>
        <Input value={getAccountTypeText(user?.accountType)} readOnly />

        <HaulerSection>
          <HaulerLabel>Haulers</HaulerLabel>
          <HaulerValue>{user?.haulers || '2 Vehicles'}</HaulerValue>
        </HaulerSection>
        <SeeMore>See more</SeeMore>

        <Label>Email</Label>
        <Input value={user?.email || 'Musa96@gmail.com'} readOnly />

        <Label>State</Label>
        <Input value={user?.state || 'Nasarawa'} readOnly />
      </Details>

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
  height: 100vh;
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
  margin-top: 20px;
  padding: 15px 0;
  background-color: white;
  border-radius: 10px;
  width: 110%;
  position: relative;

`;

const NavIconContainer = styled.div`
  display: flex;
  align-items: center;
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
