import React,{useState} from 'react';
import './Login.css';
import profile from '../../images/Profile_img.jpg';
import welcome_img from '../../images/welcome_img.png'
import { Link } from 'react-router-dom';

function Login() { 

    const {usernameval,setusername} = useState("");
    const {passval,setpass} = useState("");

  return (
    <div className='main'>
      <div className="sub-main">
        <div className='left-side'>
            <div className='imgs'>
                <div className="container-image">
                    <img src={profile} alt="profile" classname="profile" />
                </div>   
            </div>
            <div>
                <div className=''>
                    <label for="name" >Username</label>
                    <input 
                        type="text" 
                        placeholder='Enter your Username' 
                        className='name' 
                        id="name" 
                        value={usernameval} 
                        onChange={(e) => setusername(e.target.value)}
                    />
                </div>
                <div className='second-input'>
                    <label for="password" >Password</label>
                    <input 
                        type="password" 
                        placeholder='Enter Password' 
                        className='password' 
                        id="password" 
                        value={passval} 
                        onChange={(e) => setpass(e.target.value)}
                    />
                </div>
                <div className='login-button'>
                    <button className='btn-sign'>Sign in</button>
                </div> 
                <div className='login-link'>
                    <p>
                        <Link to="#" className='link-text' id="forgot_text">Forget Password</Link>
                        <span className='link-text'> | </span>
                        <Link to="/sign-up" className='link-text' id="sign_text">Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
        <div className='right-side'>
            <div className='right-text'>Welcome Back!!</div>
            <div className='right-img'>
                <img src={welcome_img} alt="welcome image" id="welcome_img" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login

