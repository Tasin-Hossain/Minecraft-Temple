import React from "react";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About us", url: "/about" },
      { label: "Terms of service", url: "/terms" },
      { label: "Privacy policy", url: "/privacy" },
      { label: "Contact us", url: "/contact" },
      { label: "Twitter", url: "https://twitter.com" },
    ],
  },

  {
    title: "Community",
    links: [
      { label: "Read our rules", url: "/rules" },
      { label: "Account upgrades", url: "/upgrades" },
      { label: "Advertise with us", url: "/advertise" },
      { label: "Service offers", url: "/services" },
      { label: "Product offers", url: "/products" },
    ],
  },

  {
    title: "Resources",
    links: [
      { label: "User overview", url: "/user-overview" },
      { label: "Creator overview", url: "/creator-overview" },
      { label: "Become a creator", url: "/become-creator" },
      { label: "Placeholder injector", url: "/placeholder-injector" },
      { label: "Migrations", url: "/migrations" },
    ],
  },

  {
    title: "Support",
    links: [
      { label: "View our wiki", url: "/wiki" },
      { label: "Create a ticket", url: "/ticket" },
      { label: "Transaction dispute", url: "/dispute" },
      { label: "Submit a DMCA", url: "/dmca" },
      { label: "Status", url: "/status" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-(--accent) py-2 border-t border-(--border-color)">
      <div className="container flex items-center justify-between">

        {footerLinks.map((section, i) => (
          <div key={i}>
            <h3 className="text-[18px] pt-2 font-semibold text-(--custom-color) mb-4">{section.title}</h3>

            <ul className="space-y-2">
              {section.links.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.url}
                    className="hover:text-(--custom-color) transition cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>

      <div className="text-center mt-10 border-t border-(--border-color) p-3">
        © 2025–{new Date().getFullYear()} Minitasin Studio. Ltd.
        <br />
        We are not affiliated with Mojang Studios, the Roblox Corporation, or Discord Inc.
      </div>
    </footer>
  );
}
