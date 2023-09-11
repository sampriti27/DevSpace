import React, { useContext, useState } from "react";
import { BiBookmark } from "react-icons/bi";
import { BsSend, BsBookmarkCheckFill } from "react-icons/bs";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx";
import { FcLike } from "react-icons/fc";
import { formatDistanceToNow } from "date-fns";

import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import PostDetails from "./PostDetails";
import {
  createStyles,
  Card,
  ActionIcon,
  Group,
  Text,
  Image,
  Avatar,
  Modal,
  useMantineColorScheme,
  ScrollArea,
  Button,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    width: "100%",
    // boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
    borderRadius: theme.spacing.xs,
    marginBottom: theme.spacing.sm,
  },

  imageWrapper: {
    // borderRadius: theme.spacing.xs,
    overflow: "hidden",
    marginTop: theme.spacing.xs,
    width: "100%",
  },

  authorInfo: {
    display: "flex",
    alignItems: "center",
  },

  authorText: {
    marginLeft: theme.spacing.sm,
  },

  icons: {
    padding: `${theme.spacing.xs} ${theme.spacing.lg}`,
  },
  commentInput: {
    width: "100%",
    padding: theme.spacing.sm,

    borderRadius: theme.radius.sm,
    fontSize: theme.fontSizes.sm,
    outline: "none",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
  },
}));

const PostCardFeed = ({ elem }) => {
  const { classes } = useStyles();
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const [showFullCaption, setShowFullCaption] = useState(false);
  const toggleCaption = () => {
    setShowFullCaption(!showFullCaption);
  };
  const [like, setLike] = useState(false);
  const [save, setSave] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const [openLikeModal, setOpenLikeModal] = useState(false);
  const isMobile = useMediaQuery("(max-width: 50em)");

  const handleCloseLikeModal = () => {
    setOpenLikeModal(false);
  };

  const formattedRelativeTime = formatDistanceToNow(new Date(elem?.createdAt), {
    addSuffix: true,
  });
  const content = Array(100)
    .fill(0)
    .map((_, index) => (
      <div key={index} className="flex items-center justify-between mb-4">
        <div className={classes.authorInfo}>
          <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-xnGLZJFli6FRyXSlm8-QnpJb9hh30HffEA&usqp=CAU"
            radius="xl"
          />
          <div className={classes.authorText}>
            <div className="flex gap-1 items-center text-xs">
              <Text fw={600}>Allen._23</Text>

              <Text
                fw={400}
                fz="sm"
                c="dimmed"
                className="flex items-center"
              ></Text>
            </div>
            <Text fz="xs" c="dimmed">
              Ash Allen
            </Text>
          </div>
        </div>
        <div>
          <Button variant="filled" size="xs" className=" bg-[#0095f6]">
            Follow
          </Button>
        </div>
      </div>
    ));

  return (
    <Card padding="xs" radius="xs" className={classes.card}>
      <div className={classes.authorInfo}>
        <Avatar src={elem?.userId.photo} radius="xl" />
        <div className={classes.authorText}>
          <div className="flex gap-1 items-center">
            <Text fw={600}>{elem?.userId.username}</Text>

            <Text fw={400} fz="sm" c="dimmed" className="flex items-center">
              <RxDotFilled size={"0.75rem"} color="gray" />
              {formattedRelativeTime}
            </Text>
          </div>
          <Text fz="xs" c="dimmed">
            {elem?.userId.role}
          </Text>
        </div>
      </div>

      <div className={classes.imageWrapper}>
        <Image src={elem.postImage} alt="image" fit="contain" />
      </div>
      <Card.Section className={classes.icons}>
        <Group position="apart" style={{ justifyContent: "space-between" }}>
          <Group spacing="md">
            {like ? (
              <ActionIcon>
                <FcLike size="1.5rem" onClick={() => setLike(!like)} />
              </ActionIcon>
            ) : (
              <ActionIcon>
                <FaRegHeart size="1.5rem" onClick={() => setLike(!like)} />
              </ActionIcon>
            )}
            <ActionIcon>
              <FaRegComment size="1.5rem" />
            </ActionIcon>
            <ActionIcon>
              <BsSend size="1.5rem" />
            </ActionIcon>
          </Group>
          {save ? (
            <ActionIcon>
              <BsBookmarkCheckFill
                size="1.5rem"
                color={dark ? "gray" : "black"}
                onClick={() => setSave(!save)}
              />
            </ActionIcon>
          ) : (
            <ActionIcon>
              <BiBookmark size="1.5rem" onClick={() => setSave(!save)} />
            </ActionIcon>
          )}
        </Group>
      </Card.Section>
      <div
        className="flex items-center my-2 cursor-pointer"
        onClick={() => setOpenLikeModal(true)}
      >
        <p className="text-sm">
          Liked by {""}
          <span className="font-semibold">_.sampriti._27</span> and{" "}
          <span className="font-semibold">12 others</span>
        </p>
      </div>

      {elem.postCaption && (
        <div className="flex items-center">
          <p className="">
            <span className="font-semibold text-sm">
              {elem?.userId.username}
            </span>{" "}
            &nbsp;
            {showFullCaption ? (
              elem.postCaption
            ) : (
              <>
                {elem.postCaption.slice(0, 100)}{" "}
                <span
                  className="text-sm cursor-pointer"
                  onClick={toggleCaption}
                >
                  ...
                </span>
                <br />
                <span
                  className="text-gray-400 text-sm cursor-pointer mb-5"
                  onClick={toggleCaption}
                >
                  More
                </span>
              </>
            )}
          </p>
        </div>
      )}
      <div className="flex items-center my-2 cursor-pointer">
        <p className="text-sm text-gray-400" onClick={open}>
          {" "}
          View all <span>5</span> comments
        </p>
      </div>
      <div className={`w-full ${dark ? "border-none" : "border-b-2"} mt-5`}>
        <input
          type="text"
          className={classes.commentInput}
          placeholder="Write a comment..."
        />
      </div>
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        fullScreen={isMobile}
        size="80%"
        transitionProps={{
          transition: "fade",
          duration: 300,
          timingFunction: "linear",
        }}
        style={{ maxHeight: "90vh", overflow: "hidden" }}
      >
        <PostDetails elem={elem} onClose={close} />
      </Modal>
      <Modal
        opened={openLikeModal}
        onClose={handleCloseLikeModal}
        // closeOnClickOutside={true}
        size="sm"
        withCloseButton={false}
        styles={{
          body: {
            display: "flex",
            flexDirection: "column",
            maxHeight: "300px",
          },
        }}
      >
        <div className="font-semibold m-auto">Likes</div>

        <ScrollArea
          scrollY
          maxHeight="calc(100% - 60px)" // Subtract the header's height from the modal's height
          className="mt-4"
          style={{ overflowY: "auto" }}
        >
          {content}
        </ScrollArea>
      </Modal>
    </Card>
  );
};

export default PostCardFeed;
