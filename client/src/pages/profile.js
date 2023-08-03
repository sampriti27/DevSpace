import React from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import { useMantineColorScheme } from "@mantine/core";
import ProfileDetails from "@/components/profile/ProfileDetails";
const profile = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <>
      <Sidebar>
        <main className={`${dark ? "bg-[#25262B]" : "bg-gray-100"} h-screen`}>
          <section class="text-gray-600 body-font">
            <div className=" container w-full flex items-center justify-evenly h-[300px]  px-5 mt-0">
              <ProfileDetails />
            </div>
            <div className="border-b-[1px] border-gray-400 mx-auto w-2/3 flex items-center justify-center"></div>
          </section>
        </main>
      </Sidebar>
    </>
  );
};

export default profile;
