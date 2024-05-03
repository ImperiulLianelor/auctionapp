//Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
//import { auth, db } from '../firebaseConfig'; 

import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    
    try {
      // Firebase login logic
      //await auth.signInWithEmailAndPassword(email, password);

      // Check if user data exists in Firestore
      //const userDoc = await db.collection('users').doc(email).get();

      //if (userDoc.exists) {
        // User exists in the database
        // Redirect or perform other actions upon successful login
        //setEmail('');
        //setPassword('');
        //setError('');
      //} else {
       // setError('User not found or invalid credentials');
      //}
    } catch (error) {
      setError(error.message);
    }
    if (!email && !password) {
      try {
        
      } catch (error) {
        setError(error.message);
      }
    }else{
      navigate('/home');
    }
  };

  return (
    <div className="login-container">
      <Link to="/" className="back-button">
        &#60;- Back
      </Link>
      
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p className="error-msg">{error}</p>}
          <p>
            Not registered yet?<br />
            <span className="line">
              <Link to="/register">Register</Link>
            </span>
          </p>
    </div>
  );
};

export default Login;
