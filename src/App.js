// src/App.js

import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Title from './Title';
// import POPOSDetails from './POPOSDetails/POPOSDetails'
import POPOSList from './POPOSList';
import Footer from './Footer';
import About from './About'

import { HashRouter as Router, Route } from 'react-router-dom'


function App() {
  return (
      <Router>
        <div className="App">
            <Title />
            <Route exact path="/" component={POPOSList}/>
            <Route path="/about" component={About} />            
            <Footer />
        </div>
    </Router>
  );
}

export default App;