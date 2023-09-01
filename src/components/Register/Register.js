import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
 
  const [formvalue,setformvalue] = useState({
    username:"",
    email:"",
    password:"",
  });
  const handleChange = (event) =>{
    setformvalue({
      ...formvalue,[event.target.name]:event.target.value,
    });
  };

  return (
    <div className='container'>
      <div className='app-container'>
       <div>
          <h2 className='account'>Create Account</h2>
       </div> 
       <div className="form-wrapper">
          <div className="username">
            <label for="">Username</label>
            <input 
              type="text" 
              className="username" 
              placeholder=""
              name="username"
              value={formvalue.username}
              onChange={handleChange}
            />
          </div>
          <div className="email">
            <label for="email">Email</label>
            <input 
              type="email" 
              className="email" 
              placeholder=""
              name="email"
              value={formvalue.email}
              onChange={handleChange}
            />
          </div>
          <div className="password">
            <label for="password">Password</label>
            <input 
              type="password" 
              className="password" 
              placeholder=""
              name="password"
              value={formvalue.password}
              onChange={handleChange}
            />
          </div>
          <div className='sign-button'>
              <button className='btn-sign'>Sign up</button>
          </div> 
          <div className='login-link'>
              <p>
                <Link to="#" className='link-text' id="forgot_text">Already have an account? </Link>
                <Link to="/sign-up" className='link-text' id="sign_text">Sign in</Link>
              </p>
          </div>
       </div>
      </div>
    </div>
  )
}

export default Register
