import React from "react";
import Dropdown from '../Dropdown/Dropdown'
import { Link } from "react-router-dom";

const NavLinks = ({ leftLinks = [], rightLinks = [] }) => {
  return (
    <nav className="border-b border-(--border-color) bg-(--accent)">
      <div className="container py-3">
        <div className="flex items-center justify-between">

          {/* LEFT SIDE LINKS */}
          <ul className="flex gap-6">
            {leftLinks.map((item, index) => (
              <li key={index} className="relative">

                {/* If dropdown = true → show dropdown component */}
                {item.dropdown ? (
                  <Dropdown label={item.label} items={item.items || []} />
                ) : (
                  <Link to={item.to}>
                    <span className="cursor-pointer hover:text-(--custom-color) hover:underline">
                    {item.label}
                  </span>
                  </Link>
                )}

              </li>
            ))}
          </ul>

          {/* RIGHT SIDE LINKS */}
          <div className="flex items-center gap-4">
            {rightLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="hover:underline hover:text-(--custom-color)"
              >
                {item.label}
              </a>
            ))}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default NavLinks;
