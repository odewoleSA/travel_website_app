import React,{useState} from 'react';
import './SignIn.css';
import profile from '../../images/Profile_img.jpg';
import login_img from '../../images/lock_img.png'
import { Link } from 'react-router-dom';
import { HeroButton } from '../HeroButton';
import '../HeroSection.css';

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
                <form action="">
                <div className=''>
                    <label for="name" >Username</label>
                    <input 
                        type="text" 
                        placeholder='Enter your Username' 
                        className='name' 
                        id="name" 
                        name="username"
                        value={usernameval} 
                        onChange={(e) => setusername(e.target.value)}
                    />
                </div>
                <div className='second-input'>
                    <label for="password" >Password</label>
                    <input 
                        type="password" 
                        placeholder='Enter Password' 
                        className='password_in' 
                        id="password" 
                        name="password"
                        value={passval} 
                        onChange={(e) => setpass(e.target.value)}
                    />
                </div>
                <div className='login-button'>
                    <button className='btn-sign'>Sign In</button>
                </div> 
                </form>
                <div className='login-link'>
                    <p>
                        <Link to="#" className='link-text' id="forgot_text">Forget Password</Link>
                        <span className='link-text'> | </span>
                        <Link to="/sign-up" className='link-text' id="sign_text">Sign up</Link>
                    </p>
                </div>
            </div>
            <div className='alt-login-text'>
                <div className='or-text'>
                    <hr id="hr_line1" /> <span id="or-span">Sign in with</span><hr id="hr_line2"/>
                </div>
            </div>
            <div className='alt-login-text_mobile'>
                <div className='or-text'>
                    <span id="or-span">Sign in with</span>
                </div>
            </div>
            <div className='alt-login-btn'>
                <div className='hero-btns'>
                    <HeroButton
                        className='btn_2'
                        buttonStyle='btn--normal'
                        buttonSize='btn--medium'
                        btnLink=''
                    >
                    <i className='fab fa-google' /> Google
                    </HeroButton>
                    <HeroButton
                        className='btn_2'
                        buttonStyle='btn--normal'
                        buttonSize='btn--medium'
                        onClick={console.log('hey')}
                        btnLink=''
                    >
                    <i className='fab fa-facebook' /> Facebook 
                    </HeroButton>
                </div>
            </div>
        </div>
        <div className='right-side'>
            <div className='right-text'>Welcome Back!!</div>
            <div className='right-img'>
                <img src={login_img} alt="welcome image" id="welcome_img" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login

