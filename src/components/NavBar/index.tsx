import React from "react";

import classes from "./styles.module.css";
import { BranchesOutlined, HomeOutlined } from "@ant-design/icons";
import { Divider } from "@mui/material";
import {
  EngineeringOutlined,
  InterestsOutlined,
  WorkHistoryOutlined,
} from "@mui/icons-material";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className={classes.nav_container}>
      <div className={classes.blur_container}>
        <Link href={"/"} style={{ textDecoration: "none" }}>
          <div className={classes.nav_item}>
            <HomeOutlined className={classes.icon} />
            <div className={classes.label}>Home</div>
            <Divider
              sx={{ borderColor: "white", opacity: 0.6, width: "100%" }}
            />
          </div>
        </Link>
        <Link href={"/projects"} style={{ textDecoration: "none" }}>
          <div className={classes.nav_item}>
            <BranchesOutlined />
            <div className={classes.label}>Projects</div>
            <Divider
              sx={{ borderColor: "white", opacity: 0.6, width: "100%" }}
            />
          </div>
        </Link>
        <Link href={"/experience"} style={{ textDecoration: "none" }}>
          <div className={classes.nav_item}>
            <WorkHistoryOutlined fontSize="small" />
            <div className={classes.label}>Experience</div>
            <Divider
              sx={{ borderColor: "white", opacity: 0.6, width: "100%" }}
            />
          </div>
        </Link>
        <Link href={"/skills"} style={{ textDecoration: "none" }}>
          <div className={classes.nav_item}>
            <EngineeringOutlined fontSize="small" />
            <div className={classes.label}>Skills</div>
            <Divider
              sx={{ borderColor: "white", opacity: 0.6, width: "100%" }}
            />
          </div>
        </Link>
        <Link href={"/interests"} style={{ textDecoration: "none" }}>
          <div className={classes.nav_item}>
            <InterestsOutlined fontSize="small" />
            <div className={classes.label}>Interests</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
