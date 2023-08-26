import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import React, { useState } from "react";

const index = () => {
  const [authtype, setAuthtype] = useState("login");
  return (
    <>
      {authtype === "login" ? (
        <div className="flex flex-col justify-center items-center mt-10 w-screen">
          <Login setAuthtype={setAuthtype} />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <Register setAuthtype={setAuthtype} />
        </div>
      )}
    </>
  );
};

export default index;
