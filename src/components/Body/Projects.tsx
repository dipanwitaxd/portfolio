"use client";
import { KeyboardArrowLeftRounded } from "@mui/icons-material";
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

import ImageSlider from "../common/ImageSlider";

const Projects = () => {
  const router = useRouter();
  const projects = [
    {
      id: "project_1",
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
      id: "project_2",
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
    </div>
  );
};

export default Projects;
