import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import { HeroButton } from '../HeroButton';
import '../HeroSection.css';

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
          <form action="">
            <div className="username_div">
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
            <div className="email_div">
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
            <div className="password_div">
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
                <button className='btn-sign'>Sign Up</button>
            </div> 
          </form>
          <div className='login-link'>
            <p>
              <Link to="#" className='link-text' id="">Already a user? </Link>
              <Link to="/sign-in" className='link-text2' id="sign_text">Sign in</Link>
            </p>
          </div>
       </div>
      </div>
    </div>
  )
}

export default Register
