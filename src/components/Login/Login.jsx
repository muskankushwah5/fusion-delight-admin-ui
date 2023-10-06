import React, { useState } from 'react';

import "./Login.css";
import { loginHandler } from '../../services/userApi';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';

function LoginPage() {
  // State variables to store user input
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  // Function to handle form submission
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if(!username || !password){
        toast.error("These fields cant be empty");
    }
    else{
        const payload = {
            email : username,
            password : password
        };
        toast.loading("Logging");
        const response = loginHandler(payload).then((res)=>{
            console.log(res);
            if(String(res.data.isAdmin) === "1"){
                const expirationTime = new Date().getTime() + 86400000; // 3600000 milliseconds = 1 hour

                    // Create an object to store both data and expiration time
                    const dataWithExpiration = {
                        data: res.data,
                        expirationTime: expirationTime,
                    };

                    // Store the data with expiration time in localStorage
                    localStorage.setItem("AdminUser", JSON.stringify(dataWithExpiration));

                    navigate("/");
            }
            else{
                toast.error("You are not admin you can't signin")
            }
        })
        .catch((err)=>{
            toast.error(err.message);
        })
        toast.dismiss();
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
