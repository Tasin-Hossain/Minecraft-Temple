// CustomEditor.jsx
import React, { useCallback, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Underline } from "@tiptap/extension-underline";
import { Link } from "@tiptap/extension-link";
import { Placeholder } from "@tiptap/extension-placeholder";
import { Image } from "@tiptap/extension-image";
import { TextStyle } from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";

import { Table } from "@tiptap/extension-table";
import { TableRow } from "@tiptap/extension-table-row";
import { TableHeader } from "@tiptap/extension-table-header";
import { TableCell } from "@tiptap/extension-table-cell";
import ImageResize from "tiptap-extension-resize-image";
import { TextAlign } from "../extensions/TextAlign";

// Toolbar buttons
import BoldButton from "../editorButtons/BoldButton";
import ItalicButton from "../editorButtons/ItalicButton";
import UnderlineButton from "../editorButtons/UnderlineButton";
import StrikeButton from "../editorButtons/StrikeButton";
import BulletListButton from "../editorButtons/BulletListButton";
import OrderedListButton from "../editorButtons/OrderedListButton";
import QuoteButton from "../editorButtons/QuoteButton";
import ImageButton from "../editorButtons/ImageButton";

import LinkButton from "../editorButtons/LinkButton";
import ColorButton from "../editorButtons/ColorButton";
import UndoButton from "../editorButtons/UndoButton";
import RedoButton from "../editorButtons/RedoButton";
import FontSizeButton from "../editorButtons/FontSizeButton";
import { FontSize } from "../extensions/FontSize"; // ✅ Correct import
import HeadingDropdown from "../editorButtons/HeadingDropdown";
import AlignButtons from "../editorButtons/AlignButtons";
import SlashButton from "../editorButtons/SlashButton";
import EmojiButton from "../editorButtons/EmojiButton";
import TableToolbar from "../editorButtons/TableToolbar";
import TableGridSelector from "../editorButtons/TableGridSelector";

export default function CustomEditor({
  value = "",
  onChange = () => {},
  className = "",
  toolbarClass = "",
  buttons = {
    bold: true,
    italic: true,
    underline: true,
    strike: true,
    bulletList: true,
    orderedList: true,
    quote: true,
    image: true,
    table: true,
    link: true,
    color: true,
    undo: true,
    redo: true,
    fontSize: true,
    heading: true,
    align: true,
    slash: true,
    emoji: true,
  },
}) {
  const [showEmoji, setShowEmoji] = useState(false);
  const [showSlash, setShowSlash] = useState(false);

  const editor = useEditor({
    editorProps: {
      attributes: {
        class:
          "prose max-w-none min-h-[200px] outline-none p-3 bg-(--tiptap-artboard-bg) border border-(--border-color) rounded-md",
        onKeyDown: (e) => {
          if (buttons.slash && e.key === "/") setShowSlash(true);
          if (e.key === "Escape") setShowSlash(false);
        },
      },
    },
    extensions: [
      StarterKit.configure({ history: true }),
      Underline,
      Link.configure({ openOnClick: true }),
      Image.configure({ allowBase64: true }),
      ImageResize,
      TextStyle,
      Color,
      FontSize,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Placeholder.configure({ placeholder: "Start typing..." }),
      Table.configure({ resizable: true }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: value,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
  });

  if (!editor) return null;

  return (
    <div className={`${className} relative`}>
      {/* Toolbar */}
      <div
        className={`sticky top-0 z-10 bg-(--tiptap-header-bg) border-b p-2 flex flex-wrap gap-2 ${toolbarClass}`}
      >
        {buttons.bold && <BoldButton editor={editor} />}
        {buttons.italic && <ItalicButton editor={editor} />}
        {buttons.underline && <UnderlineButton editor={editor} />}
        {buttons.strike && <StrikeButton editor={editor} />}
        {buttons.bulletList && <BulletListButton editor={editor} />}
        {buttons.orderedList && <OrderedListButton editor={editor} />}
        {buttons.quote && <QuoteButton editor={editor} />}
        {buttons.fontSize && <FontSizeButton editor={editor} />}
        {buttons.heading && <HeadingDropdown editor={editor} />}
        {buttons.align && <AlignButtons editor={editor} />}
        {buttons.image && <ImageButton editor={editor} maxImages={1} />}
        {buttons.table && <TableGridSelector editor={editor} />}
        <TableToolbar editor={editor} />
        {buttons.link && <LinkButton editor={editor} />}
        {buttons.color && <ColorButton editor={editor} />}
        {buttons.undo && <UndoButton editor={editor} />}
        {buttons.redo && <RedoButton editor={editor} />}
        {buttons.slash && (
          <SlashButton onClick={() => setShowSlash(!showSlash)} />
        )}
        {buttons.emoji && (
          <EmojiButton onClick={() => setShowEmoji(!showEmoji)} />
        )}
      </div>

      {/* Editor Content */}
      <EditorContent editor={editor} />
    </div>
  );
}
