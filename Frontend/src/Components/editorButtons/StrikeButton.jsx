import React from "react";

export default function StrikeButton({ editor }) {
  if (!editor) return null;

  return (
    <button
      onClick={() => editor.chain().focus().toggleStrike().run()}
      className={editor.isActive("strike") ? "active-btn" : ""}
      title="Strike Through"
    >
      S
    </button>
  );
}
