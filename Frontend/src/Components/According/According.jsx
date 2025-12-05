import React, { useEffect, useRef, useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";

export default function ForumAccordion({
  title,
  icon,
  children,
  defaultOpen = true,
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef(null);

  return (
    <div className="w-full">
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 py-4"
      >
        <div className="flex items-center gap-3 cursor-pointer">
          {icon}
          <h2 className=" font-bold text-[16px] text-(--custom-color)">{title}</h2>
        </div>

        <MdOutlineArrowDropDown
          size={20}
          className={`cursor-pointer text-(--dim-white-color) transition-transform ${
            isOpen ? "rotate-0 text-(--custom-color)!" : "rotate-180 text-(--white-color)"
          } `}
        />
      </button>

      {/* Animated Content */}
      <div
        ref={contentRef}
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{}}
      >
        <div className="bg-(--accent) border-t-5 border-(--custom-color) rounded-sm  mb-4">
          {children}
        </div>
      </div>
    </div>
  );
}
