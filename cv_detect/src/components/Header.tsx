import React from 'react';
import Typography from '@mui/material/Typography';

const WelcomeMessage = () => {
  return (
    <div>
      <Typography variant="h1" component="h1" gutterBottom>
        Welcome to our Health Website
      </Typography>
      <Typography variant="body1" gutterBottom>
        Your go-to resource for all things related to heart health.
      </Typography>
    </div>
  );
};

export default WelcomeMessage;
