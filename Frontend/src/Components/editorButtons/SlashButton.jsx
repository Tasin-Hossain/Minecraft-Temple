// /editor/extensions/SlashMenu.js
import React, { useState } from 'react'

export default function SlashButton({ editor, show }) {
  const commands = [
    { label: 'Heading 1', command: () => editor.chain().focus().toggleHeading({ level: 1 }).run() },
    { label: 'Heading 2', command: () => editor.chain().focus().toggleHeading({ level: 2 }).run() },
    { label: 'Paragraph', command: () => editor.chain().focus().setParagraph().run() },
    { label: 'Image', command: () => {/* open image upload */} },
    { label: 'Table', command: () => editor.chain().focus().insertTable({ rows:2, cols:2, withHeaderRow:true }).run() },
  ]

  if (!show) return null

  return (
    <div className="absolute bg-white border rounded shadow p-2 z-50 w-52">
      {commands.map((cmd, i) => (
        <div
          key={i}
          className="cursor-pointer p-1 hover:bg-gray-100"
          onClick={cmd.command}
        >
          {cmd.label}
        </div>
      ))}
    </div>
  )
}
