import React from "react";

import classes from "./styles.module.css";
import { BranchesOutlined, HomeOutlined } from "@ant-design/icons";
import { Divider, useMediaQuery } from "@mui/material";
import {
  EngineeringOutlined,
  InterestsOutlined,
  WorkHistoryOutlined,
} from "@mui/icons-material";
import Link from "next/link";

const NavBar = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <div className={classes.nav_container}>
      <div className={classes.blur_container}>
        <Link href={"/"} style={{ textDecoration: "none" }}>
          <div className={classes.nav_item}>
            <HomeOutlined className={classes.icon} />
            <div className={classes.label}>Home</div>
            {!isMobile && (
              <Divider
                sx={{ borderColor: "white", opacity: 0.6, width: "100%" }}
              />
            )}
          </div>
        </Link>

        <Link href={"/experience"} style={{ textDecoration: "none" }}>
          <div className={classes.nav_item}>
            <WorkHistoryOutlined fontSize="small" />
            <div className={classes.label}>Experience</div>
            {!isMobile && (
              <Divider
                sx={{ borderColor: "white", opacity: 0.6, width: "100%" }}
              />
            )}
          </div>
        </Link>
        <Link href={"/skills"} style={{ textDecoration: "none" }}>
          <div className={classes.nav_item}>
            <EngineeringOutlined fontSize="small" />
            <div className={classes.label}>Skills</div>
            {!isMobile && (
              <Divider
                sx={{ borderColor: "white", opacity: 0.6, width: "100%" }}
              />
            )}
          </div>
        </Link>
        <Link href={"/interests"} style={{ textDecoration: "none" }}>
          <div className={classes.nav_item}>
            <InterestsOutlined fontSize="small" />
            <div className={classes.label}>Interests</div>
            {!isMobile && (
              <Divider
                sx={{ borderColor: "white", opacity: 0.6, width: "100%" }}
              />
            )}
          </div>
        </Link>
        <Link href={"/projects"} style={{ textDecoration: "none" }}>
          <div className={classes.nav_item}>
            <BranchesOutlined />
            <div className={classes.label}>Projects</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
