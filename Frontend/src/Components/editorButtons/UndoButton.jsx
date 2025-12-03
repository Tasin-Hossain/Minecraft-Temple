import React from "react";

export default function UndoButton({ editor }) {
  if (!editor) return null;

  return (
    <button onClick={() => editor.chain().focus().undo().run()} title="Undo">
      ↺
    </button>
  );
}
