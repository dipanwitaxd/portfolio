"use client";

import { KeyboardArrowLeftRounded } from "@mui/icons-material";
import React from "react";
import classes from "./styles.module.css";
import { IconButton, ImageList, ImageListItem } from "@mui/material";
import { useRouter } from "next/navigation";

const Interests = () => {
  const router = useRouter();

  const itemData = [
    {
      img: "interests/interest1.jpg",
      title: "Breakfast",
      rows: 2,
      cols: 2,
    },
    {
      img: "interests/interest2.jpg",
      title: "Burger",
    },
    {
      img: "interests/interest3.jpg",
      title: "Camera",
    },
    {
      img: "interests/interest8.jpg",
      title: "Coffee",
    },
    {
      img: "interests/interest5.jpg",
      title: "Coffee",
    },
    {
      img: "interests/interest6.jpg",
      title: "Hats",
    },
    {
      img: "interests/interest7.jpg",
      title: "Hats",
    },
    {
      img: "interests/interest4.jpg",
      title: "Honey",
      rows: 2,
      cols: 2,
    },
    {
      img: "interests/interest9.jpg",
      title: "Basketball",
    },
    {
      img: "interests/interest10.jpg",
      title: "Fern",
    },
    {
      img: "interests/interest11.jpg",
      title: "Mushrooms",
      rows: 2,
      cols: 2,
    },
    {
      img: "interests/interest12.jpg",
      title: "Tomato basil",
    },
    {
      img: "interests/interest13.jpg",
      title: "Sea star",
    },
    {
      img: "interests/interest14.jpg",
      title: "Sea star",
    },
    {
      img: "interests/profile2.jpg",
      title: "Sea star",
    },
  ];

  const srcset = (image: string, size: number, rows = 1, cols = 1) => {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  };

  return (
    <div>
      <div className={classes.header}>
        <IconButton onClick={() => router.back()}>
          <KeyboardArrowLeftRounded
            sx={{ color: "#d1d1d1", cursor: "pointer" }}
          />
        </IconButton>
        <div className={classes.header_label}>
          <span className="text-2xl">B</span>EYOND THE{" "}
          <span className="text-2xl">C</span>ODE
        </div>
        <div></div>
      </div>
      <div className="pb-4">
        When I'm not architecting React components or optimizing APIs, I explore
        the intersection of art, culture, and technology:
      </div>
      <ImageList
        sx={{ height: 450 }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            {item.title === "video" ? (
              <video autoPlay muted loop className="w-full h-full">
                <source src={item.img} type="video/mp4" />
              </video>
            ) : (
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            )}
          </ImageListItem>
        ))}
      </ImageList>
      <div className="pt-4">
        <div className="font-bold mb-2">🖌️ Painting My World</div>
        <div className="ml-8">
          <ul style={{ listStyleType: "circle" }}>
            <li>
              Creating vibrant watercolor landscapes and digital illustrations
            </li>
            <li>
              "Coding is art with logic as its canvas" - exploring parallels
              between UI composition and visual storytelling
            </li>
            <li>Find my latest artwork on Instagram</li>
          </ul>
        </div>
      </div>
      <div className="pt-4">
        <div className="font-bold mb-2">
          ✈️ Cultural Engineering Through Travel
        </div>
        <div>
          My transformative Japan experience reshaped how I view systems and
          user behavior:
        </div>
        <ul style={{ listStyleType: "circle" }} className="ml-8">
          <li>
            <span className="font-bold">Observed cultural algorithms:</span>
            Standing left on elevators, self-organized queues, quiet public
            transport
          </li>
          <li>
            <span className="font-bold">Designed inspiration:</span> Tokyo's
            digital art museums, TeamLab Planets and Kyoto's shrine aesthetics
            influencing UI minimalism
          </li>
          <li>
            <span className="font-bold">Adopted principles:</span> Applying
            "unsaid rules" elegance to intuitive UI patterns and component
            design
          </li>
        </ul>
        <div className="my-2 italic">
          Japan taught me that the best systems work so seamlessly, users follow
          them instinctively
        </div>
      </div>
      <div className="pt-4">
        <div className="font-bold mb-2">📚 Books That Expand Minds</div>
        <ul style={{ listStyleType: "circle" }} className="ml-8">
          <li>
            <span className="font-bold">All-time favorite:</span>
            <span className="italic"> A Thousand Splendid Suns</span> by Khaled
            Hosseini - masterclass in human resilience and narrative depth
          </li>
          <li>
            <span className="font-bold">Author inspiration:</span> Hosseini's
            ability to weave emotional architecture informs my user journey
            mapping
          </li>
        </ul>
        <div className="my-2 italic">
          Always open to recommendations that blend human stories with technical
          insights!
        </div>
      </div>
    </div>
  );
};

export default Interests;
