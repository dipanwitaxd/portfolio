import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Popover, TextField, Button, useMediaQuery } from "@mui/material";
import toast from "react-hot-toast";

import classes from "./contactModal.module.css";

interface ContactModalProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
}

interface FormState {
  name: string;
  email: string;
  linkedin: string;
  phone: string;
  message: string;
}

const EMPTY_FORM: FormState = {
  name: "",
  email: "",
  linkedin: "",
  phone: "",
  message: "",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactModal = ({ anchorEl, open, onClose }: ContactModalProps) => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleClose = () => {
    if (submitting) return;
    setForm(EMPTY_FORM);
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !EMAIL_REGEX.test(form.email.trim())) {
      toast.error("Please fill in a valid name and email.");
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error("Contact form isn't configured yet.");
      return;
    }

    setSubmitting(true);
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name.trim(),
          from_email: form.email.trim(),
          linkedin: form.linkedin.trim() || "Not provided",
          phone: form.phone.trim() || "Not provided",
          message: form.message.trim() || "No message provided",
        },
        publicKey
      );
      toast.success("Message sent! I'll get back to you soon.");
      setForm(EMPTY_FORM);
      onClose();
    } catch (error) {
      console.error("EmailJS send failed:", error);
      toast.error("Couldn't send your message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
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
      <form className={classes.form_container} onSubmit={handleSubmit}>
        <h3 className={classes.form_title}>Contact Me</h3>
        <TextField
          label="Name"
          required
          size="small"
          value={form.name}
          onChange={handleChange("name")}
          className={classes.field}
        />
        <TextField
          label="Email"
          type="email"
          required
          size="small"
          value={form.email}
          onChange={handleChange("email")}
          className={classes.field}
        />
        <TextField
          label="LinkedIn Profile"
          size="small"
          value={form.linkedin}
          onChange={handleChange("linkedin")}
          className={classes.field}
        />
        <TextField
          label="Phone Number"
          size="small"
          value={form.phone}
          onChange={handleChange("phone")}
          className={classes.field}
        />
        <TextField
          label="Message"
          size="small"
          multiline
          minRows={3}
          value={form.message}
          onChange={handleChange("message")}
          className={classes.field}
        />
        <Button
          type="submit"
          variant="outlined"
          disabled={submitting}
          className={classes.submit_button}
        >
          {submitting ? "Sending..." : "Send"}
        </Button>
      </form>
    </Popover>
  );
};

export default ContactModal;
