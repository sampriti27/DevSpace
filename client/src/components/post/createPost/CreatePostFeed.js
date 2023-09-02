import React, { useContext } from "react";
import { MdPhoto } from "react-icons/md";
import { PiVideoFill } from "react-icons/pi";
import { AiFillSchedule } from "react-icons/ai";
import { TextInput, Avatar, useMantineColorScheme } from "@mantine/core";
import { ApplicationContext } from "@/context/ApplicationContext";
import { Modal } from "@mantine/core";
import CreatePostModel from "./CreatePostModel";

const CreatePostFeed = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const {
    userData,
    openCreatePostModal,
    setOpenCreatePostModal,
    handleCloseCreatePostModal,
  } = useContext(ApplicationContext);

  return (
    <>
      <div
        className={` w-full  h-36 relative ${
          dark
            ? "bg-[#1A1B1E] text-white border-slate-50"
            : "bg-white text-black border"
        }  flex items-center sm:justify-between rounded-xl mt-0`}
      >
        {/* NEW Layout */}

        <div
          className="w-full  px-5"
          onClick={() => setOpenCreatePostModal(true)}
        >
          <div className="flex justify-between items-center">
            <div className="w-8 sm:w-12">
              <Avatar src={userData?.photo} size={80} radius={120} mx="auto" />
            </div>
            <div className="w-3/4 ml-4">
              <TextInput
                radius="xl"
                size="md"
                placeholder="Start Post"
                disabled
                rightSectionWidth={42}
              />

              <div className="mt-4 flex items-center justify-between gap-2">
                <div
                  className={`flex items-center h-10 justify-center  w-28   ${
                    dark ? "border-gray-100" : "border"
                  } rounded-full cursor-pointer`}
                >
                  <MdPhoto size={20} color="green" />
                  <p className=" ml-2 lg:ml-4 lg:text-sm text-xs">Photo</p>
                </div>
                <div
                  className={`flex items-center h-10 justify-center  w-28   ${
                    dark ? "border-gray-100" : "border"
                  } rounded-full cursor-pointer`}
                >
                  <PiVideoFill size={20} color="blue" />
                  <p className="  ml-2 lg:ml-4 lg:text-sm text-xs">Video</p>
                </div>
                <div
                  className={`flex items-center h-10 justify-center  w-28   ${
                    dark ? "border-gray-100" : "border"
                  } rounded-full cursor-pointer`}
                >
                  <AiFillSchedule size={20} color="orange" />
                  <p className=" ml-2 lg:ml-4 lg:text-sm text-xs ">Schedule</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        opened={openCreatePostModal}
        onClose={handleCloseCreatePostModal}
        withCloseButton={false}
        size="50%"
        transitionProps={{
          transition: "fade",
          duration: 300,
          timingFunction: "linear",
        }}
      >
        <CreatePostModel />
      </Modal>
    </>
  );
};

export default CreatePostFeed;
