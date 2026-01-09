import React, { useState } from "react";
import { LuLink } from "react-icons/lu";

import Tooltip from "../Tooltip";
import Button, { ButtonEmerald } from "../ui/Button/Button";
import Input from "../ui/Input/Input";

export default function LinkButton({ editor }) {
  if (!editor) return null;

  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");
  const [text, setText] = useState("");

  const isLinkActive = editor.isActive("link");

  const handleUpdate = () => {
    if (url.trim()) {
      // Set or update link
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url.trim(), target: "_blank" })
        .run();

      // If custom text provided, insert it (optional enhancement)
      if (text.trim()) {
        editor.chain().focus().insertContent(text.trim()).run();
      }
    } else {
      // Remove link if URL empty
      editor.chain().focus().unsetLink().run();
    }
    setOpen(false);
    setUrl("");
    setText("");
  };

  return (
    <div className="relative inline-block">
      <Tooltip text="Insert / Edit Link">
        <ButtonEmerald
          onClick={() => setOpen(!open)}
          className={`
            p-2! transition-all duration-150 rounded-md
            ${isLinkActive
              ? "text-(--accent)! bg-[#FFA41F] shadow-[inset_0_4px_0px_#ffd953,inset_0_-5px_0px_#ff791a] border-2 border-(--btn-border) hover:shadow-[inset_0_5px_0px_#ffd953,inset_0_-5px_0px_#ff791a] active:translate-y-0.5 active:shadow-[inset_0_5px_0px_#ffd953,inset_0_-1px_0px_#ff791a]"
              : ""
            }
          `}
        >
          <LuLink size={18} />
        </ButtonEmerald>
      </Tooltip>

      {open && (
        <>
          {/* Outside click to close */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => {
              setOpen(false);
              setUrl("");
              setText("");
            }}
          />

          {/* Dropdown modal-like panel */}
          <div className="absolute top-full left-0 mt-2 z-50 w-80 bg-(--accent-foreground) border-2 border-(--border-color) rounded-md overflow-hidden shadow-2xl">
            <div className="p-5 flex flex-col gap-4">
              {/* URL Input */}
              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-medium text-(--dim-white-color) opacity-80">
                  URL
                </label>
                <Input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https:..."
                  className="w-full"
                  autoFocus
                />
              </div>

              {/* Text Input (optional) */}
              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-medium text-(--dim-white-color) opacity-80">
                  Text (optional)
                </label>
                <Input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Text"
                  className="w-full"
                />
              </div>

              {/* Update Button */}
              <Button
                onClick={handleUpdate}
              
              >
                Insert
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}