import React, { useEffect } from 'react'
import './App.css'
import {Routes,Route} from "react-router-dom"
import Homescreen from './pages/Homescreen/Homescreen';
import ProfileScreen from './pages/ProfileScreen/ProfileScreen';
import LoginScreen from './pages/LoginScreen/LoginScreen';
import {useDispatch, useSelector} from "react-redux"
import { login, logout, selectUser } from './features/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase';

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(userAuth)=>{
      if(userAuth){
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email
        }))
      }
      else{
        dispatch(logout())
      }
    })
    return unsubscribe;
  }, [])
  
  
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