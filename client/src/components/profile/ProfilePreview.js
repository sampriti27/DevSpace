import React from "react";
import Link from "next/link";
import { Avatar, Text, Button, Paper } from "@mantine/core";

const ProfilePreview = ({ avatar, name, email, job }) => {
  return (
    <>
      <Paper
        radius="md"
        withBorder
        p="lg"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
        })}
      >
        <Avatar
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          size={120}
          radius={120}
          mx="auto"
        />
        <Text ta="center" fz="lg" weight={500} mt="md">
          {name}
        </Text>
        <Text ta="center" c="dimmed" fz="sm">
          {email} • {job}
        </Text>
        <Link href="/profile">
          <Button variant="default" fullWidth mt="md">
            View Profile
          </Button>
        </Link>
      </Paper>
    </>
  );
};

export default ProfilePreview;
