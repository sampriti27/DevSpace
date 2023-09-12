import React, { useState, useEffect, useContext } from "react";
import { Avatar, useMantineColorScheme } from "@mantine/core";
import ProfileInfo from "./ProfileInfo";
import { ApplicationContext } from "@/context/ApplicationContext";

const ProfileDetails = () => {
  const [avatarSize, setAvatarSize] = useState(170);
  const { userData, userPosts } = useContext(ApplicationContext);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 640) {
        // Small screens
        setAvatarSize(100);
      } else if (screenWidth <= 1024) {
        // Medium screens
        setAvatarSize(120);
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

  return (
    <>
      <div className="w-full flex md:flex-row md:gap-4 flex-col md:items-start items-center justify-center gap-2 md:px-10  ">
        <div className="">
          <Avatar
            src={userData?.photo}
            size={avatarSize}
            radius={avatarSize - 20}
          />
        </div>
        <div className="w-1/2 flex items-center justify-center ml-4">
          <ProfileInfo userPosts={userPosts} />
        </div>
      </div>
    </>
  );
};

export default ProfileDetails;
