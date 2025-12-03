import React, { useState, useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { RESEND_VERIFY_EMAIL_API } from "../../Api/auth";

export default function VerifyEmail() {
  const location = useLocation();
  const email = location.state?.email || "your email";

  const [resending, setResending] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  const handleResend = async () => {
    if (!email) return toast.error("No email available to resend.");
    try {
      setResending(true);
      const res = await RESEND_VERIFY_EMAIL_API(email);
      if (res.data.success) {
        toast.success("Verification email resent!");
        setCooldown(60); // start 60-second cooldown
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to resend email");
    } finally {
      setResending(false);
    }
  };

  // Countdown timer for cooldown
  useEffect(() => {
    if (cooldown <= 0) return;

    const timer = setInterval(() => {
      setCooldown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [cooldown]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-(--foreground-color) px-4">
      {/* Logo */}
      <div className="mb-10 flex flex-col items-center">
        <img
          src="http://localhost:5173/src/Assets/logo.png"
          alt="logo"
          className="h-12 mb-2"
        />
      </div>

      <div className="bg-(--accent) shadow-xl rounded-md p-10 max-w-120 w-full text-center">
        <AiOutlineMail className="mx-auto text-blue-500 text-7xl mb-6 animate-bounce" />

        <h2 className=" text-xl uppercase font-bold text-(--white-color) mb-4">
          Check Your Email
        </h2>

        <p className="mb-4 text-">
          We have sent a verification link to your email address. <br />
          Please check your inbox to verify your account.
        </p>

        <span className="text-[14px] tracking-wide px-3 py-1 rounded text-(--white-color) font-bold">
          {email}
        </span>

        <p className="mt-4">
          Didn’t receive the email?{" "}
          <span
            onClick={cooldown === 0 ? handleResend : null}
            className={`text-(--custom-color) font-semibold cursor-pointer hover:underline ${
              resending || cooldown > 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {resending
              ? "Resending..."
              : cooldown > 0
              ? `Resend in ${cooldown}s`
              : "Resend"}
          </span>
        </p>
      </div>
    </div>
  );
}
