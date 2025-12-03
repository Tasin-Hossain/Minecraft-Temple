// /editor/extensions/EmojiPicker.jsx
import React from 'react';

const emojis = ["😀","😂","😍","🥰","😎","😢","👍","👎","🔥","💯"];

export default function EmojiPicker({ show, onSelect }) {
  if (!show) return null;

  return (
    <div className="absolute z-50 bg-white border rounded p-2 flex flex-wrap gap-1 w-40 shadow-lg">
      {emojis.map((e, i) => (
        <button
          key={i}
          className="p-1 hover:bg-gray-100 rounded"
          onClick={() => onSelect(e)}
        >
          {e}
        </button>
      ))}
    </div>
  );
}
