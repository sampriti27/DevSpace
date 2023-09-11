import axios from "axios";
import { createContext, useState } from "react";
import { useMediaQuery } from "@mantine/hooks";
export const ApplicationContext = createContext();

export const ApplicationContextProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const [loader, setLoader] = useState(false);
  const [imgUrl, setImgUrl] = useState();
  const [allPosts, setAllPosts] = useState();
  const [userPosts, setUserPosts] = useState();
  const [isModelOpen, setIsModalOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 50em)");

  //Get user data
  const fetchLoggedUser = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      };
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/v1/users`,
        config
      );
      console.log(data);
      // console.log(userData);
      setUserData(data.loggedUser);
    } catch (error) {
      console.log(error);
    }
  };

  //closing the create post model
  const handleCloseCreatePostModal = () => {
    setOpenCreatePostModal(false);
  };

  // get all the posts
  const getAllPosts = async () => {
    try {
      const axiosConfig = {
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      };
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/v1/users/post/get-all-posts`,
        axiosConfig
      );
      // console.log(data);
      setAllPosts(data.posts);
    } catch (error) {
      console.log(error);
    }
  };

  // get all posts of current user

  const getAllPostsByUserId = async () => {
    try {
      const axiosConfig = {
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      };
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/v1/users/post/get-posts`,
        axiosConfig
      );
      console.log(data);
      setUserPosts(data.userPosts);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ApplicationContext.Provider
      value={{
        userData,
        setUserData,
        loader,
        setLoader,
        fetchLoggedUser,
        imgUrl,
        isModelOpen,
        isMobile,
        setIsModalOpen,
        getAllPosts,
        getAllPostsByUserId,
        userPosts,
        allPosts,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};
