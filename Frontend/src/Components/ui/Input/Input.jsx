import React from "react";

const Input = ({ type = "text", value,name,readOnly ,onKeyDown,required,onChange, placeholder,onClick, className,id }) => {
  return (
    <input
      type="text"
      value={value}
      onClick={onClick}
      onKeyDown={onKeyDown}
      name={name}
      readOnly ={readOnly}
      required={required}
      onChange={onChange}
      placeholder={placeholder}
      id={id}
      className={` w-[95%] h-11 bg-(--foreground-color) border border-(--input-border-color) pl-3 text-[15px] rounded-sm outline-none ${className}`}
    />
  );
};

export default Input;
