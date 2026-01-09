import { data, Link, useLocation } from "react-router-dom";
import {
  MdDashboard,
  MdPalette,
  MdDownload,
  MdForum,
  MdPeople,
  MdFlag,
  MdHistory,
  MdExtension,
  MdBuild,
  MdSettings,
  MdCampaign,
  MdDescription,
  MdPayment,
  MdBrush,
  MdSecurity,
  MdKeyboardArrowDown ,
  MdReport,
} from "react-icons/md";
import { useState } from "react";
import Logo from "../../Assets/logo.png";
import { ButtonEmerald } from "../../Components/ui/Button/Button";


const Tooltip = ({ label, badge, subItems }) => {
  const { pathname } = useLocation();

  return (
    <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 
                    opacity-0 group-hover:opacity-100 
                    pointer-events-none 
                    transition-all duration-300 ease-out
                    z-9999!">
      <div className="bg-(--accent-fourground) z-99999! text-white rounded-lg shadow-2xl border border-gray-700 min-w-56 overflow-hidden">
        {/* Header - only show label if no subItems */}
        {!subItems && (
          <div className="px-5 py-3 flex items-center justify-between border-b border-gray-700">
            <span className="font-medium">{label}</span>
            {badge && (
              <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                {badge}
              </span>
            )}
          </div>
        )}

        {/* Submenu Items */}
        {subItems && subItems.length > 0 && (
          <div className="py-2 max-h-96 overflow-y-auto">
            {subItems.map((sub) => {
              const subActive = pathname === sub.to || pathname.startsWith(sub.to);

              return (
                <Link
                  key={sub.to}
                  to={sub.to}
                  className={`block px-5 py-2.5 text-sm transition-all duration-200
                    ${subActive
                      ? "bg-[#FFA41F] text-white font-bold shadow-[inset_0_4px_0px_#ffd953,inset_0_-5px_0px_#ff791a]"
                      : "hover:bg-gray-800"
                    }`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between">
                    <span>{sub.label}</span>
                    {sub.badge && (
                      <span className="bg-emerald-500 text-white text-xs px-2 py-1 rounded-full">
                        {sub.badge}
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* Arrow pointing left */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full">
          <div className="w-0 h-0 
                          border-t-8 border-b-8 border-r-8 
                          border-t-transparent border-b-transparent 
                          border-r-gray-900" />
        </div>
      </div>
    </div>
  );
};

export default function AdminSidebar({ expanded }) {
  const { pathname } = useLocation();
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (label) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const menu = [
  {
    to: "/admin",
    label: "Dashboard",
    icon: MdDashboard,
    description: "Overview, statistics & recent activity"
  },
  {
    to: "/admin/appearance",
    label: "Appearance",
    icon: MdPalette,
    subItems: [
      { to: "/admin/appearance/styles", label: "Styles" },
      { to: "/admin/appearance/templates", label: "Templates" },
      { to: "/admin/appearance/phrases", label: "Phrases" },
      { to: "/admin/appearance/advertising", label: "Advertising" }
    ]
  },
  {
    to: "/admin/resources",
    label: "Resources",
    icon: MdDownload,
    badge: 127, 
    subItems: [
      { to: "/admin/resources/all", label: "Resources" },
      { to: "/admin/resources/add", label: "Add Resources" },
      { to: "/admin/resources/categories", label: "Resource Categories" },
      { to: "/admin/resources/updates", label: "Pending Updates", badge: 34 },
      { to: "/admin/resources/reviews", label: "Pending Reviews", badge: 18 },
      { to: "/admin/resources/settings", label: "Resource Settings" }
    ]
  },
  {
    label: "Forums & Content",
    icon: MdForum,
    subItems: [
      { to: "/admin/forums", label: "Manage Forums" },
      { to: "/admin/nodes", label: "All Nodes" },
      { to: "/admin/categories", label: "Categories" },
      { to: "/admin/threads", label: "Reported Threads" },
      { to: "/admin/attachments", label: "Attachments" }
    ]
  },
  {
    label: "Users",
    icon: MdPeople,
    subItems: [
      { to: "/admin/users", label: "User List" },
      { to: "/admin/users/search", label: "Search Users" },
      { to: "/admin/users/groups", label: "User Groups" },
      { to: "/admin/users/permissions", label: "Permissions" },
      { to: "/admin/bans", label: "Banned Users" },
      { to: "/admin/warnings", label: "Warnings" },
      { to: "/admin/trophies", label: "Trophies & Awards" }
    ]
  },
  {
    to: "/admin/reports",
    label: "Reports",
    icon: MdFlag,
    badge: 63
  },
  {
    to: "/admin/moderator-logs",
    label: "Moderator Logs",
    icon: MdHistory
  },
  {
    to: "/admin/addons",
    label: "Add-ons",
    icon: MdExtension,
    subItems: [
      { to: "/admin/addons/list", label: "Installed Add-ons" },
      { to: "/admin/addons/install", label: "Install Add-on" }
    ]
  },
  {
    label: "Tools ",
    icon: MdBuild,
    subItems: [
      { to: "/admin/tools/rebuild", label: "Rebuild Caches" },
      { to: "/admin/tools/import", label: "Import Tools" },
      { to: "/admin/tools/cron", label: "Cron Entries" },
      { to: "/admin/tools/file-check", label: "File Health Check" },
      { to: "/admin/tools/phpinfo", label: "PHP Info" }
    ]
  },

  {
    label: "Logs",
    icon: MdDescription,
    subItems: [
      { to: "/admin/logs/admin", label: "Admin Log" },
      { to: "/admin/logs/moderator", label: "Moderator Log" },
      { to: "/admin/logs/error", label: "Server Error Log" },
      { to: "/admin/logs/spam", label: "Spam Cleaner Log" }
    ]
  },

];

  return (
    <aside
      className={`bg-(--accent) border-r border-(--border-color)
        h-screen flex flex-col transition-all duration-300 ease-in-out overflow-x-hidden
        ${expanded ? "w-72" : "w-22"}`}
    >
      {/* Logo */}
      <div className="px-5 py-4 flex items-center gap-4 shrink-0 border-b border-(--border-color)">
        <Link to="/admin">
          <div className="w-10 h-11 flex items-center justify-center shrink-0">
            <img
              src={Logo}
              alt="logo"
              className="w-full h-full object-contain"
            />
          </div>
        </Link>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            expanded ? "max-w-xs opacity-100" : "max-w-0 opacity-0"
          }`}
        >
          <Link to="/admin">
            <span className="text-[16px] text-(--custom-color) font-semibold whitespace-nowrap">
              MINECRAFT<span className="text-(--white-color)"> TEMPLE</span>
            </span>
          </Link>
        </div>
      </div>

      {/* Menu */}
      <nav className="px-5 py-4 flex flex-col gap-3 overflow-y-auto overflow-x-hidden custom-scrollbar">
        {menu.map((item) => {
          const hasSubItems = item.subItems?.length;
          const isOpen = openDropdowns[item.label] || false;

          let isActive = false;
          if (item.to) {
            isActive =
              pathname === item.to ||
              (item.to !== "/admin" && pathname.startsWith(item.to));
          } else if (hasSubItems) {
            isActive = item.subItems.some(
              (sub) => pathname === sub.to || pathname.startsWith(sub.to)
            );
          }

          const IconElement = (
            <div className={`p-2`}>
              <item.icon
                size={24}
                className={isActive ? "text-(--accent)" : "text-(--white-color)"}
              />
            </div>
          );

          return hasSubItems ? (
            <div key={item.label} className="relative group bg-2">
              {!expanded && (
                <Tooltip label={item.label} subItems={item.subItems} />
              )}

              <button
                onClick={() => toggleDropdown(item.label)}
                className={`flex items-center gap-2 w-full rounded-md transition-all duration-200 cursor-pointer
                  ${
                    isActive
                      ? "text-(--accent) bg-[#FFA41F] shadow-[inset_0_4px_0px_#ffd953,inset_0_-5px_0px_#ff791a] border-2 border-(--btn-border)"
                      : "text-(--white-color) hover:bg-(--accent-foreground)"
                  }`}
              >
                {IconElement}
                <div className="w-full flex items-center justify-between gap-13">
                  <span
                    className={`flex transition-all duration-300 text-(--white-color)
                    ${expanded ? "opacity-100" : "opacity-0"}`}
                  >
                    {item.label}
                  </span>
                  <MdKeyboardArrowDown
                    size={20}
                    className={`transition-transform duration-300 ${
                      expanded ? "opacity-100" : "opacity-0"
                    } ${isOpen ? "rotate-180" : ""}`}
                  />
                </div>
              </button>

              {/* Dropdown in expanded mode */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen && expanded ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className=" flex flex-col gap-2 pt-3">
                  {item.subItems.map((sub) => {
                    const subActive =
                      pathname === sub.to || pathname.startsWith(sub.to);
                    return (
                      <Link
                        key={sub.to}
                        to={sub.to}
                        className={`py-2 pl-13  px-3 rounded-md transition-all
                          ${
                            subActive
                              ? " text-(--custom-color) bg-(--accent-foreground)"
                              : "text-(--white-color) hover:bg-(--accent-foreground)"
                          }`}
                      >
                        <div className="-ml-6 flex items-center gap-4">
                          <span
                            className={`w-2 h-2 bg-(--dim-white-color) rounded-full ${
                              subActive ? "bg-(--custom-color)!" : ""
                            }`}
                          >
                            {""}
                          </span>
                          <span>{sub.label}</span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <Link key={item.label} to={item.to} className="relative group">
              {!expanded && <Tooltip label={item.label} badge={item.badge} />}

              <div
                className={`flex items-center gap-3  rounded transition-all
                  ${
                    isActive
                      ? "text-(--accent) bg-[#FFA41F] shadow-[inset_0_4px_0px_#ffd953,inset_0_-5px_0px_#ff791a] border-2 border-(--btn-border)"
                      : "hover:bg-(--accent-foreground)"
                  }`}
              >
                {IconElement}
                <span
                  className={`flex-1 whitespace-nowrap transition-all duration-300 ${
                    expanded ? " opacity-100" : "opacity-0"
                  }`}
                >
                  {item.label}
                </span>
                <span className="mr-2">
                  {item.badge && expanded && (
                    <ButtonEmerald className="bg-(--custom-color) px-2! py-1! rounded-md text-(--white-color)">
                      {item.badge}
                    </ButtonEmerald>
                  )}
                </span>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-5  border-t border-(--border-color) shrink-0">
        <div className="py-4 flex items-center gap-2">
          <div className="relative shrink-0">
            <img
              src="https://mc-heads.net/avatar/Steve/80" // Pore dynamic username diye change korio
              alt="Player Avatar"
              className="w-10 h-10 rounded-full border-3 border-(--custom-color)"
            />
            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-400 rounded-full border-3 border-(--accent) animate-pulse"></div>
          </div>

          {/* User Info - Shudhu expanded hole dekha jay */}
          <div
            className={`flex flex-col overflow-hidden transition-all duration-300 ${
              expanded ? "max-w-xs opacity-100" : "max-w-0 opacity-0"
            }`}
          >
            <p className="text-sm font-bold text-(--custom-color) capitalize truncate">minitasin</p>
            <p className="text-xs opacity-70">miniofficial51@gmail.com</p>
          </div>
        </div>

      </div>
    </aside>
  );
}
