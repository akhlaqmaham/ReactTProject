import React, { useState } from 'react';
import Axios from 'axios';
import { Navigate } from 'react-router-dom';
import { FaUser, FaLock, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom'

export default function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus('Logged In Successfully');
        console.log(response.data);
      }
    });
  };
  
  if (loginStatus === "Logged In Successfully") {
    return <Navigate to="/dashboard" />
  }



  return(
    <div className="login-wrapper">
      <Link to="/" className="main-page"><h4><FaHome/> GO TO MAIN PAGE </h4></Link>
      <h1 className="log-head">Please Log In</h1>
      <div className="login">
        <label><FaUser /> Username</label>
        <input type="text" placeholder="Username…"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        /> <br />
        <label>< FaLock /> Password</label>
        <input type="password" placeholder="Password…"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={login}>Login</button>
        <h1>{loginStatus}</h1>
        
      </div>
    </div>
  )
}
