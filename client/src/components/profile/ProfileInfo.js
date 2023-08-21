import React from "react";
import EditProfile from "./EditProfile";
import {
  useMantineColorScheme,
  Drawer,
  Button,
  Group,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const ProfileInfo = ({ profileData }) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [opened, { open, close }] = useDisclosure(false);
  const dark = colorScheme === "dark";
  const items = profileData.stats.map((stat) => (
    <div key={stat.label} className="flex items-center gap-2">
      <Text className="font-medium">{stat.value}</Text>
      <Text size="md">{stat.label}</Text>
    </div>
  ));

  return (
    <>
      <div
        className={` w-[450px]  px-4 ${
          dark ? "bg-[#1A1B1E] text-gray-100" : "bg-white text-black"
        } flex flex-col items-start`}
      >
        <div className="flex items-center justify-start gap-3">
          <div className={`text-lg font-`}>{profileData.username} </div>
          <div>
            {" "}
            <Button
              variant={`${dark ? "filled" : "default"}`}
              color={`${dark ? "dark" : ""}`}
              radius="md"
              className={`${
                dark ? "bg-[#363636] hover:bg-[#313131]" : "bg-gray-100"
              }`}
              onClick={open}
            >
              Edit Profile
            </Button>
          </div>
          <div>
            {" "}
            <Button
              variant={`${dark ? "filled" : "default"}`}
              color={`${dark ? "dark" : ""}`}
              radius="md"
              className={`${
                dark ? "bg-[#363636] hover:bg-[#313131]" : "bg-gray-100"
              }`}
            >
              View Archive
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-start gap-8 mt-4">
          {items}
        </div>
        <div className="mt-4 flex flex-col">
          <p className="text-base font-medium tracking-tight">
            {profileData.name}
          </p>
          <span
            className={`${
              dark ? "" : "text-gray-700"
            } font-normal text-xs mt-0`}
          >
            {profileData.job}
          </span>
        </div>
        <div className="mt-2">
          <p className="font-light text-sm">
            👨‍💻 Software Engineer | 🌍 Code Explorer | ☕ Coffee Lover 🎓
            Computer Science Grad | 🚀 Passionate about Tech & Innovation
          </p>
        </div>
      </div>
      <Drawer
        opened={opened}
        onClose={close}
        overlayProps={{ opacity: 0.5, blur: 4 }}
        position="right"
        size="lg"
        withCloseButton={false}
      >
        <EditProfile />
      </Drawer>
    </>
  );
};

export default ProfileInfo;
