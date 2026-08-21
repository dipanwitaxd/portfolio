"use client";

import React, { useState } from "react";

import classes from "./styles.module.css";
import {
  BranchesOutlined,
  CloseOutlined,
  HomeOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Divider } from "@mui/material";
import {
  EngineeringOutlined,
  InterestsOutlined,
  WorkHistoryOutlined,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";
import Link from "next/link";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      href: "/",
      label: "Home",
      icon: <HomeOutlined className={classes.icon} />,
    },
    {
      href: "/experience",
      label: "Experience",
      icon: <WorkHistoryOutlined className={classes.icon} fontSize="small" />,
    },
    {
      href: "/skills",
      label: "Skills",
      icon: <EngineeringOutlined className={classes.icon} fontSize="small" />,
    },
    {
      href: "/certifications",
      label: "Certificates",
      icon: (
        <WorkspacePremiumOutlined className={classes.icon} fontSize="small" />
      ),
    },
    {
      href: "/projects",
      label: "Projects",
      icon: <BranchesOutlined className={classes.icon} />,
    },
    {
      href: "/interests",
      label: "Interests",
      icon: <InterestsOutlined className={classes.icon} fontSize="small" />,
    },
  ];

  return (
    <div className={classes.nav_container}>
      {/* Desktop / tablet rail */}
      <div className={classes.blur_container}>
        {links.map((link, idx) => (
          <Link key={link.href} href={link.href} style={{ textDecoration: "none" }}>
            <div className={classes.nav_item}>
              {link.icon}
              <div className={classes.label}>{link.label}</div>
              {idx < links.length - 1 && (
                <Divider
                  sx={{ borderColor: "white", opacity: 0.6, width: "100%" }}
                />
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile hamburger trigger */}
      <button
        type="button"
        className={classes.hamburger_btn}
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation menu"
      >
        <MenuOutlined />
      </button>

      {/* Mobile floating nav */}
      {isOpen && (
        <div
          className={classes.mobile_overlay}
          onClick={() => setIsOpen(false)}
        >
          <div
            className={classes.mobile_panel}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={classes.mobile_close_btn}
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation menu"
            >
              <CloseOutlined />
            </button>
            <div className={classes.mobile_nav_list}>
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ textDecoration: "none" }}
                  onClick={() => setIsOpen(false)}
                >
                  <div className={classes.mobile_nav_row}>
                    <span className={classes.mobile_nav_icon}>
                      {link.icon}
                    </span>
                    <span className={classes.mobile_nav_label}>
                      {link.label}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
