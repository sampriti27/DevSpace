import React from "react";
import PostGridDisplay from "./display/PostGridDisplay";

const PostGrid = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-1">
        <div>
          <PostGridDisplay />
        </div>
        <div>
          <PostGridDisplay />
        </div>
        <div>
          <PostGridDisplay />
        </div>
      </div>
    </>
  );
};

export default PostGrid;
