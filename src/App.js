// src/App.js

import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Title from './Title';
// import POPOSDetails from './POPOSDetails/POPOSDetails'
import POPOSList from './POPOSList';
import './Footer';

function App() {
  return (
    <div className="App">
      <Title />
      <POPOSList />
    </div>
  );
}

export default App;