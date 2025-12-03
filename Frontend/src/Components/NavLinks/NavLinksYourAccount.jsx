import React from "react";
import NavLinks from "./NavLinks";

const NavLinksYourAccount = () => {
  return (
    <NavLinks leftLinks={[{ label: "Your news feed" }, { label: "Log out" }]} />
  );
};

export default NavLinksYourAccount;
