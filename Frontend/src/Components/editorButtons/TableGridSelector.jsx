import React, { useState } from "react";
import { FaTable } from "react-icons/fa";

export default function TableGridSelector({ editor }) {
  const [showGrid, setShowGrid] = useState(false);
  const [hoverRow, setHoverRow] = useState(0);
  const [hoverCol, setHoverCol] = useState(0);

  if (!editor) return null;

  const rows = 10;
  const cols = 10;

  const createTable = () => {
    editor
      .chain()
      .focus()
      .insertTable({
        rows: hoverRow,
        cols: hoverCol,
        withHeaderRow: true,
      })
      .run();

    setShowGrid(false); // close menu after create
  };

  return (
    <div className="relative inline-block">
      {/* Button */}
      <button
        onClick={() => setShowGrid((prev) => !prev)}
        className="p-2 bg-gray-700 rounded hover:bg-gray-600"
      >
        <FaTable size={18} />
      </button>

      {/* ❗ Only show when user clicks, otherwise return null */}
      {showGrid && (
        <div
          className="absolute top-10 left-0 bg-gray-800 p-4 rounded shadow-xl z-50"
          onMouseLeave={() => setShowGrid(false)}
        >
          <div className="text-center text-white mb-2">
            {hoverRow} × {hoverCol}
          </div>

          <div className="grid gap-1"
            style={{
              gridTemplateColumns: `repeat(${cols}, 20px)`,
            }}
          >
            {[...Array(rows)].map((_, r) =>
              [...Array(cols)].map((_, c) => {
                const active = r < hoverRow && c < hoverCol;

                return (
                  <div
                    key={`${r}-${c}`}
                    onMouseEnter={() => {
                      setHoverRow(r + 1);
                      setHoverCol(c + 1);
                    }}
                    onClick={createTable}
                    className={`w-5 h-5 border rounded-sm cursor-pointer ${
                      active ? "bg-blue-500 border-blue-400" : "border-gray-600"
                    }`}
                  ></div>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}
