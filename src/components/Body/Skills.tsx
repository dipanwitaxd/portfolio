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
        {
          name: "Python",
          image: (
            <Image
              src={"/skills/pythonLogo.png"}
              alt="Python logo"
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
      category: "Backend",
      description:
        "Experienced in designing modular backend architectures with RESTful services and API-driven data layers. Adept at integrating scalable databases (PostgreSQL, Supabase) and optimizing API communication across systems.",
      logos: [
        {
          name: "Node.js",
          image: (
            <Image
              src={"/skills/nodeLogo.png"}
              alt="Node js logo"
              width={80}
              height={80}
            />
          ),
        },
        {
          name: "Nest.js",
          image: (
            <Image
              src={"/skills/nestLogo.webp"}
              alt="Nest js logo"
              width={80}
              height={80}
            />
          ),
        },
        {
          name: "Flask",
          image: (
            <Image
              src={"/skills/flaskLogo.png"}
              alt="Flask logo"
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
          name: "Supabase",
          image: (
            <Image
              src={"/skills/supabaseLogo.png"}
              alt="Supabase logo"
              width={80}
              height={80}
            />
          ),
        },
      ],
    },
    {
      id: 4,
      category: "AI / LLM",
      description:
        "Building intelligent systems with Retrieval-Augmented Generation pipelines using LangChain. Skilled in grounding LLM outputs through hybrid retrieval, contextual embeddings, and structured reasoning chains.",
      logos: [
        {
          name: "Generative AI",
          image: (
            <Image
              src={"/skills/genAI.png"}
              alt="Generative AI logo"
              width={80}
              height={80}
            />
          ),
        },
        {
          name: "LangChain",
          image: (
            <Image
              src={"/skills/langchain.png"}
              alt="LangChain logo"
              width={80}
              height={80}
            />
          ),
        },
        {
          name: "RAG",
          image: (
            <Image
              src={"/skills/ragLogo.png"}
              alt="RAG logo"
              width={80}
              height={80}
            />
          ),
        },
      ],
    },
    {
      id: 5,
      category: "Cloud & DevOps",
      description:
        "Proficient in CI/CD automation pipelines, code quality enforcement, and version control best practices. Skilled in deploying and monitoring production systems on AWS and Azure for fast, reliable release cycles.",
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
        {
          name: "AWS",
          image: (
            <Image
              src={"/skills/aws.png"}
              alt="AWS logo"
              width={80}
              height={80}
            />
          ),
        },
        {
          name: "CI/CD (YAML)",
          image: (
            <Image
              src={"/skills/yaml.png"}
              alt="CI/CD (YAML) logo"
              width={80}
              height={80}
            />
          ),
        },
        {
          name: "SonarQube",
          image: (
            <Image
              src={"/skills/sonarqubeLogo.png"}
              alt="SonarQube logo"
              width={80}
              height={80}
            />
          ),
        },
      ],
    },
    {
      id: 6,
      category: "Analytics & Tools",
      description:
        "Hands-on experience with Mixpanel for product analytics, user behavior tracking, and data-informed iteration. Strong design collaboration via Figma and hybrid retrieval optimization using Chroma & BM25 embeddings.",
      logos: [
        {
          name: "Mixpanel",
          image: (
            <Image
              src={"/skills/mixpanel.png"}
              alt="Mixpanel logo"
              width={80}
              height={80}
            />
          ),
        },
        {
          name: "Figma",
          image: (
            <Image
              src={"/skills/figma.png"}
              alt="Figma logo"
              width={80}
              height={80}
            />
          ),
        },
        {
          name: "ChromaDB",
          image: (
            <Image
              src={"/skills/chroma.webp"}
              alt="ChromaDB logo"
              width={80}
              height={80}
            />
          ),
        },
        {
          name: "BM25",
          image: (
            <Image
              src={"/skills/bm25.png"}
              alt="BM25 logo"
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
                      <div className={classes.skill_icon_tile}>
                        {ele.image}
                      </div>
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
