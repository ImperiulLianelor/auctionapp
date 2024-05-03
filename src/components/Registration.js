import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// import { initializeApp } from 'firebase/app';
// import { firebaseConfig } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import './Registration.css';

// const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  const navigate = useNavigate();
  //const userRef = useRef();
  //const errRef = useRef();

  const [email, setEmail] = useState('');
  //const [validName, setValidName] = useState(false);

  const [password, setPassword] = useState('');
  //const [validPwd, setValidPwd] = useState(false);

  const [matchpass, setMatchPass] = useState('');
  //const [validMatch, setValidMatch] = useState(false);

  const [error, setError] = useState('');
  //const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);

  // useEffect(() => {
  //   setValidName(USER_REGEX.test(email));
  // }, [email]);

  // useEffect(() => {
  //   setValidPwd(PWD_REGEX.test(pwd));
  //   setValidMatch(pwd === matchPwd);
  // }, [pwd, matchPwd]);

  // useEffect(() => {
  //   setErrMsg('');
  // }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email && !password && !matchpass) {
      try {
        
      } catch (error) {
        setError(error.message);
      }
    }

    if(password !== matchpass){
      try {
        
      } catch (error) {
        setError(error.message);
      }
    }else{
      navigate('/home');
    }

    // Initialize an object to track input errors
    // let inputError = {
    //     email: "",
    //     password: "",
    //     matchpass: "",
    // };
    // // Check if email and password are empty
    // if (!email && !password) {
    //   setError({
    //     ...inputError,
    //     email: "Enter a valid email address",
    //     password: "Password should not be empty",
    //   });
    //   return;
    // }
    // try {
    // } catch (error) {
    //   setError(error.message);
    // }
    // const v1 = email;
    // const v2 = password;
    // if (!v1 || !v2) {
    //   setError("Invalid Entry");
    //   return;
    // }
    // console.log(email, password);
    // setSuccess(true);
    
  };

  return (
    <div className="register-container">
      <Link to="/" className="back-button">
        &#60;- Back
      </Link>
      {/* {success ? (
        <section>
          <h1>Registration Successful!</h1>
          <p>
            <Link to="/login">Sign In</Link>
          </p>
        </section>
      ) : (
        <section>
          {/* <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">
            {errMsg}
          </p> */}
          <h1>Register</h1>
          <form className="register-form" onSubmit={handleSubmit}>
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={matchpass}
            onChange={(e) => setMatchPass(e.target.value)}
          />
            <button disabled={!email || !password || !matchpass ? true : false}>Register</button>
            {/* <button type="submit">Register</button> */}
          </form>
          {error && <p className="error-msg">{error}</p>}
          <p>
            Already have an account?<br />
            <span className="line">
              <Link to="/login">Login</Link>
            </span>
          </p>
        {/* </section> */}
      {/* )} */}
    </div>
  );
};

export default Register;
