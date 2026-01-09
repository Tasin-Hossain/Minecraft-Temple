// editorButtons/ColorButton.jsx
import React, { useState } from "react";
import { FaPalette } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import Tooltip from "../Tooltip";
import Button, { ButtonEmerald, ButtonPrimary, ButtonRed } from "../ui/Button/Button";
import Input from "../ui/Input/Input";

export default function ColorButton({ editor }) {
  if (!editor) return null;

 const presetColors = [
  "#E0E0E0", // Light Gray
  "#C7C7C7", // Medium Gray
  "#4A4A4A", // Dark Gray
  "#000000", // Black
  "#B8312F", // Deep Red
  "#D14841", // Red
  "#FF5A5F", // Bright Red
  "#EB6B56", // Soft Red-Orange
  "#F37934", // Orange-Red
  "#FF8C42", // Bright Orange
  "#FBA026", // Orange
  "#FFBD39", // Light Orange
  "#FAC51C", // Yellow-Orange
  "#F7DA64", // Light Yellow
  "#61BD6D", // Green
  "#41A85F", // Dark Green
  "#00A885", // Teal-Green
  "#1ABC9C", // Turquoise
  "#54ACD2", // Light Blue
  "#3D8EB9", // Blue
];

  const currentColor = editor.getAttributes("textStyle").color || "";

  const [isOpen, setIsOpen] = useState(false);
  const [hexInput, setHexInput] = useState("");

  const handleColorSelect = (color) => {
    editor.chain().focus().setColor(color).run();
    setIsOpen(false);
    setHexInput("");
  };

  const handleHexSubmit = () => {
    const cleaned = hexInput.trim().toUpperCase();
    if (/^#[0-9A-F]{6}$/.test(cleaned)) {
      handleColorSelect(cleaned);
    }
  };

  return (
    <Tooltip text="Text Color">
      <div className="relative inline-block">
        {/* Main Button */}
        <ButtonEmerald
          onClick={() => setIsOpen(!isOpen)}
          className={`
            p-2! flex items-center gap-2 min-w-20 cursor-pointer select-none
            ${currentColor
              ? "text-(--accent)! bg-[#FFA41F] shadow-[inset_0_4px_0px_#ffd953,inset_0_-5px_0px_#ff791a] border-2 border-(--btn-border) hover:shadow-[inset_0_5px_0px_#ffd953,inset_0_-5px_0px_#ff791a] active:translate-y-0.5 active:shadow-[inset_0_5px_0px_#ffd953,inset_0_-1px_0px_#ff791a]"
              : ""
            }
          `}
        >
          <FaPalette size={16} />
          {currentColor ? (
            <div
              className="w-5 h-5 border border-(--accent)"
              style={{ backgroundColor: currentColor }}
            />
          ) : (
            <span className="text-[12px] font-medium">Color</span>
          )}
          <MdKeyboardArrowDown
            size={18}
            className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </ButtonEmerald>

        {/* Popup Palette */}
        {isOpen && (
          <div className="absolute top-full left-0  mt-2 w-72 bg-(--foreground-color) border-2 border-(--border-color) rounded-md shadow-2xl z-50 p-5">
            {/* Color Grid */}
            <div className="flex items-center flex-wrap ">
              {presetColors.map((color) => (
                <button
                  key={color}
                  onClick={() => handleColorSelect(color)}
                  className={`
                    w-10 h-10  transition-all duration-200 cursor-pointer
                    ${currentColor === color 
                      ? "border-white scale-110 " 
                      : "border border-(--border-color) hover:border-gray-400 hover:scale-110"
                    }
                  `}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>

            {/* HEX Section - OK নিচে */}
            <div className="space-y-3">
              <label className="block text-(--dim-white-color) mt-2">
                HEX Color
              </label>
              <Input
                type="text"
                value={hexInput}
                onChange={(e) => setHexInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleHexSubmit()}
                placeholder="#000000"
                maxLength={7}
              />
              <div className="flex items-center gap-4">
                <Button
                  onClick={handleHexSubmit}
                
                >
                  OK
                </Button>

            {/* Reset Button */}
            {currentColor && (
              <ButtonRed
                onClick={() => {
                  editor.chain().focus().unsetColor().run();
                  setIsOpen(false);
                  setHexInput("");
                }}
               
              >
                Reset Color
              </ButtonRed>
            )}
              </div>
            </div>
          </div>
        )}

        {/* Click outside to close */}
        {isOpen && (
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </Tooltip>
  );
}