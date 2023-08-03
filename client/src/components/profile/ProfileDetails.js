import React from "react";
import { Avatar, useMantineColorScheme } from "@mantine/core";
import StatsRingCard from "./StatsRingCard";

const ProfileDetails = () => {
  const statsData = {
    title: "John Doe",
    email: "johndoe@example.com",
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
      <div className="w-full flex items-start justify-center gap-2 px-10">
        <div className="">
          <Avatar
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            size={170}
            radius={120}
          />
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <StatsRingCard {...statsData} />
        </div>
      </div>
    </>
  );
};

export default ProfileDetails;
