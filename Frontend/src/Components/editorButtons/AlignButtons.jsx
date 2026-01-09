import React, { useState } from "react";
import {
  LuAlignLeft,
  LuAlignCenter,
  LuAlignRight,
  LuAlignJustify,
} from "react-icons/lu";

import Tooltip from "../Tooltip";
import { ButtonEmerald } from "../ui/Button/Button";

export default function AlignButtons({ editor }) {
  if (!editor) return null;

  const [open, setOpen] = useState(false);

  const items = [
    {
      icon: LuAlignLeft,
      label: "Align Left",
      onClick: () => editor.chain().focus().setTextAlign("left").run(),
      isActive: editor.isActive({ textAlign: "left" }),
    },
    {
      icon: LuAlignCenter,
      label: "Align Center",
      onClick: () => editor.chain().focus().setTextAlign("center").run(),
      isActive: editor.isActive({ textAlign: "center" }),
    },
    {
      icon: LuAlignRight,
      label: "Align Right",
      onClick: () => editor.chain().focus().setTextAlign("right").run(),
      isActive: editor.isActive({ textAlign: "right" }),
    },
    {
      icon: LuAlignJustify,
      label: "Justify",
      onClick: () => editor.chain().focus().setTextAlign("justify").run(),
      isActive: editor.isActive({ textAlign: "justify" }),
    },
  ];

  const isAlignActive = items.some((item) => item.isActive);

  return (
    <div className="relative inline-block">
      <Tooltip text="Text Alignment">
        <ButtonEmerald
          onClick={() => setOpen(!open)}
          className={`
            p-2! transition-all duration-150 rounded-md
            ${isAlignActive
              ? "text-(--accent)! bg-[#FFA41F] shadow-[inset_0_4px_0px_#ffd953,inset_0_-5px_0px_#ff791a] border-2 border-(--btn-border) hover:shadow-[inset_0_5px_0px_#ffd953,inset_0_-5px_0px_#ff791a] active:translate-y-0.5 active:shadow-[inset_0_5px_0px_#ffd953,inset_0_-1px_0px_#ff791a]"
              : ""
            }
          `}
        >
          <LuAlignLeft size={18} />
        </ButtonEmerald>
      </Tooltip>

      {open && (
        <>
          {/* Outside click to close dropdown */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          />

          {/* Dropdown menu */}
          <div className="absolute top-full left-0 mt-2 z-50 w-35 bg-(--accent-foreground) border-2 border-(--border-color) rounded-md overflow-hidden">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  item.onClick();
                  setOpen(false);
                }}
                className={`
                  w-full flex items-center gap-4 px-4 py-3 text-left transition-all
                  ${item.isActive
                    ? "bg-[#FFA41F] text-(--accent) shadow-[inset_0_3px_0px_#ffd953,inset_0_-3px_0px_#ff791a]"
                    : "text-(--dim-white-color) hover:bg-[#FFA41F] hover:text-(--accent) hover:shadow-[inset_0_3px_0px_#ffd953,inset_0_-3px_0px_#ff791a]"
                  }
                  cursor-pointer
                `}
              >
                <item.icon size={16} />
                <span className="text-[12px] font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}