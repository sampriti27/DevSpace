import { createContext, useState } from "react";

export const ApplicationContext = createContext();

export const ApplicationContextProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const [loader, setLoader] = useState(false);
  const [imgUrl, setImgUrl] = useState();

  const uploadImage = (image) => {
    setLoader(true);
    if (pic === undefined) {
      console.log("Add Image");
      return;
    }
    if (image.type === "image/jpeg" || image.type === "image/png") {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "DevSpace");
      data.append("cloud_name", "dewu8pifs");

      fetch("https://api.cloudinary.com/v1_1/dewu8pifs/image/upload", {
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

  return (
    <ApplicationContext.Provider
      value={{
        userData,
        setUserData,
        loader,
        setLoader,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};
