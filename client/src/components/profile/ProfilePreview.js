import {
  UnstyledButton,
  Group,
  Avatar,
  Text,
  createStyles,
} from "@mantine/core";
import React from "react";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  user: {
    display: "block",
    width: "100%",
    // padding: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
  },
}));

const ProfilePreview = ({ name, username }) => {
  const { classes } = useStyles();

  return (
    <Link href="/profile">
      <UnstyledButton className={classes.user}>
        <Group spacing="xs" align="center">
          <Avatar
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            radius="xl"
          />

          <div style={{ flex: 1 }}>
            <Text size="md" weight={500}>
              {name}
            </Text>

            <Text color="dimmed" size="sm">
              {username}
            </Text>
          </div>

          <p className="text-sm font-medium hidden lg:block text-[#2596be] ml-4 lg:ml-10 hover:underline hover:underline-offset-2">
            view
          </p>
        </Group>
      </UnstyledButton>
    </Link>
  );
};

export default ProfilePreview;
