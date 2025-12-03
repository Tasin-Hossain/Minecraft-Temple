import { useState, useRef } from "react";
import { VERIFY_2FA_API } from "../../Api/auth";
import { setUser } from "../../Redux/userSlice";
import store from "../../Redux/store";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../Components/ui/Loader/LoaderTwo";

export default function TwoFAVerify() {
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);

  const navigate = useNavigate();

  const handleOtpSubmit = async () => {
    const code = otp.join("");

    try {
      setLoading(true);
      const tempToken = localStorage.getItem("tempToken");
      if (!tempToken) return toast.error("Temp token missing");

      const res = await VERIFY_2FA_API(tempToken, code);

      if (res.data.success) {
        // 2FA success → normal login continue
        store.dispatch(setUser(res.data.user));
        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.removeItem("tempToken");
        toast.success("2FA verified successfully");

        navigate("/");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Invalid code");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <div className="min-h-screen bg-(--background-color) flex flex-col items-center justify-center px-4">
      {/* Logo */}
      <div className="mb-10 flex flex-col items-center">
        <img
          src="http://localhost:5173/src/Assets/logo.png"
          alt="logo"
          className="h-12 mb-2"
        />
        <h1 className="text-(--white-color) text-4xl font-semibold"></h1>
      </div>

      {/* Card */}
      <div className="bg-(--accent) w-full max-w-xl p-10 rounded-md shadow-lg text-center">
        <h2 className="text-(--white-color) text-xl font-semibold mb-4">
          LOG IN TO MT-STUDIO
        </h2>

        <p className=" mb-8">
          We have emailed a two factor authentication code to you, please enter
          the code below.
        </p>

        {/* OTP Boxes */}
        <div className="flex justify-center gap-3 mb-8">
          {otp.map((digit, i) => (
            <input
              key={i}
              ref={(el) => (inputsRef.current[i] = el)}
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              className="w-12 h-14 text-center text-2xl bg-(--foreground-color) border-2 border-(--border-color) text-(--white-color) rounded-md focus:border-(--custom-color) outline-none"
            />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center mt-6">
          <Link to={'/login'}>
            <button className="hover:underline cursor-pointer">Back</button>
          </Link>

          <div className="flex gap-3">

            {loading ? (
              <Loader />
            ) : (
              <button
                onClick={handleOtpSubmit}
                className="btn bg-(--custom-color)!"
              >
                Confirm
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
