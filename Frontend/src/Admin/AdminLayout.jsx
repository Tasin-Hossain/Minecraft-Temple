import { Outlet } from "react-router-dom";
import AdminSidebar from "./components/AdminSidebar";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import Button, {
  ButtonEmerald,
  ButtonPrimary,
} from "../Components/ui/Button/Button";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiBell } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import AdminHeader from "./components/adminHeader";

export default function AdminLayout() {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  return (
    <div className="flex bg-(--background-color) text-gray-100">
      <div className="z-100! fixed overflow-y-auto">
        <AdminSidebar expanded={sidebarExpanded} />
      </div>

      <div className={`z-1! flex-1 flex flex-col overflow-y-auto ${
          sidebarExpanded ? "ml-70" : "ml-20"
        } transition-all duration-300 ease-in-out`}>
        {/* header */}
        <AdminHeader
          sidebarExpanded={sidebarExpanded}
          setSidebarExpanded={setSidebarExpanded}
        />

        <main className="flex-1  overflow-y-auto py-4 px-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
