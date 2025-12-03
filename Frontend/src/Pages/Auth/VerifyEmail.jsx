import React, { useEffect, useState } from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { VERIFY_EMAIL_API } from "../../Api/auth";

export default function VerifyEmail() {
  const [status, setStatus] = useState("loading"); 
  const [search] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = search.get("token");
    const id = search.get("id");

    const verify = async () => {
      try {
        const res = await VERIFY_EMAIL_API(token, id);
        setStatus("success");

        setTimeout(() => {
          navigate("/login");
        }, 2500);
      } catch (err) {
        setStatus("error");
      }
    };

    verify();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-(--foreground-color) px-4">
      <div className="bg-(--accent) shadow-xl rounded-md p-10 max-w-md w-full text-center ">

        {/* LOADING */}
        {status === "loading" && (
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-(--custom-colo) border-t-transparent rounded-full animate-spin mb-6"></div>
            <span className="text-xl text-(--custom-color)">
              Verifying your email...
            </span>
            <p className="mt-2">
              Please wait a moment
            </p>
          </div>
        )}

        {/* SUCCESS */}
        {status === "success" && (
          <div>
            <AiOutlineCheckCircle className="mx-auto text-green-500 text-7xl mb-6" />
            <span className="text-xl text-green-600 mb-2">
              Email Verified!
            </span>
            <p className="mb-6">
              Your email has been successfully verified. Redirecting to login...
            </p>
            <Link to={"/login"}>
              <button className="btn">
                Go to Login
              </button>
            </Link>
          </div>
        )}

        {/* ERROR */}
        {status === "error" && (
          <div>
            <AiOutlineCloseCircle className="mx-auto text-red-500 text-7xl mb-6" />
            <span className="text-xl uppercase text-red-500">
              Verification Failed
            </span>
            <p className="mt-2 mb-6">
              The verification link is invalid or expired.
            </p>

          </div>
        )}

      </div>
    </div>
  );
}
