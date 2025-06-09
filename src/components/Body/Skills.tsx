"use client";

import React from "react";
import classes from "./styles.module.css";
import { IconButton } from "@mui/material";
import {
  EmojiNatureRounded,
  KeyboardArrowLeftRounded,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";
import Image from "next/image";
const Skills = () => {
  const router = useRouter();
  const experienceData = [
    {
      id: 1,
      category: "Languages",
      description:
        "Strong proficiency in core scripting languages for building scalable and maintainable web applications.",
      logos: [
        {
          name: "JavaScript",
          image: (
            <Image
              src={"/skills/javascriptLogo.png"}
              alt="javascript logo"
              width={80}
              height={80}
            />
          ),
        },
        {
          name: "TypeScript",
          image: (
            <Image
              src={"/skills/typeScriptLogo.avif"}
              alt="typescript logo"
              width={80}
              height={80}
            />
          ),
        },
      ],
    },
    {
      id: 2,
      category: "Frontend",
      description:
        "Expertise in building dynamic, high-performance user interfaces with modern React frameworks. Skilled in creating responsive, accessible, and visually appealing web designs.",
      logos: [
        {
          name: "React JS",
          image: (
            <Image
              src={"/skills/react.webp"}
              alt="react logo"
              width={80}
              height={80}
            />
          ),
        },
        {
          name: "Next JS",
          image: (
            <Image
              src={"/skills/nextjsLogo.png"}
              alt="next js logo"
              width={80}
              height={80}
            />
          ),
        },
        {
          name: "HTML",
          image: (
            <Image
              src={"/skills/HTML5_logo.png"}
              alt="html logo"
              width={80}
              height={80}
            />
          ),
        },
        {
          name: "CSS",
          image: (
            <Image
              src={"/skills/css.png"}
              alt="css logo"
              width={60}
              height={60}
            />
          ),
        },
        {
          name: "SCSS",
          image: (
            <Image
              src={"/skills/sass.png"}
              alt="scss logo"
              width={80}
              height={80}
            />
          ),
        },
        {
          name: "Tailwind",
          image: (
            <Image
              src={"/skills/tailwind.png"}
              alt="tailwind logo"
              width={80}
              height={80}
            />
          ),
        },
      ],
    },
    {
      id: 3,
      category: "Tools & Platforms",
      description:
        "Proficient in version control and collaborative development workflows. Experience in integrating and consuming RESTful services for seamless data exchange. Familiarity with cloud services, deployment, and DevOps on Microsoft Azure.",
      logos: [
        {
          name: "GIT",
          image: (
            <Image
              src={"/skills/gitLogo.png"}
              alt="git logo"
              width={80}
              height={80}
            />
          ),
        },
        {
          name: "REST APIs",
          image: (
            <Image
              src={"/skills/restAPILogo.png"}
              alt="rest api logo"
              width={80}
              height={80}
            />
          ),
        },
        {
          name: "Azure",
          image: (
            <Image
              src={"/skills/azureLogo.png"}
              alt="azure logo"
              width={80}
              height={80}
            />
          ),
        },
      ],
    },
    {
      id: 4,
      category: "Mobile",
      description:
        "Proficient in developing cross-platform mobile applications with native-like performance.",
      logos: [
        {
          name: "React Native",
          image: (
            <Image
              src={"/skills/react.webp"}
              alt="react native logo"
              width={80}
              height={80}
            />
          ),
        },
      ],
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
          <span className="text-2xl">S</span>KILLS
        </div>
        <div></div>
      </div>
      {experienceData?.map((item) => {
        return (
          <div key={item?.id} className={classes.experience_container}>
            <div>
              <EmojiNatureRounded sx={{ color: "#d1d1d1" }} />
              <div className={classes.dashed_line}></div>
            </div>
            <div className={classes.experience_item_container}>
              <div className="pb-4">
                <div className={classes.experience_item_header}>
                  <div className={classes.category}>{item?.category}</div>
                </div>
                <div className={classes.experience_item_header}>
                  <div className={classes.description}>{item?.description}</div>
                </div>
              </div>
              <div className={classes.skill_items_container}>
                {item?.logos?.map((ele, index) => {
                  return (
                    <div key={index} className={classes.skill_items}>
                      {ele.image}
                      <div className={classes.skill_name}>{ele.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
