import React from 'react'
import Banner from '../../components/Banner/Banner'
import Nav from '../../components/Nav/Nav'
import Row from '../../components/Row/Row'
import requests from '../../helpers/requests'
const Homescreen = () => {
  return (
    <div className='homeScreen'>
      <Nav />
      <Banner />
      <Row 
      title="NetFlix Originals"
      fetchUrl={requests.fetchNetflixOrginals}
      isLarge
      />
      <Row 
      title="Trending Now"
      fetchUrl={requests.fetchTrending}
      
      />
      <Row 
      title="Action Movies"
      fetchUrl={requests.fetchActionMovies}
      
      />
      <Row 
      title="Romantic Movies"
      fetchUrl={requests.fetchRomanceMovies}
      />
      <Row 
      title="Horror Movies"
      fetchUrl={requests.fetchHorrorMovies}
      />
      <Row 
      title="Comedy Movies"
      fetchUrl={requests.fetchComedyMovies}
      />

    </div>
  )
}

export default Homescreen