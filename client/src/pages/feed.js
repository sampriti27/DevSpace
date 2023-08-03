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
      image: { avatar },
    },
    caption: "Work in Progress...",
  };
  return (
    <>
      <Sidebar>
        <main className={`${dark ? "bg-[#25262B]" : "bg-gray-100"} h-screen`}>
          <Header />
          <section class="text-gray-600 body-font">
            <div class="container px-5 mx-auto flex flex-col md:flex-row items-start md:items-center md:justify-between">
              <div class="w-full lg:w-3/5 md:pr-16 lg:pr-0 pr-0 mt-4">
                <div className="scroll-container">
                  <CreatePostFeed />
                  <div className="mt-5 px-5 flex flex-col items-center justify-center w-full">
                    <PostCardFeed {...articleData} />
                    <PostCardFeed {...articleData} />
                    <PostCardFeed {...articleData} />
                  </div>
                </div>
              </div>
              <div class="hidden md:block relative self-start mt-5">
                <ProfilePreview
                  avatar={avatar}
                  name="John Doe"
                  email="johndoe@example.com"
                  job="Software Engineer"
                />
              </div>
            </div>
          </section>
        </main>
      </Sidebar>
    </>
  );
};

export default feed;
