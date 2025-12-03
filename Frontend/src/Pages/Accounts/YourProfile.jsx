import React, { useState } from "react";
import {
  FaClipboardList,
  FaBoxOpen,
  FaComments,
  FaUserEdit,
} from "react-icons/fa";
import { TbDiamondFilled } from "react-icons/tb";
import Resources from "../../Components/YourProfile/Resources";
// Dummy default user data
const defaultUser = {
  name: "Minitasin Studio",
  role: "Creator",
  tag: "uWu",
  title:'Tasin',
  coverImage:
    "https://builtbybit.com/attachments/bbb-baner-png.840064/?preset=fullr1",
  avatar: "https://cdn.builtbybit.com/avatars/o/441/441355.jpg?1763557112",
  posts: [
    {
      id: 1,
      title: "How I built my first React dashboard",
      date: "Sep 12, 2025",
      category: "website",
      snippet:
        "In this post, I talk about how I structured my React code and used Tailwind …",
    },
    {
      id: 2,
      title: "Designing a UI kit for startup founders",
      date: "Aug 28, 2025",
      snippet:
        "I created a UI kit focusing on simplicity and usability — here’s my process …",
    },
    
  ],
  products: [
    {
      id: "p1",
      name: "Landing Page UI Kit",
      category: "UI Design",
      image:
        "https://builtbybit.com/attachments/prefix-pack-png.853552/?preset=cardr1",
      price: "$29",
    },
    {
      id: "p2",
      name: "E-commerce Dashboard Template",
      category: "Dashboard",
      image:
        "https://builtbybit.com/attachments/minitasin-custom-gui-png.843161/?preset=cardr1",
      price: "$39",
    },
    {
      id: "p2",
      name: "E-commerce Dashboard Template",
      category: "Dashboard",
      image:
        "https://builtbybit.com/attachments/minitasin-custom-gui-png.843161/?preset=cardr1",
      price: "$39",
    },
    {
      id: "p2",
      name: "E-commerce Dashboard Template",
      category: "Dashboard",
      image:
        "https://builtbybit.com/attachments/minitasin-custom-gui-png.843161/?preset=cardr1",
      price: "$39",
    },
  ],
  comments: [
    {
      id: "c1",
      thread: "React Hooks Discussion",
      date: "Oct 1, 2025",
      text: "Great question! I think useEffect cleanup is very underrated …",
    },
    {
      id: "c2",
      thread: "Tailwind vs Bootstrap",
      date: "Sep 20, 2025",
      text: "I prefer Tailwind because of its flexibility and atomic classes …",
    },
  ],
};

export default function YourProfile({ user = defaultUser }) {
  const [activeTab, setActiveTab] = useState("posts");

  const renderTabContent = () => {
    switch (activeTab) {
      case "posts":
        return (
          <div className="">
            {user.posts.map((p) => (
              <div
                key={p.id}
                className="bg-(--background-color) flex items-center gap-3 px-6 py-6 border-b border-(--border-color)"
              >
                <div className="w-20 cursor-pointer">
                  <img
                    src={user.avatar}
                    alt=""
                    className="w-full h-full rounded-md"
                  />
                </div>
                <div className="">
                  <div className="text-[16px] text-(--primary-color) hover:underline cursor-pointer">
                    {p.title}
                  </div>
                  <div className="my-1 text-[13px] ">
                    {p.snippet}
                  </div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-(--primary-color) hover:underline cursor-pointer">
                      {user.name}
                    </h1>
                    <div className="text-[13px] ">
                      {p.date}
                    </div>
                    <div className="text-[13px] capitalize">
                      {p.category}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case "resources":
        return (
          <Resources
            key={defaultUser.products._id}
            products={defaultUser.products}
          />
        );
      case "comments":
        return (
          <div className="space-y-4">
            {user.comments.map((c) => (
              <div
                key={c.id}
                className="p-4 bg-white border rounded-lg shadow-sm"
              >
                <div className="text-xs text-gray-500">{c.date}</div>
                <div className="mt-1 text-gray-800">{c.text}</div>
                <div className="mt-2 text-sm text-gray-500">
                  In thread: {c.thread}
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="container overflow-hidden bg-(--background-color) h-115 border-b-4 border-(--primary-color)">
        <div className="relative h-75">
          {/*Cover Picture */}
          <img
            src={user.coverImage}
            alt="cover"
            className=" w-full h-full object-cover "
          />
          {/* Profile Picture */}
          <div className="absolute h-50 bottom-0 left-20 transform translate-y-2/3 flex items-center gap-6">
            <div className="w-40 h-40 rounded-sm border-4 border-(--white-color) overflow-hidden shadow-lg">
              <img
                src={user.avatar}
                alt="avatar"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Profile Name */}
            <div className="text-(--white-color) drop-shadow-lg pt-16">
              <h1 className="flex items-center gap-2 text-[23px] text-(--primary-color) font-bold hover:underline">
                {user.name}
              </h1>

              {activeTab === "posts" ? (
                <>
                  {/* Role */}
                  <div className="py-1">
                    <button className="btn3 flex items-center justify-center gap-1">
                      <TbDiamondFilled size={12} />
                      {user.role}
                    </button>
                  </div>

                  {/* Custom Title */}
                  <div className="text-[14px]">
                    {user.title}{" "}From {""}
                    <a
                      href=""
                      className="hover:underline hover:text-(--primary-color)"
                    >
                    Bangladesh
                    </a>
                  </div>
                  <div className="text-[14px]">Joined May 16, 2023</div>
                </>
              ) : (
                <div>
                  <div className="mb-2">
                    {user.tag}
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-(--dim-white-color)"><span className="text-(--white-color) fonnt-bold">4</span> resources</div>
                    <div className="text-(--dim-white-color)"><span className="text-(--white-color) fonnt-bold">46</span> purchases</div>
                    <div className="text-(--dim-white-color)"><span className="text-(--white-color) fonnt-bold">988</span> downloads</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-end py-4 px-6">
            <a href="" className="btn">
              Report
            </a>
          </div>

          {/* Manage Cover */}
          <button className="absolute right-6 top-6 btn2 px-4 py-2 rounded-lg flex items-center gap-2">
            <FaUserEdit size={18} /> Manage cover
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="container bg-(--background-color) py-2 px-3 border border-(--border-color)">
        <div className="flex space-x-6 ">
          <TabButton
            icon={<FaClipboardList />}
            label="Postinngs"
            active={activeTab === "posts"}
            onClick={() => setActiveTab("posts")}
          />
          <TabButton
            icon={<FaBoxOpen />}
            label="Resources"
            active={activeTab === "resources"}
            onClick={() => setActiveTab("resources")}
          />
          <TabButton icon={<FaComments />} label="About" />
          <TabButton icon={<FaComments />} label="Warnings" />
          <TabButton icon={<FaComments />} label="Reputation" />
        </div>
      </div>

      <div className="container mt-6! border border-(--border-color)">
        {/* Tab Content */}
        {renderTabContent()}
      </div>
    </>
  );
}

function TabButton({ icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1 pb-2 ${
        active
          ? "text-(--primary-color) cursor-pointer"
          : "hover:text-gray-700 cursor-pointer"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
