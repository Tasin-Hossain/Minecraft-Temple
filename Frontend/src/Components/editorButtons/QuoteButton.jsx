import React from "react";

export default function QuoteButton({ editor }) {
  if (!editor) return null;

  return (
    <button
      onClick={() => editor.chain().focus().toggleBlockquote().run()}
      title="Quote"
    >
      ❝ Quote
    </button>
  );
}
