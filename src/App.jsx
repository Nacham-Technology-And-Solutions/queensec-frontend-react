
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM for React 18+
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// Correct imports for other components and context
import { UserContext } from './UserContext';
import SplashScreen from './SplashScreen';
import SignUp_UserTypeScreen from './SignUp_UserType';
import BasicInfoScreen from './SignUp_BasicInfo';
import ContactInfoScreen from './SignUp_ContactInfo';
import SecurityInfoScreen from './SignUp_PasswordScreen';
import SuccessScreen from './SignUp_Success';
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
import LoginPage from './LoginPage.jsx';
import EnterpriseDashboard from './Enterprise/EnterpriseDashboard.jsx';

// Inline ProtectedRoute Component
const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token'); // Check for auth token
    return token ? children : <Navigate to="/Login-Page" replace />;
};

function App() {
    return (

            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Navigate to="/splash" />} />
                <Route path="/splash" element={<SplashScreen />} />
                <Route path="/Login-Page" element={<LoginPage />} />

                {/* Protected Routes */}
                <Route path="/sign-up-user-type" element={<ProtectedRoute><SignUp_UserTypeScreen /></ProtectedRoute>} />
                <Route path="/basic-info" element={<ProtectedRoute><BasicInfoScreen /></ProtectedRoute>} />
                <Route path="/contact-info" element={<ProtectedRoute><ContactInfoScreen /></ProtectedRoute>} />
                <Route path="/security-info" element={<ProtectedRoute><SecurityInfoScreen /></ProtectedRoute>} />
                <Route path="/success" element={<ProtectedRoute><SuccessScreen /></ProtectedRoute>} />
                <Route path="/dashboard-page" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                <Route path="/MP_VehicleScreen" element={<ProtectedRoute><MakePaymentVehicleScreen /></ProtectedRoute>} />
                <Route path="/MP_CategoryScreen" element={<ProtectedRoute><MakePaymentCategoryScreen /></ProtectedRoute>} />
                <Route path="/MP_BankDetailsScreen" element={<ProtectedRoute><MakePaymentBankDetailsScreen /></ProtectedRoute>} />
                <Route path="/MP_PaymentSuccessScreen" element={<ProtectedRoute><PaymentSuccessScreen /></ProtectedRoute>} />
                <Route path="/Add-Hauler" element={<ProtectedRoute><AddHaulerScreen /></ProtectedRoute>} />
                <Route path="/Hauler-Lists" element={<ProtectedRoute><HaulersListScreen /></ProtectedRoute>} />
                <Route path="/User-Profile" element={<ProtectedRoute><ProfileScreen /></ProtectedRoute>} />
                <Route path="/Transaction-History" element={<ProtectedRoute><TransactionHistory /></ProtectedRoute>} />
                <Route path="/TransactionHistory_MineralScreen" element={<ProtectedRoute><TransactionHistory_MineralScreen /></ProtectedRoute>} />
                <Route path="/Transactions-page" element={<ProtectedRoute><TransactionsPage /></ProtectedRoute>} />
                <Route path="/Notifications-page" element={<ProtectedRoute><NotificationPage /></ProtectedRoute>} />
                <Route path="/Notifications-Details-page" element={<ProtectedRoute><NotificationDetailsPage /></ProtectedRoute>} />
                <Route path="/Vendors-Dashboard" element={<ProtectedRoute><VendorsDashboard /></ProtectedRoute>} />
                <Route path="/Vendor-User-MakePayment-Screen" element={<ProtectedRoute><MakePaymentVendorUserScreen /></ProtectedRoute>} />
                <Route path="/Vendor-Category-MakePayment-Screen" element={<ProtectedRoute><MakePaymentVendorCategoryScreen /></ProtectedRoute>} />
                <Route path="/vendor-BankDetails-MakePayment-Screen" element={<ProtectedRoute><MP_BankDetailsVendorScreen /></ProtectedRoute>} />
                <Route path="/Vendor-PaymentSuccess-Screen" element={<ProtectedRoute><PaymentSuccessVendorScreen /></ProtectedRoute>} />
                <Route path="/Beneficiaries-Screen" element={<ProtectedRoute><BeneficiariesListScreen /></ProtectedRoute>} />
                <Route path="/Selected-Beneficiary-Screen" element={<ProtectedRoute><SelectedBeneficiaryScreen /></ProtectedRoute>} />
                <Route path="/Enterprise-Dashboard" element={<ProtectedRoute><EnterpriseDashboard /></ProtectedRoute>} />
            </Routes>
      
    );
}

const rootElement = document.getElementById('root'); // Ensure ID matches Blade file
ReactDOM.createRoot(rootElement).render(<App />);

export default App;
// if (document.getElementById('root')) {
//     ReactDOM.render(<App />, document.getElementById('root'));
// }


