import React, { useContext, useState } from "react";
import { Avatar, Text, useMantineColorScheme, Image } from "@mantine/core";
import { GrClose } from "react-icons/gr";
import { ApplicationContext } from "@/context/ApplicationContext";

const CreatePostModel = () => {
  const { handleCloseCreatePostModal, imgUrl, uploadImage } =
    useContext(ApplicationContext);
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const [upload, setUpload] = useState(false);

  const handleUploadMedia = (e) => {
    e.preventDefault();
    uploadImage(e.target.files[0]);
    console.log(imgUrl);
  };

  return (
    <>
      <div className="container h-full md:h-[500px] flex flex-col gap-4">
        {/* Modal headers  */}
        <div className="w-full flex items-start justify-between relative">
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
        {upload ? (
          <div
            className={`h-full  flex flex-col-reverse md:flex-row items-center gap-2 overflow-hidden `}
          >
            <div className="h-full flex-1">
              <Image
                src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww&w=1000&q=80"
                alt=""
                // height={500}
                // width={400}
              />
              <div className=" mt-2 w-full md:hidden flex items-center justify-center ">
                <button
                  type="button"
                  className={`${
                    dark ? " bg-[#2680eb]" : "bg-[#4cb5f9]"
                  } text-white  rounded-md py-2 px-5 text-sm font-semibold w-full`}
                >
                  <span>Post</span>
                </button>
              </div>
            </div>
            <div className=" w-full flex-1 flex  md:flex-col justify-between items-start h-full">
              <div className="w-full">
                <label
                  For="about"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Write a caption
                </label>
                <div className="mt-2 w-full">
                  <textarea
                    id="caption"
                    name="caption"
                    rows={6}
                    className={`block ps-3 w-full rounded-md py-1.5 ${
                      dark
                        ? "border-0 bg-[#222326] text-gray-400"
                        : "bg-gray-100 text-gray-900"
                    }shadow-sm focus:ring-0 sm:text-sm sm:leading-6 outline-none`}
                  />
                </div>
              </div>
              <div className="w-full hidden md:flex items-center justify-end ">
                <button
                  type="button"
                  className={`${
                    dark ? " bg-[#2680eb]" : "bg-[#4cb5f9]"
                  } text-white  rounded-md py-2 px-5 text-sm font-semibold `}
                >
                  <span>Post</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="mt-4 h-full w-full flex flex-col gap-3 items-center justify-between overflow-hidden">
              <div>
                <Image
                  src="https://res.cloudinary.com/dewu8pifs/image/upload/v1693860806/Image-folder-removebg-preview_mnssmi.png"
                  alt=""
                  // height={400}
                  // width={400}
                />
              </div>
              {/* <button
                type="button"
                className={`${
                  dark ? " bg-[#2680eb]" : "bg-[#4cb5f9]"
                } text-white mx-auto rounded-md py-2 px-3 text-sm font-semibold`}
                onClick={() => setUpload(true)}
              >
                <span>Upload Media</span>
              </button> */}

              <label
                for="imageInput"
                class={`cursor-pointer rounded-md py-2 px-3 text-sm font-semibold text-white ${
                  dark
                    ? " bg-[#2680eb] hover:bg-[#4cb5f9]"
                    : "bg-[#4cb5f9] hover:bg-[#2680eb]"
                } `}
              >
                <span> Upload Media</span>
              </label>
              {/* <!-- Hidden Input Element to Trigger Image Selection Dialog --> */}
              <input
                id="imageInput"
                type="file"
                accept="image/*"
                className="cursor-pointer hidden"
                name="photo"
                onChange={(e) => handleUploadMedia(e)}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CreatePostModel;
