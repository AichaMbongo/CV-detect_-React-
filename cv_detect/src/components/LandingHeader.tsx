import React from 'react';
import WelcomeMessage from './Header';

const LandingPage = () => {
  return (
    <div>
      <WelcomeMessage
        title="Welcome to our Health Website"
        description="Your go-to resource for all things related to heart health."
      />
    </div>
  );
};

export default LandingPage;
