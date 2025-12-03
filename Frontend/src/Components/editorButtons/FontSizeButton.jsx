import React from "react";

export default function FontSizeButton({ editor }) {
  if (!editor) return null;

  const sizes = [12, 14, 16, 18, 20, 24, 30, 36];

  return (
    <select
      onChange={(e) => editor.chain().focus().setFontSize(e.target.value).run()}
      defaultValue=""
      className="border rounded px-1"
      title="Font Size"
    >
      <option value="">Font Size</option>
      {sizes.map((size) => (
        <option key={size} value={size}>
          {size}px
        </option>
      ))}
    </select>
  );
}
