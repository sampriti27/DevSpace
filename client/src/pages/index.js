import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import React, { useState } from "react";

const index = () => {
  const [authtype, setAuthtype] = useState("login");
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      {authtype === "login" ? (
        <Login setAuthtype={setAuthtype} />
      ) : (
        <Register setAuthtype={setAuthtype} />
      )}
    </div>
  );
};

export default index;
