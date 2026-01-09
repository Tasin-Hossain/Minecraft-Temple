// CheckboxOption.jsx
import React from "react";

const CheckboxOption = ({
  title,
  description,
  checked = true,
  disabled = false,
  onChange,
  className,
}) => {
  return (
    <label
      className={`w-100 flex flex-col cursor-pointer transition-all duration-200 ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className || ""}`}
    >
      <div className="flex items-center gap-2">
        <div
          className={`w-3.5 h-3.5  border-2 border-(--custom-color) shrink-0 flex items-center justify-center cursor-pointer ${
            checked ? "bg-center bg-no-repeat" : "bg-transparent"
          }`}
          style={
            checked
              ? {
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='none' stroke='%23ffac11' stroke-width='2' d='M6 10l3 3 6-6'/%3E%3C/svg%3E\")",
                }
              : {}
          }
        >
          <input
            type="checkbox"
            checked={checked}
            disabled={disabled}
            onChange={onChange ? onChange : undefined}
            readOnly={!onChange} // avoids warning
            className="w-0 h-0 opacity-0 absolute"
          />
        </div>
        <span className="text-[13px] text-(--dim-white-color)">{title}</span>
      </div>
      {description && <span className="ml-9">{description}</span>}
    </label>
  );
};

export default CheckboxOption;
