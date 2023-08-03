import React from "react";

import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { BiBookmark } from "react-icons/bi";
import { BsSend } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";

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
    width: "80%",
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
    borderRadius: theme.spacing.xs,
    marginBottom: theme.spacing.sm,
  },

  imageWrapper: {
    borderRadius: theme.spacing.xs,
    overflow: "hidden",
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

  caption: {
    fontSize: theme.fontSizes.sm,
    marginTop: theme.spacing.xs,
    marginBottom: theme.spacing.sm,
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

const PostCardFeed = ({ image, category, title, footer, author, caption }) => {
  const { classes, theme } = useStyles();
  return (
    <Card withBorder padding="xs" radius="xs" className={classes.card}>
      <div className={classes.imageWrapper}>
        <Image
          src="https://st4.depositphotos.com/4678277/28801/i/450/depositphotos_288019916-stock-photo-profile-side-view-of-his.jpg"
          alt={title}
        />
      </div>
      <Card.Section className={classes.icons}>
        <Group position="apart" style={{ justifyContent: "space-between" }}>
          <Group spacing="sm">
            <ActionIcon>
              <AiOutlineHeart size="2rem" />
            </ActionIcon>
            <ActionIcon>
              <FaRegComment size="2rem" />
            </ActionIcon>
            <ActionIcon>
              <BsSend size="2rem" />
            </ActionIcon>
          </Group>
          <ActionIcon>
            <BiBookmark size="2rem" />
          </ActionIcon>
        </Group>
      </Card.Section>

      <div className={classes.authorInfo}>
        <Avatar
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          radius="sm"
        />
        <div className={classes.authorText}>
          <Text fw={600}>{author.name}</Text>
          <Text fz="xs" c="dimmed">
            {author.description}
          </Text>
        </div>
      </div>
      {caption && <Text className={classes.caption}>{caption}</Text>}

      <input
        type="text"
        className={classes.commentInput}
        placeholder="Write a comment..."
      />
    </Card>
  );
};

export default PostCardFeed;
