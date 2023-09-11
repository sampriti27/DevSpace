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
import { uploadImage } from "../utils/auth";
import { toast } from "react-toastify";
import PostModalTwo from "./PostModalTwo";

const defaultImg =
  "https://res.cloudinary.com/dewu8pifs/image/upload/v1693996021/function_set_default_image_when_image_not_present_yt9iey.jpg";

const PostModal = () => {
  const { isModelOpen, setIsModalOpen } = useContext(ApplicationContext);
  const [secondModal, setSecondModal] = useState(false);
  const [loader, setLoader] = useState(false);
  const [size, setSize] = React.useState("md");
  const [imgUrl, setImgUrl] = useState(defaultImg);
  const handleUpload = (e) => {
    e.preventDefault();
    uploadImage(e.target.files[0])
      .then((imageUrl) => {
        // Handle the uploaded image URL here
        console.log("Uploaded Image URL:", imageUrl);
        setImgUrl(imageUrl);
      })
      .catch((error) => {
        toast.error(error);
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Modal
        size={size}
        isOpen={isModelOpen}
        onClose={() => {
          setImgUrl(
            "https://res.cloudinary.com/dewu8pifs/image/upload/v1693996021/function_set_default_image_when_image_not_present_yt9iey.jpg"
          );
          setIsModalOpen(false);
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <div>
              <h4 className="text-center">Create new post</h4>
            </div>
          </ModalHeader>
          <ModalBody>
            <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded-lg">
              <div className="text-center mb-4">
                <img
                  id="image-preview"
                  src={imgUrl}
                  alt="Image Preview"
                  className="w-86 h-48 mx-auto rounded-md"
                />
                <input
                  onChange={(e) => {
                    toast.info("Please wait! we are uploading your picture.");
                    handleUpload(e);
                  }}
                  type="file"
                  id="image-upload"
                  className="hidden"
                />
                <label
                  for="image-upload"
                  id="upload-label"
                  className={`block mt-2 px-4 py-2 text-white bg-[#0094f6df] rounded-md cursor-pointer hover:bg-[#0094f6ea] transition duration-300 ease-in-out`}
                >
                  Click to upload an image
                </label>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={() => {
                if (imgUrl != defaultImg) {
                  setIsModalOpen(false);
                  setSecondModal(true);
                }
              }}
            >
              Next
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <PostModalTwo
        imgUrl={imgUrl}
        secondModal={secondModal}
        setSecondModal={setSecondModal}
      />
    </>
  );
};

export default PostModal;
