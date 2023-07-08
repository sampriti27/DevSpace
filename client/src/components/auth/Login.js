import React from "react";
import { FcGoogle } from "react-icons/fc";

const Login = ({ setAuthtype }) => {
  return (
    <div className="flex flex-col justify-center items-center shadow-sm">
      <div className="border flex flex-col items-center w-96">
        <div className="logo text-5xl font-semibold p-5 mt-5 cursor-pointer">
          DevSpace
        </div>

        <div className="p-5 mt-5 flex flex-col items-center w-72">
          <input
            type="text"
            placeholder="Enter your email"
            className="border w-full  outline-none rounded-sm py-2 px-3 text-sm  bg-gray-50 shadow-sm"
          />
          <input
            type="text"
            placeholder="Password"
            className="mt-1 border w-full  outline-none rounded-sm py-2 px-3 text-sm bg-gray-50 shadow-sm "
          />
          <button
            type="button"
            className="mt-3 bg-[#4cb5f9] text-white w-full  rounded-md py-2 px-3 text-sm font-semibold "
          >
            Log in
          </button>

          <div className="flex items-center mt-2">
            <div class="border-b-2 border-gray-200 mt-2 w-24"></div>
            <p className="mx-5 text-gray-400 font-medium text-base">Or</p>
            <div class="border-b-2 border-gray-200 mt-2 w-24"></div>
          </div>

          <div className="flex items-center justify-between mt-4 cursor-pointer">
            <FcGoogle />
            <p className=" text-gray-900 ml-3 font-medium">
              Sign in with Google
            </p>
          </div>

          <div className="flex items-center justify-center mt-4">
            <p className=" text-[#2a6290]  font-medium text-sm cursor-pointer hover:underline hover:underline-offset-2">
              Forgot Pasword?
            </p>
          </div>
        </div>
      </div>
      <div className="w-96 border mt-2 p-5 flex items-center justify-center shadow-sm">
        <p className="text-sm text-gray-900">
          Don't have an account?{" "}
          <span
            className="text-[#4cb5f9] font-semibold cursor-pointer"
            onClick={() => setAuthtype("register")}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
