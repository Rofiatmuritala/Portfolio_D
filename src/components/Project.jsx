import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import movie from "../assets/Rofiat.jpg";
import avatar from "../assets/Avatar.png";
import analytics from "../assets/Analytics.png";

const Project = () => {
  return (
    <>
      <div
        name="project"
        className="bg-gradient-to-b from-black to-gray-800 w-full px-6 py-24 my-auto sm:py-32 lg:px-8 text-white"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Project
            </p>
            <p className="py-6">Check out some of my work right here</p>
          </div>

          <div className="grid grid-cols-1 pb-10 md:grid-cols-2 gap-10 mx-auto w- ">
            <div className="mb-4 lg:mb-0 p-4 lg:p-0 w-full md:w-4/7  rounded block border-4 border-gray-500">
              <img
                src={analytics}
                className="rounded-md object-cover w-full h-64"
              />

              <h1 className="my-5 text-2xl font-bold ml-2 leading-tight">
                Social Media Analyst for “@thisisecho_” Instagram Account
              </h1>

              <div className="flex justify-between items-center pb-9">
                <a
                  href="https://bit.ly/4aG4iFa"
                  target="_blank"
                  className="inline-block px-6 py-3 mt-6 rounded-md bg-gray-700 text-gray-100 ml-3"
                >
                 Live project
                </a>
              </div>
            </div>
            <div className="mb-4 lg:mb-0 p-4 lg:p-0 w-full md:w-4/7  rounded block border-4 border-gray-500">
              <img src={avatar} className="rounded-md object-cover w-full h-64" />

              <h1 className="my-5 text-2xl ml-2 font-bold leading-tight">
                Customer Avatar Development for Online Health Services
                (Business-to-Customer)
              </h1>

              <div className="flex justify-between pb-9">
                <a
                  href="https://bit.ly/3NIJqU5"
                  target="_blank"
                  className="inline-block items-center px-6 py-3 mt-2 rounded-md bg-gray-700 text-gray-100 ml-3 "
                >
                  Live project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
