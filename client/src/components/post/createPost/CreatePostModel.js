import React, { useContext } from "react";
import { Avatar, Text, useMantineColorScheme } from "@mantine/core";
import { GrClose } from "react-icons/gr";
import { ApplicationContext } from "@/context/ApplicationContext";
import { MdDiversity2 } from "react-icons/md";

const CreatePostModel = () => {
  const { handleCloseCreatePostModal } = useContext(ApplicationContext);
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <>
      <div className=" container">
        {/* Modal headers  */}
        <div className="w-full flex items-start justify-between">
          <div className="flex items-center">
            <Avatar
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              radius="xl"
            />
            <div className="ml-2">
              <div className="flex gap-1 items-center">
                <Text fw={600}>John Doe</Text>
              </div>
              <Text fz="xs" c="dimmed">
                Software Engineer
              </Text>
            </div>
          </div>

          <GrClose
            className={`cursor-pointer`}
            onClick={handleCloseCreatePostModal}
          />
        </div>

        {/* Modal Body */}
        <div className="mt-4 w-full flex flex-col justify-center items-center">
          <img
            src="https://res.cloudinary.com/dewu8pifs/image/upload/v1693678318/Image-folder-removebg-preview_britfa.png"
            alt="Image by storyset on FreePik"
            className="h-2/3 w-2/3"
            style={{
              "background-blend-mode": "screen",
            }}
          />
          <button
            type="button"
            className={`${
              dark ? " bg-[#2680eb]" : "bg-[#4cb5f9]"
            } text-white mx-auto rounded-md py-2 px-3 text-sm font-semibold `}
          >
            <span>Upload Media</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CreatePostModel;
