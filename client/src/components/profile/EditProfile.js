import React, { useContext, useState } from "react";
import { DatePickerInput } from "@mantine/dates";
import { useMantineColorScheme, Avatar, Button } from "@mantine/core";
import { ApplicationContext } from "@/context/ApplicationContext";
import { AiFillEdit } from "react-icons/ai";
import { toast } from "react-toastify";
import axios from "axios";
import { BeatLoader } from "react-spinners";

const EditProfile = ({ onClose }) => {
  const { userData, fetchLoggedUser, loader, setLoader } =
    useContext(ApplicationContext);
  const [editProfileData, setEditProfileData] = useState({
    role: userData?.role || "",
    bio: userData?.bio || "",
    gender: userData?.gender || "",
    dob: userData?.dob || null,
  });
  const _id = userData?._id;

  //submit profile details
  const handleSubmit = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      };
      // console.log(editProfileData);
      setLoader(true);
      const { data } = await axios.put(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/v1/users/update-profile/${_id}`,
        editProfileData,
        config
      );

      // console.log(data);
      fetchLoggedUser();
      setLoader(false);
      toast.success(data.message);
      onClose();
    } catch (error) {
      setLoader(false);
      console.log(error);
    }
  };

  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <>
      <form>
        <div
          className={`space-y-12 ${dark ? "text-gray-200" : "text-gray-900"}`}
        >
          <div
            className={`border-b ${
              dark ? "border-gray-800" : "border-gray-900/10"
            } pb-12`}
          >
            <div className="flex items-center gap-3">
              <h2 className="text-lg font-semibold leading-">Edit Profile</h2>

              <AiFillEdit size={20} />
            </div>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Some information will be visible for public view. Be careful with
              what you share.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium leading-6 "
                >
                  Upload Profile Photo
                </label>
                <div className="mt-2 flex items-center gap-x-3">
                  <Avatar src={userData.photo} size={80} radius={120} />
                  <label
                    for="imageInput"
                    class={`cursor-pointer px-4 py-2 rounded ${
                      dark ? "bg-[#363636] hover:bg-[#313131]" : "bg-gray-100"
                    } `}
                  >
                    Update
                  </label>
                  {/* <!-- Hidden Input Element to Trigger Image Selection Dialog --> */}
                  <input
                    id="imageInput"
                    type="file"
                    class="hidden"
                    accept="image/*"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="role"
                  className="block text-sm font-medium leading-6"
                >
                  Role
                </label>
                <div className="mt-2">
                  <div
                    className={`flex rounded-md shadow-sm  font-thin ${
                      dark ? "border-gray-500 bg-[#222326]" : "bg-gray-100"
                    }  sm:max-w-md`}
                  >
                    <input
                      type="text"
                      name="role"
                      id="role"
                      value={editProfileData.role}
                      onChange={(e) =>
                        setEditProfileData({
                          ...editProfileData,
                          role: e.target.value,
                        })
                      }
                      className={`block placeholder:font-medium ps-3 w-full rounded-md border-0 py-1.5 shadow-sm focus:ring-0 sm:text-sm sm:leading-6 outline-none ${
                        dark ? "border-gray-500 bg-[#222326]" : "bg-gray-100"
                      }`}
                      placeholder="Eg. Software Developer"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6"
                >
                  Bio
                </label>
                <div className="mt-2">
                  <p className="mt-1 mb-3 text-sm leading-6 text-gray-600">
                    Write a few sentences about yourself.
                  </p>
                  <textarea
                    id="bio"
                    name="bio"
                    rows={3}
                    value={editProfileData.bio}
                    onChange={(e) =>
                      setEditProfileData({
                        ...editProfileData,
                        bio: e.target.value,
                      })
                    }
                    className={`block ps-3 w-full rounded-md py-1.5 ${
                      dark
                        ? "border-0 bg-[#222326] text-gray-400"
                        : "bg-gray-100 text-gray-900"
                    }shadow-sm focus:ring-0 sm:text-sm sm:leading-6 outline-none`}
                    placeholder={
                      "👨‍💻 Software Engineer | 🌍 Code Explorer | etc..."
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-lg font-semibold leading-7 ">
              Personal Information
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="full-name"
                  className="block text-sm font-medium leading-6"
                >
                  Full Name
                </label>
                <div
                  className={`mt-2  rounded-md ${
                    dark ? "border-gray-500 bg-[#222326]" : "bg-gray-100"
                  }`}
                >
                  <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    disabled
                    className="block ps-3 flex-1 border-0 bg-transparent py-1.5 pl-1  focus:ring-0 sm:text-sm sm:leading-6 outline-none"
                    placeholder="John Doe"
                    value={userData.name}
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6"
                >
                  Email address
                </label>
                <div className={`mt-2 rounded-md`}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    disabled
                    className={`block ps-3 w-full rounded-md border-0 py-1.5 shadow-sm focus:ring-0 sm:text-sm sm:leading-6 outline-none ${
                      dark ? "border-gray-500 bg-[#222326]" : "bg-gray-100"
                    }`}
                    placeholder="johnDoe@example.com"
                    value={userData.email}
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <div className="text-sm font-medium leading-6">Gender</div>
                <div className="flex justify-start gap-3 mt-2">
                  {/* First radio */}
                  <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      className="relative float-left -ml-[1.5rem]  mt-0.5 h-5 w-5  rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                      type="radio"
                      name="gender"
                      id="male"
                      value="Male"
                      checked={editProfileData.gender === "Male"}
                      onChange={(e) =>
                        setEditProfileData({
                          ...editProfileData,
                          gender: e.target.value,
                        })
                      }
                    />
                    <label
                      className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                      for="inlineRadio1"
                    >
                      Male
                    </label>
                  </div>

                  {/* Second radio */}
                  <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5  rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                      type="radio"
                      name="gender"
                      id="female"
                      value="Female"
                      checked={editProfileData.gender === "Female"}
                      onChange={(e) =>
                        setEditProfileData({
                          ...editProfileData,
                          gender: e.target.value,
                        })
                      }
                    />
                    <label
                      className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                      for="inlineRadio2"
                    >
                      Female
                    </label>
                  </div>

                  {/* Third radio (disabled) */}
                  <div className="mb-[0.125rem] inline-block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5  rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] disabled:opacity-60 dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                      type="radio"
                      name="gender"
                      id="other"
                      value="Other"
                      checked={editProfileData.gender === "Other"}
                      onChange={(e) =>
                        setEditProfileData({
                          ...editProfileData,
                          gender: e.target.value,
                        })
                      }
                    />
                    <label
                      className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                      for="inlineRadio3"
                    >
                      Other
                    </label>
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <p className="block text-sm font-medium leading-6 mb-2">
                  Enter your Birthday
                </p>
                <DatePickerInput
                  placeholder="Pick date"
                  mx="auto"
                  maw={400}
                  styles={{
                    wrapper: {
                      border: "none",
                      borderRadius: "6px",
                      backgroundColor: dark ? "#222326" : "rgb(243, 244, 246)",
                    },
                    input: {
                      border: "none",
                    },
                  }}
                  value={
                    editProfileData.dob ? new Date(editProfileData.dob) : null
                  }
                  onChange={(value) => {
                    if (value instanceof Date) {
                      setEditProfileData({
                        ...editProfileData,
                        dob: value.toISOString(),
                      });
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center mb-4">
            <button
              type="button"
              className={`${
                dark ? " bg-[#2680eb]" : "bg-[#4cb5f9]"
              } text-white mx-auto rounded-md py-2 px-3 text-sm font-semibold `}
              onClick={handleSubmit}
            >
              {loader ? (
                <BeatLoader color="white" />
              ) : (
                <span>Update Details</span>
              )}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditProfile;
