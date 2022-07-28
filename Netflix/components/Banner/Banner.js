import axios from "../../helpers/axios";
import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "../../helpers/requests";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOrginals);
      // console.log(request);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1  )
        ]
      );
    };
    fetchData();
  }, []);

  console.log(movie);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
     <div className="banner_contents">
        <h1 className="banner_title">
            {movie?.title || movie?.name}
        </h1>
        <div className="banner_buttons">
            <button className="play_button">Play</button>
            <button className="MyList_button">MyList</button>
        </div>
        <h1 className="banner_overview">
            {truncate(movie?.overview,100)}
        </h1>
        <div className="banner_fade">

        </div>
     </div>
    </header>
  );
};

export default Banner;