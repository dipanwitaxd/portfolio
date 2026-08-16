"use client";
import { KeyboardArrowLeftRounded, Launch } from "@mui/icons-material";
import React from "react";
import classes from "./styles.module.css";
import { IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import chatApp1 from "../../../public/project/chatapp1.png";
import chatApp2 from "../../../public/project/chatapp2.png";
import imageGallery1 from "../../../public/project/imageGallery1.png";
import imageGallery2 from "../../../public/project/imageGallery2.png";
import imageGallery3 from "../../../public/project/imageGallery3.png";
import imageGallery4 from "../../../public/project/imageGallery4.png";
import talentLens1 from "../../../public/project/talentLens1.png";
import talentLens2 from "../../../public/project/talentLens2.png";
import talentLens3 from "../../../public/project/talentLens3.png";
import talentLens4 from "../../../public/project/talentLens4.png";
import talentLens5 from "../../../public/project/talentLens5.png";
import talentLens6 from "../../../public/project/talentLens6.png";
import talentLens7 from "../../../public/project/talentLens7.png";
import avneeshPortfolio1 from "../../../public/project/avneeshPortfolio1.png";
import avneeshPortfolio2 from "../../../public/project/avneeshPortfolio2.png";
import avneeshPortfolio3 from "../../../public/project/avneeshPortfolio3.png";
import avneeshPortfolio4 from "../../../public/project/avneeshPortfolio4.png";

import ImageSlider from "../common/ImageSlider";
import Link from "next/link";

const Projects = () => {
  const router = useRouter();
  const projects = [
    {
      id: "project_1",
      name: "TalentLens - LLM-Powered Candidate ATS",
      description: (
        <div>
          <div className="cursor-pointer pb-4 font-bold flex gap-2 justify-center">
            <Link href="https://talentlens-demo.streamlit.app/">
              Live Demo <Launch fontSize="small" />
            </Link>{" "}
          </div>
          <div className="pl-8 pb-2">
            <div>
              A generative-AI-driven ATS that intelligently evaluates resumes
              line-by-line, rewrites vague statements, and predicts best-fit
              roles and companies. Built with a hybrid retrieval pipeline to
              ensure context-aware and truthful rewriting.
            </div>
            <ul style={{ listStyleType: "circle", paddingLeft: "1rem" }}>
              <li>
                Built an AI-powered ATS that critiques resumes line-by-line,
                rewrites vague points, and suggests best-fit roles and companies
                using <span className="font-bold">RAG + Llama 3.1.</span>
              </li>
              <li>
                Implemented{" "}
                <span className="font-bold">
                  hybrid retrieval (BM25 + embeddings)
                </span>{" "}
                to ground feedback in real resume and JD context, ensuring
                truthful and specific rewrites.
              </li>
              <li>
                Designed structured{" "}
                <span className="font-bold">LLM pipelines</span> in{" "}
                <span className="font-bold">LangChain</span> for JSON-based
                outputs, enabling consistent reasoning and line-level citations.
              </li>
              <li>
                Generated JD-tailored resume redrafts with factual placeholders
                and predicted top-3 matching roles/companies using semantic
                similarity.
              </li>
            </ul>
          </div>
        </div>
      ),
      images: [
        { src: talentLens1 },
        { src: talentLens2 },
        { src: talentLens3 },
        { src: talentLens4 },
        { src: talentLens5 },
        { src: talentLens6 },
        { src: talentLens7 },
      ],
    },
    {
      id: "project_4",
      name: "Freelance Portfolio Site (SPA)",
      description: (
        <div>
          <div className="cursor-pointer pb-4 font-bold flex gap-2 justify-center">
            <Link
              href="https://avneesh-portfolio-seven.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site <Launch fontSize="small" />
            </Link>{" "}
          </div>
          <div className="pl-8 pb-2">
            <div>
              Designed and built a single-page portfolio site for a friend in
              sales/GTM, end to end — from the layout to deployment. Built with
              React/Next.js and Tailwind, focused on making a fairly dry
              &quot;list of achievements&quot; format feel more like a product
              page than a resume.
            </div>
            <ul style={{ listStyleType: "circle", paddingLeft: "1rem" }}>
              <li>
                Built a{" "}
                <span className="font-bold">
                  reusable animated workflow-diagram component
                </span>{" "}
                (used on both the hero and project sections) to visualize an
                automation pipeline as connected, clickable nodes.
              </li>
              <li>
                Built a <span className="font-bold">stats dashboard</span>{" "}
                section and a company-by-company results table, both driven off
                a single data source instead of hardcoded markup.
              </li>
              <li>
                Structured project write-ups as{" "}
                <span className="font-bold">
                  Problem / Build / Result case studies
                </span>{" "}
                instead of plain bullet lists.
              </li>
              <li>
                Fully responsive, dark-theme design with a working contact form,
                deployed on Vercel.
              </li>
            </ul>
          </div>
        </div>
      ),
      images: [
        { src: avneeshPortfolio1 },
        { src: avneeshPortfolio2 },
        { src: avneeshPortfolio3 },
        { src: avneeshPortfolio4 },
      ],
    },
  ];

  const earlyProjects = [
    {
      id: "project_2",
      name: "ChatApp",
      description: (
        <div className="pl-8 pb-2">
          <div>
            <span className="font-bold">
              A real-time chat application built with JavaScript and Socket.IO
            </span>{" "}
            that enables{" "}
            <span className="font-bold">
              instant messaging with room-based communication.
            </span>
            Features user management, dynamic room creation, and bot
            notifications.
          </div>
          <ul style={{ listStyleType: "circle", paddingLeft: "1rem" }}>
            <li>
              Real-Time Messaging Engine, Instant message delivery using
              Socket.IO event-driven architecture
            </li>
            <li>Message formatting with timestamps and sender metadata</li>
            <li>Dynamic room creation/joining system</li>
            <li>Broadcast messages to specific rooms</li>
            <li>Live user lists per room</li>
            <li>Automatic room updates on user changes</li>
          </ul>
        </div>
      ),
      images: [{ src: chatApp1 }, { src: chatApp2 }],
    },
    {
      id: "project_3",
      name: "Unsplash Photo Gallery",
      description: (
        <div className="pl-8 pb-2">
          <div>
            A modern React application that leverages the Unsplash API to
            provide an elegant image search experience. Features real-time
            search, infinite scrolling, and responsive gallery layouts -
            demonstrating clean React architecture and API integration patterns.
          </div>
          <ul style={{ listStyleType: "circle", paddingLeft: "1rem" }}>
            <li>Instant search-as-you-type functionality</li>
            <li>Debounced API requests for performance optimization</li>
            <li>Dynamic loading of images on scroll</li>
            <li>
              Pagination management with Unsplash API, Loading indicators during
              data fetch
            </li>
            <li>Masonry-style image grid using CSS Grid/Flexbox</li>
            <li>Mobile-optimized responsive design</li>
            <li>Hover effects with image metadata display</li>
            <li>
              Click-to-expand image details, Display photographer information
              and EXIF data
            </li>
          </ul>
        </div>
      ),
      images: [
        { src: imageGallery1 },
        { src: imageGallery2 },
        { src: imageGallery3 },
        { src: imageGallery4 },
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
          <span className="text-2xl">P</span>ROJECTS
        </div>
        <div></div>
      </div>
      <div className={classes.projects_container}>
        {projects?.map((item) => {
          return (
            <div key={item?.id} className={classes.projects_line_item}>
              <ImageSlider images={item?.images} />
              <div className={classes.project_name}>{item.name}</div>
              <div>{item.description}</div>
            </div>
          );
        })}
      </div>
      <div className="font-bold pt-8 pb-2 text-l">
        Earlier practice projects
      </div>
      <div className={classes.projects_container}>
        {earlyProjects?.map((item) => {
          return (
            <div key={item?.id} className={classes.projects_line_item}>
              <ImageSlider images={item?.images} />
              <div className={classes.project_name}>{item.name}</div>
              <div>{item.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
