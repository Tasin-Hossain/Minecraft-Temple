import React from "react";

export default function LinkButton({ editor }) {
  if (!editor) return null;

  const handleLink = () => {
    const url = prompt("Enter URL");
    if (url) editor.chain().focus().setLink({ href: url }).run();
  };

  return (
    <button onClick={handleLink} title="Insert Link">
      🔗 Link
    </button>
  );
}
