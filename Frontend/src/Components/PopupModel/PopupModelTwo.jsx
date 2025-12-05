import React, { useEffect, useRef, useState } from "react";
import { FaRegSave } from "react-icons/fa";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { RiDeleteBin2Line } from "react-icons/ri";
import Loader from "../ui/Loader/LoaderTwo";
import Button, { ButtonRed } from "../ui/Button/Button";
import { MdOutlineLockOpen } from "react-icons/md";
import { GoEye, GoEyeClosed } from "react-icons/go";
import CheckboxOption from "../ui/Checkox/CheckboxOption";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Input from "../ui/Input/Input";
import { IoLockClosedOutline } from "react-icons/io5";
import {
  CONFIRM_2FA_API,
  DISABLE_2FA_API,
  ENABLE_2FA_API,
  LOGIN_API,
  REGISTER_API,
} from "../../Api/auth";
import store from "../../Redux/store";
import { toast } from "react-toastify";
import { setUser } from "../../Redux/userSlice";

// creating model
export default function Modal({
  isOpen = false,
  onClose = () => {},
  title = "",
  children,
  className = "",
  showCloseButton = true,
  positionClassName = "",
  width = "100%", // default width
  height = "auto", // default height
  maxWidth = "600px", // default maxWidth
  maxHeight = "80vh", // default maxHeight
}) {
  const contentRef = useRef(null);

  // 👉 BODY SCROLL LOCK BUT SHOW SCROLLBAR
  useEffect(() => {
    const scrollY = window.scrollY;

    if (isOpen) {
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflowY = "scroll"; // scrollbar always visible
    } else {
      const y = parseInt(document.body.style.top || "0") * -1;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflowY = "";
      window.scrollTo(0, y);
    }

    return () => {
      const y = parseInt(document.body.style.top || "0") * -1;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflowY = "";
      window.scrollTo(0, y);
    };
  }, [isOpen]);

  // CLICK OUTSIDE TO CLOSE
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (contentRef.current && !contentRef.current.contains(e.target)) {
        onClose();
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-filter backdrop-blur-[1px] bg-black/60 p-4">
      <div
        ref={contentRef}
        className={`absolute rounded-sm bg-(--accent) shadow-xl
          ${className} ${positionClassName}`}
        style={{
          width,
          height,
          maxWidth,
          maxHeight,
          overflowY: "auto",
        }}
      >
        <div className="flex items-start justify-between gap-4 py-4 px-4 border-b border-(--border-color)">
          <h2
            id="modal-title"
            className="text-[20px] text-(--custom-color) uppercase"
          >
            {title}
          </h2>
          {showCloseButton && (
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="text-(--custom-color) text-[18px] cursor-pointer hover:text-(--white-color)"
            >
              ✕
            </button>
          )}
        </div>
        {children}
      </div>
    </div>
  );
}

// Account-Details --> Change Email  -->
export function EmailChangePopup({
  buttonTitle = "Open Popup",
  buttonClassName = "btn",
}) {
  const user = true;
  const [open, setOpen] = useState(false);
  const [updateEmail, setUpdateEmail] = useState("miniofficial51@gmail.com");
  //password show
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  // Loader
  const [loading, setLoading] = useState(false);

  const handelChange = (e) => {
    setUpdateEmail();
  };

  return (
    <div>
      <button onClick={() => setOpen(true)} className={buttonClassName}>
        {buttonTitle}
      </button>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        positionClassName="top-32"
        title="Change Email"
        width="800px" // custom width
        height="auto" // custom height
        maxWidth="90%" // optional max width
      >
        <div>
          <div className="flex gap- px-14 ">
            {/* Label Side */}
            <div className="bg-(--secondary) w-[30%] border-r border-(--border-color)  flex flex-col items-end pt-4 pr-3 ">
              {/* Email 1*/}
              <div className="h-14 mb-5 flex flex-col justify-center">
                <label htmlFor="changeEmail" className=" ">
                  Email:
                </label>
              </div>

              {/* Password 1*/}
              <div className="h-14 mb-5 flex flex-col justify-center">
                <label htmlFor="password" className=" ">
                  Enter Your Password:
                </label>
              </div>
            </div>

            {/* Input Side */}
            <div className="bg-(--secondary) w-[70%] py-4 pl-3">
              {/* Email 2*/}
              <div className="h-14 mb-5">
                <div className="h-15 flex flex-col justify-center">
                  <input
                    className=" w-[95%] h-10 bg-(--foreground-color) border border-(--input-border-color) pl-3 text-[15px] rounded-sm outline-none "
                    type="text"
                    id="changeEmail"
                    onChange={handelChange}
                    value={updateEmail}
                  />
                </div>
              </div>

              {/* Password 2*/}
              <div className="h-14 mb-5 ">
                <div className="h-15 flex flex-col justify-center relative">
                  <input
                    className="relative w-[95%] h-10 bg-(--foreground-color) border border-(--input-border-color) pl-3 text-[15px] rounded-sm outline-none "
                    type={isPasswordShow === true ? "text" : "password"}
                    id="password"
                    placeholder="Enter your password"
                  />
                  <button
                    onClick={() => {
                      setIsPasswordShow(!isPasswordShow);
                    }}
                    className="absolute right-6 w-20 rounded-sm cursor-pointer h-10 bg-(--btn-bg)"
                  >
                    {isPasswordShow === true ? (
                      <span className="flex items-center justify-center gap-1  ">
                        <IoIosEyeOff className="" size={20} /> Hide
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-1  ">
                        <IoIosEye className="" size={20} /> Show
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Button */}
          <div className="w-full">
            {/* Save button */}
            <div className="sticky bottom-0 w-full flex items-center justify-center py-4 bg-(--accent) border border-(--border-color)">
              {loading ? (
                <Button className="font-semibold cursor-pointer">
                  <Loader
                    size={20}
                    color="#ffffff"
                    label="Please Wait.."
                    labelClass="text-()"
                  />
                </Button>
              ) : (
                <Button
                  icon={<FaRegSave />}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Save
                </Button>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

// Account-Details --> Image Change -->
export function ImageChangePopup({
  buttonTitle = "Open Popup",
  buttonClassName = "btn",
}) {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <button onClick={() => setOpen(true)} className={buttonClassName}>
          {buttonTitle}
        </button>

        <Modal
          isOpen={open}
          onClose={() => setOpen(false)}
          positionClassName="top-32"
          title="Change Avatar"
          width="800px" // custom width
          height="auto" // custom height
          maxWidth="90%" // optional max width
        >
          <div>
            <div className="flex gap-0 px-14 ">
              {/* Avatar Side 1*/}
              <div className="flex items-center justify-center py-8 bg-(--secondary) w-[30%] border-r border-(--border-color)">
                <div className="w-34 flex justify-center items-center">
                  <img
                    className="w-full rounded-md"
                    src="https://cdn.builtbybit.com/avatars/o/441/441355.jpg?1763557112"
                    alt=""
                  />
                </div>
              </div>
              {/* Upload Side */}
              <div className="bg-(--secondary) w-[70%] flex items-center justify-center">
                <label
                  htmlFor="dropzone-file"
                  className="bg-[#ffffff0a] flex flex-col items-center justify-center w-[90%] h-38  border border-dashed  border-(--border-color) rounded-sm cursor-pointer hover:bg-(--accent)"
                >
                  <div className="flex flex-col items-center justify-center text-body pt-5 pb-6">
                    <svg
                      className="w-10 h-10 mb-4 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 17h3a3 3 0 0 0 0-6h-.025a5.56 5.56 0 0 0 .025-.5A5.5 5.5 0 0 0 7.207 9.021C7.137 9.017 7.071 9 7 9a4 4 0 1 0 0 8h2.167M12 19v-9m0 0-2 2m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 ">
                      <span className="font-bold">Click to upload</span> or drag
                      and drop
                    </p>
                    <p className="text-[12px]">PNG, JPG (MAX. 400x400px)</p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
            </div>

            {/* Button */}
            <div className="w-full flex gap-2 items-center justify-center border-t border-(--border-color)">
              {/* Cancel button */}
              <div className="flex items-center justify-center py-3 ">
                <ButtonRed className="bg-green-600 hover:bg-green-700">
                  Cancel
                </ButtonRed>
              </div>

              {/* Delete button */}
              <div className="flex items-center justify-center py-3 ">
                {loading ? (
                  <div className="relative flex items-center justify- btn gap-1">
                    <button className="font-semibold  cursor-pointer">
                      <Loader size={20} color="#ffffff" label="Please Wait.." />
                    </button>
                  </div>
                ) : (
                  <Button
                    icon={<RiDeleteBin2Line className="" />}
                    className=" font-semibold"
                  >
                    Delete
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}

// Login
export function LoginPopup({
  buttonTitle = "Open Popup",
  buttonClassName = "btn",
}) {
  const [formData, setFormData] = useState({
    emailOrUsername: "",
    password: "",
    stayLoggedIn: false,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandeler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await LOGIN_API(formData);
       // 👉 if 2FA enabled
      if  (res.data.need2FA === true ) {
        localStorage.setItem("tempToken", res.data.tempToken);
        toast.info("Please verify the 2FA code");
        navigate("/2fa/verify");   // TwoFAVerify page
        return;
      }

      if (res.data.success) {
        dispatch(setUser(res.data.user));
        localStorage.setItem("accessToken", res.data.accessToken);
        toast.success(res.data.message);
        navigate("/");
        console.log(res);
      }
    } catch (error) {
      toast.error(error.response.data.message || "login failed");
    } finally {
      setLoading(false);
    }
  };

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const [isPasswordShow, setIsPasswordShow] = useState(false);

  return (
    <>
      <div>
        <button onClick={() => setOpen(true)} className={buttonClassName}>
          {buttonTitle}
        </button>

        <Modal
          isOpen={open}
          onClose={() => setOpen(false)}
          positionClassName="top-32"
          title="Login"
          width="800px" // custom width
          height="auto" // custom height
          maxWidth="90%" // optional max width
        >
          <div>
            <div className="flex gap- px-14 ">
              {/* Label Side */}
              <div className="bg-(--secondary) w-[30%] border-r border-(--border-color)  flex flex-col items-end pt-4 pr-3 ">
                {/* Email 1*/}
                <div className="h-14 mb-5 pt-5">
                  <label htmlFor="email" className=" ">
                    Email:
                  </label>
                </div>

                {/* Password 1*/}
                <div className="h-14 mb-5 pt-5">
                  <label htmlFor="password" className=" ">
                    Password:
                  </label>
                </div>
              </div>

              {/* Input Side */}
              <div className="bg-(--secondary) w-[70%] py-4 pl-3">
                {/* Email 2*/}
                <div className="h-14 mb-5">
                  <div className="h-15 flex flex-col justify-center">
                    <input
                      className=" w-[95%] h-10 bg-(--foreground-color) border border-(--input-border-color) pl-3 text-[15px] rounded-sm outline-none "
                      type="text"
                      id="email"
                      placeholder="Enter your email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          emailOrUsername: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                {/* Password 2*/}
                <div className="h-20 mb-5 ">
                  <div className="h-15 flex flex-col justify-center">
                    <div className="flex w-[95%]">
                      <input
                        className=" w-[95%] h-10 bg-(--foreground-color) border border-(--input-border-color) pl-3 text-[15px] rounded-sm outline-none "
                        type={isPasswordShow ? "text" : "password"}
                        id="password"
                        placeholder="Enter Your password"
                        required
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                      />

                      <button
                        onClick={() => setIsPasswordShow(!isPasswordShow)}
                        className="flex items-center gap-1 border-t border-b border-r border-(--input-border-color) rounded px-3 py-2 text-(--custom-color) bg-(--foreground-color) cursor-pointer transition"
                      >
                        {isPasswordShow ? <GoEyeClosed /> : <GoEye />}
                        {isPasswordShow ? "Hide" : "Show"}
                      </button>
                    </div>
                  </div>
                  {/* Forget Password */}
                  <div className=" w-[95%] flex justify-start">
                    <div className="a  text-[15px]!">Forget Password?</div>
                  </div>
                </div>

                {/* Iam agree */}
                <div className="flex items-center justify-between w-[95%] mb-3">
                  <CheckboxOption
                    title="Stay logged in"
                    className="w-30!"
                    checked={formData.stayLoggedIn}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        stayLoggedIn: e.target.checked,
                      })
                    }
                  />
                  <div>
                    Don't have an account?{" "}
                    <Link to={"/register"}>
                      <span className="a">Register</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="w-full flex gap-2 items-center justify-center border-t border-(--border-color)">
              {/* Cancel button */}
              <div className="flex items-center justify-center py-3 ">
                <ButtonRed
                  onClick={() => {
                    setOpen(false);
                  }}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Cancel
                </ButtonRed>
              </div>

              {/* Login button */}
              <div className="flex items-center justify-center py-3 ">
                {loading ? (
                  <div className="relative flex items-center justify- btn gap-1">
                    <button className="font-semibold  cursor-pointer">
                      <Loader size={20} color="#ffffff" label="Please Wait.." />
                    </button>
                  </div>
                ) : (
                  <Button
                    icon={<MdOutlineLockOpen />}
                    onClick={submitHandeler}
                    className=" font-semibold bg-(--custom-color)!"
                  >
                    Login
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}

// Register
export function RegisterPopup({
  buttonTitle = "Open Popup",
  buttonClassName = "btn",
}) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    receiveUpdates: false,
    agreedToTerms: false,
  });

  const handelchange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const submitHandeler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await REGISTER_API(formData);

      if (res.data.success) {
        navigate("/verify");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error.response);
    } finally {
      setLoading(false);
    }
  };
  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [registerCountdown, setRegisterCountdown] = useState(8);
  const [canClickRegister, setCanClickRegister] = useState(false);

  // password vaildetor
  const [password, setPassword] = useState("");

  const handleSetPassword = (e) => {
    setPassword(e.target.value);
  };
  const requirements = [
    { test: (pwd) => pwd.length >= 8, text: "Add at least 8 characters" },
    { test: (pwd) => /[A-Z]/.test(pwd), text: "Add an uppercase letter (A-Z)" },
    { test: (pwd) => /[a-z]/.test(pwd), text: "Add a lowercase letter (a-z)" },
    { test: (pwd) => /[0-9]/.test(pwd), text: "Add a number (0-9)" },
    {
      test: (pwd) => /[^A-Za-z0-9]/.test(pwd),
      text: "Add a special character (!@#$%)",
    },
  ];

  const missingRequirements = requirements.filter((r) => !r.test(password));
  const nextSuggestion = missingRequirements[0]; // show ONLY the next needed item

  const strength = requirements.length - missingRequirements.length;

  const getStrengthColor = () => {
    if (strength <= 1) return "bg-red-400";
    if (strength <= 2) return "bg-yellow-400";
    if (strength === 3) return "bg-orange-400";
    return "bg-green-600";
  };

  useEffect(() => {
    if (open) {
      setCanClickRegister(false);
      setRegisterCountdown(8);

      const timer = setInterval(() => {
        setRegisterCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setCanClickRegister(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [open]);

  return (
    <>
      <div>
        <button onClick={() => setOpen(true)} className={buttonClassName}>
          {buttonTitle}
        </button>

        <Modal
          isOpen={open}
          onClose={() => setOpen(false)}
          positionClassName="top-32"
          title="Register"
          width="800px" // custom width
          height="auto" // custom height
          maxWidth="90%" // optional max width
        >
          <div>
            <div className="flex gap- px-14 ">
              {/* Label Side */}
              <div className="bg-(--secondary) w-[30%] border-r border-(--border-color)  flex flex-col items-end pt-4 pr-3 ">
                {/* userName 1*/}
                <div className="h-14 mb-5 flex flex-col justify-center">
                  <label htmlFor="username" className=" ">
                    username:
                  </label>
                </div>

                {/* Email 1*/}
                <div className="h-14 mb-5 flex flex-col justify-center">
                  <label htmlFor="email" className=" ">
                    Email:
                  </label>
                </div>

                {/* Password 1*/}
                <div className="h-14 mb-5 flex flex-col justify-center">
                  <label htmlFor="password">Password:</label>
                </div>
              </div>

              {/* Input Side */}
              <div className="bg-(--secondary) w-[70%] py-4 pl-3">
                {/* userName 2*/}
                <div className="h-14 mb-5">
                  <div className="h-15 flex flex-col justify-center">
                    <input
                      className=" w-[95%] h-10 bg-(--foreground-color) border border-(--input-border-color) pl-3 text-[15px] rounded-sm outline-none "
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Enter your username"
                      required
                      value={formData.username}
                      onChange={handelchange}
                    />
                  </div>
                </div>

                {/* Email 2*/}
                <div className="h-14 mb-5">
                  <div className="h-15 flex flex-col justify-center">
                    <input
                      className=" w-[95%] h-10 bg-(--foreground-color) border border-(--input-border-color) pl-3 text-[15px] rounded-sm outline-none "
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handelchange}
                    />
                  </div>
                </div>

                {/* Password 2*/}
                <div className="h-20 mb-2">
                  <div className="h-15 flex flex-col justify-center">
                    <div className="flex w-[95%]">
                      <input
                        className=" w-[95%] h-10 bg-(--foreground-color) border border-(--input-border-color) pl-3 text-[15px] rounded-sm outline-none "
                        type={isPasswordShow ? "text" : "password"}
                        id="password"
                        value={formData.password || password}
                        placeholder="Enter your password"
                        name="password"
                        required
                        onChange={(e) => {
                          handelchange(e);
                          handleSetPassword(e);
                        }}
                      />

                      <button
                        onClick={() => setIsPasswordShow(!isPasswordShow)}
                        className="flex items-center gap-1 border-t border-b border-r border-(--input-border-color) rounded px-3 py-2 text-(--custom-color) bg-(--foreground-color) cursor-pointer transition"
                      >
                        {isPasswordShow ? <GoEyeClosed /> : <GoEye />}
                        {isPasswordShow ? "Hide" : "Show"}
                      </button>
                    </div>
                  </div>
                  <div className="w-full h-5 ">
                    {/* Strength Bar */}
                    <div className="w-[95%] bg-(--col-1) h-2 -mt-4">
                      <div
                        className={`h-2 rounded transition-all duration-300 ${getStrengthColor()}`}
                        style={{
                          width: `${(strength / requirements.length) * 100}%`,
                        }}
                      ></div>
                    </div>

                    {/* ONE suggestion at a time */}
                    {password.length > 0 && nextSuggestion && (
                      <p className="mt-1">{nextSuggestion.text}</p>
                    )}
                  </div>
                </div>

                {/* Receive news and updates from us by email */}
                <CheckboxOption
                  title="Receive news and updates from us by email"
                  className="w-80! mb-6"
                  checked={formData.receiveUpdates}
                  onChange={() =>
                    setFormData({
                      ...formData,
                      receiveUpdates: !formData.receiveUpdates,
                    })
                  }
                />

                {/* Iam agree */}
                <CheckboxOption
                  title="I agree to the terms and policy."
                  className="w-80! mb-3"
                  checked={formData.agreedToTerms}
                  onChange={() =>
                    setFormData({
                      ...formData,
                      agreedToTerms: !formData.agreedToTerms,
                    })
                  }
                />
              </div>
            </div>

            {/* Button */}
            <div className="w-full flex gap-2 items-center justify-center border-t border-(--border-color)">
              {/* Cancel button */}
              <div className="flex items-center justify-center py-3 ">
                <ButtonRed
                  onClick={() => setOpen(false)}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Cancel
                </ButtonRed>
              </div>

              {/* Register button */}
              <div className="flex items-center justify-center py-3 ">
                {loading ? (
                  <div className="relative flex items-center justify-center btn gap-1">
                    <button className="font-semibold cursor-pointer">
                      <Loader size={20} color="#ffffff" label="Please Wait.." />
                    </button>
                  </div>
                ) : (
                  <Button
                    disabled={!canClickRegister}
                    icon={<MdOutlineLockOpen />}
                    onClick={submitHandeler}
                    className={`font-semibold bg-(--custom-color)! transition-all duration-300 ${
                      canClickRegister
                        ? "opacity-100 cursor-pointer"
                        : "opacity-50 cursor-not-allowed!"
                    }`}
                  >
                    {canClickRegister
                      ? "Register"
                      : `Register (${registerCountdown}s)`}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}

// 2FA Enabled
export function TwhoFactroEnabled({
  buttonTitle = "Enable 2FA",
  buttonClassName = "btn",
}) {
  const { user } = useSelector((store) => store.user);

  const [qrCode, setQrCode] = useState("");
  const [secret, setSecret] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  // ENABLE 2FA
  const handleGenerate2FA = async () => {
    setLoading(true);
    try {
      const res = await ENABLE_2FA_API();
      setQrCode(res.data.qrCode);
      setSecret(res.data.secret);
    } catch (err) {
      toast.error(err.response?.data?.message || "Error generating 2FA");
    }
    setLoading(false);
  };

  // Confirm OTP
  const handleConfirm2FA = async () => {
    if (!otp) return toast.error("Enter OTP");

    setLoading(true);
    try {
      const res = await CONFIRM_2FA_API(otp);
      toast.success(res.data.message);

      store.dispatch(setUser(res.data.user));
      console.log(store);
      setQrCode("");
      setSecret("");
      setOtp("");

      setOpen(false);
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid OTP");
    }
    setLoading(false);
  };

  return (
    <>
      <button
        onClick={() => {
          setOpen(true);
          handleGenerate2FA();
        }}
        className={buttonClassName}
      >
        {buttonTitle}
      </button>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        positionClassName="top-32"
        title="Two Step Verification"
        width="800px"
        height="auto"
        maxWidth="90%"
      >
        <div>
          <div className="flex gap-0 px-14">
            {/* QR CODE SIDE */}
            <div className="flex items-center justify-center bg-(--secondary) w-[30%] border-r border-(--border-color)">
              <div className="p-2 flex justify-center items-center">
                <img src={qrCode} alt="QR Code" className="mx-auto" />
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="bg-(--secondary) py-4 w-[70%] flex flex-col gap-2 items-center justify-center">
              <h2 className="text-center text-[16px] mt-2 text-(--white-color)">
                Scan this QR code in Google Authenticator
              </h2>

              <p className="text-(--custom-color)">
                Or enter this secret manually
              </p>

              <span className="text-(--custom-color) py-2">{secret}</span>

              <div className="px-4 text-start! w-full">
                <label htmlFor="otp">Enter OTP:</label>
              </div>

              <div className="w-[95%] flex items-center gap-2">
                <Input
                  className="w-[80%] h-10 bg-(--foreground-color) border border-(--input-border-color) pl-3 rounded"
                  placeholder="123456"
                  id="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="w-full flex gap-2 items-center justify-center border-t border-(--border-color) py-3">
            <ButtonRed
              onClick={() => setOpen(false)}
              className=""
            >
              Cancel
            </ButtonRed>

            {loading ? (
              <Button className="bg-green-600 hover:bg-green-700 flex items-center gap-2">
                <Loader size={20} color="#ffffff" label="Please Wait.." />
              </Button>
            ) : (
              <Button
                onClick={handleConfirm2FA}
                icon={<IoLockClosedOutline className="text-(--custom-color)" />}
                className="text-(--custom-color)! font-semibold"
              >
                Enable 2FA
              </Button>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
}

export function TwhoFactroDisabled({
  buttonTitle = "Disable 2FA",
  buttonClassName = "btn",
}) {
  const { user } = useSelector((store) => store.user);

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [otpLegnth, setOtpLegnth] = useState("");
  const [disablePassword, setDisablePassword] = useState("");
  const [disableOtp, setDisableOtp] = useState("");

  // DISABLE 2FA
  const handleDisable2FA = async () => {
    if (!disableOtp || !disablePassword)
      return toast.error("Enter OTP and your password");
    setLoading(true);

    try {
      const res = await DISABLE_2FA_API(disablePassword, disableOtp);

      // update user in Redux
      store.dispatch(setUser(res.data.user));

      toast.success(res.data.message);
    } catch (err) {
      toast.error(err.response?.data?.message || "Error disabling 2FA");
    }
    setLoading(false);
  };

  //otp max legnth 6
  const handleOtpInputLegnth = (e) => {
    let value = e.target.value;

    // Only digits allow
    if (!/^\d*$/.test(value)) return;

    // Max 2 digits
    if (value.length > 6) return;

    setOtpLegnth(value);
  };

  return (
    <>
      <button
        onClick={() => {
          setOpen(true);
        }}
        className={buttonClassName}
      >
        {buttonTitle}
      </button>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        positionClassName="top-32"
        title="Two Step Verification"
        width="800px"
        height="auto"
        maxWidth="90%"
      >
        <div>
          <div className="flex px-14 ">
            {/* Label Side */}
            <div className="bg-(--secondary) w-[30%] border-r border-(--border-color)  flex flex-col items-end pt-4 pr-3 ">
              {/* otp 1*/}
              <div className="h-14 mb-5 flex flex-col justify-center">
                <label htmlFor="otp" className=" ">
                  Otp:
                </label>
              </div>

              {/* Password 1*/}
              <div className="h-14  flex pt-2 ">
                <label htmlFor="password" className=" ">
                  Enter Your Password:
                </label>
              </div>
            </div>

            {/* Input Side */}
            <div className="bg-(--secondary) w-[70%] py-4 pl-3">
              {/* otp 2*/}
              <div className="h-14 mb-5">
                <div className="h-15 flex flex-col justify-center">
                  <input
                    className=" w-[95%] h-10 bg-(--foreground-color) border border-(--input-border-color) pl-3 text-[15px] rounded-sm outline-none "
                    type="text"
                    id="otp"
                    placeholder="• • • • • •"
                    onChange={(e) => setDisableOtp(e.target.value)}
                    value={disableOtp}
                  />
                </div>
              </div>

              {/* Password 2*/}
              <div className="h-14 ">
                <div className="flex w-[95%]">
                  <input
                    className="w-[95%] h-10 bg-(--foreground-color) border border-(--input-border-color) pl-3 text-[15px] rounded-sm outline-none"
                    type={isPasswordShow ? "text" : "password"}
                    id="password"
                    placeholder="Enter you password"
                    value={disablePassword}
                    onChange={(e) => setDisablePassword(e.target.value)}
                  />
                  <button
                    onClick={() => setIsPasswordShow(!isPasswordShow)}
                    className="flex items-center gap-1 border-t border-b border-r border-(--input-border-color) rounded px-3 py-2 text-blue-400 bg-(--foreground-color) hover:bg-(--accent) cursor-pointer transition"
                  >
                    {isPasswordShow ? <GoEyeClosed /> : <GoEye />}
                    {isPasswordShow ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Buttons */}
          <div className="w-full flex gap-2 items-center justify-center border-t border-(--border-color) py-3">
            <ButtonRed
              onClick={() => setOpen(false)}
              className=""
            >
              Cancel
            </ButtonRed>

            {loading ? (
              <Button className="bg-green-600 hover:bg-green-700 flex items-center gap-2">
                <Loader size={20} color="#ffffff" label="Please Wait.." />
              </Button>
            ) : (
              <Button
                icon={<IoLockClosedOutline className="" />}
                className=" font-semibold"
                onClick={handleDisable2FA}
              >
                Disable 2FA
              </Button>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
}
