import React, { useState } from 'react'
import PageLayout from '../../components/PageLayout/PageLayout'
import Button from "../../components/Button/Button";
import TextButton from "../../components/TextButton/TextButton";
import InputFieldx from "../../components/InputField/InputField";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { passwordResetRequest } from '../../utils/authApiRequests';

const PasswordRecoveryRequestCreateScreen = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Get individual query parameters
  const token = searchParams.get('token'); // "John"

  // showPassword: boolean controlling visibility
  // setShowPassword: function to toggle show/hide
  const [showPassword, setShowPassword] = useState(false);

  // Store or track the password text
  const [securityInfo, setSecurityInfo] = useState({
    password: '',
    confirmPassword: '',
  });

  // Toggle function to flip show/hide
  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const [loading, setLoading] = useState(false); // Loading state


  const handleChange = (e) => {
    setSecurityInfo({
      ...securityInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    setLoading(true);
    // call API for reset email

    if (!securityInfo.password || !securityInfo.confirmPassword) {
      alert('Please fill in all fields.');
      setLoading(false);
      return;
    }

    if (securityInfo.password !== securityInfo.confirmPassword) {
      alert('Passwords do not match.');
      setLoading(false);
      return;
    }

    const payload = {
      password: securityInfo.password,
      password_confirmation: securityInfo.confirmPassword,
      token: token,
    };

    const requestReset = passwordResetRequest(payload);

    requestReset.then((response) => {
      setLoading(false);
      alert(response.message);
      navigate('/login-page');
    });
  };



  return (
    <PageLayout >
      <h2>Create New Password</h2>
      <p>Your new password must be different from previous used passwords.</p>

      <InputFieldx
        label="Password"
        type={showPassword ? 'text' : 'password'}
        name="password"
        value={securityInfo.password}
        onChange={handleChange}
        placeholder="Enter your password"
        hasButton={true}
        onButtonClick={toggleShowPassword}
        buttonLabel={<FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} fontSize='15px' />}
        hasError={true}
        error={"Must be atleast 8 Characters"}
      />

      <InputFieldx
        label="Confirm Password"
        type={showPassword ? 'text' : 'password'}
        name="confirmPassword"
        value={securityInfo.confirmPassword}
        onChange={handleChange}
        placeholder="Confirm your password"
        hasError={true}
        error={"Both passwords must match."}
      />

      <Button label="Reset Password" isSpanWidth={true} isLoading={loading}  onClick={handleSubmit} />
    </PageLayout>
  )
};

export default PasswordRecoveryRequestCreateScreen;