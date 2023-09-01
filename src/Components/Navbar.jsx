import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="narbarWrapper text-white px-5 py-5 flex justify-between w-full absolute z-50 ">
        <Link
          to="/home"
          className="text-red-600 text-4xl font-bold cursor-pointer"
        >
          NETFLIX
        </Link>
        <div className="search">
          <input
            type="text"
            placeholder="Search Movies..."
            className="border-none rounded px-2 py-1 mx-2 text-black"
          />
          <button className="btnSearch bg-red-600 text-white font-bold rounded px-1 py-1">
            Search
          </button>
        </div>
        <div className="">
          <button className="btnLogin hover:ring-white">
            <Link className="text-white" to="/login">
              Login
            </Link>
          </button>
          <button className="btnSignup bg-red-600 text-white rounded cursor-pointer px-3 py-2 mx-2 hover:bg-red-900">
            <Link to="/register">Signup</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
