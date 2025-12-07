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
        transition-all duration-150 rounded-sm
        disabled:opacity-50 disabled:cursor-not-allowed
        cursor-pointer

        ${className}
      `}
    >
      {icon && <span className="text-[18px]">{icon}</span>}
      {children}
    </button>
  );
}

export function ButtonRed({
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
        flex items-center gap-2 justify-center px-6 py-2 font-semibold text-white bg-linear-to-b from-[#fc3737] to-[#fc5858] shadow-[0_5px_0px_#a22323,0_-5px_0px_#ee7373]
        hover:brightness-110 hover:shadow-[0_5px_0px_#a22323,0_-5px_0px_#ee7373]
        active:translate-y-0.5 active:shadow-[0_1px_0px_#a22323,0_-5px_0px_#ee7373]
        transition-all duration-150
        disabled:opacity-50 disabled:cursor-not-allowed
        cursor-pointer rounded-sm

        ${className}
      `}
    >
      {icon && <span className="text-[18px]">{icon}</span>}
      {children}
    </button>
  );
}

export function ButtonPrimary({
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
        flex items-center gap-2 justify-center px-6 py-3 font-semibold text-white bg-[#FFA41F] shadow-[inset_0_4px_0px_#ffd953,inset_0_-5px_0px_#ff791a] border-2 border-(--btn-border)
        hover:brightness-110 hover:shadow-[inset_0_5px_0px_#ffd953,inset_0_-5px_0px_#ff791a]
        active:translate-y-0.5 active:shadow-[inset_0_5px_0px_#ffd953,inset_0_-1px_0px_#ff791a]
        transition-all duration-150
        disabled:opacity-50 disabled:cursor-not-allowed
        cursor-pointer rounded-sm

        ${className}
      `}
    >
      {icon && <span className="text-[18px]">{icon}</span>}
      {children}
    </button>
  );
}
