import React from "react";
import { FiClock, FiGlobe, FiLock } from "react-icons/fi";
import { IoEarthOutline } from "react-icons/io5";
import { IoIosLock } from "react-icons/io";
const VisibilityBadge = ({ product }) => {
  let label, icon, color;

  // 1. Draft 
  if (product?.status === "draft") {
    label = "Draft";
    icon = <FiClock className="text-(--white-color)" />;
    color = "text-(--white-color) bg-blue-400";
  }
   // 2. Unlisted 
  if (product?.status === "unlisted") {
    label = "Unlisted";
    icon = <IoIosLock className="text-(--white-color)" />;
    color = "text-(--white-color) bg-orange-400";
  }
  // 3. Unpublished
  if (product?.status === "unpublished") {
    label = "Unpublished";
    icon = <IoIosLock className="text-(--white-color)" />;
    color = "text-(--white-color) bg-red-400";
  }
  if (product?.status === "published") {
    label = "Published";
    icon = <IoEarthOutline className="text-(--white-color)" />;
    color = "text-(--white-color) bg-green-400";
  }
  
  

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] ${color}`}
    >
      {icon}
      {label}
    </span>
  );
};

export default VisibilityBadge;