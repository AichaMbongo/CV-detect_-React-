import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import logo from './logo.svg';
import hospital from './hospital.jpg'
import './App.css';
import ResponsiveAppBar from './components/AppBar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        < ResponsiveAppBar />
        <img src={hospital} className="" alt="logo" />
    
      </header>
    </div>
  );
}

export default App;
