import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import {
  FaPuzzlePiece,
  FaCubes,
  FaServer,
  FaPaintBrush,
  FaBoxOpen,
  FaFolder,
  FaMap,
  FaCogs,
} from "react-icons/fa";

/* ✅ category now has count */
const MInecraftCategory = [
  { name: "Minecraft Plugins", icon: "plugin", count: 12 },
  { name: "Minecraft Configs", icon: "config", count: 7 },
  { name: "Minecraft Models", icon: "model", count: 5 },
  { name: "Maps & Schematics", icon: "map", count: 9 },
  { name: "Server Setups", icon: "server", count: 4 },
  { name: "Minecraft Mods", icon: "mod", count: 6 },
  { name: "Resources", icon: "resource", count: 11 },
  { name: "Design", icon: "design", count: 3 },
];

const WebsiteCategory = [
  { name: "MERN", icon: "plugin", count: 12 },
  { name: "PERN", icon: "plugin", count: 12 },
  { name: "Wordpress", icon: "plugin", count: 12 },
  { name: "Html css js", icon: "plugin", count: 12 },

];

/* ✅ icon map */
const MInecraftCategoryIcons = {
  plugin: FaPuzzlePiece,
  config: FaCogs,
  model: FaCubes,
  map: FaMap,
  server: FaServer,
  mod: FaBoxOpen,
  resource: FaBoxOpen,
  design: FaPaintBrush,
};

const ProductsSidebar = () => {
  const [minecraftCategoryOpen, setMinecraftCategoryOpen] = useState(true);
  const [websiteCategoryOpen, setWebsiteCategoryOpen] = useState(true);

  return (
    <aside className="p-4 bg-(--accent) rounded-sm ">

      {/* Minecraft Leaks */}
      <div
        onClick={() => setMinecraftCategoryOpen(!minecraftCategoryOpen)}
        className=" flex items-center justify-between cursor-pointer select-none"
      >
        <div className="flex items-center gap-3">
          <img
            src="../src/Assets/Category/MinecraftLogo.png"
            alt="Minecraft"
            className="w-6 h-6"
          />
          <h2 className={`${minecraftCategoryOpen ?"text-(--White-color)":""} text-[16px] `}>
            Minecraft Leaks
          </h2>
        </div>

        <FaArrowDown
          size={13}
          className={`transition-transform duration-300 ${
            minecraftCategoryOpen ? "rotate-0 text-(--custom-color)" : "rotate-270"
          } `}
        />
      </div>
      {/*Minecraft CATEGORY LIST */}
      <div
        className={`mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
          minecraftCategoryOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 mb-5">
          {MInecraftCategory.map((cat, i) => {
            const Icon = MInecraftCategoryIcons[cat.icon] || FaFolder;

            return (
              <li
                key={i}
                className="group flex items-center justify-between px-3 py-3 rounded-md cursor-pointer
                
                
                transition-all"
              >
                <div className="flex items-center gap-2">
                  <Icon
                    size={14}
                    className=" group-hover:text-(--custom-color)"
                  />
                  <span className=" group-hover:text-(--custom-color)">
                    {cat.name}
                  </span>
                </div>

                {/*  COUNT */}
                <span
                  className="text-xs px-2 py-0.5 rounded
                  bg-(--accent-foreground)
                 font-semibold
                  group-hover:text-(--custom-color)"
                >
                  {cat.count}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      

      {/* Website */}
      <div
        onClick={() => setWebsiteCategoryOpen(!websiteCategoryOpen)}
        className="flex items-center justify-between cursor-pointer select-none"
      >
        <div className="flex items-center gap-3">
          <img
            src="../src/Assets/Category/WebsiteLogo.png"
            alt="Minecraft"
            className="w-6 h-6"
          />
          <h2 className={`${websiteCategoryOpen ?"text-(--white-color)":""} text-[16px] `}>
            Website Leaks
          </h2>
        </div>

        <FaArrowDown
          size={13}
          className={`transition-transform duration-300 ${
            websiteCategoryOpen ? "rotate-0 text-(--custom-color)" : "rotate-270"
          } `}
        />
      </div>

      {/* Website Category List */}
      <div
        className={`mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
          websiteCategoryOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 mb-5">
          {WebsiteCategory.map((cat, i) => {
            // const Icon = categoryIcons[cat.icon] || FaFolder;

            return (
              <li
                key={i}
                className="group flex items-center justify-between px-3 py-3 rounded-md cursor-pointer
                
                transition-all"
              >
                <div className="flex items-center gap-2">
                  {/* <Icon
                    size={14}
                    className=" group-hover:text-(--custom-color)"
                  /> */}
                  <span className=" group-hover:text-(--custom-color)">
                    {cat.name}
                  </span>
                </div>

                {/*  COUNT */}
                <span
                  className="text-xs px-2 py-0.5 rounded
                  bg-(--accent-foreground)
                 font-semibold
                  group-hover:text-(--custom-color)"
                >
                  {cat.count}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

    </aside>
  );
};

export default ProductsSidebar;
