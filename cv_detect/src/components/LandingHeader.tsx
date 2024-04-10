import React from 'react';
import WelcomeMessage from './Header';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)({
  backgroundColor: '#f50057',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#ff4081',
  },
});

const LandingPage = () => {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <WelcomeMessage
        title="Welcome to our Health Website"
        description="Your go-to resource for all things related to heart health."
      />
      <CustomButton variant="contained" onClick={handleButtonClick}>
        Get Started
      </CustomButton>
    </div>
  );
};

export default LandingPage;
