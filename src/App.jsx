
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
import TransactionsPage from './Transaction/TransactionsPage.jsx'
import NotificationPage from './Notifications/NotificationsPage.jsx'
import NotificationDetailsPage from './Notifications/NotificationDetailsPage.jsx'
import VendorsDashboard from './Vendors/VendorsDashboardPage.jsx';
import MakePaymentVendorUserScreen from './Vendors/MPUsersScreen.jsx' 
import MakePaymentVendorCategoryScreen from './Vendors/MPCategoryScreen.jsx';
import MP_BankDetailsVendorScreen from './Vendors/MPBankDetailsScreen.jsx';
import PaymentSuccessVendorScreen from "./Vendors/MPPaymentSucccessfulScreen.jsx"
import BeneficiariesListScreen from './Vendors/BeneficiariesScreen.jsx';
import SelectedBeneficiaryScreen from './Vendors/SelectedBeneficiaryListScreen.jsx';
import LoginPage from './LoginPage.jsx';
import EnterpriseDashboard from './Enterprise/EnterpriseDashboard.jsx';

function App() {
 
    return (

        <Routes>
             <Route path="/" element={<Navigate to="/Login-Page" />} />
            <Route path="/splash" element={<SplashScreen />} />
            <Route path="/sign-up-user-type" element={<SignUp_UserTypeScreen />} />
            <Route path='/basic-info' element={<BasicInfoScreen />} />
            <Route path="/contact-info" element={<ContactInfoScreen />} />
            <Route path="/security-info" element={<SecurityInfoScreen />} />
            <Route path="/success" element={<SuccessScreen />} />
            <Route path='/Login-Page' element={<LoginPage/>} />
            <Route path="/dashboard-page" element={<Dashboard />} />
            <Route path="/MP_VehicleScreen" element={<MakePaymentVehicleScreen />} />
            <Route path="/MP_CategoryScreen" element={<MakePaymentCategoryScreen />} />
            <Route path="/MP_BankDetailsScreen" element={<MakePaymentBankDetailsScreen />} />
            <Route path="/MP_PaymentSuccessScreen" element={<PaymentSuccessScreen />} />
            <Route path="/Add-Hauler" element={<AddHaulerScreen />} />
            <Route path="/Hauler-Lists" element={<HaulersListScreen />} />
            <Route path="/User-Profile" element={<ProfileScreen />} />
            <Route path="/Transaction-History" element={<TransactionHistory />} />
            <Route path="/transaction-history-mineral" element={<TransactionHistory_MineralScreen />} />
            <Route path="/Transactions-page" element={<TransactionsPage />} />
            <Route path="/Notifications-page" element={<NotificationPage />} />
            <Route path="/Notifications-Details-page" element={<NotificationDetailsPage />} />
            <Route path="/Vendors-Dashboard" element={<VendorsDashboard />} />
            <Route path="/Vendor-User-MakePayment-Screen" element={<MakePaymentVendorUserScreen />} />
            <Route path="/Vendor-Category-MakePayment-Screen" element={<MakePaymentVendorCategoryScreen />} />
            <Route path='/vendor-BankDetails-MakePayment-Screen' element={<MP_BankDetailsVendorScreen />} />
            <Route path='/Vendor-PaymentSuccess-Screen' element={<PaymentSuccessVendorScreen />} />
            <Route path='/Beneficiaries-Screen' element={<BeneficiariesListScreen />} />
            <Route path="/Selected-Beneficiary-Screen" element={<SelectedBeneficiaryScreen />} />
            <Route path="/Enterprise-Dashboard" element={<EnterpriseDashboard />}
 />        </Routes>
 
);
    
}



const rootElement = document.getElementById('root'); // Ensure ID matches Blade file
ReactDOM.createRoot(rootElement).render(<App />);


export default App;
// if (document.getElementById('root')) {
//     ReactDOM.render(<App />, document.getElementById('root'));
// }
