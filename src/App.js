// src/App.js

import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Title from './Title';
// import POPOSDetails from './POPOSDetails/POPOSDetails'
import POPOSList from './POPOSList';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Title />
      <POPOSList />
      <Footer />
    </div>
  );
}

export default App;