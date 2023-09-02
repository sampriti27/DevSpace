import React, { useContext } from "react";
import { Tabs } from "@mantine/core";
import { BsGrid3X3 } from "react-icons/bs";
import { BiBookmark } from "react-icons/bi";
import { useMantineColorScheme, Modal } from "@mantine/core";
import PostGrid from "../post/display/PostGrid";
import { ApplicationContext } from "@/context/ApplicationContext";
import CreatePostModel from "../post/createPost/CreatePostModel";

const ProfileBody = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { openCreatePostModal, handleCloseCreatePostModal } =
    useContext(ApplicationContext);
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

export default ProfileBody;
