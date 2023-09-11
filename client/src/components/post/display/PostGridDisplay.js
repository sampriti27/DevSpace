import React, { useState } from "react";
import { Modal, Image } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import PostDetails from "./PostDetails";

const PostGridDisplay = ({ elem }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery("(max-width: 50em)");

  return (
    <>
      <div className=" overflow-hidden cursor-pointer border h-full w-full flex items-center justify-center">
        <Image src={elem?.postImage} alt="img" onClick={open} />
        <Modal
          opened={opened}
          onClose={close}
          withCloseButton={false}
          size="80%"
          fullScreen={isMobile}
          transitionProps={{ transition: "fade", duration: 200 }}
        >
          <PostDetails onClose={close} elem={elem} />
        </Modal>
      </div>
    </>
  );
};

export default PostGridDisplay;
