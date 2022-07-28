import React from 'react'
import './App.css'
import {Routes,Route} from "react-router-dom"
import Homescreen from './pages/Homescreen/Homescreen';
import ProfileScreen from './pages/ProfileScreen/ProfileScreen';
import LoginScreen from './pages/LoginScreen/LoginScreen';

const App = () => {
  const user = null;
  //  {
  //   name:"Balaji",
  //   email:"balajikrishna44589@gmail.com",
  //   password:"123456"
  // };
  return (
    <div className='App'>
      {
        !user ? <LoginScreen /> :
        <Routes> 
          <Route path='/' element={<Homescreen />}></Route>
          <Route path='/profile' element={<ProfileScreen />}></Route>
        </Routes>
      }


    </div>
  )
}

export default App