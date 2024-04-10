import React from 'react';
import WelcomeMessage from './Header';
import Button from './Button';

const LandingPage = () => {
  // Define handleButtonClick function
  const handleButtonClick = () => {
    // Your button click logic here
    console.log('Button clicked!');
  };

  return (
    <div>
      <WelcomeMessage
        title="Welcome to our Health Website"
        description="Your go-to resource for all things related to heart health."
      />
      <Button label="Get Started" onClick={handleButtonClick} className="cta-button" />
    </div>
  );
};

export default LandingPage;
