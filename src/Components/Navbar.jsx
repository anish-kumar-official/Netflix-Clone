import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="narbarWrapper text-white px-5 py-5 flex justify-between w-full absolute z-50">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
        <div className="">
          <button className="btnLogin hover:ring-white">Login</button>
          <button className="btnSignup bg-red-600 text-white rounded cursor-pointer px-3 py-2 mx-2 hover:bg-red-900">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
