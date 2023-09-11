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

const PostModalTwo = ({ imgUrl, secondModal, setSecondModal }) => {
  const [size, setSize] = React.useState("xl");
  const { userData, loader, setLoader, getAllPosts } =
    useContext(ApplicationContext);
  const [caption, setCaption] = useState("");
  const [postDetails, setPostDetails] = useState();
  const handlePost = async () => {
    setPostDetails({
      postImage: imgUrl,
      postCaption: caption,
    });

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      };
      setLoader(true);
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/v1/users/post/add-post`,
        postDetails,
        config
      );
      //   console.log(data);
      setLoader(false);
      setSecondModal(false);
      toast.success(data?.message);
      getAllPosts();
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
      <ModalContent>
        <ModalHeader>
          <Group spacing="xs" align="center">
            <Avatar src={userData?.photo} radius="xl" />
            <div style={{ flex: 1 }}>
              <Text size="md" weight={500}>
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
              className="block p-2.5 w-full text-sm text-gray-900 outline-none"
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
