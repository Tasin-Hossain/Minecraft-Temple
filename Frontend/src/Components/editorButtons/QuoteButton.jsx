// editorButtons/QuoteButton.jsx
import React from "react";
import { LuQuote } from "react-icons/lu";
import Tooltip from "../Tooltip";
import { ButtonEmerald } from "../ui/Button/Button";

export default function QuoteButton({ editor }) {
  if (!editor) return null;

  return (
    <Tooltip text="Block Quote (Ctrl+Shift+Q)">
      <ButtonEmerald
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`
          p-2! 
          ${editor.isActive("blockquote")
            ? "text-(--accent)! bg-[#FFA41F] shadow-[inset_0_4px_0px_#ffd953,inset_0_-5px_0px_#ff791a] border-2 border-(--btn-border) hover:shadow-[inset_0_5px_0px_#ffd953,inset_0_-5px_0px_#ff791a] active:translate-y-0.5 active:shadow-[inset_0_5px_0px_#ffd953,inset_0_-1px_0px_#ff791a]"
            : ""
          }
        `}
      >
        <LuQuote size={16} />
      </ButtonEmerald>
    </Tooltip>
  );
}