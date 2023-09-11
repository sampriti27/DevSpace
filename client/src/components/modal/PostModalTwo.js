import React, { useContext, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
} from "@chakra-ui/react";
import { ApplicationContext } from "@/context/ApplicationContext";
import { useMantineColorScheme } from "@mantine/core";
import { toast } from "react-toastify";
import {
  UnstyledButton,
  Group,
  Avatar,
  Text,
  createStyles,
} from "@mantine/core";
import { BeatLoader } from "react-spinners";
import axios from "axios";

const PostModalTwo = ({
  imgUrl,
  setImgUrl,
  secondModal,
  setSecondModal,
  defaultImg,
}) => {
  const [size, setSize] = React.useState("xl");
  const { userData, loader, setLoader, getAllPosts } =
    useContext(ApplicationContext);
  const [caption, setCaption] = useState("");
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const bgColor = dark ? "#1A1B1E" : "white";

  const handlePost = async () => {
    try {
      const newPostDetails = {
        postImage: imgUrl,
        postCaption: caption,
      };

      // console.log(newPostDetails);
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      };
      setLoader(true);
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/v1/users/post/add-post`,
        newPostDetails,
        config
      );
      //   console.log(data);
      setLoader(false);
      setImgUrl(defaultImg);
      setCaption("");
      setSecondModal(false);
      toast.success(data?.message);
      getAllPosts();
      getAllPostsByUserId();
    } catch (error) {
      toast.warning(error.response?.data.message);
      setLoader(false);
    }
  };

  return (
    <Modal
      size={size}
      isOpen={secondModal}
      onClose={() => {
        setSecondModal(false);
      }}
    >
      <ModalOverlay />
      <ModalContent bg={bgColor}>
        <ModalHeader>
          <Group spacing="xs" align="center">
            <Avatar src={userData?.photo} radius="xl" />
            <div style={{ flex: 1 }}>
              <Text
                size="md"
                weight={500}
                className={`${dark ? "text-gray-100" : "text-gray-900"}`}
              >
                {userData?.username}
              </Text>

              <Text color="dimmed" size="sm">
                {userData?.role}
              </Text>
            </div>
          </Group>
        </ModalHeader>
        <ModalBody>
          <div>
            <textarea
              id="message"
              rows="4"
              name="caption"
              value={caption}
              onChange={(e) => {
                setCaption(e.target.value);
              }}
              className={`block p-2.5 w-full text-sm  outline-none ${
                dark ? "bg-transparent text-gray-100" : "bg-white text-gray-900"
              }`}
              placeholder="Write your thoughts here..."
            />
            <img
              id="image-preview"
              src={imgUrl}
              alt="Image Preview"
              className="w-86 h-48 mx-auto rounded-md"
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handlePost}>
            {loader ? <BeatLoader color="white" /> : <span>Post</span>}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PostModalTwo;
