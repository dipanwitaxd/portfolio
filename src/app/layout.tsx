"use client"; // This is a client component 👈🏽

import "./globals.css";
import NavBar from "@/components/NavBar";
import InfoBar from "@/components/InfoBar";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  useEffect(() => {
    handleFlip();
  }, [children]);

  return (
    <html lang="en">
      <body className={` antialiased`}>
        <video autoPlay muted loop className="video">
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="main_container h-screen py-8 px-4">
          <NavBar />
          <div className="details">
            <div
              className={`details_container ${
                isFlipped ? "details_container_flipped" : ""
              }`}
            >
              {children}
            </div>
          </div>
          <InfoBar />
        </div>
        <Toaster
          toastOptions={{
            className: "",
            style: {
              borderRadius: "10px",
              background: "#ffffff31",
              border: " 0px",
              backdropFilter: " blur(7px)",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "#5c5c5c",
              color: "#d6d6d6",
            },
          }}
          position="top-right"
        />
      </body>
    </html>
  );
}
