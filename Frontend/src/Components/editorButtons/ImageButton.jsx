import React, { useCallback, useRef, useState } from "react";
import { LuUpload } from "react-icons/lu";

import Tooltip from "../Tooltip";
import { ButtonEmerald } from "../ui/Button/Button";

export default function ImageButton({ editor, maxImages = 5 }) {
  if (!editor) return null;

  const [open, setOpen] = useState(false);
  const dropRef = useRef(null);

  // Count images in editor
  const countImages = (nodes) => {
    if (!nodes) return 0;
    let count = 0;
    nodes.forEach((node) => {
      if (node.type === "image") count += 1;
      if (node.content) count += countImages(node.content);
    });
    return count;
  };

  const currentImages = countImages(editor.getJSON().content);
  const remainingSlots = maxImages - currentImages;
  const isAtLimit = remainingSlots <= 0;

  const handleFiles = useCallback((files) => {
    if (isAtLimit) {
      alert(`You can only add up to ${maxImages} images!`);
      return;
    }

    const validFiles = Array.from(files).slice(0, remainingSlots);

    if (validFiles.length === 0) return;

    validFiles.forEach((file) => {
      if (!file.type.startsWith("image/")) return;

      const reader = new FileReader();
      reader.onload = () => {
        editor.chain().focus().setImage({ src: reader.result }).run();
      };
      reader.readAsDataURL(file);
    });

    setOpen(false);
  }, [editor, isAtLimit, remainingSlots, maxImages]);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    handleFiles(e.dataTransfer.files);
  }, [handleFiles]);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleClick = () => {
    if (isAtLimit) {
      alert(`Max ${maxImages} images reached!`);
      return;
    }

    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.multiple = true;
    input.onchange = (e) => handleFiles(e.target.files);
    input.click();
    setOpen(false);
  };

  return (
    <div className="relative inline-block">
      <Tooltip text="Upload Image 👾">
        <ButtonEmerald
          onClick={() => !isAtLimit && setOpen(!open)}
          className={`
            p-2! transition-all duration-150 rounded-md relative
            ${currentImages > 0
              ? "text-(--accent)! bg-[#FFA41F] shadow-[inset_0_4px_0px_#ffd953,inset_0_-5px_0px_#ff791a] border-2 border-(--btn-border) hover:shadow-[inset_0_5px_0px_#ffd953,inset_0_-5px_0px_#ff791a] active:translate-y-0.5 active:shadow-[inset_0_5px_0px_#ffd953,inset_0_-1px_0px_#ff791a]"
              : ""
            }
            ${isAtLimit ? "opacity-60 cursor-not-allowed" : ""}
          `}
        >
          <LuUpload size={18} />
          {currentImages > 0 && (
            <span className="absolute -top-1 -right-1 text-[10px] font-bold bg-(--accent) px-1 rounded">
              {currentImages}/{maxImages}
            </span>
          )}
        </ButtonEmerald>
      </Tooltip>

      {open && !isAtLimit && (
        <>
          {/* Outside click close */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          />

          {/* Drop zone panel */}
          <div className="absolute top-full left-0 mt-2 z-50 w-80 bg-(--accent-foreground) border-2 border-dashed border-(--border-color) rounded-xl overflow-hidden shadow-2xl">
            <div
              ref={dropRef}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onClick={handleClick}
              className="p-10 flex flex-col items-center justify-center gap-4 text-center cursor-pointer hover:bg-black/20 transition-all"
            >
              <LuUpload size={56} className=" opacity-80" />

              <div className="space-y-2">
                <p className=" text-(--dim-white-color)">
                  Drop image
                </p>
                <p className="text-[12px] opacity-70">
                  (Or click here)
                </p>
              </div>

              <p className="text-[12px] opacity-60 mt-4">
                Remaining: <span className="text-(--custom-color) font-bold">{remainingSlots}</span> / {maxImages}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}