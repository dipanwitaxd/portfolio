"use client";

import React from "react";
import classes from "./styles.module.css";
import { IconButton } from "@mui/material";
import { KeyboardArrowLeftRounded, Launch } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Certifications = () => {
  const router = useRouter();

  const certifications = [
    {
      id: 1,
      name: "IBM Generative AI Engineering",
      issuer: "IBM · Coursera",
      date: "Sep 2025",
      image: "/certifications/ibm-genai-engineering.png",
      description:
        "A 16-course program on how LLMs actually work under the hood - tokenization, transformers, attention - plus hands-on practice with PyTorch, Hugging Face, and LangChain. A lot of the RAG background behind TalentLens came out of this.",
      verifyUrl:
        "https://www.coursera.org/verify/professional-cert/FO5L92ZZW8NQ",
    },
    {
      id: 2,
      name: "Namaste React",
      issuer: "NamasteDev.com",
      date: "",
      image: "/certifications/namaste-react.png",
      description:
        "Went back to fundamentals with this one - hooks, rendering behavior, component design, instead of just picking things up piecemeal on the job.",
    },
    {
      id: 3,
      name: "Namaste Node.js",
      issuer: "NamasteDev.com",
      date: "",
      image: "/certifications/namaste-nodejs.png",
      description:
        "Same course series, but for Node - the event loop, async I/O, and what's actually happening under Express instead of just using it.",
    },
  ];

  return (
    <div>
      <div className={classes.header}>
        <IconButton onClick={() => router.back()}>
          <KeyboardArrowLeftRounded
            sx={{ color: "#d1d1d1", cursor: "pointer" }}
          />
        </IconButton>
        <div className={classes.header_label}>
          <span className="text-2xl">C</span>ERTIFICATIONS
        </div>
        <div></div>
      </div>
      <div className={classes.projects_container}>
        {certifications?.map((item) => (
          <div key={item?.id} className={classes.projects_line_item}>
            <Image
              src={item.image}
              alt={`${item.name} certificate`}
              width={650}
              height={460}
              className={classes.cert_image}
            />
            <div className={classes.project_name}>{item.name}</div>
            <div className={classes.cert_meta}>
              {item.issuer}
              {item.date ? ` · ${item.date}` : ""}
            </div>
            <div className={classes.cert_description}>{item.description}</div>
            {item.verifyUrl && (
              <div className="cursor-pointer pb-2 font-bold flex gap-2 justify-center">
                <Link
                  href={item.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Verify Certificate{" "}
                <Launch fontSize="small" />
                </Link>{" "}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
