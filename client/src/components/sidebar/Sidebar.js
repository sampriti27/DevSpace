import React, { useContext, useEffect } from "react";
import { AiFillHome, AiOutlineHeart } from "react-icons/ai";
import { FiSearch, FiPlusSquare } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";
import { useRouter } from "next/router";
import { BiBookmark } from "react-icons/bi";
import { BsMoon, BsSun } from "react-icons/bs";
import { CiSettings, CiLogout } from "react-icons/ci";
import Link from "next/link";
import { Menu } from "@mantine/core";
import { Avatar, useMantineColorScheme } from "@mantine/core";
import { ApplicationContext } from "@/context/ApplicationContext";

const Sidebar = ({ children }) => {
  const { userData, setIsModalOpen } =
    useContext(ApplicationContext);
  const router = useRouter();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const handleSignout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  const handleTheme = () => {
    toggleColorScheme();
  };

  return (
    <>
      {/* Desktop and laptop view  */}
      <div className="hidden sm:flex">
        <div
          className={`relative w-20 lg:w-64 lg:relative h-screen p-4  flex flex-col justify-between pl-4 ${dark
            ? "bg-[#1A1B1E] text-white border-r  border-gray-600"
            : "bg-white text-black border-r-[1px]"
            }`}
        >
          <Link href="/feed">
            <div className="logo text-3xl font-bold cursor-pointer px-2 hidden lg:block">
              DevSpace
            </div>
            <div className="logo text-2xl font-bold cursor-pointer px-2 block lg:hidden">
              DS
            </div>
          </Link>
          <div className="flex flex-col justify-between h-[600px]">
            <div className="flex flex-col items-start gap-5 mb-20">
              <Link href="/feed">
                <div
                  className={`flex items-center w-12 h-12 justify-center lg:justify-start lg:w-56 lg:py-2 ${dark ? "hover:bg-[#25262B]" : "hover:bg-gray-50"
                    } rounded-full cursor-pointer`}
                >
                  <div
                    className="tooltip tooltip-right block lg:hidden"
                    data-tip="Home"
                  >
                    <AiFillHome size={28} className="lg:ml-3" />
                  </div>
                  <AiFillHome size={28} className="  hidden lg:block lg:ml-3" />
                  <p className=" ml-4 hidden lg:block">Home</p>
                </div>
              </Link>
              <div
                className={`flex items-center w-12 h-12 justify-center lg:justify-start lg:w-56 lg:py-2 ${dark ? "hover:bg-[#25262B]" : "hover:bg-gray-50"
                  } rounded-full cursor-pointer`}
              >
                <div
                  className="tooltip tooltip-right block lg:hidden"
                  data-tip="Search"
                >
                  <FiSearch size={28} className="lg:ml-3" />
                </div>
                <FiSearch size={28} className="lg:ml-3  hidden lg:block" />
                <p className=" ml-4 hidden lg:block">Search</p>
              </div>
              <div
                className={`flex items-center w-12 h-12 justify-center lg:justify-start lg:w-56 lg:py-2 ${dark ? "hover:bg-[#25262B]" : "hover:bg-gray-50"
                  } rounded-full cursor-pointer`}
              >
                <div
                  className="tooltip tooltip-right block lg:hidden"
                  data-tip="Notification"
                >
                  <AiOutlineHeart size={28} className="lg:ml-3" />
                </div>
                <AiOutlineHeart
                  size={28}
                  className="lg:ml-3  hidden lg:block"
                />
                <p className=" ml-4 hidden lg:block">Notification</p>
              </div>
              <div
                className={`flex items-center w-12 h-12 justify-center lg:justify-start lg:w-56 lg:py-2 ${dark ? "hover:bg-[#25262B]" : "hover:bg-gray-50"
                  } rounded-full cursor-pointer`}
                onClick={() => setIsModalOpen(true)}
              >
                <div
                  className="tooltip tooltip-right block lg:hidden"
                  data-tip="Create"
                >
                  <FiPlusSquare size={28} className="lg:ml-3" />
                </div>
                <FiPlusSquare size={28} className="lg:ml-3  hidden lg:block" />
                <p className=" ml-4 hidden lg:block">Create</p>
              </div>
              <Link href="/profile">
                <div
                  className={`flex items-center w-12 h-12 justify-center lg:justify-start lg:w-56 lg:py-2 ${dark ? "hover:bg-[#25262B]" : "hover:bg-gray-50"
                    } rounded-full cursor-pointer`}
                >
                  <div
                    className="tooltip tooltip-right block lg:hidden"
                    data-tip="Profile"
                  >
                    <Avatar
                      size="sm"
                      src={userData?.photo}
                      className="lg:ml-3"
                      radius={120}
                    />
                  </div>
                  <Avatar
                    className="lg:ml-3  hidden lg:block"
                    src={userData?.photo}
                    size="sm"
                    radius={120}
                  />
                  <p className=" ml-4 hidden lg:block">Profile</p>
                </div>
              </Link>
            </div>

            <div>
              <Menu shadow="md" width={200}>
                <Menu.Target>
                  <div
                    className={`flex items-center w-12 h-12 justify-center lg:justify-start lg:w-56 lg:py-2 ${dark ? "hover:bg-[#25262B]" : "hover:bg-gray-50"
                      } rounded-full cursor-pointer`}
                  >
                    <div
                      className="tooltip tooltip-right block lg:hidden"
                      data-tip="More"
                    >
                      <HiMenu size={28} className="lg:ml-3" />
                    </div>
                    <HiMenu size={28} className="lg:ml-3  hidden lg:block" />
                    <p className=" ml-4 hidden lg:block">More</p>
                  </div>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Item icon={<CiSettings size={14} />}>
                    Settings
                  </Menu.Item>
                  <Menu.Item icon={<BiBookmark size={14} />}>Saved</Menu.Item>
                  <Menu.Item
                    onClick={() => toggleColorScheme()}
                    icon={dark ? <BsSun size={14} /> : <BsMoon size={14} />}
                  >
                    Switch Appearance
                  </Menu.Item>

                  <Menu.Divider />

                  <Menu.Item
                    icon={<CiLogout size={14} />}
                    onClick={handleSignout}
                  >
                    Logout
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </div>
          </div>
        </div>

        <main className="w-screen">{children}</main>
      </div>

      {/* Phone view  */}
      <div className="sm:hidden block">
        <div className="flex flex-col-reverse h-screen ">
          <main>{children}</main>

          <div
            className={`fixed w-full h-16 p-4 ${dark
              ? "bg-[#1A1B1E] text-white border-slate-50"
              : "bg-white text-black border-t-[2px]"
              }  flex  px-8 items-center justify-between`}
          >
            <Link href="/feed">
              <div
                className={`flex items-center w-12 h-12 justify-center${dark ? "hover:bg-[#25262B]" : " hover:bg-gray-50"
                  } rounded-full cursor-pointer`}
              >
                <AiFillHome size={28} />
              </div>
            </Link>
            <div
              className={`flex items-center w-12 h-12 justify-center${dark ? "hover:bg-[#25262B]" : " hover:bg-gray-50"
                } rounded-full cursor-pointer`}
            >
              <FiSearch size={28} />
            </div>
            <div
              className={`flex items-center w-12 h-12 justify-center${dark ? "hover:bg-[#25262B]" : " hover:bg-gray-50"
                } rounded-full cursor-pointer`}
              onClick={() => setIsModalOpen(true)}
            >
              <FiPlusSquare size={28} />
            </div>
            <Link href="/profile">
              <div
                className={`flex items-center w-12 h-12 justify-center${dark ? "hover:bg-[#25262B]" : " hover:bg-gray-50"
                  } rounded-full cursor-pointer`}
              >
                <Avatar
                  size="sm"
                  src={userData?.photo}
                  radius={120}
                  className="lg:ml-3 "
                />
              </div>
            </Link>
            <Menu shadow="md" width={200}>
              <Menu.Target>
                <div
                  className={`flex items-center w-12 h-12 justify-center${dark ? "hover:bg-[#25262B]" : " hover:bg-gray-50"
                    } rounded-full cursor-pointer`}
                >
                  <div
                    className="tooltip tooltip-right block lg:hidden"
                    data-tip="More"
                  >
                    <HiMenu size={28} className="lg:ml-3" />
                  </div>
                  <HiMenu size={28} className="lg:ml-3  hidden lg:block" />
                  <p className=" ml-4 hidden lg:block">More</p>
                </div>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item icon={<CiSettings size={14} />}>Settings</Menu.Item>
                <Menu.Item icon={<BiBookmark size={14} />}>Saved</Menu.Item>
                <Menu.Item
                  onClick={handleTheme}
                  icon={dark ? <BsSun size={14} /> : <BsMoon size={14} />}
                >
                  Switch Appearance
                </Menu.Item>

                <Menu.Divider />

                <Menu.Item icon={<CiLogout size={14} />}>Logout</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
