import React, { Suspense, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import Input from "../Components/ui/Input/Input";
import minecraftData from "../Api/Minecraft.json";

import { toast } from "react-toastify";
import { FiUsers } from "react-icons/fi";
import { FaRegFileAlt } from "react-icons/fa";

import "swiper/css";
import { ButtonPrimary } from "../Components/ui/Button/Button";

import { MdKeyboardArrowRight, MdOutlineSupportAgent } from "react-icons/md";
import ProductSlider from "../Components/SwiperSlider/ProductSlider";
import { MdOutlineFileDownload } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { LiaTheaterMasksSolid } from "react-icons/lia";
const faqData = [
  {
    title: "Free Downloads",
    description:
      "It's easy for your to download your favorite premium content completely free! ",
    icon: <MdOutlineFileDownload />,
  },
  {
    title: "Staff Moderated",
    description:
      "Resources undergo a manual approval process by our experienced team of moderators. We ensure that all details are included and the files are safe.",
    icon: <MdOutlineSupportAgent />,
  },
  {
    title: "Enhanced Privacy",
    description:
      "Our intelligent downloading system provides more for the member. From removal of identification information, to custom privacy options. Keep your data safe from others.",
    icon: <LiaTheaterMasksSolid />,
  },
  {
    title: "Authentic Reviews",
    description:
      "Read reviews from others to understand what they think before you download! Only downloaders can review files and we remove reviews which violate policies.",
    icon: <BsStars />,
  },
];

const communityData = [
  {
    title: "Share Assets",
    description:
      "Share your resources and assets on our website.We're the best online repository of premium resources and it's free to get started!",
    icon: <MdKeyboardArrowRight />,
  },
  {
    title: "Hire a Creator",
    description:
      "Share your resources and assets on our website.We're the best online repository of premium resources and it's free to get started!",
    icon: <MdKeyboardArrowRight />,
  },
  {
    title: "Join our Discord",
    description:
      "Share your resources and assets on our website.We're the best online repository of premium resources and it's free to get started!",
    icon: <MdKeyboardArrowRight />,
  },
];
const trandingTitles = [
  "skyblock",
  "pvp",
  "survival",
  "Ecopets",
  "Decoration",
  "Furniture",
  "Gui",
  "skyblock",
  "pvp",
  "survival",
  "Ecopets",
  "Decoration",
  "Furniture",
  "Gui",
];

const Home = () => {
  const words = ["Minecraft server", "Web App", "Discord community"];
  const [index, setIndex] = useState(0);
  const [trandingTitleSearch, setTrandingTitleSearch] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  const notify = () => toast("Downloading your file!");

  return (
    <div className="container py-6">
      <div
        className=" rounded bg-no-repeat bg-center bg-cover "
        style={{
          backgroundImage: "url('/src/Assets/Mc slide 3.jpg')",
        }}
      >
        <div className="bg-black/65">
          {/* Header Section */}
          <div className="w-[87%] m-auto flex items-center py-3 pt-12">
            <h2 className="text-[20px]">
              Find the best assets & Models to grow your
            </h2>
            <div className=" h-[2.1em] overflow-hidden ">
              <div
                className="transition-transform duration-500 ml-2 ease-in-out flex flex-col "
                style={{ transform: `translateY(-${index * 2}em)` }}
              >
                {words.map((word, i) => (
                  <span key={i} className=" text-(--primary-color) text-[20px]">
                    {word}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Search Section */}
          <div className=" flex justify-center items-center gap-3 mb-2">
            <div className="relative w-full max-w-[80%]">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" />
              <Input
                value={trandingTitleSearch}
                onChange={(e) => setTrandingTitleSearch(e.target.value)}
                placeholder="Quick search"
                className="pl-10 w-full"
              />
            </div>
            <ButtonPrimary className="px-6! py-2!">Search</ButtonPrimary>
          </div>
          {/* Trending Title */}
          <div className=" text-white mb-3">
            <div className="w-[85%] m-auto flex items-center justify-center gap-2 jus">
              <h4 className=" text-[14px] text-(--custom-color)">
                Trending Now:
              </h4>
              {trandingTitles.map((title, i) => (
                <span
                  key={i}
                  onClick={() => setTrandingTitleSearch(title)}
                  className="text-(--dim-white-color) transition-all  hover:text-(--white-color) cursor-pointer"
                >
                  {title}
                </span>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center gap-1">
              <FiUsers size={14} className="text-(--custom-color)" />
              <span className="text-[14px] text-(--custom-color)">
                138,644+{" "}
              </span>
              <h5 className=" capitalize">members</h5>
            </div>

            <div className="flex items-center gap-1">
              <FaRegFileAlt size={14} className="text-(--custom-color)" />
              <span className="text-[14px] text-(--custom-color)">8,644+ </span>
              <h5 className="capitalize">Uploads</h5>
            </div>

            <div className="flex items-center gap-1">
              <FaRegMessage size={14} className="text-(--custom-color)" />
              <span className="text-[14px] text-(--custom-color)">
                18,644+{" "}
              </span>
              <h5 className="capitalize">Threads</h5>
            </div>
          </div>

          {/* Card Section*/}
          <div className="w-full">
            <div className="flex justify-center  flex-wrap gap-4 pt-4 pb-7">
              {minecraftData.map((item) => (
                <div
                  key={item.id}
                  className="group relative w-[250px] h-[140px] rounded-md overflow-hidden cursor-pointer shadow-lg 
                     transition-all duration-300 ease-in-out 
                     hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-(--custom-color)"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 transition-colors duration-300 group-hover:bg-black/40 z-10"></div>
                  <h3
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                         text-white text-xl font-bold z-20 drop-shadow-md text-center w-full px-2 hover:text-amber-300"
                  >
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Plugin sec */}
      <div className="mt-10 py-10 rounded-md bg-(--accent)">
        <div className="">
          <h2 className="text-[20px] mb-4 font-semibold  w-[90%] m-auto text-(--custom-color)">
            Latest Minecraft Plugins
          </h2>
        </div>

        {/* plugins card slider sec */}
        <ProductSlider />
      </div>

      {/* faq sec */}
      <div className="bg-(--accent) mt-10 rounded-md py-10">
        <div className="">
          <h2 className="text-[20px]  font-semibold  w-[90%] m-auto text-(--custom-color)">
            Why Download with Minecraft Temple?
          </h2>
          <p className="mb-4  w-[90%] m-auto ">
            Since 2014 we’ve provided the easiest and safest experience for
            creators and entrepreneurs to grow together. We offer a large
            selection of assets for Minecraft, Roblox, Websites, and Discord.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-4 w-[90%] m-auto">
          {faqData.map((faq) => (
            <div className="border bg-(--secondary) p-4 border-(--border-color) rounded-md">
              <div className="flex items-center gap-1 mb-2">
                <span className="text-[22px] text-(--custom-color)">
                  {faq.icon}
                </span>
                <h3 className="text-(--custom-color) text-[15px]">
                  {faq.title}
                </h3>
              </div>
              <div>
                <p className="">{faq.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* community sec */}
      <div className="bg-(--accent) mt-10  rounded-md py-10">
        <div className="">
          <h2 className="text-[20px]  font-semibold  w-[90%] m-auto text-(--custom-color)">
            You can join our Community
          </h2>
          <p className="mb-4  w-[90%] m-auto ">
            We’re an open community for distributing your creations, hiring
            others, and making friends.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 w-[90%] m-auto">
          {communityData.map((community) => (
            <div className="border bg-linear-to-b from-[#3c8527] to-[#4b8527] shadow-[0_10px_0px_#1a4d1a,0_-6px_0px_#52a535] hover:translate-y-0.5 hover:shadow-[0_8px_0px_#1a4d1a,0_-6px_0px_#52a535] p-4 border-(--border-color) rounded-md cursor-pointer">
              <div className="flex items-center gap-1 mb-2">
                <h3 className="text-(--white-color) text-[15px]">
                  {community.title}
                </h3>
                <span className="text-[22px] text-(--white-color)">
                  {community.icon}
                </span>
              </div>
              <div>
                <p className="">{community.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
