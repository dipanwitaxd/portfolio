"use client";

import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isFlipped, setFlipped] = useState(false);

  useEffect(() => {
    setFlipped((f) => !f);
  }, [children]);

  return (
    <>
      <div
        className={`details_container ${
          isFlipped ? "details_container_flipped" : ""
        }`}
      >
        {children}
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
    </>
  );
}
