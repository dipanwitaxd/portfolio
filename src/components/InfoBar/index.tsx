import React, { useState } from "react";

import classes from "./styles.module.css";
import { GithubFilled, LinkedinFilled } from "@ant-design/icons";
import { Divider, IconButton, Tooltip, useMediaQuery } from "@mui/material";
import {
  ContactPageRounded,
  ForwardToInboxOutlined,
  ChatOutlined,
} from "@mui/icons-material";
import toast from "react-hot-toast";
import Link from "next/link";
import ContactModal from "./ContactModal";

const InfoBar = () => {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const [contactAnchor, setContactAnchor] = useState<HTMLElement | null>(
    null
  );

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
        <div className={classes.info_item}>
          <Tooltip title="Contact Me">
            <IconButton
              sx={{
                color: "#d1d1d1",
                padding: 0,
                ":hover": {
                  backgroundColor: "none",
                },
              }}
              onClick={(e) => setContactAnchor(e.currentTarget)}
            >
              <ChatOutlined fontSize="small" className={classes.icon} />
            </IconButton>
          </Tooltip>
        </div>
        <ContactModal
          anchorEl={contactAnchor}
          open={Boolean(contactAnchor)}
          onClose={() => setContactAnchor(null)}
        />
        {!isMobile ? (
          <Divider
            sx={{
              borderColor: "white",
              opacity: 0.6,
              width: "100%",
            }}
          />
        ) : (
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{
              borderColor: "white",
              opacity: 0.6,
              // width: "100%",
            }}
          />
        )}
        <div className={classes.info_item}>
          <Link
            href={"https://www.linkedin.com/in/dipanwita-mandal/"}
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
