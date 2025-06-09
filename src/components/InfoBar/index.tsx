import React, { useState } from "react";

import classes from "./styles.module.css";
import { GithubFilled, LinkedinFilled } from "@ant-design/icons";
import { Divider, IconButton, Tooltip } from "@mui/material";
import {
  ContactPageRounded,
  ForwardToInboxOutlined,
} from "@mui/icons-material";
import toast from "react-hot-toast";
import Link from "next/link";

const InfoBar = () => {
  return (
    <div className={classes.info_container}>
      <div className={classes.blur_container}>
        <div className={classes.info_item}>
          <Tooltip title="Copy Email Id">
            <IconButton
              sx={{
                color: "#d1d1d1",
                padding: 0,
                ":hover": {
                  backgroundColor: "none",
                },
              }}
              onClick={() => {
                navigator.clipboard.writeText("dipanwita678@gmail.com");
                toast("Copied Email Successfully!");
              }}
            >
              <ForwardToInboxOutlined
                fontSize="small"
                className={classes.icon}
              />
            </IconButton>
          </Tooltip>
        </div>
        <div className={classes.info_item}>
          <Tooltip title="View Resume">
            <IconButton
              sx={{
                color: "#d1d1d1",
                padding: 0,
                ":hover": {
                  backgroundColor: "none",
                },
              }}
              onClick={() => {
                window.open(
                  "/document/resume.pdf",
                  "_blank",
                  "noopener,noreferrer"
                );
                toast("Opening Resume...");
              }}
            >
              <ContactPageRounded fontSize="small" className={classes.icon} />
            </IconButton>
          </Tooltip>
        </div>
        {/* <div className={classes.info_item}>
          <WhatsAppOutlined className={classes.icon} />
        </div> */}
        <Divider
          sx={{
            borderColor: "white",
            opacity: 0.6,
            width: "100%",
          }}
        />
        <div className={classes.info_item}>
          <Link
            href={"https://www.linkedin.com/in/dipanwita-mandal-78a2121b3/"}
            target="_blank"
          >
            <LinkedinFilled className={classes.icon} />
          </Link>
        </div>
        <div className={classes.info_item}>
          <Link href={"https://github.com/dipanwitaxd"} target="_blank">
            <GithubFilled className={classes.icon} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
