import React from "react";
import { NavLink } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";

const AccountSidebar = () => {
  const menuSections = [
    {
      title: "Your account",
      items: [
        { label: "Your profile", to: "/account/profile" },
        { label: "Alerts", to: "/account/alerts" },
        { label: "Reactions received", to: "/account/reactions" },
        { label: "Bookmarks", to: "/account/bookmarks" },
        { label: "Push requests", to: "/account/push-requests" },
      ],
    },

    {
      title: "Account upgrades",
      items: [
        { label: "Premium", to: "/account/premium" },
        { label: "Medals", to: "/account/medales" },
      ],
    },

    {
      title: "Settings",
      items: [
        { label: "Account details", to: "/account/details" },
        { label: "Password and security", to: "/account/security" },
        { label: "Privacy", to: "/account/privacy" },
        { label: "Preferences", to: "/account/preferences" },
        { label: "Edit signature", to: "/account/signature" },
        { label: "Link Discord account", to: "/account/discord" },
        { label: "Link Steam account", to: "/account/steam" },
        { label: "Ignoring", to: "/account/ignored" },
        { label: "API credentials", to: "/account/api" },
        { label: "Account removal", to: "/account/removal" },
        { label: "Manage teams", to: "/teams" },
        { label: "Change username", to: "/account/change-username" },
        { label: "Log out", to: "/logout" },
      ],
    },
  ];

  const activeClass = `block bg-(--secend-background-hover-color) border-l-3 border-(--custom-color)`;
  const baseClass = "w-full text-[15px] py-2.5 px-3 hover:bg-(--secend-background-hover-color) border-l-3 border-(--secend-background-color) hover:border-(--custom-color) transition-all";


  return (
    <aside className="bg-(--secend-background-color) h-screen/full">

      {/* Breadcrumbs */}
      <div className="py-4 pl-15.5 flex">
        <Breadcrumbs />
      </div>

      {/* Sidebar Body */}
      <div className="flex flex-col pl-25">
        <ul className="flex flex-col w-[90%]">

          {menuSections.map((section, i) => (
            <div key={i}>
              {/* Section Title */}
              <h1 className="text-(--custom-color) font-bold py-3 px-3">
                {section.title}
              </h1>

              {/* Items */}
              {section.items.map((item, idx) => (
                <NavLink
                  key={idx}
                  to={item.to}
                  className={({ isActive }) =>
                    isActive ? activeClass : ""
                  }
                >
                  <li className={baseClass}>{item.label}</li>

                </NavLink>
              ))}
            </div>
          ))}

        </ul>
      </div>
    </aside>
  );
};

export default AccountSidebar;
