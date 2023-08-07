"use client";
import Image from "next/image";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
export default function Home() {
  const options: any = {
    position: "top-center",
    style: {
      background: "black",
      color: "white",
    },
  };
  const router = useRouter();
  const verifyToken = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post("/api/users/verifyToken", { token });

      if (response.data.status === false) {
        toast.error("Invalid token", options);
        router.push("/login");
        localStorage.clear();
      } else {
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    verifyToken();
  }, []);
  return (
    <>
      <main className="">
        <Navbar />
      </main>
      <Toaster />
    </>
  );
}
