import React from "react";

export default function RadioOption({
  title,
  description = "",
  checked = true,
  disabled = false,
  onChange = () => {},
  className = "",
  name,
  value,}){
  // generate unique id for label association
  const id = React.useId();

  return (
    <label
      htmlFor={id}
      className={`w-30 z-1 flex items-center gap-2 cursor-pointer ${disabled ? "opacity-60 cursor-not-allowed" : ""} ${className} `}>
      {/* Native radio (visually hidden) */}
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        className="sr-only"
        aria-disabled={disabled}
      />

      {/* Custom radio visual */}
      <span
        aria-hidden
        className={`flex items-center justify-center h-3 w-3 rounded-full border transition-all shrink-0 ${
          checked
            ? "border-(--custom-color) bg-(--custom-color)"
            : "border-(--custom-color) bg-transparent"
        } ${disabled ? "opacity-70" : ""}`}
      >
        {/* inner dot */}
        <span
          className={` h-2.5 rounded-full transform transition-transform ${
            checked ? "scale-100 " : "scale-0 bg-transparent"
          }`}
        />
      </span>

      {/* Text block */}
      <span className="flex flex-col text-left">
        <span className="text-(--dim-white-color)">
          {title}
        </span>
        {description ? (
          <span className=" ml-6xt-sm mt-0.5">{description}</span>
        ) : null}
      </span>
    </label>
  );
}
