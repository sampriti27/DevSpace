import React, { useState } from "react";
import { Modal, Image } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import PostDetails from "./PostDetails";

const PostGridDisplay = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery("(max-width: 50em)");

  return (
    <>
      <div className="h-full w-full overflow-hidden cursor-pointer">
        <Image
          src="https://st4.depositphotos.com/4678277/28801/i/450/depositphotos_288019916-stock-photo-profile-side-view-of-his.jpg"
          alt="img"
          onClick={open}
        />
        <Modal
          opened={opened}
          onClose={close}
          size="80%"
          fullScreen={isMobile}
          transitionProps={{ transition: "fade", duration: 200 }}
        >
          <PostDetails />
        </Modal>
      </div>
    </>
  );
};

export default PostGridDisplay;
