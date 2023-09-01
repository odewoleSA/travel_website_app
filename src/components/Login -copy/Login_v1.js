import React from 'react';
import './Login.css';
import profile from '../../images/Profile_img.jpg';
import { Link } from 'react-router-dom';

function Login() { 
  return (
    <div className='main'>
      <div className="sub-main">
        <div>
            <div className='imgs'>
                <div className="container-image">
                    <img src={profile} alt="profile" classname="profile" />
                </div>   
            </div>
            <div>
                <div className=''>
                    <input type="text" placeholder='Username' className='name' />
                </div>
                <div className='second-input'>
                    <input type="password" placeholder='Password' className='password' />
                </div>
                <div className='login-button'>
                    <button>Sign in</button>
                </div> 
                <div>
                    <p className='login-link'>
                        <Link to="#" className='link-text'>Forget Password</Link>
                        <span> or </span>
                        <Link to="/sign-up" className='link-text'>Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login

