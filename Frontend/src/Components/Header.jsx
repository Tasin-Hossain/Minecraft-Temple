import React, { useEffect, useRef, useState } from "react";
import { RiSettings3Line } from "react-icons/ri";
import { BiMessageRounded } from "react-icons/bi";
import { BiSupport } from "react-icons/bi";
import { GrAnnounce } from "react-icons/gr";
import { TbBrandDiscord } from "react-icons/tb";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoMailOutline } from "react-icons/io5";
import { FiBell } from "react-icons/fi";
import { MdOutlineRocketLaunch } from "react-icons/md";
import Logo from "../Assets/logo.png";
import Dropdown from "./Dropdown/Dropdown";
import { FaUser } from "react-icons/fa";
import { LoginPopup, RegisterPopup } from "./PopupModel/PopupModelTwo";
import { useSelector } from "react-redux";
import { LOGOUT_API } from "../Api/auth";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUser } from "../Redux/userSlice";
import { TbLogout } from "react-icons/tb";
import { TbBrandMinecraft } from "react-icons/tb";
const Header = () => {
  const { user } = useSelector((store) => store.user);
  const mail = true;
  const alert = true;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = async (e) => {
    e.stopPropagation(); // popup ভিতরে button হলে click bubble আটকাবে
    try {
      const res = await LOGOUT_API();
      console.log("Logout API response:", res.data);

      if (res.data.success) {
        // remove token
        localStorage.removeItem("accessToken");
        console.log("accessToken removed");

        // close all popups
        setUserOpenPopup(false);
        setMailboxOpenPopup(false);
        setNotifyOpenPopup(false);

        // clear redux user
        dispatch(setUser(null));

        // navigate home
        navigate("/");

        toast.success(res.data.message);
      }
    } catch (error) {
      console.log("Logout error:", error);
      toast.error(error.response?.data?.message || "Logout failed");
    }
  };

  //user navlinks popup
  const [userOpenPopup, setUserOpenPopup] = useState(false);
  const userPopupMenuRef = useRef(null);
  const userPopupImgRef = useRef(null);

  //user mailbox popup
  const [mailboxOpenPopup, setMailboxOpenPopup] = useState(false);
  const mailPopupMenuRef = useRef(null);
  const mailPopupImgRef = useRef(null);

  //user notifaction popup
  const [notifyOpenPopup, setNotifyOpenPopup] = useState(false);
  const notifyPopupMenuRef = useRef(null);
  const notifyPopupImgRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      //user popup
      if (userPopupMenuRef.current && userPopupImgRef.current) {
        if (
          !userPopupMenuRef.current.contains(e.target) &&
          !userPopupImgRef.current.contains(e.target)
        ) {
          setUserOpenPopup(false);
        }
      }

      //mailbox popup
      if (mailPopupMenuRef.current && mailPopupImgRef.current) {
        if (
          !mailPopupMenuRef.current.contains(e.target) &&
          !mailPopupImgRef.current.contains(e.target)
        ) {
          setMailboxOpenPopup(false);
        }
      }

      //notify popup
      if (notifyPopupMenuRef.current && notifyPopupImgRef.current) {
        if (
          !notifyPopupMenuRef.current.contains(e.target) &&
          !notifyPopupImgRef.current.contains(e.target)
        ) {
          setNotifyOpenPopup(false);
        }
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const headerLinks = [
    {
      to: "/",
      title: "Resources",
      icon: <RiSettings3Line size={18} />,
      dropdown: true,
      items: [
        { label: "Minecraft", to: "/resources/minecraft", image:"https://www.pngall.com/wp-content/uploads/13/Minecraft-Logo-PNG-Photos.png" },
        { label: "Website", to: "/resources/website", image:"https://cdn.discordapp.com/attachments/1143481780331098183/1445773018440667278/5bbd3ebe32809-1403c5ff5f7b22535a48b325a1f4f535.png?ex=6931908c&is=69303f0c&hm=aa9b03fb1d7c203df5aa9546a96c4f865cc92242f2ac9e2fb2b1d7cec22d98a7" },
        { label: "Discord", to: "/resource/Discord",image:"data:image/jpeg;base64,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" },
      ],
    },
    {
      to: "/forums",
      title: "Forums",
      icon: <BiMessageRounded size={18} />,
      dropdown: true,
      items: [
        { label: "Minecraft", to: "/resources/minecraft", icon: <FaUser /> },
        { label: "Website", to: "/resources/website" },
        { label: "Discord", to: "/resource/Discord" },
      ],
    },
    { to: "/support", title: "Support", icon: <BiSupport size={18} /> },
    user && { to: "/ads", title: "Advertise", icon: <GrAnnounce size={18} /> },
    {
      to: "/discord",
      title: "Discord",
      icon: <TbBrandDiscord size={18} className="text-[#7289da]" />,
    },
  ];

  return (
    <header className=" bg-(--accent) border-b border-(--border-color)">
      <div className="container bg-(--accent) pt-3 flex items-center justify-between">
        <div className="flex items-center gap-5">
          {/* Logo */}
          <Link to={"/"}>
            <div className=" flex items-center justify-center gap-2">
              <div className="w-10">
                <img src={Logo} alt="logo" className="w-full h-[30px]" />
              </div>
              <span className="text-[20px] text-(--custom-color) font-semibold">
                MINECRAFT
                <span className="text-(--white-color)">{""} TEMPLE</span>
              </span>
            </div>
          </Link>
        </div>
        {/* NavLinks */}
        <div className="">
          <ul className="flex text-(--white-color)">
            {headerLinks.map((item, idx) =>
              item ? (
                <div key={idx} className="flex items-center relative group">
                  {/* Parent NavLink */}
                  <NavLink
                    to={item.to || "#"} // dropdown holeo route thakbe
                    className={({ isActive }) =>
                      `p-3 flex items-center gap-2 cursor-pointer transition-all 
                        ${isActive ? "text-(--custom-color)" : ""} 
                        group-hover:text-(--custom-color)`
                    }
                  >
                    {item.icon} {item.title}
                  </NavLink>

                  {/* Dropdown (only if dropdown exists) */}
                 <div className=" py-3">
                   {item.dropdown && <Dropdown items={item.items} />}
                 </div>
                </div>
              ) : null
            )}
          </ul>
        </div>

        {/* User Login interface */}
        <div className="">
          {user ? (
            <div className=" w-full rounded-sm flex items-center ">
              {/* Username and image */}
              <div
                onClick={() => setUserOpenPopup(!userOpenPopup)}
                ref={userPopupImgRef}
                className=" flex items-center gap-2 px-3 pb-4 pt-4 cursor-pointer hover:text-(--white-color)"
              >
                <div className="w-6 ">
                  <img
                    src={
                      user.avatar ||
                      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    }
                    alt=""
                    className="w-full rounded-sm"
                  />
                </div>
                {/* <h1 className=" ">{user.username}</h1> */}
              </div>

              {/*user navlinks Pop up */}
              {userOpenPopup && (
                <div
                  ref={userPopupMenuRef}
                  onClick={() => setUserOpenPopup(false)}
                  className="absolute z-10000 right-20 bg-(--accent) w-[370px] top-18 border-t-5 rounded-md border-(--custom-color)"
                >
                  {/* arrowspan */}
                  <div className="arrowspan absolute -top-3 left-20"></div>
                  {/* Logo Section */}
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="flex flex-col"
                  >
                    {/* Logo content */}
                    <div className="bg-(--accent-foreground)  flex items-center justify-start gap-3 py-4 px-4 border-b border-(--border-color)">
                      {/* Logo */}
                      <div className="w-[35%] ">
                        <img
                          className="w-full rounded-lg "
                          src={
                            user.avatar ||
                            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                          }
                          alt=""
                        />
                      </div>

                      {/* Logo Content */}
                      <div className="w-[65%] ">
                        <h1 className="inline-block text-[16px] font-semibold text-(--custom-color) hover:underline cursor-pointer">
                          {user.username}
                        </h1>
                        <br />
                        <span>{user.role}</span>
                        <p>{user.email}</p>

                        <div className="flex items-center justify-between">
                          <span className=" ">Posts:</span>
                          <span className=" ">1</span>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className=" ">Feedback score:</span>
                          <span className=" ">1</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Links Section 1*/}
                  <div className="flex border-b border-(--border-color)">
                    <div className="w-[50%] flex flex-col ">
                      <ul className="flex flex-col">
                        <Link to={"/"}>
                          <li className="text-[13px]  py-3 px-4 hover:bg-(--secondary) hover:text-(--white-color) border-l-3 border-(--accent) hover:border-(--custom-color) cursor-pointer">
                            Your Content
                          </li>
                        </Link>
                        <Link to={"/account/reactions"}>
                          <li className="text-[13px]  py-3 px-4 hover:bg-(--secondary) hover:text-(--white-color) border-l-3 border-(--accent) hover:border-(--custom-color) cursor-pointer">
                            Reactions recived
                          </li>
                        </Link>
                      </ul>
                    </div>
                    <div className="w-[50%] flex flex-col">
                      <ul className="flex flex-col">
                        <Link to={"/account/bookmarks"}>
                          <li className="text-[13px]  py-3 px-4 hover:bg-(--secondary) hover:text-(--white-color) border-l-3 border-(--accent) hover:border-(--custom-color) cursor-pointer">
                            Bookmarks
                          </li>
                        </Link>
                      </ul>
                    </div>
                  </div>

                  {/* Links Section 2*/}
                  <div className="flex border-b border-(--border-color)">
                    <div className="w-[50%] flex flex-col ">
                      <ul className="flex flex-col">
                        <Link to={"/account/details"}>
                          <li className="text-[13px]  py-3 px-4 hover:bg-(--secondary) hover:text-(--white-color) border-l-3 border-(--accent) hover:border-(--custom-color) cursor-pointer hover:outline-l-4">
                            Account details
                          </li>
                        </Link>

                        <Link to={"/account/security"}>
                          <li className="text-[13px]  py-3 px-4 hover:bg-(--secondary) hover:text-(--white-color) border-l-3 border-(--accent) hover:border-(--custom-color) cursor-pointer">
                            Passord and security
                          </li>
                        </Link>
                        <Link to={"/account/privacy"}>
                          <li className="text-[13px]  py-3 px-4 hover:bg-(--secondary) hover:text-(--white-color) border-l-3 border-(--accent) hover:border-(--custom-color) cursor-pointer">
                            Privacy
                          </li>
                        </Link>
                        <Link to={"/account/preferences"}>
                          <li className="text-[13px]  py-3 px-4 hover:bg-(--secondary) hover:text-(--white-color) border-l-3 border-(--accent) hover:border-(--custom-color) cursor-pointer">
                            Preferences
                          </li>
                        </Link>
                        <Link to={"/account/premium"}>
                          <li className="text-[13px]  py-3 px-4 hover:bg-(--secondary) hover:text-(--white-color) border-l-3 border-(--accent) hover:border-(--custom-color) cursor-pointer">
                            Account upgrades
                          </li>
                        </Link>
                        <Link to={"/account/signature"}>
                          <li className="text-[13px]  py-3 px-4 hover:bg-(--secondary) hover:text-(--white-color) border-l-3 border-(--accent) hover:border-(--custom-color) cursor-pointer">
                            Signature
                          </li>
                        </Link>
                      </ul>
                    </div>
                    <div className="w-[50%] flex flex-col">
                      <ul className="flex flex-col">
                        <Link to={"/account/discord/"}>
                          <li className="text-[13px]  py-3 px-4 hover:bg-(--secondary) hover:text-(--white-color) border-l-3 border-(--accent) hover:border-(--custom-color) cursor-pointer">
                            Link Discord account
                          </li>
                        </Link>
                        <Link to={"/account/steam/"}>
                          <li className="text-[13px]  py-3 px-4 hover:bg-(--secondary) hover:text-(--white-color) border-l-3 border-(--accent) hover:border-(--custom-color) cursor-pointer">
                            Link Steam account
                          </li>
                        </Link>
                        <Link to={"account/ignored"}>
                          <li className="text-[13px]  py-3 px-4 hover:bg-(--secondary) hover:text-(--white-color) border-l-3 border-(--accent) hover:border-(--custom-color) cursor-pointer">
                            Ignoring
                          </li>
                        </Link>
                        <Link to={"/"}>
                          <li className="text-[13px]  py-3 px-4 hover:bg-(--secondary) hover:text-(--white-color) border-l-3 border-(--accent) hover:border-(--custom-color) cursor-pointer">
                            Warnings
                          </li>
                        </Link>
                        <Link to={"/teams/"}>
                          <li className="text-[13px]  py-3 px-4 hover:bg-(--secondary) hover:text-(--white-color) border-l-3 border-(--accent) hover:border-(--custom-color) cursor-pointer">
                            Manage teams
                          </li>
                        </Link>
                        <Link to={"/account/change-username"}>
                          <li className="text-[13px]  py-3 px-4 hover:bg-(--secondary) hover:text-(--white-color) border-l-3 border-(--accent) hover:border-(--custom-color) cursor-pointer">
                            Change username
                          </li>
                        </Link>
                      </ul>
                    </div>
                  </div>

                  {/* Log out */}
                  <div className=" flex border-b border-(--border-color)">
                    <button
                      onClick={logoutHandler}
                      className="flex items-center  gap-2 w-full text-[13px] text-red-400 py-3 px-4 hover:bg-(--secondary) border-l-3 border-(--accent) hover:border-(--custom-color) cursor-pointer"
                    >
                      <TbLogout size={18} />
                      Log out
                    </button>
                  </div>
                </div>
              )}

              {/* Mail box */}
              <div className=" px-3 pb-4 pt-4 ">
                <IoMailOutline
                  ref={mailPopupImgRef}
                  onClick={() => setMailboxOpenPopup(!mailboxOpenPopup)}
                  size={18}
                  className=" cursor-pointer hover:text-(--white-color)"
                />
              </div>

              {/* user MailBox popup */}
              {mailboxOpenPopup && (
                <div
                  ref={mailPopupMenuRef}
                  onClick={() => setMailboxOpenPopup(false)}
                  className="z-10000 absolute right-20 bg-(--accent) w-[300px] top-18 border-t-5 rounded-md border-(--custom-color)"
                >
                  {/* arrowspan */}
                  <div className="arrowspan absolute -top-3 left-25"></div>
                  <div className="flex flex-col">
                    {/* Conversations */}
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="bg-(--secondary) py-3 px-4 border-b border-(--border-color)"
                    >
                      {/* title */}
                      <h1 className="text-[18px] text-(--white-color)">
                        Conversations
                      </h1>
                    </div>

                    {/* Mail conntent*/}
                    {mail ? (
                      <div className="flex flex-col bg-(--background-color-two)   border-b border-(--border-color)">
                        <div className="flex items-center jus gap-2 py-4 px-4 border-b border-(--border-color) hover:bg-(--secondary)">
                          <div className="w-6">
                            <img
                              className="w-full rounded-sm"
                              src="https://cdn.builtbybit.com/avatars/s/441/441355.jpg?1733643096"
                              alt=""
                            />
                          </div>
                          <h1 className=" font-semibold hover:underline cursor-pointer">
                            minitasin
                          </h1>
                          <p className="">
                            send you a message{" "}
                            <span className="text-green-500 font-bold">1+</span>
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="bg-(--background-color-two) py-3 px-4   border-b border-(--border-color)"
                      >
                        <span>You have no recent conversations.</span>
                      </div>
                    )}

                    {/* show all */}
                    <div className="bg-(--secondary) py-2 px-4 border-b border-(--border-color) ">
                      <a className="text-[12px] text-(--custom-color) hover:underline cursor-pointer">
                        Show All
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Notifaction */}
              <div className="flex items-center gap-3 px-3 ">
                <FiBell
                  size={18}
                  ref={notifyPopupImgRef}
                  onClick={() => setNotifyOpenPopup(!notifyOpenPopup)}
                  className="cursor-pointer hover:text-(--white-color)"
                />

                <div>
                  <div href="" className="flex items-center gap-2 btn2 ">
                    <MdOutlineRocketLaunch
                      size={16}
                      className="text-(--white-color)"
                    />{" "}
                    Go Premium
                  </div>
                </div>
              </div>

              {/* Notification popup */}
              {notifyOpenPopup && (
                <div
                  ref={notifyPopupMenuRef}
                  onClick={() => setNotifyOpenPopup(false)}
                  className="z-1000 absolute right-19 bg-(--accent) w-[300px] top-18 border-t-5 rounded-md border-(--custom-color)"
                >
                  {/* arrowspan */}
                  <div className="arrowspan absolute -top-3 left-34"></div>
                  <div className="flex flex-col">
                    {/* Alerts */}
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="bg-(--secondary) py-3 px-4 border-b border-(--border-color)"
                    >
                      {/* title */}
                      <h1 className="text-[18px] text-(--white-color)">
                        Alerts
                      </h1>
                    </div>

                    {/* Alerts conntent*/}
                    {alert ? (
                      <div className="flex flex-col bg-(--background-color-two)   border-b border-(--border-color)">
                        <div className="flex items-center jus gap-2 py-4 px-4 border-b border-(--border-color) hover:bg-(--secondary)">
                          <div className="w-6">
                            <img
                              className="w-full rounded-sm"
                              src="https://cdn.builtbybit.com/avatars/s/441/441355.jpg?1733643096"
                              alt=""
                            />
                          </div>
                          <h1 className=" font-semibold hover:underline cursor-pointer">
                            minitasin
                          </h1>
                          <p className="">
                            send you a warning{" "}
                            <span className="text-red-500 font-bold">1+</span>
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="bg-(--background-color-two) py-3 px-4   border-b border-(--border-color)"
                      >
                        <span>You have no new alerts.</span>
                      </div>
                    )}

                    <div className="flex items-center justify-end py-2 px-4  gap-2 bg-(--secondary) border-b border-(--border-color) ">
                      {/* show all */}
                      <div className="">
                        <a className="text-[12px] text-(--custom-color) hover:underline cursor-pointer">
                          Show All
                        </a>
                      </div>

                      {/* show all */}
                      <div className="">
                        <a className="text-[12px] text-(--custom-color) hover:underline cursor-pointer">
                          Mark read
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center bg-(--accent-foreground) rounded-sm">
              {/* Login */}
              <LoginPopup
                buttonTitle="Login"
                buttonClassName="cursor-pointer hover:bg-(--secend-background-hover-color) py-3 px-4 border-r border-(--border-color)"
              />
              {/* Register */}
              <RegisterPopup
                buttonTitle="Register"
                buttonClassName="cursor-pointer py-3 px-3 hover:bg-(--secend-background-hover-color) "
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
