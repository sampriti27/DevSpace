import React, { useContext, useEffect } from "react";
import PostGridDisplay from "./PostGridDisplay";
import { ApplicationContext } from "@/context/ApplicationContext";

const PostGrid = () => {
  const { getAllPostsByUserId, userPosts } = useContext(ApplicationContext);
  useEffect(() => {
    getAllPostsByUserId();
  }, []);
  console.log(userPosts);
  return (
    <>
      <div className="grid grid-cols-3 gap-1">
        {userPosts
          ?.map((elem) => {
            return <PostGridDisplay elem={elem} />;
          })
          .reverse()}
      </div>
    </>
  );
};

export default PostGrid;
