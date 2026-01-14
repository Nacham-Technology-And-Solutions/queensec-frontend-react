
import React, { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner.jsx';
import ProtectedRoute from './utils/ProtectedRoute.jsx';

// Lazy load all route components for code splitting and performance optimization
// Public Routes - Load immediately (small, frequently used)
const SplashScreen = lazy(() => import('./pages/SplashScreen.jsx'));
const LoginPage = lazy(() => import('./pages/LoginPage.jsx'));

// Password Recovery Routes
const PasswordRecoveryRequestScreen = lazy(() => import('./pages/password/PasswordRecoveryRequestScreen.jsx'));
const PasswordRecoveryRequestSentScreen = lazy(() => import('./pages/password/PasswordRecoveryRequestSentScreen.jsx'));
const PasswordRecoveryRequestCreateScreen = lazy(() => import('./pages/password/PasswordRecoveryRequestCreateScreen.jsx'));

// Public Validator Routes
const VendorValidator = lazy(() => import('./pages/Vendor/Validator/VendorValidator.jsx'));
const VendorTicketStatusByNumberPlate = lazy(() => import('./pages/Vendor/Validator/VendorTicketStatusByNumberPlate.jsx'));
const VendorTicketStatusByTicketId = lazy(() => import('./pages/Vendor/Validator/VendorTicketStatusByTicketId.jsx'));

// Registration Routes
const SignUpScreenOneUserType = lazy(() => import('./pages/Registration/SignUpScreenOneUserType.jsx'));
const SignUpScreenTwoBasicInfo = lazy(() => import('./pages/Registration/SignUpScreenTwoBasicInfo.jsx'));
const SignUpScreenThreeContactInfo = lazy(() => import('./pages/Registration/SignUpScreenThreeContactInfo.jsx'));
const SignUpScreenFourSecurityInfo = lazy(() => import('./pages/Registration/SignUpScreenFourSecurityInfo.jsx'));
const SignUpScreenFiveSuccess = lazy(() => import('./pages/Registration/SignUpScreenFiveSuccess.jsx'));

// Regular User Routes
const Dashboard = lazy(() => import('./pages/Regular/Dashboard.jsx'));
const AddHaulerScreen = lazy(() => import('./pages/Regular/Haulers/AddHaulerScreen.jsx'));
const HaulersListScreen = lazy(() => import('./pages/Regular/Haulers/HaulersListScreen.jsx'));
const ProfileScreen = lazy(() => import('./pages/Regular/Profile.jsx'));
const TransactionHistory = lazy(() => import('./pages/Regular/Transaction/TransactionHistory.jsx'));
const TransactionHistory_MineralScreen = lazy(() => import('./pages/Regular/Transaction/TransactionHistory_SelectedMinerals.jsx'));
const TransactionsPage = lazy(() => import('./pages/Regular/Transaction/TransactionsPage.jsx'));
const NotificationPage = lazy(() => import('./pages/Regular/Notifications/NotificationsPage.jsx'));
const NotificationDetailsPage = lazy(() => import('./pages/Regular/Notifications/NotificationDetailsPage.jsx'));

// Regular User Payment Routes
const MPScreenOneVehicle = lazy(() => import('./pages/Regular/MakePayment/MPScreenOneVehicle.jsx'));
const MPScreenTwoTripData = lazy(() => import('./pages/Regular/MakePayment/MPScreenTwoTripData.jsx'));
const MPScreenThreeCategory = lazy(() => import('./pages/Regular/MakePayment/MPScreenThreeCategory.jsx'));
const MPScreenFourBankDetails = lazy(() => import('./pages/Regular/MakePayment/MPScreenFourBankDetails.jsx'));
const MPScreenFivePaymentStatus = lazy(() => import('./pages/Regular/MakePayment/MPScreenFivePaymentStatus.jsx'));
const MPScreenPaymentStatus = lazy(() => import('./pages/Regular/MPScreenPaymentStatus.jsx'));

// Vendor Routes
const VendorDashboard = lazy(() => import('./pages/Vendor/VendorDashboard.jsx'));
const BeneficiariesListScreen = lazy(() => import('./pages/Vendor/BeneficiariesScreen.jsx'));
const SelectedBeneficiaryScreen = lazy(() => import('./pages/Vendor/SelectedBeneficiaryListScreen.jsx'));

// Vendor Payment Routes
const VMPScreenOnePayee = lazy(() => import('./pages/Vendor/MakePayment/VMPScreenOnePayee.jsx'));
const VMPScreenTwoTripData = lazy(() => import('./pages/Vendor/MakePayment/VMPScreenTwoTripData.jsx'));
const VMPScreenThreeCategory = lazy(() => import('./pages/Vendor/MakePayment/VMPScreenThreeCategory.jsx'));
const VMPScreenFourBankDetails = lazy(() => import('./pages/Vendor/MakePayment/VMPScreenFourBankDetails.jsx'));
const VMPScreenFivePaymentStatus = lazy(() => import('./pages/Vendor/MakePayment/VMPScreenFivePaymentStatus.jsx'));

// Vendor Wallet Routes
const VFWScreenOneAmount = lazy(() => import('./pages/Vendor/FundWallet/VFWScreenOneAmount.jsx'));
const VFWScreenTwoPaymentMethod = lazy(() => import('./pages/Vendor/FundWallet/VFWScreenTwoPaymentMethod.jsx'));
const VFWScreenThreePaymentStatus = lazy(() => import('./pages/Vendor/FundWallet/VFWScreenThreePaymentStatus.jsx'));

// Vendor Issue Ticket Routes
const VITScreenOneTicketMode = lazy(() => import('./pages/Vendor/IssueTicket/VITScreenOneTicketMode.jsx'));
const VITScreenTwoDetails = lazy(() => import('./pages/Vendor/IssueTicket/VITScreenTwoDetails.jsx'));
const VITScreenThreeDebit = lazy(() => import('./pages/Vendor/IssueTicket/VITScreenThreeDebit.jsx'));
const VITScreenFourSuccess = lazy(() => import('./pages/Vendor/IssueTicket/VITScreenFourSuccess.jsx'));

// Vendor Transaction Routes
const VendorTransactionsScreen = lazy(() => import('./pages/Vendor/Transactions/VendorTransactionsScreen.jsx'));
const VendorTransactionHistoryTicketScreen = lazy(() => import('./pages/Vendor/Transactions/VendorTransactionHistoryTicketScreen.jsx'));
const VendorTransactionHistoryPaymentScreen = lazy(() => import('./pages/Vendor/Transactions/VendorTransactionHistoryPaymentScreen.jsx'));

// Enterprise Routes
const EnterpriseDashboard = lazy(() => import('./pages/Enterprise/EnterpriseDashboard.jsx'));

// Error Routes
const RouteNotFoundScreen = lazy(() => import('./pages/RouteNotFoundScreen.jsx'));

function App() {
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Navigate to="/splash" />} />
            <Route path="/splash" element={<SplashScreen />} />
            <Route path="/login-page" element={<LoginPage />} />
            <Route path="/password-recovery" element={<PasswordRecoveryRequestScreen />} />
            <Route path="/password-recovery-sent" element={<PasswordRecoveryRequestSentScreen />} />
            <Route path="/password-recovery-create" element={<PasswordRecoveryRequestCreateScreen />} />
            <Route path="/password-recovery-successful" element={<LoginPage />} />

            {/* Public Validator Routes */}
            <Route path="validator" element={<VendorValidator />} />
            <Route path="validator/number-plate" element={<VendorTicketStatusByNumberPlate />} />
            <Route path="validator/ticket-id" element={<VendorTicketStatusByTicketId />} />

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
            <Route path="/notifications" element={<ProtectedRoute><NotificationPage /></ProtectedRoute>} />
            <Route path="/notifications-details" element={<ProtectedRoute><NotificationDetailsPage /></ProtectedRoute>} />


            <Route path="/enterprise-dashboard" element={<ProtectedRoute><EnterpriseDashboard /></ProtectedRoute>} />

            {/* Payments Routes */}
            {/* User|Corperate */}
            <Route path="/mp-one-vehicle" element={<ProtectedRoute><MPScreenOneVehicle /></ProtectedRoute>} />
            <Route path="/mp-two-trip-data" element={<ProtectedRoute><MPScreenTwoTripData /></ProtectedRoute>} />
            <Route path="/mp-three-fee-category" element={<ProtectedRoute><MPScreenThreeCategory /></ProtectedRoute>} />
            <Route path="/mp-four-bank-details" element={<ProtectedRoute><MPScreenFourBankDetails /></ProtectedRoute>} />
            <Route path="/mp-five-payment-status" element={<ProtectedRoute><MPScreenFivePaymentStatus /></ProtectedRoute>} />

            {/* Vendor */}
            <Route path="/vendor-dashboard" element={<ProtectedRoute><VendorDashboard /></ProtectedRoute>} />
            <Route path="/beneficiaries" element={<ProtectedRoute><BeneficiariesListScreen /></ProtectedRoute>} />
            <Route path="/selected-beneficiary" element={<ProtectedRoute><SelectedBeneficiaryScreen /></ProtectedRoute>} />

            <Route path="/vendor-mp-one-payee" element={<ProtectedRoute><VMPScreenOnePayee /></ProtectedRoute>} />
            <Route path="/vendor-mp-two-trip-data" element={<ProtectedRoute><VMPScreenTwoTripData /></ProtectedRoute>} />
            <Route path="/vendor-mp-three-fee-category" element={<ProtectedRoute><VMPScreenThreeCategory /></ProtectedRoute>} />
            <Route path="/vendor-mp-four-bank-details" element={<ProtectedRoute><VMPScreenFourBankDetails /></ProtectedRoute>} />
            <Route path="/vendor-mp-five-payment-status" element={<ProtectedRoute><VMPScreenFivePaymentStatus /></ProtectedRoute>} />

            <Route path="/mp-payment-status" element={<ProtectedRoute><MPScreenPaymentStatus /></ProtectedRoute>} />
            <Route path="*" element={<RouteNotFoundScreen />} />



            {/* Wallet Routes */}
            {/* User|Corperate */}
            {/* <Route path="/fw-one-amount" element={<ProtectedRoute><FWScreenOneAmount /></ProtectedRoute>} />
            <Route path="/fw-two-payment-method" element={<ProtectedRoute><FWScreenTwoPaymentMethod /></ProtectedRoute>} />
            <Route path="/fw-three-payment-status" element={<ProtectedRoute><FWScreenThreePaymentStatus /></ProtectedRoute>} /> */}

            {/* Vendor */}
            {/* Fund Wallet */}
            <Route path="/vendor-fw-one-amount" element={<ProtectedRoute><VFWScreenOneAmount /></ProtectedRoute>} />
            <Route path="/vendor-fw-two-payment-method" element={<ProtectedRoute><VFWScreenTwoPaymentMethod /></ProtectedRoute>} />
            <Route path="/vendor-fw-three-payment-status" element={<ProtectedRoute><VFWScreenThreePaymentStatus /></ProtectedRoute>} />

            {/* Issue Ticket */}
            <Route path="/vendor-it-one-ticket-mode" element={<ProtectedRoute><VITScreenOneTicketMode /></ProtectedRoute>} />
            <Route path="/vendor-it-two-details" element={<ProtectedRoute><VITScreenTwoDetails /></ProtectedRoute>} />
            <Route path="/vendor-it-three-debit" element={<ProtectedRoute><VITScreenThreeDebit /></ProtectedRoute>} />
            <Route path="/vendor-it-four-success" element={<ProtectedRoute><VITScreenFourSuccess /></ProtectedRoute>} />

            <Route path="/vendor-transactions" element={<ProtectedRoute><VendorTransactionsScreen /></ProtectedRoute>} />
            <Route path="/vendor-transaction-history-ticket" element={<ProtectedRoute><VendorTransactionHistoryTicketScreen /></ProtectedRoute>} />
            <Route path="/vendor-transaction-history-payment" element={<ProtectedRoute><VendorTransactionHistoryPaymentScreen /></ProtectedRoute>} />

            </Routes>
        </Suspense>
    );
}

export default App; 