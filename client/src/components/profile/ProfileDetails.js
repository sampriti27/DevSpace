import React, { useState, useEffect } from "react";
import { Avatar, useMantineColorScheme } from "@mantine/core";
import ProfileInfo from "./ProfileInfo";

const ProfileDetails = () => {
  const [avatarSize, setAvatarSize] = useState(170);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 640) {
        // Small screens
        setAvatarSize(100);
      } else if (screenWidth <= 1024) {
        // Medium screens
        setAvatarSize(150);
      } else {
        // Large screens
        setAvatarSize(170);
      }
    };

    // Initial check and event listener
    handleResize();
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const profileData = {
    name: "John Doe",
    email: "johndoe@example.com",
    username: "john_Doe",
    job: "Software Engineer",
    completed: 75,
    total: 100,
    stats: [
      { value: 50, label: "Followers" },
      { value: 25, label: "Posts" },
      { value: 80, label: "Likes" },
    ],
  };
  return (
    <>
      <div className="w-full flex md:flex-row flex-col md:items-start items-center justify-center gap-2 md:px-10  ">
        <div className="">
          <Avatar
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            size={avatarSize}
            radius={avatarSize - 20}
          />
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <ProfileInfo profileData={profileData} />
        </div>
      </div>
    </>
  );
};

export default ProfileDetails;
