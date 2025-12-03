import React from "react";

export default function UnderlineButton({ editor }) {
  if (!editor) return null;

  return (
    <button
      onClick={() => editor.chain().focus().toggleUnderline().run()}
      className={editor.isActive("underline") ? "active-btn" : ""}
      title="Underline (Ctrl+U)"
    >
      U
    </button>
  );
}
