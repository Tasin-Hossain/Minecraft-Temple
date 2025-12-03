import React, { useState } from "react";
import Button from "../../Components/ui/Button/Button";
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";
import Loader from "../../Components/ui/Loader/LoaderTwo";
import { Link, useNavigate } from "react-router-dom";
import CheckboxOption from "../../Components/ui/Checkox/CheckboxOption";
import { MdOutlineLockOpen } from "react-icons/md";
import { toast } from "react-toastify";
import { LOGIN_API } from "../../Api/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../Redux/userSlice";

const Login = () => {
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

      console.log(res.data)
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

  const [showPassword, setShowpassword] = useState(false);
  //loader
  const [loading, setLoading] = useState(false);

  return (
    <div className="container bg-(--accent) rounded-md h-auto">
      {/* Password and security  */}
      <div className="flex flex-col">
        <h1 className="py-5 px-14 text-[20px] capitalize text-(--white-color) border-b border-(--border-color)">
          Login
        </h1>
        {/* Section 1 */}
        <div className="flex px-14 h-auto">
          {/* Label Side */}
          <div className="bg-(--secondary) w-[30%] flex flex-col items-end pt-4 pr-3 border-r border-(--border-color)">
            {/*Email 1 */}
            <div className="h-14 mb-5 pt-5 ">
              <div className=" ">
                <label htmlFor="emailOrUsername" className="">
                  Email or Username :
                </label>
              </div>
            </div>

            {/* password 1 */}
            <div className="h-16 pt-5 mb-5 ">
              <div className="">
                <label htmlFor="password">password:</label>
              </div>
            </div>
          </div>

          {/* Input Side */}
          <div className="bg-(--secondary) w-[70%] py-4 px-4">
            {/*Email 2 */}
            <div className="h-14 mb-5 ">
              <div className="h-15 flex flex-col justify-center">
                <input
                  className=" w-[95%] h-10 bg-(--foreground-color) border border-(--input-border-color) pl-3 text-[15px] rounded-sm outline-none "
                  type="emailOrUsername"
                  id="emailOrUsername"
                  placeholder="Enter your email or user name"
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

            {/* password 2 */}
            <div className="h-16">
              <div className="h-16 flex flex-col justify-center">
                <div className="flex w-[95%]">
                  <input
                    className=" w-[95%] h-10 bg-(--foreground-color) border border-(--input-border-color) pl-3 text-[15px] rounded-sm outline-none "
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Enter your password"
                    required
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
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
            </div>
            {/* Forget Password */}
            <div className="flex justify-start w-[95%] mb-5">
              <Link to={"/forget-pass"}>
                <span className=" a underline">Forget Password ?</span>
              </Link>
            </div>

            <div className="flex items-center justify-between w-[95%]">
              {/* Stay logged in */}
              <CheckboxOption
                title="Stay logged in"
                checked={formData.stayLoggedIn}
                onChange={(e) =>
                  setFormData({ ...formData, stayLoggedIn: e.target.checked })
                }
              />
              <div>
                <span>
                  Don't have an account?{" "}
                  <Link to={"/register"}>
                    <span className="a">Register</span>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Login button */}
        <div className="flex items-center  py-3 pl-115 border-t border-(--border-color)">
          {loading ? (
            <div className="relative flex items-center justify- btn gap-1">
              <button className="font-semibold  cursor-pointer">
                <Loader size={20} color="#ffffff" label="Please Wait.." />
              </button>
            </div>
          ) : (
            <Button
              onClick={submitHandeler}
              icon={<MdOutlineLockOpen />}
              className=" font-semibold bg-(--custom-color)!"
            >
              Login
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
