import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import logo from './logo.svg';
import hospital from './hospital.jpg'
import './App.css';
import ResponsiveAppBar from './components/AppBar';
import LandingPage from './components/LandingHeader';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        < ResponsiveAppBar />
      </header>
      <img src={hospital} className="hero-image" alt="logo" />
      <div className="overlay-text">
          <LandingPage />
        </div>
    </div>
  );
}

export default App;
