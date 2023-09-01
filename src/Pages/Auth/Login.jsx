import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full h-full">
      <img
        className="w-full object-cover absolute"
        src="https://springboard-cdn.appadvice.com/wp-content/appadvice-v2-media/2016/11/Netflix-background_860c8ece6b34fb4f43af02255ca8f225-xl.jpg"
        alt="/"
      />
      <div className="bg-black/60 top-0 left-0 z-10 w-full h-screen fixed flex justify-center items-center"></div>
      <div className="w-full h-screen flex justify-center items-center py-[30px] px-5">
        <div className="bg-black/60 w-[450px] h-[400px] z-10 flex flex-col px-[30px] py-[25px] gap-5 items-center">
          <div className="name text-white text-[30px] px-10 w-full">
            Sign In
          </div>

          <div className="inputs flex flex-col gap-3 justify-center items-center w-full">
            <input
              type="email"
              className="w-[75%] px-[15px] py-[10px] rounded bg-gray-600/50 text-white"
              placeholder="Email"
            />
            <input
              type="password"
              className="w-[75%] px-[15px] py-[10px] rounded  bg-gray-600/50 text-white"
              placeholder="Password"
            />
            <button className="btnSignin rounded bg-red-600 px-[15px] py-[10px] mt-3 text-white w-[75%] hover:bg-red-700">
              Sign In
            </button>
          </div>

          <div className="flex justify-between mt-3">
            <div>
              <input
                type="checkbox"
                className="text-white mr-[3px]"
                id="rememberMe"
              />
              <label htmlFor="rememberMe" className="text-white">
                Remember me
              </label>
            </div>
            New User?{" "}
            <Link to="/register" className="text-white">
              Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
