// editorButtons/RedoButton.jsx
import React from "react";
import { LuRedo2 } from "react-icons/lu";
import Tooltip from "../Tooltip";
import { ButtonEmerald } from "../ui/Button/Button";

export default function RedoButton({ editor }) {
  if (!editor) return null;

  // redo possible কিনা চেক করা
  const canRedo = editor.can().chain().focus().redo().run();

  return (
    <Tooltip text="Redo (Ctrl+Y)">
      <ButtonEmerald
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!canRedo}
        className={`
          p-2! 
          ${canRedo
            ? "text-(--accent)! bg-[#FFA41F] shadow-[inset_0_4px_0px_#ffd953,inset_0_-5px_0px_#ff791a] border-2 border-(--btn-border) hover:shadow-[inset_0_5px_0px_#ffd953,inset_0_-5px_0px_#ff791a] active:translate-y-0.5 active:shadow-[inset_0_5px_0px_#ffd953,inset_0_-1px_0px_#ff791a]"
            : "opacity-50 cursor-not-allowed"
          }
        `}
      >
        <LuRedo2 size={16} />
      </ButtonEmerald>
    </Tooltip>
  );
}