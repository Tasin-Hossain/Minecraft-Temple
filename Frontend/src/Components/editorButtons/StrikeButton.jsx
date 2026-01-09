// editorButtons/StrikethroughButton.jsx
import React from "react";
import { LuStrikethrough } from "react-icons/lu"; // lucide-react থেকে strikethrough আইকন
import Tooltip from "../Tooltip"; // তোমার কাস্টম Tooltip
import { ButtonEmerald } from "../ui/Button/Button"; // তোমার কাস্টম ButtonEmerald

export default function StrikethroughButton({ editor }) {
  if (!editor) return null;

  return (
    <Tooltip text="Strikethrough">
      <ButtonEmerald
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`
          p-2! 
          ${editor.isActive("strike")
            ? "text-(--accent)! bg-[#FFA41F] shadow-[inset_0_4px_0px_#ffd953,inset_0_-5px_0px_#ff791a] border-2 border-(--btn-border) hover:shadow-[inset_0_5px_0px_#ffd953,inset_0_-5px_0px_#ff791a] active:translate-y-0.5 active:shadow-[inset_0_5px_0px_#ffd953,inset_0_-1px_0px_#ff791a]"
            : ""
          }
        `}
      >
        <LuStrikethrough size={16} />
      </ButtonEmerald>
    </Tooltip>
  );
}