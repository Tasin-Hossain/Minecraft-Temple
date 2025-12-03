import React from "react";

export default function ItalicButton({ editor }) {
  if (!editor) return null;

  return (
    <button
      onClick={() => editor.chain().focus().toggleItalic().run()}
      className={editor.isActive("italic") ? "active-btn" : ""}
      title="Italic (Ctrl+I)"
    >
      <i>I</i>
    </button>
  );
}
