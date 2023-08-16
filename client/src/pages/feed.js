import Sidebar from "@/components/sidebar/Sidebar";
import Header from "@/components/header/Header";
import CreatePostFeed from "@/components/post/createPost/CreatePostFeed";
import React from "react";
import ProfilePreview from "@/components/profile/ProfilePreview";
import avatar from "../../public/utils/avatar.jpeg";
import avatar2 from "../../public/utils/avatar2.png";
import { useMantineColorScheme } from "@mantine/core";

import { postImg } from "../../public/utils/post/postImg1.jpg";
import PostCardFeed from "@/components/post/display/PostCardFeed";
import SuggestionBox from "@/components/suggestion/SuggestionBox";

const feed = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const articleData = {
    image: postImg,
    category: "Technology",
    title: "Your Article Title",
    footer: "3 min read",
    author: {
      name: "John Doe",
      description: "Software Engineer",
      username: "@john_Doe",
      image: { avatar },
    },
    postTime: "1d",
    caption:
      " DevSpace provides a dedicated space for developers to connect with their community, showcase their skills, and engage in meaningful discussions,I am really enjoying it",
  };
  return (
    <>
      <Sidebar>
        <main className={`${dark ? "bg-[#25262B]" : "bg-white"} h-screen`}>
          <Header />
          <section class="text-gray-600 body-font">
            <div class="container px-5 mx-auto flex flex-col md:flex-row items-start md:items-center md:justify-between">
              <div class="w-full xl:w-3/5 md:pr-16 lg:pr-0 pr-0 mt-4">
                <div className="scroll-container">
                  <CreatePostFeed />
                  <div className="mt-5 px-0 md:px-5 flex flex-col items-center justify-center w-full">
                    <PostCardFeed {...articleData} />
                    <PostCardFeed {...articleData} />
                    <PostCardFeed {...articleData} />
                  </div>
                </div>
              </div>
              <div class="hidden xl:block self-start mt-10 px-10 xl:px-20 lg:w-2/5">
                <ProfilePreview
                  view
                  avatar={avatar}
                  name="John Doe"
                  username="@john_Doe"
                  job="Software Engineer"
                />
                <SuggestionBox />
              </div>
            </div>
          </section>
        </main>
      </Sidebar>
    </>
  );
};

export default feed;
