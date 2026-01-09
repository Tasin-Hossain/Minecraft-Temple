import React, { useCallback, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Underline } from "@tiptap/extension-underline";
import { Link } from "@tiptap/extension-link";
import { Placeholder } from "@tiptap/extension-placeholder";
import { Image } from "@tiptap/extension-image";
import { TextStyle } from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import { BubbleMenu } from "@tiptap/react/menus";
import { Table } from "@tiptap/extension-table";
import { TableRow } from "@tiptap/extension-table-row";
import { TableHeader } from "@tiptap/extension-table-header";
import { TableCell } from "@tiptap/extension-table-cell";
import { TextAlign } from "../extensions/TextAlign";
import ImageResize from "tiptap-extension-resize-image";
// Toolbar buttons
import BoldButton from "../editorButtons/BoldButton";
import ItalicButton from "../editorButtons/ItalicButton";
import UnderlineButton from "../editorButtons/UnderlineButton";
import StrikeButton from "../editorButtons/StrikeButton";

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
import ListDropdownButton from "../editorButtons/ListDropdownButton";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import ImageBubbleMenu from "../editorButtons/ImageBubbleMenu";

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
          "prose max-w-none min-h-[200px] outline outline-(--border-color) mb-2 p-3 bg-(--accent-foreground)",
        onKeyDown: (e) => {
          if (buttons.slash && e.key === "/") setShowSlash(true);
          if (e.key === "Escape") setShowSlash(false);
        },
      },
    },
    extensions: [
      StarterKit.configure({
        history: true,
      }),
      Underline,
      Link.configure({ openOnClick: true }),
      // Image extension configure করো (ImageResize fully remove করো যদি থাকে)
      Image.configure({
        allowBase64: true,
        inline: false, // block level
        resize: {
          enabled: true,
          directions: ["bottom-right"], // শুধু corner handle (simple)
          minWidth: 100,
          minHeight: 100,
          alwaysPreserveAspectRatio: true, // ratio maintain (Shift চেপে free)
        },
        HTMLAttributes: {
          class: "block my-4 mx-auto rounded-md", // default center
        },
      }),
      ImageResize.configure({
        allowBase64: true, // তোমার upload-এর জন্য
        inline: false, // block level image
      }),
      TextStyle,
      Color,
      FontSize,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Placeholder.configure({ placeholder: "Start typing..." }),
      Table.configure({ resizable: true }),
      TableRow,
      TableHeader,
      TableCell,
      TaskList,
      TaskItem.configure({
        nested: true, // nested task list চাইলে
      }),
    ],
    content: value,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
  });

  if (!editor) return null;

  return (
    <div className={`${className} relative `}>
      {/* Toolbar */}
      <div
        className={`sticky top-0 z-10 bg-(--accent) border border-(--border-color) p-3 flex flex-wrap gap-2 ${toolbarClass}`}
      >
        {buttons.bold && <BoldButton editor={editor} />}
        {buttons.italic && <ItalicButton editor={editor} />}
        {buttons.underline && <UnderlineButton editor={editor} />}
        {buttons.strike && <StrikeButton editor={editor} />}
        {buttons.fontSize && <FontSizeButton editor={editor} />}
        {buttons.color && <ColorButton editor={editor} />}
        <ListDropdownButton editor={editor} />
        {buttons.align && <AlignButtons editor={editor} />}
        {buttons.heading && <HeadingDropdown editor={editor} />}
        {buttons.link && <LinkButton editor={editor} />}
        {buttons.image && <ImageButton editor={editor} maxImages={1} />}
        {buttons.table && <TableGridSelector editor={editor} />}
        <TableToolbar editor={editor} />
        {buttons.quote && <QuoteButton editor={editor} />}
        {buttons.undo && <UndoButton editor={editor} />}
        {buttons.redo && <RedoButton editor={editor} />}
        {buttons.slash && (
          <SlashButton onClick={() => setShowSlash(!showSlash)} />
        )}
        {buttons.emoji && (
          <EmojiButton onClick={() => setShowEmoji(!showEmoji)} />
        )}
      </div>

      {/* Bubble Menu + Editor Content */}
      {editor && (
        <>
          <BubbleMenu
            editor={editor}
            options={{
              placement: "bottom", 
            }}
            shouldShow={({ state }) => {
              const { from } = state.selection;
              const node = state.doc.nodeAt(from);
              return node && node.type.name === "image";
            }}
          >
            <ImageBubbleMenu editor={editor} />
          </BubbleMenu>

          <EditorContent editor={editor} />
        </>
      )}
    </div>
  );
}
