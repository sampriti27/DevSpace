import {
  UnstyledButton,
  Group,
  Avatar,
  Text,
  createStyles,
} from "@mantine/core";
import React, { useContext } from "react";
import Link from "next/link";
import { ApplicationContext } from "@/context/ApplicationContext";

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
  const { userData } = useContext(ApplicationContext);

  return (
    <Link href="/profile">
      <UnstyledButton className={classes.user}>
        <Group spacing="xs" align="center">
          <Avatar src={userData?.photo} radius="xl" />

          <div style={{ flex: 1 }}>
            <Text size="md" weight={500}>
              {userData?.name}
            </Text>

            <Text color="dimmed" size="sm">
              {userData?.username}
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
