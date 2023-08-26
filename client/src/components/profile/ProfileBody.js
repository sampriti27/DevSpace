import React from "react";
import { Tabs } from "@mantine/core";
import { BsGrid3X3 } from "react-icons/bs";
import { BiBookmark } from "react-icons/bi";
import { useMantineColorScheme } from "@mantine/core";
import PostGrid from "../post/display/PostGrid";

const ProfileBody = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <>
      <Tabs defaultValue="posts" color={`${dark ? "gray" : "dark"}`}>
        <Tabs.List position="center">
          <Tabs.Tab icon={<BsGrid3X3 size="0.8rem" />} value="posts">
            POSTS
          </Tabs.Tab>
          <Tabs.Tab icon={<BiBookmark size="0.8rem" />} value="saved">
            SAVED
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="posts" pt="lg">
          <PostGrid />
        </Tabs.Panel>

        <Tabs.Panel value="saved" pt="lg">
          Saved Posts
        </Tabs.Panel>
      </Tabs>
    </>
  );
};

export default ProfileBody;
