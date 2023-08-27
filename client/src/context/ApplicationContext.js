import axios from "axios";
import { createContext, useState } from "react";

export const ApplicationContext = createContext();

export const ApplicationContextProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const [loader, setLoader] = useState(false);
  const [imgUrl, setImgUrl] = useState();

  //Upload image to cloudinary
  const uploadImage = (image) => {
    setLoader(true);
    if (pic === undefined) {
      console.log("Add Image");
      return;
    }
    if (image.type === "image/jpeg" || image.type === "image/png") {
      const data = new FormData();
      data.append("file", image);
      data.append(
        "upload_preset",
        `${process.env.NEXT_PUBLIC_CLOUDINARY_PRESET}`
      );
      data.append(
        "cloud_name",
        `${process.env.NEXT_PUBLIC_CLOUDINARY_USERNAME}`
      );

      fetch(`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}`, {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setImgUrl(data.url.toString());
          console.log(data.url.toString());
          setLoader(false);
        })
        .catch((err) => {
          console.log(err);
          setLoader(false);
        });
    } else {
      console.log("Please select a valid Image");
      setLoader(false);
    }
  };

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
      // console.log(data);
      // console.log(userData);
      setUserData(data.loggedUser);
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
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};
