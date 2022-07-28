import React, { useEffect, useState } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
    const [show,setShow] = useState(false);
    const transitionNavbar = () =>{
        if(window.scrollY>100){
            setShow(true)
        }
        else{
            setShow(false)
        }
    }
useEffect(()=>{
    window.addEventListener("scroll",transitionNavbar);
},[])


  return (
    <nav className={` nav  ${show && "nav_black"}`} >
        <div className='nav_contents'>
        <Link to ="/">
            <img src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' 
             className='nav_logo'
            />
        </Link>

        <Link to = "/profile">
            <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
             className='nav_avatar'/>
             </Link>
        </div>
    </nav>
  )
}

export default Nav