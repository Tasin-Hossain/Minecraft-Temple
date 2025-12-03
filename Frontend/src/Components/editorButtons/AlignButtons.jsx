import React from "react";

export default function AlignButtons({ editor }) {
  if (!editor) return null;

  return (
    <>
      <button onClick={() => editor.chain().focus().setTextAlign("left").run()} title="Align Left">⬅️</button>
      <button onClick={() => editor.chain().focus().setTextAlign("center").run()} title="Align Center">⏺</button>
      <button onClick={() => editor.chain().focus().setTextAlign("right").run()} title="Align Right">➡️</button>
      <button onClick={() => editor.chain().focus().setTextAlign("justify").run()} title="Justify">⏹</button>
    </>
  );
}
