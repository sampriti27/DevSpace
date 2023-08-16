import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { BiBookmark } from "react-icons/bi";
import { BsSend, BsBookmarkCheckFill } from "react-icons/bs";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import {
  createStyles,
  Image,
  Text,
  useMantineColorScheme,
  Avatar,
  ActionIcon,
  Group,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
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
const PostDetails = () => {
  const { classes, theme } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [like, setLike] = useState(false);
  const [save, setSave] = useState(false);
  const dark = colorScheme === "dark";
  return (
    <div className={`flex flex-col sm:flex-row items-start gap-2`}>
      <div className=" flex-1">
        <Image
          src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww&w=1000&q=80"
          alt=""
        />
      </div>
      <div className="flex-1">
        {/* header starts */}
        <div className="">
          <div className="flex items-center justify-between ">
            <div className="flex items-center justify-between ">
              <div className={classes.authorInfo}>
                <Avatar
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  radius="xl"
                />
                <div className={classes.authorText}>
                  <div className="flex gap-1 items-center">
                    <Text fw={600}>@John_Doe</Text>

                    <Text
                      fw={400}
                      fz="sm"
                      c="dimmed"
                      className="flex items-center"
                    ></Text>
                  </div>
                  <Text fz="xs" c="dimmed">
                    Software Engneer
                  </Text>
                </div>
              </div>
            </div>
            <BsThreeDots />
          </div>
          <div className="w-full px-2 mt-2 border border-gray-100 h-0"></div>
        </div>
        {/* header ends */}
        <div className="flex flex-col justify-between h-full">
          <div>
            {/* caption */}
            <div className="mt-4">
              <div className="flex items-start gap-3">
                <Avatar
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  radius="xl"
                />
                <div>
                  <p className="text-sm">
                    <span className="font-semibold text-sm">@John_Doe</span>{" "}
                    &nbsp; 😎😎😎 DevSpace provides a dedicated space for
                    developers to connect with their community, showcase their
                    skills, and engage in meaningful discussions,I am really
                    enjoying it
                  </p>
                  <Text
                    fw={400}
                    fz="xs"
                    c="dimmed"
                    className="flex items-center mt-2"
                  >
                    1d
                  </Text>
                </div>
              </div>
            </div>

            {/* Comments  */}

            <div className="mt-2">
              <div className="flex items-start gap-3">
                <Avatar
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-xnGLZJFli6FRyXSlm8-QnpJb9hh30HffEA&usqp=CAU"
                  radius="xl"
                />
                <div>
                  <p className="text-sm">
                    <span className="font-semibold text-sm">@Allen._23</span>{" "}
                    &nbsp; Great Going bro !
                  </p>
                  <Text
                    fw={400}
                    fz="xs"
                    c="dimmed"
                    className="flex items-center mt-2"
                  >
                    5h
                  </Text>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div className="flex items-start gap-3">
                <Avatar
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-xnGLZJFli6FRyXSlm8-QnpJb9hh30HffEA&usqp=CAU"
                  radius="xl"
                />
                <div>
                  <p className="text-sm">
                    <span className="font-semibold text-sm">@Allen._23</span>{" "}
                    &nbsp; Great Going bro !
                  </p>
                  <Text
                    fw={400}
                    fz="xs"
                    c="dimmed"
                    className="flex items-center mt-2"
                  >
                    5h
                  </Text>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div className="flex items-start gap-3">
                <Avatar
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-xnGLZJFli6FRyXSlm8-QnpJb9hh30HffEA&usqp=CAU"
                  radius="xl"
                />
                <div>
                  <p className="text-sm">
                    <span className="font-semibold text-sm">@Allen._23</span>{" "}
                    &nbsp; Great Going bro !
                  </p>
                  <Text
                    fw={400}
                    fz="xs"
                    c="dimmed"
                    className="flex items-center mt-2"
                  >
                    5h
                  </Text>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div className="flex items-start gap-3">
                <Avatar
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-xnGLZJFli6FRyXSlm8-QnpJb9hh30HffEA&usqp=CAU"
                  radius="xl"
                />
                <div>
                  <p className="text-sm">
                    <span className="font-semibold text-sm">@Allen._23</span>{" "}
                    &nbsp; Great Going bro !
                  </p>
                  <Text
                    fw={400}
                    fz="xs"
                    c="dimmed"
                    className="flex items-center mt-2"
                  >
                    5h
                  </Text>
                </div>
              </div>
            </div>
          </div>

          {/* icons and add comment section  */}
          <div className="">
            <div className={classes.icons}>
              <Group
                position="apart"
                style={{ justifyContent: "space-between" }}
              >
                <Group spacing="md">
                  {like ? (
                    <ActionIcon>
                      <FcLike size="1.5rem" onClick={() => setLike(!like)} />
                    </ActionIcon>
                  ) : (
                    <ActionIcon>
                      <FaRegHeart
                        size="1.5rem"
                        onClick={() => setLike(!like)}
                      />
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
            </div>
            <div className="flex items-center px-6">
              <p className="text-sm">
                Liked by {""}
                <span className="font-semibold">_.sampriti._27</span> and{" "}
                <span className="font-semibold">12 others</span>
              </p>
            </div>
            <div
              className={`w-full ${dark ? "border-none" : "border-b-2"} mt-5`}
            >
              <input
                type="text"
                className={classes.commentInput}
                placeholder="Write a comment..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
