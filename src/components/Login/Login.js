import React,{useState} from 'react';
import './Login.css';
import profile from '../../images/Profile_img.jpg';
import { Link } from 'react-router-dom';

function Login() { 

    const {usernameval,setusername} = useState("");


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
                    <input type="text" placeholder='Enter your Username' className='name' id="name" value={usernameval} onChange={(e)=>{setusername(e.target.value)}} />
                </div>
                <div className='second-input'>
                    <label for="password" >Password</label>
                    <input type="password" placeholder='Enter Password' className='password' id="password" />
                </div>
                <div className='login-button'>
                    <button>Sign in</button>
                </div> 
                <div>
                    <p className='login-link'>
                        <Link to="#" className='link-text'>Forget Password</Link>
                        <span className='link-text'> or </span>
                        <Link to="/sign-up" className='link-text'>Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
        <div className='right-side'>

        </div>
      </div>
    </div>
  )
}

export default Login

