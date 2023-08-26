import React, { useContext, useEffect } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import { useMantineColorScheme } from "@mantine/core";
import ProfileDetails from "@/components/profile/ProfileDetails";
import ProfileBody from "@/components/profile/ProfileBody";
import { ApplicationContext } from "@/context/ApplicationContext";
const profile = () => {
  const { userData } = useContext(ApplicationContext);
  useEffect(() => {
    document.title = `${userData ? userData?.username : "DevSpace"} | Profile`;
  });
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <>
      <Sidebar>
        <main className={`${dark ? "bg-[#1A1B1E]" : "bg-white"} h-screen`}>
          <section className="text-gray-600 body-font scroll-container">
            <div className=" container w-full flex items-center justify-evenly h-[300px]  px-5 mt-6 lg:mt-0">
              <ProfileDetails />
            </div>
            <div className="mt-8 md:mt-2 md:px-36 px-2">
              <ProfileBody />
            </div>
          </section>
        </main>
      </Sidebar>
    </>
  );
};

export default profile;
