// editorButtons/BoldButton.jsx
import React from "react";
import { LuBold } from "react-icons/lu";
import Tooltip from "../Tooltip";
import Button, { ButtonEmerald } from "../ui/Button/Button";


export default function BoldButton({ editor }) {
  if (!editor) return null;

  return (
    <Tooltip text="Bold (Ctrl+B)">
      <ButtonEmerald
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`
          p-2! 
          ${editor.isActive("bold")
            ?" text-(--accent)! bg-[#FFA41F] shadow-[inset_0_4px_0px_#ffd953,inset_0_-5px_0px_#ff791a] border-2 border-(--btn-border) hover:shadow-[inset_0_5px_0px_#ffd953,inset_0_-5px_0px_#ff791a] active:translate-y-0.5 active:shadow-[inset_0_5px_0px_#ffd953,inset_0_-1px_0px_#ff791a]"
            : ""
          }
        `}
      >
        <LuBold size={16}  />
      </ButtonEmerald>
    </Tooltip>
  );
}