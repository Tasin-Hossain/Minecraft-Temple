import React, { useState } from "react";
import { FaTable } from "react-icons/fa";
import Tooltip from "../Tooltip";
import { ButtonEmerald } from "../ui/Button/Button";

export default function TableGridSelector({ editor }) {
  if (!editor) return null;

  const [showGrid, setShowGrid] = useState(false);
  const [hoverRow, setHoverRow] = useState(0);
  const [hoverCol, setHoverCol] = useState(0);

  const rows = 8;
  const cols = 10;

  const createTable = () => {
    if (hoverRow === 0 || hoverCol === 0) return;
    editor
      .chain()
      .focus()
      .insertTable({ rows: hoverRow, cols: hoverCol, withHeaderRow: true })
      .run();
    setShowGrid(false);
    setHoverRow(0);
    setHoverCol(0);
  };

  return (
    <div className="relative inline-block">
      <Tooltip text="Insert Table">
        <ButtonEmerald
          onClick={() => setShowGrid(!showGrid)}
          className="p-2!"
        >
          <FaTable size={18} />
        </ButtonEmerald>
      </Tooltip>

      {showGrid && (
        <>
          {/* Outside click */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setShowGrid(false)}
          />

          <div className="absolute top-full left-0 mt-2 z-50 bg-(--accent-foreground) border-2 border-(--border-color) rounded- p-4">
            <div className="text-center text-(--dim-white-color) mb-3 text-sm font-medium">
              {hoverRow || 1} × {hoverCol || 1} Table
            </div>

            <div
              className="grid gap-1"
              style={{ gridTemplateColumns: `repeat(${cols}, 24px)` }}
            >
              {Array.from({ length: rows }, (_, r) =>
                Array.from({ length: cols }, (_, c) => {
                  const active = r < hoverRow && c < hoverCol;
                  return (
                    <div
                      key={`${r}-${c}`}
                      onMouseEnter={() => {
                        setHoverRow(r + 1);
                        setHoverCol(c + 1);
                      }}
                      onClick={createTable}
                      className={`
                        w-4 h-4 rounded- border-2 cursor-pointer 
                        ${active
                          ? "bg-(--custom-color) border-(--border-color) rounded-sm "
                          : "border border-(--border-color) rounded-sm"
                        }
                      `}
                    />
                  );
                })
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}