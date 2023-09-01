import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../DBconfig";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const popularMovie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestNowplaying).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  console.log(popularMovie);

  return (
    <div className="w-full h-full text-white">
      <div className="popularmovieWrapper h-[600px] w-full">
        <div className="absolute bg-gradient-to-r from-black w-full h-[600px]"></div>
        <img
          className=" h-full w-full object-fill"
          src={`https://image.tmdb.org/t/p/original/${popularMovie?.backdrop_path}`}
          alt={popularMovie?.title}
        />
        <div className="infoWrapper absolute w-full top-[30%] px-4">
          <div className="text-white text-[2.2rem]">{popularMovie?.title}</div>
          <div className="rating">
            Rating : IMDb {popularMovie?.vote_average}
          </div>
          <div className="mt-2">
            <button className="btnPlayNow px-[15px] py-[8px] text-black bg-white border-none text-[1.2rem] font-bold ">
              Play Now
            </button>
            <button className="btnWatchLater px-[15px] py-[8px] text-white bg-black text-[1.2rem] font-bold mx-2 border-white border-2">
              Watch Later
            </button>
          </div>
          <div className="text-[1.1rem] py-2">
            Released : {popularMovie?.release_date}
          </div>
          <div className="text-[1.05rem] py-2 break-normal w-[50%]">
            {popularMovie?.overview}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
