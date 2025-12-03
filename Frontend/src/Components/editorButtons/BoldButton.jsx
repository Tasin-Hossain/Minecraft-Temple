import React from "react";

export default function BoldButton({ editor }) {
  if (!editor) return null;

  return (
    <button
      onClick={() => editor.chain().focus().toggleBold().run()}
      className={editor.isActive("bold") ? "active-btn" : ""}
      title="Bold (Ctrl+B)"
    >
      <b>B</b>
    </button>
  );
}
