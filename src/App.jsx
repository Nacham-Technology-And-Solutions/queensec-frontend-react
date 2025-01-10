
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

// Correct imports for other components and context 
import SplashScreen from './pages/SplashScreen.jsx';
import Dashboard from './Dashbaord';
import MakePaymentVehicleScreen from "./MakePayments/VehicleScreen";
import MakePaymentCategoryScreen from "./MakePayments/CategoryScreen";
import MakePaymentBankDetailsScreen from "./MakePayments/BankDetailsScreen";
import PaymentSuccessScreen from "./MakePayments/PaymentSuccessfulScreen";
import AddHaulerScreen from "./Haulers/AddHaulerScreen";
import HaulersListScreen from "./Haulers/HaulersListScreen";
import ProfileScreen from "./Profile";
import TransactionHistory from "./Transaction/TransactionHistory";
import TransactionHistory_MineralScreen from './Transaction/TransactionHistory_SelectedMinerals.jsx';
import TransactionsPage from './Transaction/TransactionsPage.jsx';
import NotificationPage from './Notifications/NotificationsPage.jsx';
import NotificationDetailsPage from './Notifications/NotificationDetailsPage.jsx';
import VendorsDashboard from './Vendors/VendorsDashboardPage.jsx';
import MakePaymentVendorUserScreen from './Vendors/MPUsersScreen.jsx';
import MakePaymentVendorCategoryScreen from './Vendors/MPCategoryScreen.jsx';
import MP_BankDetailsVendorScreen from './Vendors/MPBankDetailsScreen.jsx';
import PaymentSuccessVendorScreen from "./Vendors/MPPaymentSucccessfulScreen.jsx";
import BeneficiariesListScreen from './Vendors/BeneficiariesScreen.jsx';
import SelectedBeneficiaryScreen from './Vendors/SelectedBeneficiaryListScreen.jsx';
import LoginPage from './pages/LoginPage.jsx';
import TripDataScreen from "./MakePayments/TripDataScreen.jsx";
import VendorTripDataScreen from './Vendors/VendorTripData.jsx';
import EnterpriseDashboard from './Enterprise/EnterpriseDashboard.jsx';
import SignUpScreenOneUserType from './pages/Registration/SignUpScreenOneUserType.jsx';
import SignUpScreenTwoBasicInfo from './pages/Registration/SignUpScreenTwoBasicInfo.jsx';
import SignUpScreenThreeContactInfo from './pages/Registration/SignUpScreenThreeContactInfo.jsx';
import SignUpScreenFourSecurityInfo from './pages/Registration/SignUpScreenFourSecurityInfo.jsx';
import SignUpScreenFiveSuccess from './pages/Registration/SignUpScreenFiveSuccess.jsx';
import { loginStatus } from './utils/authApiRequests.jsx';
import RouteNotFoundScreen from './pages/RouteNotFoundScreen.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';

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
            <Route path="/dashboard-page" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/add-hauler" element={<ProtectedRoute><AddHaulerScreen /></ProtectedRoute>} />
            <Route path="/my-haulers-list" element={<ProtectedRoute><HaulersListScreen /></ProtectedRoute>} />
            <Route path="/user-profile" element={<ProtectedRoute><ProfileScreen /></ProtectedRoute>} />
            <Route path="/transaction-history" element={<ProtectedRoute><TransactionHistory /></ProtectedRoute>} />
            <Route path="/transaction-history-mineral" element={<ProtectedRoute><TransactionHistory_MineralScreen /></ProtectedRoute>} />
            <Route path="/transactions" element={<ProtectedRoute><TransactionsPage /></ProtectedRoute>} />

            {/* Ejiro Finish */}
            <Route path="/Notifications-page" element={<ProtectedRoute><NotificationPage /></ProtectedRoute>} />
            <Route path="/Notifications-Details-page" element={<ProtectedRoute><NotificationDetailsPage /></ProtectedRoute>} />
            <Route path="/Vendors-Dashboard" element={<ProtectedRoute><VendorsDashboard /></ProtectedRoute>} />
            <Route path="/Beneficiaries-Screen" element={<ProtectedRoute><BeneficiariesListScreen /></ProtectedRoute>} />
            <Route path="/Selected-Beneficiary-Screen" element={<ProtectedRoute><SelectedBeneficiaryScreen /></ProtectedRoute>} />
            <Route path="/Enterprise-Dashboard" element={<ProtectedRoute><EnterpriseDashboard /></ProtectedRoute>} />

            {/* Payments Routes */}
            {/* User|Corperate */}
            <Route path="/mp-vehicle" element={<ProtectedRoute><MakePaymentVehicleScreen /></ProtectedRoute>} />
            <Route path="/mp-trip-data" element={<ProtectedRoute><TripDataScreen /></ProtectedRoute>} />
            <Route path="/mp-fee-category" element={<ProtectedRoute><MakePaymentCategoryScreen /></ProtectedRoute>} />
            <Route path="/mp-bank-details" element={<ProtectedRoute><MakePaymentBankDetailsScreen /></ProtectedRoute>} />
            <Route path="/mp-payment-status" element={<ProtectedRoute><PaymentSuccessScreen /></ProtectedRoute>} />

            {/* Vendor */}
            <Route path="/vendor-mp-user" element={<ProtectedRoute><MakePaymentVendorUserScreen /></ProtectedRoute>} />
            <Route path="/vendor-mp-trip-data" element={<ProtectedRoute><VendorTripDataScreen /></ProtectedRoute>} />
            <Route path="/vendor-mp-fee-category" element={<ProtectedRoute><MakePaymentVendorCategoryScreen /></ProtectedRoute>} />
            <Route path="/vendor-mp-bank-details" element={<ProtectedRoute><MP_BankDetailsVendorScreen /></ProtectedRoute>} />
            <Route path="/vendor-mp-payment-status" element={<ProtectedRoute><PaymentSuccessVendorScreen /></ProtectedRoute>} />

            <Route path="*" element={<RouteNotFoundScreen />} />

        </Routes>

    );
}

export default App; 