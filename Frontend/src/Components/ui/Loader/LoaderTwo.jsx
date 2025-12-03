import React from "react";

// Custom Loader using provided CSS animation
// Props: { size, color, className }

const Loader = ({
  size = 20,
  color = "",
  className = "",
  label = "",
  labelClass = "",
  ...rest
}) => {
  const style = {
    width: size,
    aspectRatio: "1 / 1",
    "--b": "8px",
    background: `conic-gradient(#0000 10%, var(--white-color)) content-box`,
    WebkitMask:
      "repeating-conic-gradient(#0000 0deg,#000 1deg 20deg,#0000 21deg 36deg), radial-gradient(farthest-side,#0000 calc(100% - var(--b) - 1px),#000 calc(100% - var(--b)))",
    maskComposite: "intersect",
    WebkitMaskComposite: "destination-in",
  };

  return (
    <div className={`flex items-center gap-1 ${className}`} {...rest}>
      <div className="loader" style={style} />
      {label && (
        <span className={` text-(--white-color)  ${labelClass}`}>{label}</span>
      )}
    </div>
  );
};

export default Loader;