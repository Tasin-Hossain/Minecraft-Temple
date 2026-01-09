import React, { useState } from "react";
import { BubbleMenu } from "@tiptap/react/menus";
import {
  MdDelete,
  MdTableRows,
  MdViewColumn,
  MdArrowDropDown,
  MdFormatBold,
  MdOpenInNew,
  MdEdit,
  MdLinkOff,
} from "react-icons/md";
import { ButtonEmerald, ButtonRed } from "../ui/Button/Button";

export default function TableBubbleMenu({ editor }) {
  if (!editor) return null;

  const [showRowMenu, setShowRowMenu] = useState(false);
  const [showColMenu, setShowColMenu] = useState(false);
  const isLinkActive = editor.isActive("link");
  const linkHref = isLinkActive ? editor.getAttributes("link").href || "" : "";

  return (
    <BubbleMenu
      editor={editor}
      tippyOptions={{
        duration: 150,
        placement: "bottom-end",
        offset: [0, 50],
      }}
      className="absolute top-10 -left-25 flex gap-2 bg-(--accent) border-2 border-(--border-color) p-2 rounded-md z-99999"
      shouldShow={({ editor }) =>
        editor.isActive("table") &&
        (editor.isActive("tableCell") || editor.isActive("tableHeader"))
      }
    >
      {/* Bold */}
      <ButtonEmerald
        onClick={() => editor.chain().focus().toggleBold().run()}
        className="p-2!"
      >
        <MdFormatBold size={18} />
      </ButtonEmerald>

      

      {/* Row Menu */}
      <div className="relative">
        <ButtonEmerald
          onClick={() => {
            setShowRowMenu(!showRowMenu);
            setShowColMenu(false);
          }}
          className="p-2!"
        >
          <MdTableRows size={18} />
          <MdArrowDropDown />
        </ButtonEmerald>

        {showRowMenu && (
          <div className="absolute -left-9 top-11 mt-2 w-48 bg-(--accent-foreground) border-2 border-(--border-color) rounded-md overflow-hidden z-50">
            {[
              {
                label: "Insert row above",
                action: () => editor.chain().focus().addRowBefore().run(),
              },
              {
                label: "Insert row below",
                action: () => editor.chain().focus().addRowAfter().run(),
              },
              {
                label: "Delete row",
                action: () => editor.chain().focus().deleteRow().run(),
                danger: true,
              },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  item.action();
                  setShowRowMenu(false);
                }}
                className={`
                  w-full text-left px-4 py-3 text-[13px] font-medium transition-all
                     hover:bg-[#FFA41F] hover:text-(--accent) hover:shadow-[inset_0_3px_0px_#ffd953,inset_0_-3px_0px_#ff791a] cursor-pointer
                `}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Column Menu */}
      <div className="relative">
        <ButtonEmerald
          onClick={() => {
            setShowColMenu(!showColMenu);
            setShowRowMenu(false);
          }}
          className="p-2!"
        >
          <MdViewColumn size={18} />
          <MdArrowDropDown size={16} />
        </ButtonEmerald>

        {showColMenu && (
          <div className="absolute -left-24 top-11 mt-2 w-48 bg-(--accent-foreground) border-2 border-(--border-color) rounded-md overflow-hidden z-50">
            {[
              {
                label: "Insert column left",
                action: () => editor.chain().focus().addColumnBefore().run(),
              },
              {
                label: "Insert column right",
                action: () => editor.chain().focus().addColumnAfter().run(),
              },
              {
                label: "Delete column",
                action: () => editor.chain().focus().deleteColumn().run(),
                danger: true,
              },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  item.action();
                  setShowColMenu(false);
                }}
                className={`
                  w-full text-left px-4 py-3 text-[13px] font-medium transition-all
                     hover:bg-[#FFA41F] hover:text-(--accent) hover:shadow-[inset_0_3px_0px_#ffd953,inset_0_-3px_0px_#ff791a] cursor-pointer
                `}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Link Tools - Only show when a link is selected */}
      {isLinkActive && (
        <>
          {/* Open Link */}
          <ButtonEmerald
            onClick={() => window.open(linkHref, "_blank", "noopener,noreferrer")}
            className="p-2!"
            title="Open Link"
          >
            <MdOpenInNew size={18} />
          </ButtonEmerald>

          {/* Edit Link */}
          <ButtonEmerald
            onClick={() => editor.chain().focus().extendMarkRange("link").run()}
            className="p-2!"
            title="Edit Link"
          >
            <MdEdit size={18} />
          </ButtonEmerald>

          {/* Unlink */}
          <ButtonRed
            onClick={() => editor.chain().focus().unsetLink().run()}
            className="p-2!"
            title="Remove Link"
          >
            <MdLinkOff size={18} />
          </ButtonRed>
        </>
      )}

      {/* Delete Table */}
      <ButtonRed
        onClick={() => editor.chain().focus().deleteTable().run()}
        className="p-2!"
        title="Delete Table"
      >
        <MdDelete size={18} />
      </ButtonRed>
    </BubbleMenu>
  );
}
