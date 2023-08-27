import React, { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";

const MovieRender = ({ item, id }) => {
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
  };

  return (
    <div className="w-[250px] h-[150px] px-[5px] py-[5px] inline-block cursor-pointer relative mx-2">
      <img
        className="h-full w-full object-fill"
        src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
        alt={item.title}
      />
      <div className="absolute top-0 left-1 h-full w-full hover:bg-black/80 opacity-0 hover:opacity-100 z-10">
        <p className="text-[0.9rem] flex justify-center items-center w-full h-full break-all">
          {item.title}
        </p>
        <p>
          {like ? (
            <BsHeartFill
              onClick={handleLike}
              className="absolute top-4 left-4 fill-red-600"
            />
          ) : (
            <BsHeart onClick={handleLike} className="top-4 left-4 absolute" />
          )}
        </p>
        {/* {setLike(false)} */}
      </div>
      {/* <div className="absolute top-2 left-2 h-full w-full z-10">
                  <BsHeart />
                </div> */}
      {/* <div>{item.title}</div> */}
    </div>
  );
};

export default MovieRender;
