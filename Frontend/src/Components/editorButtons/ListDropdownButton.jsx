import React, { useState } from "react";
import {
  LuListOrdered,
  LuList,
  LuArrowRight,
  LuArrowLeft,
  LuSquare,
  LuArrowLeftRight,
} from "react-icons/lu";

import Tooltip from "../Tooltip";
import { ButtonEmerald } from "../ui/Button/Button";

export default function ListDropdownButton({ editor }) {
  if (!editor) return null;

  const [open, setOpen] = useState(false);

  const items = [
    {
      icon: LuListOrdered,
      label: "Ordered List",
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: editor.isActive("orderedList"),
    },
    {
      icon: LuList,
      label: "Unordered List",
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      isActive: editor.isActive("bulletList"),
    },
    {
      icon: LuSquare,
      label: "Task List",
      onClick: () => editor.chain().focus().toggleTaskList().run(),
      isActive: editor.isActive("taskList"),
    },
    { type: "divider" },
    {
      icon: LuArrowRight,
      label: "Indent",
      onClick: () => editor.chain().focus().sinkListItem("listItem").run(),
      disabled: !editor.can().sinkListItem("listItem"),
    },
    {
      icon: LuArrowLeft,
      label: "Outdent",
      onClick: () => editor.chain().focus().liftListItem("listItem").run(),
      disabled: !editor.can().liftListItem("listItem"),
    },
    {
      icon: LuArrowLeftRight,
      label: "Toggle List Type",
      onClick: () => {
        if (editor.isActive("bulletList")) {
          editor.chain().focus().toggleOrderedList().run();
        } else if (editor.isActive("orderedList")) {
          editor.chain().focus().toggleBulletList().run();
        }
      },
      disabled: !editor.isActive("bulletList") && !editor.isActive("orderedList"),
    },
  ];

  const isListActive =
    editor.isActive("bulletList") ||
    editor.isActive("orderedList") ||
    editor.isActive("taskList");

  return (
    <div className="relative inline-block">
      <Tooltip text="Lists">
        <ButtonEmerald
          onClick={() => setOpen(!open)}
          className={`
            p-2! transition-all duration-150 rounded-md
            ${isListActive
              ? "text-(--accent)! bg-[#FFA41F] shadow-[inset_0_4px_0px_#ffd953,inset_0_-5px_0px_#ff791a] border-2 border-(--btn-border) hover:shadow-[inset_0_5px_0px_#ffd953,inset_0_-5px_0px_#ff791a] active:translate-y-0.5 active:shadow-[inset_0_5px_0px_#ffd953,inset_0_-1px_0px_#ff791a]"
              : ""
            }
          `}
        >
          <LuList size={18} />
        </ButtonEmerald>
      </Tooltip>

      {open && (
        <>
          {/* বাইরে ক্লিক করলে ড্রপডাউন বন্ধ */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          />

          {/* ড্রপডাউন মেনু */}
          <div className="absolute top-full left-0 mt-2 z-50 w-40 bg-(--accent-foreground) border-2 border-(--border-color) rounded-md overflow-hidden">
            {items.map((item, index) => {
              if (item.type === "divider") {
                return <div key={index} className="h-px mx-4 my-2" />;
              }

              return (
                <button
                  key={index}
                  onClick={() => {
                    item.onClick();
                    setOpen(false);
                  }}
                  disabled={item.disabled}
                  className={`
                    w-full flex items-center gap-4 px-4 py-3 text-left transition-all
                    ${item.isActive
                      ? "bg-[#FFA41F] text-(--accent) shadow-[inset_0_3px_0px_#ffd953,inset_0_-3px_0px_#ff791a]"
                      : "text-(--dim-white-color) hover:bg-[#FFA41F] hover:text-(--accent) hover:shadow-[inset_0_3px_0px_#ffd953,inset_0_-3px_0px_#ff791a]"
                    }
                    ${item.disabled
                      ? "opacity-50 cursor-not-allowed"
                      : "cursor-pointer"
                    }
                  `}
                >
                  <item.icon size={16} />
                  <span className="text-[12px] font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}