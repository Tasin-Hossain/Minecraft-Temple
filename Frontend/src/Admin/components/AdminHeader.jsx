import React from "react";
import { IoMailOutline } from "react-icons/io5";
import {
  ButtonEmerald,
  ButtonPrimary,
} from "../../Components/ui/Button/Button";
import { FiBell } from "react-icons/fi";
import { MdMenu } from "react-icons/md";

const AdminHeader = ({sidebarExpanded,setSidebarExpanded}) => {
  return (
    <header className=" bg-(--accent) border-b border-(--border-color) px-6 py-4 flex items-center justify-between">
      <ButtonPrimary
        onClick={() => setSidebarExpanded(!sidebarExpanded)}
        className="py-2! px-2!"
        title={sidebarExpanded ? "Collapse sidebar" : "Expand sidebar"}
      >
        <MdMenu size={24} className="text-(--accent)" />
      </ButtonPrimary>

      <div className="flex items-center gap-3 rounded-sm  ">
        {/* notifaction */}
        <ButtonEmerald className="relative py-2! px-2! rounded cursor-pointer">
          <FiBell size={18} className="" />
          {/* <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full"></span> */}
        </ButtonEmerald>

        {/* mail */}
        <ButtonEmerald className="relative py-2! px-2! rounded cursor-pointer">
          <IoMailOutline size={18} className="" />
          {/* <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full"></span> */}
        </ButtonEmerald>
      </div>
    </header>
  );
};

export default AdminHeader;
