import React from "react";
import { FcGoogle } from "react-icons/fc";

const Register = ({ setAuthtype }) => {
  return (
    <div className="flex flex-col justify-center items-center shadow-sm mt-32">
      <div className="border flex flex-col items-center w-96">
        <div className="logo text-5xl font-semibold p-5 mt-5 cursor-pointer">
          DevSpace
        </div>
        <div className="mt-3 px-4 py-2">
          <p className=" text-base font-medium text-gray-500 tracking-tight text-center">
            Sign up to connect with dev community and showcase your skills.
          </p>
        </div>
        <div className="flex items-center justify-between mt-4 cursor-pointer">
          <FcGoogle />
          <p className=" text-gray-900 ml-3 font-medium">Sign in with Google</p>
        </div>

        <div className="flex items-center mt-2">
          <div class="border-b-2 border-gray-200 mt-2 w-24"></div>
          <p className="mx-5 text-gray-400 font-medium text-base">Or</p>
          <div class="border-b-2 border-gray-200 mt-2 w-24"></div>
        </div>

        <div className="p-5 mt-5 flex flex-col items-center w-72">
          <input
            type="email"
            placeholder="Enter your email"
            className="border w-full  outline-none rounded-sm py-2 px-3 text-sm  bg-gray-50 shadow-sm mb-2"
          />
          <input
            type="text"
            placeholder="Full Name"
            className="border w-full  outline-none rounded-sm py-2 px-3 text-sm  bg-gray-50 shadow-sm mb-2"
          />
          <input
            type="text"
            placeholder="Username"
            className="border w-full  outline-none rounded-sm py-2 px-3 text-sm  bg-gray-50 shadow-sm mb-2"
          />
          <input
            type="password"
            placeholder="Password"
            className="border w-full  outline-none rounded-sm py-2 px-3 text-sm  bg-gray-50 shadow-sm mb-2"
          />
          <input
            type="password"
            placeholder="Confirm your password"
            className=" border w-full  outline-none rounded-sm py-2 px-3 text-sm bg-gray-50 shadow-sm "
          />
          <button
            type="button"
            className="mt-3 bg-[#4cb5f9] text-white w-full  rounded-md py-2 px-3 text-sm font-semibold "
          >
            Sign Up
          </button>
        </div>

        <div className="flex items-center mt-4 mb-2 px-4 py-2">
          <p className="text-gray-400 text-xs tracking-tight text-center">
            By signing up, you agree to our{" "}
            <span className=" text-[#2a6290]">Terms</span>,{" "}
            <span className=" text-[#2a6290]">Privacy Policy </span>and{" "}
            <span className=" text-[#2a6290]">Cookie Policy</span>
          </p>
        </div>
      </div>
      <div className="w-96 border mt-2 p-5 flex items-center justify-center shadow-sm">
        <p className="text-sm text-gray-900">
          Have an account?{" "}
          <span
            className="text-[#4cb5f9] font-semibold cursor-pointer"
            onClick={() => setAuthtype("login")}
          >
            Log in
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
