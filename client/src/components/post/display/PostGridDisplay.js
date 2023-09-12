import React, { useState } from "react";
import { Modal, Image } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { useMantineColorScheme } from "@mantine/core";
import PostDetails from "./PostDetails";

const PostGridDisplay = ({ elem }) => {
  const { colorScheme } = useMantineColorScheme();
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery("(max-width: 50em)");
  const dark = colorScheme === "dark";

  return (
    <>
      <div
        className={`overflow-hidden cursor-pointer ${
          dark ? "border border-gray-700" : "border"
        } h-full w-full flex items-center justify-center`}
      >
        <Image src={elem?.postImage} alt="img" onClick={open} fit="cover" />
        <Modal
          opened={opened}
          onClose={close}
          withCloseButton={false}
          size="80%"
          fullScreen={isMobile}
          transitionProps={{ transition: "fade", duration: 200 }}
        >
          <PostDetails onClose={close} elem={elem} options={true} />
        </Modal>
      </div>
    </>
  );
};

export default PostGridDisplay;
