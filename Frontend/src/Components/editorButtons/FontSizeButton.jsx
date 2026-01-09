// editorButtons/FontSizeButton.jsx
import React, { useState } from "react";
import { LuType, LuChevronDown } from "react-icons/lu";
import Tooltip from "../Tooltip";
import { ButtonEmerald } from "../ui/Button/Button";

export default function FontSizeButton({ editor }) {
  if (!editor) return null;

  const sizes = [ 16, 18, 20, 24, 30, 36];

  const currentSize = editor.getAttributes("textStyle").fontSize || "";

  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (size) => {
    if (size) {
      editor.chain().focus().setFontSize(size).run();
    } else {
      editor.chain().focus().unsetFontSize().run();
    }
    setIsOpen(false);
  };

  return (
    <Tooltip text="Font Size">
      <div className="relative inline-block">
        <ButtonEmerald
          onClick={() => setIsOpen(!isOpen)}
          className={`
            p-2! flex items-center gap-2 min-w-24 cursor-pointer select-none
            ${currentSize
              ? "text-(--accent)! bg-[#FFA41F] shadow-[inset_0_4px_0px_#ffd953,inset_0_-5px_0px_#ff791a] border-2 border-(--btn-border) hover:shadow-[inset_0_5px_0px_#ffd953,inset_0_-5px_0px_#ff791a] active:translate-y-0.5 active:shadow-[inset_0_5px_0px_#ffd953,inset_0_-1px_0px_#ff791a]"
              : ""
            }
          `}
        >
          <LuType size={16} />
          <span className="font-medium text-[12px]">
            {currentSize || "Size"}
          </span>
          <LuChevronDown
            size={14}
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </ButtonEmerald>

        {/* কাস্টম ড্রপডাউন লিস্ট */}
        {isOpen && (
          <div className="absolute top-full cursor-pointer left-0 mt-2 w-full bg-(--foreground-color) border-2 border-(--border-color) rounded-lg shadow-2xl z-50 overflow-hidden">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => handleSelect(size)}
                className={`
                  w-full px-4 py-2 text-left text-[13px] font-medium transition-all
                  hover:bg-[#FFA41F] hover:text-(--accent) hover:shadow-[inset_0_3px_0px_#ffd953,inset_0_-3px_0px_#ff791a]
                  ${currentSize === size.toString() ? "bg-[#FFA41F]/80 text-(--accent)" : "text-(--dim-white-color)"}
                `}
              >
                {size}
              </button>
            ))}

          </div>
        )}

        {/* বাইরে ক্লিক করলে বন্ধ করা */}
        {isOpen && (
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </Tooltip>
  );
}