import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { useMantineColorScheme, Avatar, Button } from "@mantine/core";

const EditProfile = () => {
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
            <h2 className="text-lg font-semibold leading-">Edit Profile</h2>
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
                  <Avatar
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                    size={80}
                    radius={120}
                  />
                  <Button
                    variant={`${dark ? "filled" : "default"}`}
                    color={`${dark ? "dark" : ""}`}
                    radius="md"
                    className={`${
                      dark ? "bg-[#363636] hover:bg-[#313131]" : "bg-gray-100"
                    }`}
                  >
                    Upload
                  </Button>
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
                      dark ? "border-gray-500 bg-[#222326]" : "border bg-white"
                    }  sm:max-w-md`}
                  >
                    <span className="flex select-none items-center pl-3  sm:text-sm">
                      E.g.
                    </span>
                    <input
                      type="text"
                      name="role"
                      id="role"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1  focus:ring-0 sm:text-sm sm:leading-6 outline-none"
                      placeholder="Software Developer"
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
                    className={`block w-full rounded-md py-1.5 ${
                      dark
                        ? "border-0 bg-[#222326] text-gray-400"
                        : "border-gray-400 bg-white text-gray-900"
                    }shadow-sm focus:ring-0 sm:text-sm sm:leading-6 outline-none`}
                    defaultValue={
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
                    dark ? "border-gray-500 bg-[#222326]" : "border bg-white"
                  }`}
                >
                  <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1  focus:ring-0 sm:text-sm sm:leading-6 outline-none"
                    placeholder="John Doe"
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
                    className={`block w-full rounded-md border-0 py-1.5 shadow-sm focus:ring-0 sm:text-sm sm:leading-6 outline-none ${
                      dark ? "border-gray-500 bg-[#222326]" : "border bg-white"
                    }`}
                    placeholder="johnDoe@example.com"
                  />
                </div>
              </div>

              <div className="sm:col-span-3"></div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditProfile;
