import React from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import NavLinks from "./NavLinks";
const NavLinksHome = () => {
  return (
    <NavLinks
      leftLinks={[
        { label: "Minecraft", dropdown: true },
        { label: "Websites", dropdown: true },
        { label: "Discord", dropdown: true },
        { label: "Other" },
      ]}
      rightLinks={[
        { label: "Become a creator", href: "#" },
        { label: "Cart", href: "#" },
      ]}
    />
  );
};

export default NavLinksHome;
