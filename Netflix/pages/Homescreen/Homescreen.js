import React from 'react'
import Banner from '../../components/Banner/Banner'
import Nav from '../../components/Nav/Nav'

const Homescreen = () => {
  return (
    <div className='homeScreen' style={{height:"5000px"}}>
      <Nav />
      <Banner />
    </div>
  )
}

export default Homescreen