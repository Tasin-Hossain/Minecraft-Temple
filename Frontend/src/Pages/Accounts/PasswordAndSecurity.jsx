import React, { useState } from "react";
import Button from "../../Components/ui/Button/Button";
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";
import { FaRegSave } from "react-icons/fa";
import Loader from "../../Components/ui/Loader/LoaderTwo";
import { toast } from "react-toastify";
import {
  CONFIRM_2FA_API,
  ENABLE_2FA_API,
  DISABLE_2FA_API,
} from "../../Api/auth";
import Input from "../../Components/ui/Input/Input";
import { useSelector } from "react-redux";
import { setUser } from "../../Redux/userSlice";
import store from "../../Redux/store";
import { TwhoFactroDisabled, TwhoFactroEnabled } from "../../Components/PopupModel/PopupModelTwo";

const PasswordAndSecurity = () => {
  const { user } = useSelector((store) => store.user);

  const [qrCode, setQrCode] = useState("");
  const [secret, setSecret] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1); // 1 = idle, 2 = QR confirm
  const [loading, setLoading] = useState(false);

  // disable 2FA states
  const [disableMode, setDisableMode] = useState(false);
  const [disablePassword, setDisablePassword] = useState("");
  const [disableOtp, setDisableOtp] = useState("");

  // ENABLE 2FA
  const handleGenerate2FA = async () => {
    setLoading(true);
    try {
      const res = await ENABLE_2FA_API();
      setQrCode(res.data.qrCode);
      setSecret(res.data.secret);
      setStep(2);
    } catch (err) {
      toast.error(err.response?.data?.message || "Error generating 2FA");
    }
    setLoading(false);
  };

  // CONFIRM 2FA
  const handleConfirm2FA = async () => {
    if (!otp) return toast.error("Enter OTP");

    setLoading(true);
    try {
      const res = await CONFIRM_2FA_API(otp);
      toast.success(res.data.message);

      store.dispatch(setUser(res.data.user));

      setStep(1);
      setQrCode("");
      setSecret("");
      setOtp("");
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid OTP");
    }
    setLoading(false);
  };

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

      // reset 2FA UI
      setStep(1);
      setQrCode("");
      setSecret("");
      setOtp("");
      setPassword("");
    } catch (err) {
      toast.error(err.response?.data?.message || "Error disabling 2FA");
    }
    setLoading(false);
  };

  // password UI states
  const [showOldPass, setShowOldPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const [password, setPassword] = useState("");
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

  return (
    <div className="bg-(--accent) rounded-md h-auto">
      <div className="flex flex-col">
        <h1 className="py-5 px-14 text-[20px] capitalize text-(--white-color) border-b border-(--border-color)">
          Password and security
        </h1>

        <div className="flex px-14 h-auto">
          {/* Label Section */}
          <div className="bg-(--secondary) w-[30%] flex flex-col items-end pt-4 pr-3 border-r border-(--border-color)">
            <div className="h-14 mb-5 flex flex-col justify-center ">
              <label htmlFor="twoStep" className="text-(--dim-white-color)">
                Two-step verification:
              </label>
            </div>
            <div className="h-25 mb-5 flex pt-10">
              <label htmlFor="yourExpass">Your existing password:</label>
            </div>

            <div className="h-22 mb-5 pt-3">
              <label htmlFor="newPass">New password:</label>
            </div>

            <div className="h-14 flex pt-3 ">
              <label htmlFor="confirmNewPass">Confirm new password:</label>
            </div>
          </div>

          {/* Input Section */}
          <div className="bg-(--secondary) w-[70%] py-4 px-4">
            {/* 2FA Section */}
            <div
              className="h-14  mb-5 flex flex-col justify-center"
            >
              <div className="flex items-center gap-2">
                {/* 2FA Enabled */}
                {user?.twoFactor?.enabled && step === 1 && !disableMode && (
                  <>
                    <span className="text-green-400">(Enabled)</span>
                    <TwhoFactroDisabled/>
                  </>
                )}

                {/* 2FA Disabled */}
                {!user?.twoFactor?.enabled && step === 1 && (
                  <>
                    <span className="text-red-400">(Disabled)</span>
                    <TwhoFactroEnabled />
                  </>
                )}
              </div>
            </div>

            {/* Existing Password */}
            <div className="h-25 mb-5 ">
              <div className="flex">
                <input
                  className="w-[95%] mt-8 h-10 bg-(--foreground-color) border border-(--input-border-color) pl-3 text-[15px] rounded-sm outline-none"
                  type={showOldPass ? "text" : "password"}
                  id="yourExpass"
                />
                <button
                  onClick={() => setShowOldPass(!showOldPass)}
                  className="flex mt-8 items-center gap-1 border-t border-b border-r border-(--input-border-color) rounded px-3 py-2 text-blue-400 bg-(--foreground-color) hover:bg-(--accent) cursor-pointer transition"
                >
                  {showOldPass ? <GoEyeClosed /> : <GoEye />}
                  {showOldPass ? "Hide" : "Show"}
                </button>
              </div>
              <span>
                For security reasons, you must verify your existing password
                before you may set a new password.
              </span>
            </div>

            {/* New Password */}
            <div className="h-22 mb-5 ">
              <div className="flex">
                <input
                  className="w-[95%] h-10 bg-(--foreground-color) border border-(--input-border-color) pl-3 text-[15px] rounded-sm outline-none"
                  type={showNewPass ? "text" : "password"}
                  id="newPass"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  onClick={() => setShowNewPass(!showNewPass)}
                  className="flex items-center gap-1 border-t border-b border-r border-(--input-border-color) rounded px-3 py-2 text-blue-400 bg-(--foreground-color) hover:bg-(--accent) cursor-pointer transition"
                >
                  {showNewPass ? <GoEyeClosed /> : <GoEye />}
                  {showNewPass ? "Hide" : "Show"}
                </button>
              </div>

              <div className="w-full h-5">
                <div className="w-full bg-(--col-1) h-2 -mt-1.5">
                  <div
                    className={`h-2 rounded transition-all duration-300 ${getStrengthColor()}`}
                    style={{
                      width: `${(strength / requirements.length) * 100}%`,
                    }}
                  ></div>
                </div>

                {password.length > 0 && nextSuggestion && (
                  <p className="mt-1">{nextSuggestion.text}</p>
                )}
              </div>

              <div className="mt-3">Entering a password is required.</div>
            </div>

            {/* Confirm Password */}
            <div className="h-14">
              <div className="flex">
                <input
                  className="w-[95%] h-10 bg-(--foreground-color) border border-(--input-border-color) pl-3 text-[15px] rounded-sm outline-none"
                  type={showConfirmPass ? "text" : "password"}
                  id="confirmNewPass"
                />
                <button
                  onClick={() => setShowConfirmPass(!showConfirmPass)}
                  className="flex items-center gap-1 border-t border-b border-r border-(--input-border-color) rounded px-3 py-2 text-blue-400 bg-(--foreground-color) hover:bg-(--accent) cursor-pointer transition"
                >
                  {showConfirmPass ? <GoEyeClosed /> : <GoEye />}
                  {showConfirmPass ? "Hide" : "Show"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="bottom-0 w-full flex items-center justify-center py-4 bg-(--accent) border border-(--border-color)">
          {loading ? (
            <Button className="font-semibold cursor-pointer">
              <Loader size={20} color="#ffffff" label="Please Wait.." />
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
  );
};

export default PasswordAndSecurity;
