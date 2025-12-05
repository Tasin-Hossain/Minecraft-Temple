import React, { useState, useRef, useEffect } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";

export const Dropdown = ({ label, items = [], parentActive, className = "" }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  // Close when NavLink becomes active
  useEffect(() => {
    if (parentActive) {
      setOpen(false);
    }
  }, [parentActive]);

  // Close dropdown on outside click
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
        className="flex items-center gap-1 cursor-pointer hover:text-(--custom-color)"
      >
        {label}
        <MdOutlineArrowDropDown
          size={20}
          className={`text-(--dim-white-color) transition-transform ${
            open ? "rotate-180 text-(--custom-color)!" : "rotate-0"
          } ${className}`}
        />
      </button>

      {open && (
        <div
          className="absolute top-7 -left-20 mt-2 w-48 rounded-md 
          bg-(--accent) border-t-5 border-(--custom-color) shadow-lg z-20 "
        >
          <div className="mt-1 bg-">
            {/* Arrow span */}
            <div className="arrowspan absolute -top-3 left-20.5"></div>

            {items.map((item, i) => (
              <Link
                key={i}
                to={item.to || "#"}
                className="flex items-center gap-2 py-2  px-3 hover:bg-(--secend-background-hover-color) text-(--dim-white-color)"
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-5 h-4 object-contain"
                  />
                ) : (
                  item.icon
                )}
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};


