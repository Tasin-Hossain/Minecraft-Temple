// editorButtons/UnderlineButton.jsx
import React from "react";
import { LuUnderline } from "react-icons/lu"; // আন্ডারলাইন আইকন
import Tooltip from "../Tooltip"; // তোমার Tooltip কম্পোনেন্ট
import { ButtonEmerald } from "../ui/Button/Button"; // তোমার কাস্টম ButtonEmerald

export default function UnderlineButton({ editor }) {
  if (!editor) return null;

  return (
    <Tooltip text="Underline (Ctrl+U)">
      <ButtonEmerald
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`
          p-2! 
          ${editor.isActive("underline")
            ? "text-(--accent)! bg-[#FFA41F] shadow-[inset_0_4px_0px_#ffd953,inset_0_-5px_0px_#ff791a] border-2 border-(--btn-border) hover:shadow-[inset_0_5px_0px_#ffd953,inset_0_-5px_0px_#ff791a] active:translate-y-0.5 active:shadow-[inset_0_5px_0px_#ffd953,inset_0_-1px_0px_#ff791a]"
            : ""
          }
        `}
      >
        <LuUnderline size={16} />
      </ButtonEmerald>
    </Tooltip>
  );
}