import React, { useState, useRef, useEffect } from "react";

/**
 * SelectInput
 * Props:
 * - options: [{ value, label, disabled, isHeader }]
 * - value, onChange
 * - placeholder, className
 * - iconUrl (optional) -> example: "/mnt/data/763957c8-e70e-4fc6-bb93ae127aba.png"
 */

export default function SelectInput({
  options = [],
  value,
  onChange = () => {},
  placeholder = "Select...",
  className = "",
  iconUrl,
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    function onDoc(e) {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const selected = options.find((o) => o.value === value);

  return (
    <div className={`relative text-sm `} ref={rootRef}>
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`${className} flex items-center justify-between w-[18%] h-10 bg-(--foreground-color) border border-(--input-border-color) pl-3 text-[15px] rounded-sm outline-none`}
      >
        <div className="flex items-center gap-3">
          {iconUrl && (
            <img
              src={iconUrl}
              alt=""
              className="w-7 h-7 rounded-sm object-cover border border-(--border-color)"
            />
          )}
          <div className="flex items-center gap-2">
            <div className="truncate text-[14px]">
              {selected ? selected.label : placeholder}
            </div>
            {selected && (
              <div className=" mt-0.5 text-[14px]">
                {selected.disabled ? "(Unavailable)" : "(Selected)"}
              </div>
            )}
          </div>
        </div>

        <svg
          className={`w-4 h-4 m-3 transform transition-transform ${open ? "rotate-180" : ""
            }`}
          viewBox="0 0 20 20"
          fill="none"
        >
          <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* dropdown */}
      {open && (
        <ul
          role="listbox"
          aria-activedescendant={selected ? `opt-${selected.value}` : undefined}
          tabIndex={-1}
          className="absolute z-30 mt-2 w-full max-h-56 overflow-auto rounded-md border border-(--border-color) bg-(--foreground-color) text-gray-100 shadow-lg"
        >
          {options.map((opt, idx) => {
            if (opt.isHeader) {
              return (
                <li
                  key={`header-${idx}`}
                  className="px-3 text-(--dim-white-color) text-[14px] py-2 bg-transparent border-b border-(--border-color)"
                >
                  {opt.label}
                </li>
              );
            }

            return (
              <li
                id={`opt-${opt.value}`}
                key={opt.value ?? idx}
                role="option"
                aria-selected={value === opt.value}
                onClick={() => {
                  if (opt.disabled) return;
                  onChange(opt.value);
                  setOpen(false);
                }}
                className={`flex items-center text-(--dim-white-color) justify-between gap-3 px-3 py-2 cursor-pointer hover:bg-(--custom-color) ${opt.disabled ? "opacity-50 cursor-not-allowed" : ""
                  } ${value === opt.value ? "bg-(--accent) text-(--white-color)" : ""}`}
              >
                <div className="truncate">
                  <div className="font-medium truncate">{opt.label}</div>
                  {opt.sub && <div className="">{opt.sub}</div>}
                </div>

                {value === opt.value && (
                  <svg className="w-4 h-4 text-blue-400 shrink-0" viewBox="0 0 20 20" fill="none">
                    <path d="M5 10l3 3L15 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
