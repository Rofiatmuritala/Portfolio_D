import React from "react";
import image2 from "../assets/Rofiat.jpg";
import { MdCloudDownload } from "react-icons/md";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col h-full justify-center pt-2">
          <h2 className="text-4xl lg:text-7xl font-bold text-white pt-2">
            I am a digital marketer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Aspiring digital marketer eager to apply my newly acquired skills in a
            dynamic entry-level role, contributing to the success of a
            forward-thinking team in the digital marketing landscape.
          </p>
          <div>
            <a href="_MURITALA ROFIAT ADENIKE...pdf" target="_blank">
              <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                Download CV
                <span className="group-hover:rotate-360 duration-300">
                  <MdCloudDownload size={25} className="ml-1" />
                </span>
              </button>
            </a>
          </div>
          <div>
            <ul class="flex items-center mt-5 space-x-5 lg:hidden">
              <li>
                <a
                  href="https://linkedin.com"
                  class="text-gray-500 hover:text-white dark:hover:text-slate-700 dark:text-gray-400"
                >
                  <span className="group-hover:rotate-360 duration-300">
                    <FaLinkedin size={30} className="ml-1" />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/rofiatmuritala"
                  class="text-gray-500 hover:text-white dark:hover:text-slate-700 dark:text-gray-400"
                >
                  <span className="group-hover:rotate-360 duration-300">
                    <FaGithub size={30} className="ml-1" />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  class="text-gray-500 shadow-inner shadow-blue-600 hover:text-white dark:hover:text-slate-700 dark:text-gray-400"
                >
                  <span className="group-hover:rotate-360 duration-300">
                    <FaInstagram size={30} className="ml-1" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:h-50 md:w-[50%]">
          <img
            src={image2}
            alt=" my profile"
            className="rounded-full lg:ml-42 mx-auto w-2/3 shadow-gray-600 "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
