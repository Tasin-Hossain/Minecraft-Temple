import React from "react";

export default function BulletListButton({ editor }) {
  if (!editor) return null;

  return (
    <button
      onClick={() => editor.chain().focus().toggleBulletList().run()}
      title="Bullet List"
    >
      • Bullet List
    </button>
  );
}
