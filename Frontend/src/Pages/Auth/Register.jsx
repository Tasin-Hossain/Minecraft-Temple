import React, { useEffect, useState } from "react";
import Button from "../../Components/ui/Button/Button";
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";
import Loader from "../../Components/ui/Loader/LoaderTwo";
import { Link, useNavigate } from "react-router-dom";
import CheckboxOption from "../../Components/ui/Checkox/CheckboxOption";
import { MdOutlineLockOpen } from "react-icons/md";
import { REGISTER_API } from "../../Api/auth";
import { toast } from "react-toastify";

const Register = () => {
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
         navigate("/verify", { state: { email: formData.email } });
        toast.success(res.data.message)
      }
    } catch (error) {
      toast.error(error.response.data.message)
    }finally{
      setLoading(false)
    }
  };

  const [showPassword, setShowpassword] = useState(false);

  //loader
  const [loading, setLoading] = useState(false);

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
  const nextSuggestion = missingRequirements[0]; 
  const strength = requirements.length - missingRequirements.length;

  const getStrengthColor = () => {
    if (strength <= 1) return "bg-red-400";
    if (strength <= 2) return "bg-yellow-400";
    if (strength === 3) return "bg-orange-400";
    return "bg-green-600";
  };

  const [registerCountdown, setRegisterCountdown] = useState(8);
  const [canClickRegister, setCanClickRegister] = useState(false);

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
    <div className="container bg-(--accent) rounded-md h-auto">
      {/* Password and security  */}
      <form className="flex flex-col">
        <h1 className="py-5 px-14 text-[20px] capitalize text-(--white-color) border-b border-(--border-color)">
          Register
        </h1>
        {/* Section 1 */}
        <div className="flex px-14 h-auto">
          {/* Label Side */}
          <div className="bg-(--secondary) w-[30%] flex flex-col items-end pt-4 pr-3 border-r border-(--border-color)">
            {/*Username 1 */}
            <div className="h-18 mb-5 flex pt-5 justify-center">
              <div className=" ">
                <label htmlFor="username" className="">
                  Username :
                </label>
              </div>
            </div>

            {/*Email 1 */}
            <div className="h-18 mb-5 flex pt-5 justify-center">
              <div className=" ">
                <label htmlFor="email" className="">
                  Email :
                </label>
              </div>
            </div>

            {/* password 1 */}
            <div className="h-16 mb-5">
              <div className="mt-6">
                <label htmlFor="password">password:</label>
              </div>
            </div>
          </div>

          {/* Input Side */}
          <div className="bg-(--secondary) w-[70%] py-4 px-4">
            {/*username 2 */}
            <div className="h-18 mb-5 ">
              <div className="h-15 flex flex-col justify-center">
                <input
                  className=" w-[95%] h-10 bg-(--foreground-color) border border-(--input-border-color) pl-3 text-[15px] rounded-sm outline-none "
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                  name="username"
                  required
                  value={formData.username}
                  onChange={handelchange}
                />
              </div>
            </div>
            {/*Email 2 */}
            <div className="h-18 mb-5 ">
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

            {/* password 2 */}
            <div className="h-20 mb-5 ">
              <div className="h-16 flex flex-col justify-center">
                <div className="flex w-[95%]">
                  <input
                    className=" w-[95%] h-10 bg-(--foreground-color) border border-(--input-border-color) pl-3 text-[15px] rounded-sm outline-none "
                    type={showPassword ? "text" : "password"}
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
                    onClick={() => setShowpassword(!showPassword)}
                    className="flex items-center gap-1 border-t border-b border-r border-(--input-border-color) rounded px-3 py-2 text-(--custom-color) bg-(--foreground-color) cursor-pointer transition"
                  >
                    {showPassword ? <GoEyeClosed /> : <GoEye />}
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
              <div className="w-[95%] h-5 ">
                {/* Strength Bar */}
                <div className="w-full bg-(--col-1) h-2 -mt-4.5">
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

            {/* Receive News */}
            <CheckboxOption
              title="Receive news and updates from us by email"
              className="w-100! mb-5"
              checked={formData.receiveUpdates}
              onChange={() =>
                setFormData({
                  ...formData,
                  receiveUpdates: !formData.receiveUpdates,
                })
              }
            />

            {/* I agree to the terms and privacy policy.z*/}
            <div className="flex items-center justify-between w-[95%]">
              <CheckboxOption
                title="I agree to the terms and privacy policy."
                className="w-80! mb-5"
                checked={formData.agreedToTerms}
                onChange={() =>
                  setFormData({
                    ...formData,
                    agreedToTerms: !formData.agreedToTerms,
                  })
                }
              />
              <div>
                <span>
                  Already have an account?{" "}
                  <Link to={"/login"}>
                    <span className="a">Login</span>
                  </Link>
                </span>
              </div>
            </div>
          </div>
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
              type="submit"
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
      </form>
    </div>
  );
};

export default Register;
