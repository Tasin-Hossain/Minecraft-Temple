// editorButtons/UndoButton.jsx
import React from "react";
import { LuUndo2 } from "react-icons/lu";
import Tooltip from "../Tooltip";
import { ButtonEmerald } from "../ui/Button/Button";

export default function UndoButton({ editor }) {
  if (!editor) return null;

  // undo possible কিনা চেক করা (Tiptap-এর built-in method)
  const canUndo = editor.can().chain().focus().undo().run();

  return (
    <Tooltip text="Undo (Ctrl+Z)">
      <ButtonEmerald
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!canUndo} // যদি undo না যায় তাহলে disable
        className={`
          p-2! 
          ${canUndo
            ? "text-(--accent)! bg-[#FFA41F] shadow-[inset_0_4px_0px_#ffd953,inset_0_-5px_0px_#ff791a] border-2 border-(--btn-border) hover:shadow-[inset_0_5px_0px_#ffd953,inset_0_-5px_0px_#ff791a] active:translate-y-0.5 active:shadow-[inset_0_5px_0px_#ffd953,inset_0_-1px_0px_#ff791a]"
            : "opacity-50 cursor-not-allowed"
          }
        `}
      >
        <LuUndo2 size={16} />
      </ButtonEmerald>
    </Tooltip>
  );
}