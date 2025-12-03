import React from "react";

export default function OrderedListButton({ editor }) {
  if (!editor) return null;

  return (
    <button
      onClick={() => editor.chain().focus().toggleOrderedList().run()}
      title="Ordered List"
    >
      1. Unorder List
    </button>
  );
}
