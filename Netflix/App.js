import React from 'react'
import {Routes,Route} from "react-router-dom"
import Homescreen from './pages/Homescreen/Homescreen';

const App = () => {
  const user = 
   {
    name:"Balaji",
    email:"balajikrishna44589@gmail.com",
    password:"123456"
  };
  return (
    <div>
      {
        !user ? <h1>LogIn Screen</h1> :
        <Routes> 
          <Route path='/' element={<Homescreen />}></Route>
        </Routes>
      }


    </div>
  )
}

export default App