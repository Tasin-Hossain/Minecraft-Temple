import React, { useState } from "react";
import { BubbleMenu } from "@tiptap/react/menus";
import {
  MdDelete,
  MdTableRows,
  MdViewColumn,
  MdArrowDropDown,
  MdFormatBold,
} from "react-icons/md";

export default function TableBubbleMenu({ editor }) {
  if (!editor) return null;

  const [showRowMenu, setShowRowMenu] = useState(false);
  const [showColMenu, setShowColMenu] = useState(false);

  return (
    <BubbleMenu
      editor={editor}
      tippyOptions={{
        duration: 150,
        placement: "bottom-end", // table er niche, left aligned
        offset: [0, 50], // 10px niche
      }}
      className="absolute top-10 -left-25 flex gap-1 bg-[#1c1f26] text-white shadow-xl border border-gray-700 p-2 rounded-lg"
      shouldShow={({ editor }) =>
        editor.isActive("table") &&
        (editor.isActive("tableCell") || editor.isActive("tableHeader"))
      }
    >
      {/* Bold */}
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className="p-2 hover:bg-gray-700 rounded"
      >
        <MdFormatBold size={18} />
      </button>

      {/* Delete Table */}
      <button
        onClick={() => editor.chain().focus().deleteTable().run()}
        className="p-2 hover:bg-red-700 rounded"
        title="Delete Table"
      >
        <MdDelete size={18} />
      </button>

      {/* Row Menu */}
      <div className="relative">
        <button
          onClick={() => {
            setShowRowMenu(!showRowMenu);
            setShowColMenu(false);
          }}
          className="p-2 hover:bg-gray-700 rounded flex items-center gap-1"
        >
          <MdTableRows size={18} />
          <MdArrowDropDown />
        </button>

        {showRowMenu && (
          <div className="absolute left-0 top-10 bg-[#1c1f26] border border-gray-700 rounded-lg shadow-xl p-2 w-48 z-999999">
            <button
              onClick={() => editor.chain().focus().addRowBefore().run()}
              className="w-full text-left px-2 py-1 hover:bg-gray-700 rounded"
            >
              Insert row before
            </button>

            <button
              onClick={() => editor.chain().focus().addRowAfter().run()}
              className="w-full text-left px-2 py-1 hover:bg-gray-700 rounded"
            >
              Insert row after
            </button>

            <button
              onClick={() => editor.chain().focus().deleteRow().run()}
              className="w-full text-left px-2 py-1 hover:bg-red-700 rounded"
            >
              Delete row
            </button>
          </div>
        )}
      </div>

      {/* Column Menu */}
      <div className="relative">
        <button
          onClick={() => {
            setShowColMenu(!showColMenu);
            setShowRowMenu(false);
          }}
          className="p-2 hover:bg-gray-700 rounded flex items-center gap-1"
        >
          <MdViewColumn size={18} />
          <MdArrowDropDown />
        </button>

        {showColMenu && (
          <div className="absolute left-0 top-10 bg-[#1c1f26] border border-gray-700 rounded-lg shadow-xl p-2 w-48 z-999999">
            <button
              onClick={() => editor.chain().focus().addColumnBefore().run()}
              className="w-full text-left px-2 py-1 hover:bg-gray-700 rounded"
            >
              Insert column before
            </button>

            <button
              onClick={() => editor.chain().focus().addColumnAfter().run()}
              className="w-full text-left px-2 py-1 hover:bg-gray-700 rounded"
            >
              Insert column after
            </button>

            <button
              onClick={() => editor.chain().focus().deleteColumn().run()}
              className="w-full text-left px-2 py-1 hover:bg-red-700 rounded"
            >
              Delete column
            </button>
          </div>
        )}
      </div>
    </BubbleMenu>
  );
}
