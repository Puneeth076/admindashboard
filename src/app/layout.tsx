import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Smile dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
