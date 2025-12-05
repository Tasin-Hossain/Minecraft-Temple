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
import {Dropdown} from "./Dropdown/Dropdown";
import { FaUser } from "react-icons/fa";
import { LoginPopup, RegisterPopup } from "./PopupModel/PopupModelTwo";
import { useSelector } from "react-redux";
import { LOGOUT_API } from "../Api/auth";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUser } from "../Redux/userSlice";
import { TbLogout } from "react-icons/tb";
import { TbBrandMinecraft } from "react-icons/tb";
import { ButtonPrimary } from "./ui/Button/Button";
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
        {
          label: "Minecraft",
          to: "/resources/minecraft",
          image:
            "https://www.pngall.com/wp-content/uploads/13/Minecraft-Logo-PNG-Photos.png",
        },
        {
          label: "Website",
          to: "/resources/website",
          image:
            "https://cdn.discordapp.com/attachments/1143481780331098183/1445773018440667278/5bbd3ebe32809-1403c5ff5f7b22535a48b325a1f4f535.png?ex=6931908c&is=69303f0c&hm=aa9b03fb1d7c203df5aa9546a96c4f865cc92242f2ac9e2fb2b1d7cec22d98a7",
        },
        {
          label: "Discord",
          to: "/resource/Discord",
          image:
            "https://cdn.discordapp.com/attachments/1143481780331098183/1445802034883334224/0881cc0b4763f30b9178f4955a730abe.png?ex=6931ab92&is=69305a12&hm=5415d10472bc1c4fba1f64e7563e4a6f9e65e50c9edbd7f117b67e6c44c210ef",
        },
      ],
    },
    {
      to: "/community",
      title: "Community",
      icon: <BiMessageRounded size={18} />,
      dropdown: true,
      items: [
        { label: "Minecraft", to: "/resources/minecraft", icon: <FaUser /> },
        { label: "Website", to: "/resources/website" },
        { label: "Discord", to: "/resource/Discord" },
      ],
    },
    { to: "/support", title: "Tickets", icon: <BiSupport size={18} /> },
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
                  <div className="arrowspan absolute -top-3 left-31"></div>
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

              </div>
                <div >
                  <ButtonPrimary>
                    <MdOutlineRocketLaunch
                      size={16}
                      className="text-(--white-color)"
                    />{" "}
                    Go Premium
                  </ButtonPrimary>
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
