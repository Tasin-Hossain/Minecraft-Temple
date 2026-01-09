import React from "react";
import { LuAlignLeft, LuAlignCenter, LuAlignRight, LuLink, LuTrash2, LuReplace, LuCrop, LuRotateCw } from "react-icons/lu";

import Tooltip from "../Tooltip";
import { ButtonEmerald } from "../ui/Button/Button";

export default function ImageBubbleMenu({ editor }) {
  if (!editor) return null;

  const handleDelete = () => editor.chain().focus().deleteSelection().run();

  const handleReplace = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          editor.chain().focus().updateAttributes("image", { src: reader.result }).run();
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  const handleLink = () => {
    const url = prompt("Enter URL 👽🛸");
    if (url) editor.chain().focus().setLink({ href: url }).run();
    else editor.chain().focus().unsetLink().run();
  };

  const setAlign = (align) => {
    let newClass = "block my-4 rounded-md";
    if (align === "left") newClass += " float-left mr-6";
    if (align === "center") newClass += " mx-auto clear-both";
    if (align === "right") newClass += " float-right ml-6";
    editor.chain().focus().updateAttributes("image", { class: newClass }).run();
  };

  return (
    <div className="flex items-center justify-center gap-4 bg-black/90 border-t-2 border-[#FFA41F] px-6 py-3 mt-2 rounded-b-lg shadow-2xl">
      {/* Alignment */}
      <Tooltip text="Align Left">
        <ButtonEmerald onClick={() => setAlign("left")} className="p-3! bg-transparent hover:bg-white/10">
          <LuAlignLeft size={20} className="text-white" />
        </ButtonEmerald>
      </Tooltip>

      <Tooltip text="Align Center 👽">
        <ButtonEmerald onClick={() => setAlign("center")} className="p-3! bg-transparent hover:bg-white/10">
          <LuAlignCenter size={20} className="text-white" />
        </ButtonEmerald>
      </Tooltip>

      <Tooltip text="Align Right">
        <ButtonEmerald onClick={() => setAlign("right")} className="p-3! bg-transparent hover:bg-white/10">
          <LuAlignRight size={20} className="text-white" />
        </ButtonEmerald>
      </Tooltip>

      {/* Link */}
      <Tooltip text="Link 🛸">
        <ButtonEmerald onClick={handleLink} className="p-3! bg-transparent hover:bg-white/10">
          <LuLink size={20} className="text-white" />
        </ButtonEmerald>
      </Tooltip>

      {/* Replace */}
      <Tooltip text="Replace">
        <ButtonEmerald onClick={handleReplace} className="p-3! bg-transparent hover:bg-white/10">
          <LuReplace size={20} className="text-white" />
        </ButtonEmerald>
      </Tooltip>

      {/* Crop (placeholder - চাইলে implement করতে পারি) */}
      <Tooltip text="Crop">
        <ButtonEmerald className="p-3! bg-transparent hover:bg-white/10">
          <LuCrop size={20} className="text-white" />
        </ButtonEmerald>
      </Tooltip>

      {/* Rotate (placeholder) */}
      <Tooltip text="Rotate">
        <ButtonEmerald className="p-3! bg-transparent hover:bg-white/10">
          <LuRotateCw size={20} className="text-white" />
        </ButtonEmerald>
      </Tooltip>

      {/* Delete - Red */}
      <Tooltip text="Delete 👾">
        <ButtonEmerald onClick={handleDelete} className="p-3! bg-transparent hover:bg-red-900/50">
          <LuTrash2 size={20} className="text-red-400" />
        </ButtonEmerald>
      </Tooltip>
    </div>
  );
}