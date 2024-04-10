import React from 'react';
import Typography from '@mui/material/Typography';

interface WelcomeMessageProps {
  title: string;
  description: string;
}

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ title, description }) => {
  return (
    <div>
      <Typography variant="h1" component="h1" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {description}
      </Typography>
    </div>
  );
};

export default WelcomeMessage;
