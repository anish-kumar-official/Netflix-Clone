import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import MovieRender from "../Pages/MovieRender";

const Row = ({ title, requestURL, rowID }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(requestURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [requestURL]);

  const slideLeft = () => {
    var left = document.getElementById("slider" + rowID);
    left.scrollLeft = left.scrollLeft - 700;
  };
  const slideRight = () => {
    var left = document.getElementById("slider" + rowID);
    left.scrollLeft = left.scrollLeft + 700;
  };

  //   console.log(movies);

  return (
    <div>
      <div className="text-white py-[15px] my-[10px] mx-[10px] w-full text-[1.5rem]">
        {title}
        <div className="sliderWrapper relative flex items-center group ">
          <BsArrowLeftCircleFill
            onClick={slideLeft}
            className="absolute z-30 cursor-pointer w-10 h-10 opacity-50 hover:opacity-100 fill-white hidden group-hover:block"
          />
          <div
            id={"slider" + rowID}
            className="slider w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative "
          >
            {movies.map((item, id) => (
              <MovieRender item={item} id={id} />
            ))}
          </div>
          <BsArrowRightCircleFill
            onClick={slideRight}
            className="absolute right-0 z-30 cursor-pointer w-10 h-10 opacity-50 hover:opacity-100 fill-white hidden group-hover:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Row;
