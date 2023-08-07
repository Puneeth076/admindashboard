"use client";
import { registerToast } from "@/helpers/Toaster";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { InfinitySpin } from "react-loader-spinner";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ username: "", email: "", password: "" });
  const options: any = {
    position: "top-center",
    style: { background: "grey", color: "white" },
  };
  const handleRegister = async () => {
    try {
      setLoading(true);
      if (!registerToast({ ...data })) {
        setLoading(false);
        return;
      }
      const user = await axios.post("/api/users/register", data);

      toast.success(user.data.message, options);
      setLoading(false);
      router.push("/login");
    } catch (error: any) {
      toast.error("Error in registration", options);
    }
  };

  return (
    <div className="flex flex-col justify-center min-h-screen place-items-center">
      {loading ? (
        <div className="loading">
          <InfinitySpin color="gray" width="200" />
          <h1 className="text-4xl">Loading...</h1>
        </div>
      ) : (
        <>
          <h1 className="text-4xl font-bold  mb-20">Register Here</h1>
          <div className="flex flex-col px-10 rounded-lg  py-10 shadow-md form">
            <label>Enter your username</label>
            <input
              value={data.username}
              onChange={(e) => setData({ ...data, username: e.target.value })}
              type="text"
              name="username"
              id="username"
              placeholder="Username"
            />
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
              onClick={handleRegister}
              className=" bg-slate-400 rounded-lg py-2 my-4 text-white font-bold"
              type="submit"
            >
              Register
            </button>
            <p>
              Already have an account{" "}
              <span className="text-slate-400 ps-1">
                <Link href="/login">Login here</Link>
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
