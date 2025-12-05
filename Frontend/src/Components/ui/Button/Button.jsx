import React from "react";

export default function Button({
  children,
  icon = null,
  className = "",
  onClick,
  type = "button",
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        flex items-center gap-2 justify-center px-6 py-2 font-semibold text-white bg-linear-to-b from-[#3c8527] to-[#3c8527] shadow-[0_5px_0px_#1a4d1a,0_-5px_0px_#52a535]
        hover:brightness-110 hover:shadow-[0_5px_0px_#1a4d1a,0_-5px_0px_#52a535]
        active:translate-y-0.5 active:shadow-[0_1px_0px_#1a4d1a,0_-5px_0px_#52a535]
        transition-all duration-150
        disabled:opacity-50 disabled:cursor-not-allowed

        ${className}
      `}
    >
      {icon && <span className="text-[18px]">{icon}</span>}
      {children}
    </button>
  );
}
