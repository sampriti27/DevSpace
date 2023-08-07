import React, { useState } from "react";
import { useMantineColorScheme } from "@mantine/core";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { BiBookmark } from "react-icons/bi";
import { BsSend } from "react-icons/bs";
import { FaRegComment, FaRegHeart } from "react-icons/fa";

import {
  createStyles,
  Card,
  ActionIcon,
  Group,
  Text,
  Image,
  Avatar,
  Badge,
  rem,
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

const PostCardFeed = ({
  image,
  category,
  title,
  footer,
  author,
  caption,
  postTime,
}) => {
  const { classes, theme } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const [showFullCaption, setShowFullCaption] = useState(false);
  const toggleCaption = () => {
    setShowFullCaption(!showFullCaption);
  };
  return (
    <Card padding="xs" radius="xs" className={classes.card}>
      <div className={classes.authorInfo}>
        <Avatar
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          radius="xl"
        />
        <div className={classes.authorText}>
          <div className="flex gap-2 items-center">
            <Text fw={600}>{author.name}</Text>
            <Text fw={300} fz="sm" c="dimmed">
              {postTime}
            </Text>
          </div>
          <Text fz="xs" c="dimmed">
            {author.description}
          </Text>
        </div>
      </div>

      <div className={classes.imageWrapper}>
        <Image
          src="https://st4.depositphotos.com/4678277/28801/i/450/depositphotos_288019916-stock-photo-profile-side-view-of-his.jpg"
          alt={title}
        />
      </div>
      <Card.Section className={classes.icons}>
        <Group position="apart" style={{ justifyContent: "space-between" }}>
          <Group spacing="md">
            <ActionIcon>
              <FaRegHeart size="1.5rem" />
            </ActionIcon>
            <ActionIcon>
              <FaRegComment size="1.5rem" />
            </ActionIcon>
            <ActionIcon>
              <BsSend size="1.5rem" />
            </ActionIcon>
          </Group>
          <ActionIcon>
            <BiBookmark size="1.5rem" />
          </ActionIcon>
        </Group>
      </Card.Section>
      <div className="flex items-center my-2">
        <p className="text-sm">
          Liked by {""}
          <span className="font-semibold">_.sampriti._27</span> and{" "}
          <span className="font-semibold">others</span>
        </p>
      </div>
      {caption && (
        <div className="flex items-center">
          <p className="">
            <span className="font-bold text-sm">{author.username}</span> &nbsp;
            😎😎😎
            {showFullCaption ? (
              caption
            ) : (
              <>
                {caption.slice(0, 100)}{" "}
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
        <p className="text-sm text-gray-400">
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
    </Card>
  );
};

export default PostCardFeed;
