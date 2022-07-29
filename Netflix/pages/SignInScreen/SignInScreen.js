import React, { useState } from 'react'
import './SignInScreen.css'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../../Firebase'


const SignInScreen = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const register = (e) =>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email,password).then(authUser=>console.log(authUser)).catch(err=>alert(err.message))
  }

  const login = (e) =>{
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password).then(authUser=>console.log(authUser)).catch(err=>alert(err.message))
  }

  return (
    <div className="SignInScreen">
      <h1 style={{marginBottom:"15px",textAlign:'left'}}>SignIn</h1>
      <form>
        <input type="email" placeholder='Email Address' onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
        <button type='submit' className='SignIn_Button' onClick={login}>SignIn</button>
        <h4 style={{marginTop:"15px",textAlign:'left'}}>
          <span className='signinScreen_gray'>New to NetFlix?</span>
          <span className='signinScreen_link' onClick={register}>SignUp Now</span>
        </h4>
      </form>
    </div>
  )
}

export default SignInScreen