import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useMantineColorScheme } from "@mantine/core";

const Header = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <>
      <div className="sm:hidden block">
        <div
          className={`relative w-full h-16 p-4 ${
            dark
              ? "bg-[#1A1B1E] text-white border-slate-50"
              : "bg-white text-black  border-b-[2px]"
          } flex items-center justify-between`}
        >
          <div className="logo text-3xl font-bold cursor-pointer px-2">
            DevSpace
          </div>
          <div className="flex items-center w-12 h-12 justify-center hover:bg-gray-50 rounded-full cursor-pointer">
            <AiOutlineHeart size={28} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
