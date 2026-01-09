
import React from "react";

export default function Tooltip({ children, text }) {
  return (
    <div className="relative inline-block group">
      {children}

      {/* Tooltip Popup */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 text-xs font-medium text-(--white-color) bg-(--accent-foreground) rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
        {text}
        {/* ছোট ত্রিভুজ */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-gray-900"></div>
      </div>
    </div>
  );
}