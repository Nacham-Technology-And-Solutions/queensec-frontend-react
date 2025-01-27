import React, { useState } from 'react'
import PageLayout from '../../components/PageLayout/PageLayout'
import Button from "../../components/Button/Button";
import TextButton from "../../components/TextButton/TextButton";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const PasswordRecoveryRequestSentScreen = () => {
  const navigate = useNavigate();

  const handleOpenMail = (e) => {
    window.location.href = 'mailto:';
  };
  const handleTryAnother = (e) => {
    navigate('/password-recovery');
  };
  const handleSkip = (e) => {
    navigate('/login-page');
  };



  return (
    <PageLayout footer={
      <>
        <p>Did not receive the email? Check your spam folder/filter,</p>
        <TextButton label="or try another email address." isSpanWidth={true} onClick={handleTryAnother} />
      </>
    } centered={true}>

      <div>
        <FontAwesomeIcon icon={faEnvelopeOpenText} fontSize='64px' color='#F07F23' />
      </div>
      <h2>Check your mail</h2>
      <p>Enter the email associated with your account and we'll send an email with instructions to reset your password</p>


      <Button label="Open Mail App" isSpanWidth={true} onClick={handleOpenMail} />
      <br />
      <TextButton label="Skip, Ill confirm later" isSpanWidth={true} onClick={handleSkip} />
    </PageLayout>
  )
};

export default PasswordRecoveryRequestSentScreen;