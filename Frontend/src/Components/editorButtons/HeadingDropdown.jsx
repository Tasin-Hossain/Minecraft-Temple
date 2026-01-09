import React, { useState } from "react";
import { LuHeading1 } from "react-icons/lu";

import Tooltip from "../Tooltip";
import { ButtonEmerald } from "../ui/Button/Button";

export default function HeadingDropdown({ editor }) {
  if (!editor) return null;

  const [open, setOpen] = useState(false);

  const items = [
    {
      label: "Normal ",
      onClick: () => editor.chain().focus().setParagraph().run(),
      isActive: editor.isActive("paragraph"),
    },
    {
      label: "Heading 1",
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: editor.isActive("heading", { level: 1 }),
    },
    {
      label: "Heading 2",
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: editor.isActive("heading", { level: 2 }),
    },
    {
      label: "Heading 3",
      onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      isActive: editor.isActive("heading", { level: 3 }),
    },
  ];

  const currentHeadingLevel = items.findIndex(item => item.isActive);
  const isActive = currentHeadingLevel !== -1 && currentHeadingLevel !== 0; // Active if any heading (not paragraph)

  return (
    <div className="relative inline-block">
      <Tooltip text="Headings">
        <ButtonEmerald
          onClick={() => setOpen(!open)}
          className={`
            p-2! transition-all duration-150 rounded-md
            ${isActive
              ? "text-(--accent)! bg-[#FFA41F] shadow-[inset_0_4px_0px_#ffd953,inset_0_-5px_0px_#ff791a] border-2 border-(--btn-border) hover:shadow-[inset_0_5px_0px_#ffd953,inset_0_-5px_0px_#ff791a] active:translate-y-0.5 active:shadow-[inset_0_5px_0px_#ffd953,inset_0_-1px_0px_#ff791a]"
              : ""
            }
          `}
        >
          <LuHeading1 size={18} />
        </ButtonEmerald>
      </Tooltip>

      {open && (
        <>
          {/* Outside click to close */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          />

          {/* Dropdown menu */}
          <div className="absolute top-full left-0 mt-2 z-50 w-30 bg-(--accent-foreground) border-2 border-(--border-color) rounded-md overflow-hidden">
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
                <span className="text-[12px] font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}