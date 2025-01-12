
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

// Correct imports for other components and context 
import SplashScreen from './pages/SplashScreen.jsx';
import Dashboard from './pages/Regular/Dashbaord.jsx';
//Make Payment
import MPScreenOneVehicle from "./pages/Regular/MakePayment/MPScreenOneVehicle.jsx";
import MPScreenTwoTripData from "./pages/Regular/MakePayment/MPScreenTwoTripData.jsx";
import MPScreenThreeCategory from "./pages/Regular/MakePayment/MPScreenThreeCategory.jsx";
import MPScreenFourBankDetails from "./pages/Regular/MakePayment/MPScreenFourBankDetails.jsx";
import MPScreenFivePaymentStatus from "./pages/Regular/MakePayment/MPScreenFivePaymentStatus.jsx";

import AddHaulerScreen from "./pages/Regular/Haulers/AddHaulerScreen.jsx";
import HaulersListScreen from "./pages/Regular/Haulers/HaulersListScreen.jsx";
import ProfileScreen from "./pages/Regular/Profile.jsx";
import TransactionHistory from "./pages/Regular/Transaction/TransactionHistory.jsx";
import TransactionHistory_MineralScreen from './pages/Regular/Transaction/TransactionHistory_SelectedMinerals.jsx';
import TransactionsPage from './pages/Regular/Transaction/TransactionsPage.jsx';
import NotificationPage from './pages/Regular/Notifications/NotificationsPage.jsx';
import NotificationDetailsPage from './pages/Regular/Notifications/NotificationDetailsPage.jsx';
import VendorsDashboard from './pages/Vendor/VendorsDashboardPage.jsx';

import VMPScreenOnePayee from './pages/Vendor/MakePayment/VMPScreenOnePayee.jsx';
import VMPScreenTwoTripData from './pages/Vendor/MakePayment/VMPScreenTwoTripData.jsx';
import VMPScreenThreeCategory from './pages/Vendor/MakePayment/VMPScreenThreeCategory.jsx';
import VMPScreenFourBankDetails from './pages/Vendor/MakePayment/VMPScreenFourBankDetails.jsx';
import VMPScreenFivePaymentStatus from "./pages/Vendor/MakePayment/VMPScreenFivePaymentStatus.jsx";

import BeneficiariesListScreen from './pages/Vendor/BeneficiariesScreen.jsx';
import SelectedBeneficiaryScreen from './pages/Vendor/SelectedBeneficiaryListScreen.jsx';
import LoginPage from './pages/LoginPage.jsx';

import EnterpriseDashboard from './pages/Enterprise/EnterpriseDashboard.jsx';
import SignUpScreenOneUserType from './pages/Registration/SignUpScreenOneUserType.jsx';
import SignUpScreenTwoBasicInfo from './pages/Registration/SignUpScreenTwoBasicInfo.jsx';
import SignUpScreenThreeContactInfo from './pages/Registration/SignUpScreenThreeContactInfo.jsx';
import SignUpScreenFourSecurityInfo from './pages/Registration/SignUpScreenFourSecurityInfo.jsx';
import SignUpScreenFiveSuccess from './pages/Registration/SignUpScreenFiveSuccess.jsx';
import MPScreenPaymentStatus from './pages/Regular/MPScreenPaymentStatus.jsx';

import RouteNotFoundScreen from './pages/RouteNotFoundScreen.jsx';
import ProtectedRoute from './utils/ProtectedRoute.jsx';

// Inline ProtectedRoute Component

function App() {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Navigate to="/splash" />} />
            <Route path="/splash" element={<SplashScreen />} />
            <Route path="/login-page" element={<LoginPage />} />

            {/* Sign Up Screens 1 - 5 */}
            <Route path="/sign-up-user-type" element={<SignUpScreenOneUserType />} />
            <Route path="/basic-info" element={<SignUpScreenTwoBasicInfo />} />
            <Route path="/contact-info" element={<SignUpScreenThreeContactInfo />} />
            <Route path="/security-info" element={<SignUpScreenFourSecurityInfo />} />
            <Route path="/success" element={<SignUpScreenFiveSuccess />} />

            {/* Protected Routes */}
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/add-hauler" element={<ProtectedRoute><AddHaulerScreen /></ProtectedRoute>} />
            <Route path="/my-haulers-list" element={<ProtectedRoute><HaulersListScreen /></ProtectedRoute>} />
            <Route path="/user-profile" element={<ProtectedRoute><ProfileScreen /></ProtectedRoute>} />
            <Route path="/transaction-history" element={<ProtectedRoute><TransactionHistory /></ProtectedRoute>} />
            <Route path="/transaction-history-mineral" element={<ProtectedRoute><TransactionHistory_MineralScreen /></ProtectedRoute>} />
            <Route path="/transactions" element={<ProtectedRoute><TransactionsPage /></ProtectedRoute>} />

            {/* Ejiro Finish */}
            <Route path="/Notifications-page" element={<ProtectedRoute><NotificationPage /></ProtectedRoute>} />
            <Route path="/Notifications-Details-page" element={<ProtectedRoute><NotificationDetailsPage /></ProtectedRoute>} />
            <Route path="/vendors-dashboard" element={<ProtectedRoute><VendorsDashboard /></ProtectedRoute>} />
            <Route path="/Beneficiaries-Screen" element={<ProtectedRoute><BeneficiariesListScreen /></ProtectedRoute>} />
            <Route path="/Selected-Beneficiary-Screen" element={<ProtectedRoute><SelectedBeneficiaryScreen /></ProtectedRoute>} />
            
            <Route path="/enterprise-dashboard" element={<ProtectedRoute><EnterpriseDashboard /></ProtectedRoute>} />

            {/* Payments Routes */}
            {/* User|Corperate */}
            <Route path="/mp-one-vehicle" element={<ProtectedRoute><MPScreenOneVehicle /></ProtectedRoute>} />
            <Route path="/mp-two-trip-data" element={<ProtectedRoute><MPScreenTwoTripData /></ProtectedRoute>} />
            <Route path="/mp-three-fee-category" element={<ProtectedRoute><MPScreenThreeCategory /></ProtectedRoute>} />
            <Route path="/mp-four-bank-details" element={<ProtectedRoute><MPScreenFourBankDetails /></ProtectedRoute>} />
            <Route path="/mp-five-payment-status" element={<ProtectedRoute><MPScreenFivePaymentStatus /></ProtectedRoute>} />

            {/* Vendor */}
            <Route path="/vendor-mp-one-payee" element={<ProtectedRoute><VMPScreenOnePayee /></ProtectedRoute>} />
            <Route path="/vendor-mp-two-trip-data" element={<ProtectedRoute><VMPScreenTwoTripData /></ProtectedRoute>} />
            <Route path="/vendor-mp-three-fee-category" element={<ProtectedRoute><VMPScreenThreeCategory /></ProtectedRoute>} />
            <Route path="/vendor-mp-four-bank-details" element={<ProtectedRoute><VMPScreenFourBankDetails /></ProtectedRoute>} />
            <Route path="/vendor-mp-five-payment-status" element={<ProtectedRoute><VMPScreenFivePaymentStatus /></ProtectedRoute>} />

            <Route path="/mp-payment-status" element={<ProtectedRoute><MPScreenPaymentStatus /></ProtectedRoute>} />
            <Route path="*" element={<RouteNotFoundScreen />} />

        </Routes>

    );
}

export default App; 