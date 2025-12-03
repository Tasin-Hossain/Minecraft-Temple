import React, { useState, useRef, useEffect } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";

const Dropdown = ({ label, items = [], parentActive, className = "" }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  // CLOSE when NavLink becomes ACTIVE
  useEffect(() => {
    if (parentActive) {
      setOpen(false);
    }
  }, [parentActive]);

  // outside click close
  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 cursor-pointer hover:text-(--custom-color) "
      >
        {label}

        <MdOutlineArrowDropDown
          size={20}
          className={`text-(--arrow-color) transition-transform ${
            open ? "rotate-180" : "rotate-0"
          } ${className}`}
        />
      </button>

      {open && (
        <div
          className="absolute top-full left-0 mt-2 w-48 rounded-md 
            bg-(--accent) border border-(--border-color) shadow-lg z-20"
        >
          {items.map((item, i) => (
            <Link
              key={i}
              to={item.to || "#"}
              className="flex items-center gap-2 py-2 px-3 
                border-b border-(--border-color) hover:bg-(--secend-background-hover-color)"
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
