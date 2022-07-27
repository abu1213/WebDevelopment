import axios from '../../helpers/axios'
import React, { useEffect, useState } from 'react'
import request from '../../helpers/request'

const Banner = () => {
    const [movie,setMovie] = useState([])

    useEffect(()=>{
        const fetchData = async () =>{
            const requests = await axios.get(request.fetchNetflixOrginals)
            setMovie(
                requests.data.results[
                    Math.floor(Math.random()*requests.data.results.length-1)
                ]
            )
            return requests
        }
        fetchData();
        console.log(movie);
    },[])
  return (
    <div className='banner'>Banner</div>
  )
}

export default Banner