import React, { useState } from 'react'
import SignInScreen from '../SignInScreen/SignInScreen'
import './LoginScreen.css'
const LoginScreen = () => {
    const [signin,setSignin] = useState(false)
  return (
    <div className='loginScreen'>
        <div className='loginScreen_background'>
        <img className='login_logo' src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' onClick={()=>setSignin(false)}/>
        <button className='signin_button' onClick={()=>setSignin(true)}>Sign In</button>
        <div className='gradient' />
    </div>
    <div className='loginScreen_body'>
        {signin?<SignInScreen /> :
        <>
        <h1 style={{marginBottom:"20px",fontSize:"3rem"}}>Unlimited films, TV Programmes and more.</h1>
        <h2 style={{marginBottom:"20px",fontSize:"2.1rem"}}>Watch anywhere.Cancel at anytime</h2>
        <h3 style={{marginBottom:"20px",fontSize:"1.3rem"}}>Ready to watch?Enter your Email to create or restart your membership</h3>
        <div className='loginScreen_input'>
            <form>
                <input type="email" placeholder="Email Address" />
                <button className='getstarted_button' onClick={()=>setSignin(true)}>Get Started</button>
            </form>
        </div>
        </>
        }
    </div>
    </div>
  )
}

export default LoginScreen