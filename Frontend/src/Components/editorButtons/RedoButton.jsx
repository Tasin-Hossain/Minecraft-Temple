import React from "react";

export default function RedoButton({ editor }) {
  if (!editor) return null;

  return (
    <button onClick={() => editor.chain().focus().redo().run()} title="Redo">
      ↻
    </button>
  );
}
