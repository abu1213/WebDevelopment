import React from 'react'
import { useSelector } from "react-redux"
const ProfileScreen = () => {
  const user = useSelector(selectUser);
  return (
    <div className='profile'>ProfileScreen</div>
  )
}

export default ProfileScreen