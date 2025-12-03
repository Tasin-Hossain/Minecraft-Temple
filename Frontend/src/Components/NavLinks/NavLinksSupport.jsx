import React from "react";
import NavLinks from "./NavLinks";

const NavLinksSupport = () => {
  return (
    <NavLinks leftLinks={[{ label: "Wiki index" }, { label: "Open ticket" }]} />
  );
};

export default NavLinksSupport;
