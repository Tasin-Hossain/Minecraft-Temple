import React from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import NavLinks from "./NavLinks";
import { FaUser } from "react-icons/fa";

const NavLinksForums = () => {
  return (
    <NavLinks
      leftLinks={[
        { label: "Members", to: '/' },
        { label: "New Posts" },

        {
          label: "Find threads",
          dropdown: true,
          items: [
            { label: "Your Threads", to:'/' , icon:<FaUser/> },
            { label: "Subscribed", href: "#" },
            { label: "Unanswered", href: "#" },
          ],
        },

        {
          label: "Watched",
          dropdown: true,
          items: [
            { label: "Watched Threads", href: "#" },
            { label: "Watched Forums", href: "#" },
          ],
        },

        { label: "Mark forums read" },
        { label: "Thread drafts" },
      ]}
    />
  );
};

export default NavLinksForums;
