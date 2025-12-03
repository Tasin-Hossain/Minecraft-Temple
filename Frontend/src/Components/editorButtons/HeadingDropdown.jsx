import React from "react";

export default function HeadingDropdown({ editor }) {
  if (!editor) return null;

  const handleChange = (e) => {
    const val = parseInt(e.target.value);
    if (val === 0) editor.chain().focus().setParagraph().run();
    else editor.chain().focus().toggleHeading({ level: val }).run();
  };

  return (
    <select onChange={handleChange} defaultValue="" className="border rounded px-1" title="Heading">
      <option value="">Heading</option>
      <option value="1">H1</option>
      <option value="2">H2</option>
      <option value="3">H3</option>
      <option value="0">Paragraph</option>
    </select>
  );
}
