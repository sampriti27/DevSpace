import React from "react";
import {
  UnstyledButton,
  Group,
  Avatar,
  Text,
  createStyles,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  user: {
    display: "block",
    width: "100%",
    // padding: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    marginBottom: theme.spacing.sm,
  },
}));

const FriendProfilePreview = ({ name, src, username, mutualFriendsLength }) => {
  const { classes } = useStyles();

  return (
    <UnstyledButton className={classes.user}>
      <Group spacing="xs" align="center">
        <Avatar src={src} radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="sm" weight={500}>
            {name}
          </Text>

          <Text color="dimmed" size="xs">
            Followed by {username} + {mutualFriendsLength} more
          </Text>
        </div>

        <p className="text-xs font-medium hidden lg:block text-[#2596be] ml-4 lg:ml-10 hover:underline hover:underline-offset-2">
          Follow
        </p>
      </Group>
    </UnstyledButton>
  );
};

export default FriendProfilePreview;
