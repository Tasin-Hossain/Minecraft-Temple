import React from "react";

export default function ColorButton({ editor }) {
  if (!editor) return null;

  return (
    <input
      type="color"
      onChange={(e) => editor.chain().focus().setColor(e.target.value).run()}
      title="Text Color"
    />
  );
}
