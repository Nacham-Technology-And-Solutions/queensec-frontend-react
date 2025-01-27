import React, { useState } from 'react'
import PageLayout from '../../components/PageLayout/PageLayout'
import Button from "../../components/Button/Button";
import InputFieldx from "../../components/InputField/InputField";
import { passwordResetRequest } from '../../utils/authApiRequests';
import { useNavigate } from 'react-router-dom';

const PasswordRecoveryRequestScreen = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => {
    //Get the form input changes via event object
    const { name, value } = e.target;

    setEmail(value);
  };


  const handleSubmit = (e) => {
    setLoading(true);

    if (!email) {
      alert('Please fill in the email field.');
      setLoading(false);
      return;
    }

    // call API for reset email
    const requestPayload = {
      email: email
    };

    const request = passwordResetRequest(requestPayload);

    request.then((response) => {
      setLoading(false);
      alert(response.message);
      navigate('/password-recovery-sent');
    });
    // Validate fields

  };



  return (
    <PageLayout>
      <h2>Reset Password</h2>
      <p>Enter the email associated with your account and we'll send an email with instructions to reset your password</p>

      <InputFieldx
        label="Email"
        type="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter your email"
      />

      <Button label="Send Instructions" isSpanWidth={true} isLoading={loading} onClick={handleSubmit} />
    </PageLayout>
  )
};

export default PasswordRecoveryRequestScreen;