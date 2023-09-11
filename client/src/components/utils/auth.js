import { useState } from "react";

// Retrieve the token from local storage
export const getToken = () => {
  if (typeof window === "undefined") {
    return null;
  }

  const token = localStorage.getItem("token");
  return token ? JSON.parse(token) : null;
};

// Check if the user is authenticated
export const isAuthenticated = () => {
  const token = getToken();

  // Perform any necessary validation on the token here
  return token !== null;
};

//Upload image to cloudinary
export const uploadImage = (image) => {
  return new Promise((resolve, reject) => {
    if (image === undefined) {
      console.log("Add Image");
      reject("Add Image");
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
          // Resolve the Promise with the secure_url
          resolve(data.secure_url.toString());
        })
        .catch((err) => {
          // Reject the Promise with the error
          reject(err);
        });
    } else {
      reject("Please select a valid Image");
    }
  });
};
