"use client";

import React from "react";
import classes from "./styles.module.css";
import contactClasses from "../InfoBar/contactModal.module.css";
import Image from "next/image";
import profile1 from "../../../public/profile1.jpg";
import {
  StarRounded,
  EmojiObjectsOutlined,
  RocketLaunchOutlined,
  SpeedOutlined,
  Diversity3Outlined,
  LayersOutlined,
} from "@mui/icons-material";
import ContactForm from "../InfoBar/ContactForm";

const CORE_STACK = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Javascript",
  "Node.js",
  "Nest.js",
];

const STATS = [
  { value: "~5", label: "years across 4 companies" },
  { value: "72 hrs", label: "to ship 3 systems, zero rollbacks" },
  { value: "70%", label: "fewer UI defects" },
  { value: "100%", label: "test pass rate" },
];

const BRING_TO_TABLE = [
  {
    title: "Rapid Product Delivery",
    icon: <RocketLaunchOutlined sx={{ color: "#ebffff", fontSize: 20 }} />,
    bullets: [
      <>
        Shipped{" "}
        <span className="font-bold">4 production dashboards in 1.5 weeks</span>{" "}
        and{" "}
        <span className="font-bold">3 emissions-tracking systems in 72 hours</span>{" "}
        at Accacia, enabling real-time carbon reporting across 3+ asset types
        with zero production rollbacks.
      </>,
      <>
        Took the <span className="font-bold">0→1 EC BOQ module</span> to
        production in 2 months, with live calculators, editable tables, and
        visualizations.
      </>,
    ],
  },
  {
    title: "Performance Engineering",
    icon: <SpeedOutlined sx={{ color: "#ebffff", fontSize: 20 }} />,
    bullets: [
      <>
        Cut <span className="font-bold">UI defects 70%</span> via ECharts
        live-update architecture.
      </>,
      <>
        Cut API boilerplate by <span className="font-bold">40%</span> through
        TanStack Query integration.
      </>,
      <>
        Standardized data-heavy tables →{" "}
        <span className="font-bold">60% faster feature delivery.</span>
      </>,
    ],
  },
  {
    title: "Ownership & Mentorship",
    icon: <Diversity3Outlined sx={{ color: "#ebffff", fontSize: 20 }} />,
    bullets: [
      <>
        Comfortable owning 0→1 systems end to end and moving fast under
        pressure — built the <span className="font-bold">CRM platform at Kafqa</span>{" "}
        with 15+ reusable components, cutting future dev time{" "}
        <span className="font-bold">30%.</span>
      </>,
      <>
        Mentored 2 junior engineers at Accacia, leading code reviews and
        component standards.
      </>,
    ],
  },
  {
    title: "Full-Stack Capability",
    icon: <LayersOutlined sx={{ color: "#ebffff", fontSize: 20 }} />,
    bullets: [
      <>
        Beyond UI: experienced in{" "}
        <span className="font-bold">API design (Nest.js), cloud (Azure, AWS)</span>
        , and <span className="font-bold">CI/CD (YAML, SonarQube)</span> with
        100% test pass rates.
      </>,
    ],
  },
];

const About = () => {
  return (
    <div className={classes.about_container}>
      <div className={classes.about_image_container}>
        <Image
          src={profile1}
          width={200}
          height={200}
          alt="Picture of the author"
          className={classes.profile_1}
          priority
        />
      </div>
      <div className="flex flex-col gap-0.5 justify-center align-middle items-center pb-4">
        <div className="font-bold text-2xl">Dipanwita Mandal</div>
        <div className="font-bold text-l">
          Senior Frontend / Full-Stack Engineer
        </div>
        <div className={classes.tag_row}>
          {CORE_STACK.map((tech) => (
            <span key={tech} className={classes.tag}>
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div>
        <div className="font-bold py-2 text-center">
          Crafting Scalable, Data-Driven Web Experiences
        </div>

        <div className={classes.stat_row}>
          {STATS.map((stat) => (
            <div key={stat.label} className={classes.stat_tile}>
              <div className={classes.stat_value}>{stat.value}</div>
              <div className={classes.stat_label}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="py-1">
          With about <span className="font-bold">5 years of experience</span>,
          I've built React/Next.js products in high-growth startups,
          extending into Node.js/Nest.js to own features end to end. Most
          recently, I've been leading full-stack development for{" "}
          <span className="font-bold">Net-Zero forecasting and carbon-reporting systems</span>{" "}
          at Accacia.
        </div>

        <div className={classes.section_heading}>
          <StarRounded sx={{ color: "#ebffff" }} />
          What I Bring to the Table
        </div>
        <div className={classes.bring_grid}>
          {BRING_TO_TABLE.map((category) => (
            <div key={category.title} className={classes.bring_card}>
              <div className={classes.bring_card_title}>
                {category.icon}
                {category.title}
              </div>
              <ul style={{ listStyleType: "circle", paddingLeft: "1rem" }}>
                {category.bullets.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={classes.section_heading}>
          <EmojiObjectsOutlined sx={{ color: "#ebffff" }} />
          How I Work
        </div>
        <div>
          I care about the outcome a feature drives, not just shipping it. I
          work closely with design, backend, and product, and I try to hold
          startup speed and code quality at the same time instead of trading
          one for the other.
        </div>

        <div className={classes.section_heading}>Let's Connect</div>
        <div className="pb-2">
          Open to collaborating on frontend/full-stack projects, speaking
          about React performance, or mentoring developers.
        </div>
        <ContactForm className={contactClasses.form_container_inline} />
      </div>
    </div>
  );
};

export default About;
