import React from "react";
import { Popover, useMediaQuery } from "@mui/material";

import classes from "./contactModal.module.css";
import ContactForm from "./ContactForm";

interface ContactModalProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
}

const ContactModal = ({ anchorEl, open, onClose }: ContactModalProps) => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: "center",
        horizontal: isMobile ? "center" : "left",
      }}
      transformOrigin={{
        vertical: "center",
        horizontal: isMobile ? "center" : "right",
      }}
      slotProps={{
        paper: {
          className: classes.popover_paper,
        },
      }}
    >
      <ContactForm onSuccess={onClose} />
    </Popover>
  );
};

export default ContactModal;
