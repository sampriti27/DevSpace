import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";
import { ApplicationContext } from "@/context/ApplicationContext";
import Footer from "../footer/Footer";

const Login = ({ setAuthtype }) => {
  useEffect(() => {
    document.title = "DevSpace | Login";
  });

  const router = useRouter();
  const { userData, setUserData, loader, setLoader } =
    useContext(ApplicationContext);

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleLoginData = (e) => {
    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log(loginData);
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    setLoader(true);
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/v1/users/signin`,
        loginData,
        config
      );

      console.log(data);
      setUserData(data.user);
      localStorage.setItem("token", JSON.stringify(data.accessToken));
      setLoader(false);
      router.push("/feed");
    } catch (error) {
      console.log(error);
      toast.warning(error.response?.data.message);
      setLoader(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center shadow-sm">
      <div className="border flex flex-col items-center w-96">
        <div className="logo text-5xl font-semibold p-5 mt-5 cursor-pointer">
          DevSpace
        </div>

        <div className="p-5 mt-5 flex flex-col items-center w-72">
          <input
            type="text"
            placeholder="Enter your username"
            name="username"
            value={loginData.username}
            onChange={handleLoginData}
            className="border w-full outline-none rounded-sm py-2 px-3 text-sm  bg-gray-50 shadow-sm"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={loginData.password}
            onChange={handleLoginData}
            className="mt-1 border w-full  outline-none rounded-sm py-2 px-3 text-sm bg-gray-50 shadow-sm "
          />
          <button
            type="button"
            className="mt-3 bg-[#4cb5f9] text-white w-full  rounded-md py-2 px-3 text-sm font-semibold "
            onClick={handleLogin}
          >
            {loader ? <BeatLoader color="white" /> : <span>Log in</span>}
          </button>

          <div className="flex items-center mt-2">
            <div className="border-b-2 border-gray-200 mt-2 w-24"></div>
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

      <div className="mt-14">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
