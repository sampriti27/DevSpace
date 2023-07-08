import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="mt-20 flex flex-col items-center">
        <div className="text-xs text-gray-500 flex items-center gap-2 flex-wrap px-2 ">
          <span className="hover:underline hover:underline-offset-2 cursor-pointer">
            Meta
          </span>
          <span className="hover:underline hover:underline-offset-2 cursor-pointer">
            About
          </span>
          <span className="hover:underline hover:underline-offset-2 cursor-pointer">
            Blog
          </span>
          <span className="hover:underline hover:underline-offset-2 cursor-pointer">
            Jobs
          </span>
          <span className="hover:underline hover:underline-offset-2 cursor-pointer">
            Help
          </span>
          <span className="hover:underline hover:underline-offset-2 cursor-pointer">
            API
          </span>
          <span className="hover:underline hover:underline-offset-2 cursor-pointer">
            Privacy
          </span>
          <span className="hover:underline hover:underline-offset-2 cursor-pointer">
            Terms
          </span>
          <span className="hover:underline hover:underline-offset-2 cursor-pointer">
            Top Accounts
          </span>
          <span className="hover:underline hover:underline-offset-2 cursor-pointer">
            Location
          </span>
          <span className="hover:underline hover:underline-offset-2 cursor-pointer">
            DevSpace Lite
          </span>
          <span className="hover:underline hover:underline-offset-2 cursor-pointer">
            Contact Uploading & Non-Users
          </span>
          <span className="hover:underline hover:underline-offset-2 cursor-pointer">
            Meta Verified
          </span>
        </div>

        <div className="mt-4 text-xs text-gray-500">
          Copyright &#169; 2023 DevSpace Developed by
          <Link
            href="https://portfolio-sampriti27.vercel.app/"
            target="_blank"
            className="underline underline-offset-2 cursor-pointer ml-2"
          >
            Sampriti Mukherjee
          </Link>{" "}
        </div>
      </div>
    </>
  );
};

export default Footer;
