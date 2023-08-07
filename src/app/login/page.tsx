"use client";
import Link from "next/link";
import React, { useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { loginToast } from "@/helpers/Toaster";
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();
  const [data, setData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      if (!loginToast({ ...data })) {
        setLoading(false);
        return;
      }
      const response = await axios.post("/api/users/login", data);
      if (response.data.status === false) {
        toast.error(response.data.message, {
          position: "top-center",
          style: { background: "black", color: "white" },
        });
      } else {
        toast.success(response.data.message, {
          position: "top-center",
          style: { background: "black", color: "white" },
        });
        localStorage.setItem("token", response.data.token);
        router.push("/");
      }
      setLoading(false);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex flex-col justify-center min-h-screen place-items-center">
      {loading ? (
        <>
          <InfinitySpin color="gray" />
          <h1 className="text-4xl">Loading...</h1>
        </>
      ) : (
        <>
          <h1 className="text-4xl font-bold mb-20">Login Here</h1>
          <div className="flex rounded-lg flex-col p-5 py-10 shadow-md form">
            <label>Enter your email</label>
            <input
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
            <label>Enter your password</label>
            <input
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <button
              onClick={handleLogin}
              className=" bg-slate-400 rounded-lg py-2 my-4 text-white font-bold"
              type="submit"
            >
              Login
            </button>
            <p>
              Don't have an account{" "}
              <span className="text-slate-400 ps-1">
                <Link href="/register">Register here</Link>
              </span>
            </p>
          </div>
        </>
      )}
      <Toaster />
    </div>
  );
};

export default page;
