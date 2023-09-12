import React, { useContext } from "react";
import EditProfile from "./EditProfile";
import {
  useMantineColorScheme,
  Drawer,
  Button,
  Group,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ApplicationContext } from "@/context/ApplicationContext";

const ProfileInfo = ({ userPosts }) => {
  const { userData } = useContext(ApplicationContext);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [opened, { open, close }] = useDisclosure(false);
  const dark = colorScheme === "dark";

  return (
    <>
      <div
        className={` w-[450px]  px-4 ${
          dark ? "bg-[#1A1B1E] text-gray-100" : "bg-white text-black"
        } flex flex-col items-start`}
      >
        <div className="flex items-center justify-start gap-3">
          <div className={`text-lg font-`}>{userData?.username} </div>
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
          <div className="flex items-center gap-2">
            <Text className="font-medium">50</Text>
            <Text size="md">Followers</Text>
          </div>
          <div className="flex items-center gap-2">
            <Text className="font-medium">{userPosts.length}</Text>
            <Text size="md">Posts</Text>
          </div>
          <div className="flex items-center gap-2">
            <Text className="font-medium">75</Text>
            <Text size="md">Likes</Text>
          </div>
        </div>
        <div className="mt-4 flex flex-col">
          <p className="text-base font-medium tracking-tight">
            {userData?.name}
          </p>
          <span
            className={`${
              dark ? "" : "text-gray-700"
            } font-normal text-xs mt-0`}
          >
            {userData?.role}
          </span>
        </div>
        <div className="mt-2">
          <p className="font-light text-sm">{userData?.bio}</p>
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
        <EditProfile onClose={close} />
      </Drawer>
    </>
  );
};

export default ProfileInfo;
