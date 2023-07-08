import React from "react";
import { CgProfile } from "react-icons/cg";
import { AiFillHome, AiOutlineHeart } from "react-icons/ai";
import { FiSearch, FiPlusSquare } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";
import { IoSettingsOutline, IoMoonOutline } from "react-icons/io";
import { BiBookmark } from "react-icons/bi";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";

const Sidebar = ({ children }) => {
  return (
    <>
      <div className="flex">
        <div className="fixed w-20 lg:w-64 h-screen p-4 bg-white border-r-[2px] flex flex-col pl-4">
          <div className="logo text-3xl font-bold cursor-pointer px-2 hidden lg:block">
            DevSpace
          </div>
          <div className="logo text-3xl font-bold cursor-pointer px-2 block lg:hidden">
            DS
          </div>
          <div className="flex flex-col justify-between mt-10 h-[600px]">
            <div className="flex flex-col items-start gap-5 mb-20">
              <div className="flex items-center w-12 h-12 justify-center lg:justify-start lg:w-56 lg:py-2  hover:bg-gray-50 rounded-full cursor-pointer">
                <AiFillHome size={28} className="lg:ml-3" />
                <p className=" ml-4 hidden lg:block">Home</p>
              </div>
              <div className="flex items-center cursor-pointer  w-12 h-12 justify-center lg:justify-start lg:w-56 lg:py-2 hover:bg-gray-50 rounded-full">
                <FiSearch size={28} className="lg:ml-3" />
                <p className=" ml-4 hidden lg:block">Search</p>
              </div>
              <div className="flex items-center cursor-pointer  w-12 h-12 justify-center lg:justify-start lg:w-56 lg:py-2 hover:bg-gray-50 rounded-full">
                <AiOutlineHeart size={28} className="lg:ml-3" />
                <p className=" ml-4 hidden lg:block">Notification</p>
              </div>
              <div className="flex items-center cursor-pointer  w-12 h-12 justify-center lg:justify-start lg:w-56 lg:py-2 hover:bg-gray-50 rounded-full">
                <FiPlusSquare size={28} className="lg:ml-3" />
                <p className=" ml-4 hidden lg:block">Create</p>
              </div>
              <div className="flex items-center cursor-pointer  w-12 h-12 justify-center lg:justify-start lg:w-56 lg:py-2 hover:bg-gray-50 rounded-full">
                <CgProfile size={28} className="lg:ml-3" />
                <p className=" ml-4 hidden lg:block">Profile</p>
              </div>
            </div>

            {/* <Menu>
                <MenuButton>
                  <HiMenu size={28} className="lg:ml-3" />
                  <p className=" ml-4 hidden lg:block">More</p>
                </MenuButton>
                <MenuList>
                  <MenuItem icon={<IoSettingsOutline />}>Settings</MenuItem>
                  <MenuItem icon={<BiBookmark />}>Saved</MenuItem>
                  <MenuItem icon={<IoMoonOutline />}>
                    Switch Appearance
                  </MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu> */}
            <Menu isLazy>
              <MenuButton>
                <div className="flex items-center cursor-pointer  w-12 h-12 justify-center lg:justify-start lg:w-56 lg:py-2 hover:bg-gray-50 rounded-full">
                  <HiMenu size={28} className="lg:ml-3" />
                  <p className=" ml-4 hidden lg:block">More</p>
                </div>
              </MenuButton>
              <MenuList>
                {/* MenuItems are not rendered unless Menu is open */}

                <MenuItem>Settings</MenuItem>
                <MenuItem>Saved</MenuItem>
                <MenuItem>Switch Appearance</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>

        <main className="ml-20 w-full">{children}</main>
      </div>
    </>
  );
};

export default Sidebar;
