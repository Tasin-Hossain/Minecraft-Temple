import React from "react";


export default function Button({
  children,
  icon = null,
  className = "",
  onClick,
  type = "button",
  disabled = false,
  onChange,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      onChange={onChange}
      className={`
        flex items-center gap-2 justify-center px-6 py-3 font-semibold text-white bg-linear-to-b from-[#3c8527] to-[#3c8527] shadow-[inset_0_4px_0px_#52a535,inset_0_-5px_0px_#1a4d1a] border-2 border-(--btn-border)
        hover:brightness-110 hover:shadow-[inset_0_4px_0px_#52a535,inset_0_-5px_0px_#1a4d1a]
        active:translate-y-0.5 active:shadow-[inset_0_4px_0px_#52a535,inset_0_-1px_0px_#1a4d1a]
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

// export default function Button({
//   children,
//   icon = null,
//   className = "",
//   onClick,
//   type = "button",
//   disabled = false,
// }) {
//   return (
//     <button
//       type={type}
//       onClick={onClick}
//       disabled={disabled}
//       className={`
//         flex items-center gap-2 justify-center px-6 py-3 font-semibold text-white bg-linear-to-b from-[#3c8527] to-[#3c8527] shadow-[0_5px_0px_#1a4d1a,0_-5px_0px_#52a535] 
//         hover:brightness-110 hover:shadow-[0_5px_0px_#1a4d1a,0_-5px_0px_#52a535]
//         active:translate-y-0.5 active:shadow-[0_1px_0px_#1a4d1a,0_-5px_0px_#52a535]
//         transition-all duration-150 rounded-sm
//         disabled:opacity-50 disabled:cursor-not-allowed
//         cursor-pointer

//         ${className}
//       `}
//     >
//       {icon && <span className="text-[18px]">{icon}</span>}
//       {children}
//     </button>
//   );
// }

// export function ButtonRed({
//   children,
//   icon = null,
//   className = "",
//   onClick,
//   type = "button",
//   disabled = false,
// }) {
//   return (
//     <button
//       type={type}
//       onClick={onClick}
//       disabled={disabled}
//       className={`
//         flex items-center gap-2 justify-center px-6 py-2 font-semibold text-white bg-linear-to-b from-[#fc3737] to-[#fc5858] shadow-[0_5px_0px_#a22323,0_-5px_0px_#ee7373] 
//         hover:brightness-110 hover:shadow-[0_5px_0px_#a22323,0_-5px_0px_#ee7373]
//         active:translate-y-0.5 active:shadow-[0_1px_0px_#a22323,0_-5px_0px_#ee7373]
//         transition-all duration-150
//         disabled:opacity-50 disabled:cursor-not-allowed
//         cursor-pointer rounded-sm

//         ${className}
//       `}
//     >
//       {icon && <span className="text-[18px]">{icon}</span>}
//       {children}
//     </button>
//   );
// }

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
        flex items-center gap-2 justify-center px-6 py-3 font-semibold text-white bg-linear-to-b from-[#fc3737] to-[#fc5858] shadow-[inset_0_4px_0px_#ee7373,inset_0_-5px_0px_#a22323] border-2 border-(--btn-border)
        hover:brightness-110 hover:shadow-[inset_0_4px_0px_#ee7373,inset_0_-5px_0px_#a22323]
        active:translate-y-0.5 active:shadow-[inset_0_4px_0px_#ee7373,inset_0_-1px_0px_#a22323]
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

export function ButtonDiamond({ children, icon = null, className = "", onClick, type = "button", disabled = false }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        flex items-center gap-2 justify-center px-6 py-3 font-semibold text-white 
        bg-[#3ab3da] shadow-[inset_0_4px_0px_#66ffff,inset_0_-5px_0px_#2a8ab7] border-2 border-(--btn-border)
        hover:brightness-110 hover:shadow-[inset_0_5px_0px_#66ffff,inset_0_-5px_0px_#2a8ab7]
        active:translate-y-0.5 active:shadow-[inset_0_5px_0px_#66ffff,inset_0_-1px_0px_#2a8ab7]
        transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed
        cursor-pointer rounded-sm ${className}
      `}
    >
      {icon && <span className="text-[18px]">{icon}</span>}
      {children}
    </button>
  );
}

export function ButtonEmerald({ children, icon = null, className = "", onClick, type = "button", disabled = false }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        flex items-center gap-2 justify-center px-6 py-3 font-semibold text-white 
        bg-[#10B981] shadow-[inset_0_4px_0px_#34D399,inset_0_-5px_0px_#059669] border-2 border-(--btn-border)
        hover:brightness-110 hover:shadow-[inset_0_5px_0px_#34D399,inset_0_-5px_0px_#059669]
        active:translate-y-0.5 active:shadow-[inset_0_5px_0px_#34D399,inset_0_-1px_0px_#059669]
        transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed
        cursor-pointer rounded-sm ${className}
      `}
    >
      {icon && <span className="text-[18px]">{icon}</span>}
      {children}
    </button>
  );
}

export function ButtonNether({ children, icon = null, className = "", onClick, type = "button", disabled = false }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        flex items-center gap-2 justify-center px-6 py-3 font-semibold text-white 
        bg-[#c74ebd] shadow-[inset_0_4px_0px_#f38caa,inset_0_-5px_0px_#a03a9b] 
        hover:brightness-110 hover:shadow-[inset_0_5px_0px_#f38caa,inset_0_-5px_0px_#a03a9b]
        active:translate-y-0.5 active:shadow-[inset_0_5px_0px_#f38caa,inset_0_-1px_0px_#a03a9b]
        transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed
        cursor-pointer rounded-sm ${className}
      `}
    >
      {icon && <span className="text-[18px]">{icon}</span>}
      {children}
    </button>
  );
}
export function CategoryButton({
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
        flex items-center gap-2 justify-center px-2 uppercase text-(--white-color) text-[13px] font-bold bg-[#29a58c] shadow-[inset_0_4px_0px_#5af0d2,inset_0_-5px_0px_#2eb199] border-2 border-(--btn-border)
        hover:brightness-110 hover:shadow-[inset_0_4px_0px_#5af0d2,inset_0_-5px_0px_#2eb199]
        active:translate-y-0.5 active:shadow-[inset_0_4px_0px_#5af0d2,inset_0_-1px_0px_#2eb199]
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
export function ReportButton({
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
        flex items-center gap-2 justify-center px-5 py-2 rounded cursor-pointer  text-(--white-color) text-[13px]  bg-(--accent) 
        

        ${className}
      `}
    >
      {icon && <span className="text-[18px]">{icon}</span>}
      {children}
    </button>
  );
}
