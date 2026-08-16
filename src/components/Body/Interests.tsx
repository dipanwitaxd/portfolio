"use client";

import { KeyboardArrowLeftRounded } from "@mui/icons-material";
import React from "react";
import classes from "./styles.module.css";
import { IconButton, ImageList, ImageListItem } from "@mui/material";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Interests = () => {
  const router = useRouter();

  const itemData = [
    {
      img: "interests/interest1.JPG",
      title: "Interest1",
      rows: 2,
      cols: 2,
    },
    {
      img: "interests/interest2.JPG",
      title: "Interest2",
    },
    {
      img: "interests/interest3.jpg",
      title: "Interest3",
    },
    {
      img: "interests/interest8.JPG",
      title: "Interest4",
    },
    {
      img: "interests/interest5.jpg",
      title: "Interest5",
    },
    {
      img: "interests/interest6.jpg",
      title: "Interest6",
    },
    {
      img: "interests/interest7.jpg",
      title: "Interest7",
    },
    {
      img: "interests/interest4.jpg",
      title: "Interest8",
      rows: 2,
      cols: 2,
    },
    {
      img: "interests/interest9.JPG",
      title: "Interest9",
    },
    {
      img: "interests/interest10.JPG",
      title: "Interest10",
    },
    {
      img: "interests/interest11.JPG",
      title: "Interest11",
      rows: 2,
      cols: 2,
    },
    {
      img: "interests/interest12.jpg",
      title: "Interest12",
    },
    {
      img: "interests/interest13.jpg",
      title: "Interest13",
    },
    {
      img: "interests/interest14.jpg",
      title: "Interest14",
    },
    {
      img: "interests/profile2.jpg",
      title: "Interest15",
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
            sx={{ flexGrow: 1 }}
          >
            {item.title === "video" ? (
              <video autoPlay muted loop className="w-full h-full">
                <source src={item.img} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={`/${item.img}`}
                width={121 * (item?.cols || 1)}
                height={121 * (item?.rows || 1)}
                alt={item.title}
                loading="lazy"
                unoptimized={true} // Critical for static exports
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  verticalAlign: "bottom",
                }}
              />
            )}
          </ImageListItem>
        ))}
      </ImageList>
      <div className="pt-4">
        <div className="font-bold mb-2">🖌️ Painting</div>
        <div className="ml-8">
          I paint watercolor landscapes and do some digital illustration in my
          spare time - I post some of it on Instagram.
        </div>
      </div>
      <div className="pt-4">
        <div className="font-bold mb-2">✈️ Travel</div>
        <div className="ml-8">
          Japan is the trip that's stuck with me the most. The way small
          things there are designed - queueing, transit, TeamLab Planets,
          Kyoto's temples - left an impression, and I do think about it
          sometimes when I'm working on interfaces. Mostly I just want to go
          back.
        </div>
      </div>
      <div className="pt-4">
        <div className="font-bold mb-2">📚 Reading</div>
        <div className="ml-8">
          My favorite book is{" "}
          <span className="italic">A Thousand Splendid Suns</span> by Khaled
          Hosseini. Always open to recommendations.
        </div>
      </div>
    </div>
  );
};

export default Interests;
