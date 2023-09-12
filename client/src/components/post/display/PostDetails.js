import React, { useContext, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { BiBookmark } from "react-icons/bi";
import { BsSend, BsBookmarkCheckFill } from "react-icons/bs";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { AiOutlineClose, AiFillEdit, AiFillDelete } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import {
  createStyles,
  Menu,
  Image,
  Button,
  Text,
  useMantineColorScheme,
  Avatar,
  ActionIcon,
  Group,
} from "@mantine/core";
import { toast } from "react-toastify";
import axios from "axios";
import { ApplicationContext } from "@/context/ApplicationContext";

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

const SmallScreenImage = ({ elem }) => {
  return <Image src={elem?.postImage} alt="" fit="contain" />;
};

const LargeScreenImage = ({ elem }) => {
  return (
    <Image
      src={elem?.postImage}
      alt=""
      className="large-screen-image"
      height={600}
    />
  );
};

const PostDetails = ({ onClose, elem, options }) => {
  const { classes, theme } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [like, setLike] = useState(false);
  const [save, setSave] = useState(false);
  const dark = colorScheme === "dark";
  const { getAllPosts, getAllPostsByUserId } = useContext(ApplicationContext);
  const handleDelete = async (id) => {
    const postId = id;
    try {
      const axiosConfig = {
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      };
      const { data } = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/v1/users/post/delete-post/${postId}`,

        axiosConfig
      );

      console.log(data);
      onClose();
      getAllPosts();
      getAllPostsByUserId();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className={`flex flex-col sm:flex-row items-start gap-2 h-full overflow-hidden`}
    >
      {/* div 1 starts  */}
      <div className=" flex-1 h-full ">
        <div className="flex sm:hidden items-center justify-between ">
          <div className="flex items-center justify-between ">
            <div className={classes.authorInfo}>
              <Avatar src={elem?.userId.photo} radius="xl" />
              <div className={classes.authorText}>
                <div className="flex gap-1 items-center">
                  <Text fw={600}>{elem?.userId.username}</Text>

                  <Text
                    fw={400}
                    fz="sm"
                    c="dimmed"
                    className="flex items-center"
                  ></Text>
                </div>
                <Text fz="xs" c="dimmed">
                  {elem?.userId.role}
                </Text>
              </div>
            </div>
          </div>
          {options ? (
            <Menu shadow="md" width={200}>
              <Menu.Target>
                <div>
                  <BsThreeDots className="cursor-pointer" />
                </div>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item icon={<AiFillEdit size={14} />}>Edit</Menu.Item>
                <Menu.Item
                  icon={<AiFillDelete size={14} />}
                  onClick={() => handleDelete(elem._id)}
                >
                  Delete
                </Menu.Item>
                <Menu.Item
                  icon={<AiOutlineClose size={14} />}
                  onClick={onClose}
                >
                  Close
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          ) : (
            <AiOutlineClose
              size={20}
              className="cursor-pointer"
              onClick={onClose}
            />
          )}
        </div>
        <div className="w-full px-2 mt-2 border border-gray-100 h-0"></div>
        <div className="max-h-full aspect-w-1 aspect-h-1 ">
          {window.innerWidth <= 630 ? (
            <SmallScreenImage elem={elem} />
          ) : (
            <LargeScreenImage elem={elem} />
          )}
        </div>
      </div>
      {/* div 1 ends  */}
      {/* div 2 starts */}
      <div className="flex-1 flex flex-col justify-between h-[600px] ">
        {/* header starts */}
        <div className="">
          <div className=" hidden sm:flex items-center justify-between relative">
            <div className="flex items-center justify-between">
              <div className={classes.authorInfo}>
                <Avatar src={elem?.userId.photo} radius="xl" />
                <div className={classes.authorText}>
                  <div className="flex gap-1 items-center">
                    <Text fw={600}>{elem?.userId.username}</Text>

                    <Text
                      fw={400}
                      fz="sm"
                      c="dimmed"
                      className="flex items-center"
                    ></Text>
                  </div>
                  <Text fz="xs" c="dimmed">
                    {elem?.userId.role}
                  </Text>
                </div>
              </div>
            </div>
            {options ? (
              <Menu shadow="md" width={200}>
                <Menu.Target>
                  <div>
                    <BsThreeDots className="cursor-pointer" />
                  </div>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Item icon={<AiFillEdit size={14} />}>Edit</Menu.Item>
                  <Menu.Item
                    icon={<AiFillDelete size={14} />}
                    onClick={() => handleDelete(elem._id)}
                  >
                    Delete
                  </Menu.Item>
                  <Menu.Item
                    icon={<AiOutlineClose size={14} />}
                    onClick={onClose}
                  >
                    Close
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            ) : (
              <AiOutlineClose
                size={20}
                className="cursor-pointer"
                onClick={onClose}
              />
            )}
          </div>
          <div className="w-full px-2 mt-2 border border-gray-100 h-0"></div>
          {/* header ends */}
          <div className="flex flex-col justify-between mt-4">
            <div>
              {/* caption */}
              <div>
                <div className="flex items-start gap-3">
                  <Avatar src={elem?.userId.photo} radius="xl" />
                  <div>
                    <p className="text-sm">
                      <span className="font-semibold text-sm">
                        {elem?.userId.username}
                      </span>{" "}
                      &nbsp; {elem?.postCaption}
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
                      <span className="font-semibold text-sm">Allen._23</span>{" "}
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
                      <span className="font-semibold text-sm">Allen._23</span>{" "}
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
          </div>
        </div>

        {/* icons and add comment section  */}
        <div className="relative bottom-0  border-t-[1px]">
          <div className={classes.icons}>
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
          </div>
          <div className="flex items-center px-6">
            <p className="text-sm">
              Liked by {""}
              <span className="font-semibold">_.sampriti._27</span> and{" "}
              <span className="font-semibold">12 others</span>
            </p>
          </div>
          <div className={`w-full ${dark ? "border-none" : "border-b-2"} mt-5`}>
            <input
              type="text"
              className={classes.commentInput}
              placeholder="Write a comment..."
            />
          </div>
        </div>
      </div>
      {/* div 2 ends  */}
    </div>
  );
};

export default PostDetails;
