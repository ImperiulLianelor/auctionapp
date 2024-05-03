// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import Dashboard from './components/Dashboard'; 
import BiddingPage from './components/BiddingPage';
// import { db } from './firebaseConfig'; // Adjust the path based on your project structure
// import { addDoc, collection } from 'firebase/firestore';

function App() {
  

  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/bidding/:itemId" element={<BiddingPage />} />
          </Routes>
          
        </div>
      </div>
    </Router>
  );
}

export default App;
