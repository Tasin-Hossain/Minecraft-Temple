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
        flex items-center gap-2
        px-4 py-2 btn hover:text-pink-300
        disabled:opacity-50 disabled:cursor-not-allowed

        ${className}
      `}
    >
      {icon && (
        <span className="text-[18px]">{icon}</span>
      )}
      {children}
    </button>
  );
}


