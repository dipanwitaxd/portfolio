"use client";
import React from "react";
import classes from "./styles.module.css";
import { IconButton } from "@mui/material";
import {
  EmojiNatureRounded,
  KeyboardArrowLeftRounded,
  KeyboardArrowRightRounded,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";

const Experience = () => {
  const router = useRouter();
  const experienceData = [
    {
      id: 1,
      company: "Accacia",
      role: "Software Engineer – Frontend",
      dateOfJoining: "Feb 2023",
      since: "2 years 5 months",
      dateOfLeaving: "Present",
      experience: [
        <div>
          <span className={classes.bold_font}>
            Delivered 4 production-ready dashboards in 1.5 weeks
          </span>{" "}
          (MVP) and{" "}
          <span className={classes.bold_font}>
            3 operationally run asset emission-tracking systems in 72
          </span>{" "}
          hours by leading end-to-end frontend development, enabling real-time
          carbon calculations for 3+ asset types.
        </div>,
        <div className="pb-2">
          <span className="font-bold">
            Architected EC BOQ module from 0→1 featuring :{" "}
          </span>
          <ul style={{ listStyleType: "circle", paddingLeft: "1rem" }}>
            <li>
              <span className="font-bold">Dynamic editable tables</span> with
              Excel-like functionality.
            </li>
            <li>Real-time emission calculators processing BOM uploads.</li>
            <li>
              Phase-wise construction asset visualization charts (Delivered full
              complex module in 2 months).
            </li>
          </ul>
        </div>,
        <div className="pb-2">
          <div>
            <span className="font-bold">Optimized API management</span> using{" "}
            <span className="font-bold">Tanstack Query</span> with Axios,
            implementing:
          </div>
          <ul style={{ listStyleType: "circle", paddingLeft: "1rem" }}>
            <li>
              Automatic handling of isLoading/isError states and retry logic.
            </li>
            <li>Parallel query execution and response normalization.</li>
            <li>
              <span className="font-bold">40%</span> reduction in API-related
              code complexity.
            </li>
          </ul>
        </div>,
        <div className="pb-2">
          <div>
            <span className="font-bold">Engineered dynamic table system</span>{" "}
            with <span className="font-bold">Material React Table:</span>
          </div>
          <ul style={{ listStyleType: "circle", paddingLeft: "1rem" }}>
            <li>
              Universal component handling tabs, conditional columns, and row
              editing.
            </li>
            <li>
              <span className="font-bold">Real-time data synchronization</span>{" "}
              with outer components.
            </li>
            <li>
              <span className="font-bold">60%</span> faster implementation of
              complex table requirements.
            </li>
          </ul>
        </div>,
        <div className="pb-2">
          <div>
            <span className="font-bold">
              Developed interactive data visualizations
            </span>{" "}
            using <span className="font-bold">ECharts:</span>
          </div>
          <ul style={{ listStyleType: "circle", paddingLeft: "1rem" }}>
            <li>
              Custom event listeners for real-time emission recalculations.
            </li>
            <li>
              <span className="font-bold">Dynamic chart updates</span> based on
              selected data points.
            </li>
          </ul>
        </div>,
        <div>
          <span className={classes.bold_font}>Reduced UI bugs by 70%+</span>{" "}
          through React optimizations and state management enhancements.
        </div>,
        <div>
          <span className={classes.bold_font}>
            Created JSON-driven dynamic form engine
          </span>{" "}
          generating 100+ field variations, cutting form-build time by{" "}
          <span className={classes.bold_font}>65%</span>.
        </div>,
        <div>
          <span className={classes.bold_font}>Mentored junior developers</span>{" "}
          to produce{" "}
          <span className={classes.bold_font}>
            5+ reusable React components,
          </span>{" "}
          boosting team velocity by{" "}
          <span className={classes.bold_font}>20%</span>.
        </div>,
      ],
    },
    {
      id: 2,
      company: "KAFQA",
      role: "Senior Software Development Engineer",
      dateOfJoining: "Jun 2022",
      since: "7 months",
      dateOfLeaving: "Dec 2022",
      experience: [
        <div>
          <span className={classes.bold_font}>Integrated Mixpanel</span> for
          user behavior tracking, enabling{" "}
          <span className={classes.bold_font}>data-driven decisions</span> by
          capturing{" "}
          <span className={classes.bold_font}>
            100% of critical click events
          </span>{" "}
          across the platform.
        </div>,
        <div>
          <span className={classes.bold_font}>
            Built the foundational CRM platform,
          </span>{" "}
          developing{" "}
          <span className={classes.bold_font}>15+ reusable components</span>{" "}
          that reduced future development time by{" "}
          <span className={classes.bold_font}>30%</span>.
        </div>,
        <div>
          <span className={classes.bold_font}>
            Optimized frontend performance,
          </span>{" "}
          cutting page load times by{" "}
          <span className={classes.bold_font}>15%</span> through code
          refactoring and efficient state management.
        </div>,
      ],
    },
    {
      id: 3,
      company: "Kickdrum",
      role: "Software Development Engineer",
      dateOfJoining: "July 2021",
      since: "11 months",
      dateOfLeaving: "May 2022",
      experience: [
        <div>
          <span className={classes.bold_font}>
            Developed a meeting-recording bot frontend
          </span>{" "}
          using <span className={classes.bold_font}>React.js</span>, automating
          meeting attendance for users and reducing manual participation time by
          <span className={classes.bold_font}> 50%.</span>
        </div>,
        <div>
          Built{" "}
          <span className={classes.bold_font}>
            features in a Chrome extension
          </span>{" "}
          that{" "}
          <span className={classes.bold_font}>
            summarized meeting discussions
          </span>
          , cutting document creation time by{" "}
          <span className={classes.bold_font}>40%</span> by auto-highlighting
          key points.
        </div>,
        <div>
          Designed and tested a{" "}
          <span className={classes.bold_font}>YAML pipeline in Azure</span> for
          a <span className={classes.bold_font}>.NET 3</span> project, achieving{" "}
          <span className={classes.bold_font}>100% pass rate</span> in SonarQube
          tests with <span className={classes.bold_font}>0 failed cases</span>{" "}
          across <span className={classes.bold_font}>50+ test scenarios.</span>
        </div>,
        <div>
          <span className={classes.bold_font}>Optimized CI/CD workflows</span>,
          ensuring <span className={classes.bold_font}>successful builds</span>{" "}
          and <span className={classes.bold_font}>85%+ test coverage</span> in
          pipeline reports, improving deployment reliability.
        </div>,
      ],
    },
    {
      id: 4,
      company: "KiiT University",
      role: "Bachelor's degree in Computer Science and Communication Engineering",
      dateOfJoining: "2017",
      since: "",
      dateOfLeaving: "2021",
      experience: [],
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
        <div className={classes.experience_header_label}>
          <span className="text-2xl">E</span>DUCATION AND{" "}
          <span className="text-2xl">E</span>XPERIENCE
        </div>
        <div></div>
      </div>
      {experienceData?.map((item) => {
        return (
          <div key={item?.id} className={classes.experience_container}>
            <div>
              <EmojiNatureRounded sx={{ color: "#d1d1d1" }} />
              <div className={classes.dashed_line}></div>
            </div>
            <div className={classes.experience_item_container}>
              <div className="pb-4">
                <div className={classes.experience_item_header}>
                  <div className={classes.company}>{item?.company}</div>
                  <div className={classes.date}>
                    {item?.dateOfJoining} - {item?.dateOfLeaving}
                  </div>
                </div>
                <div className={classes.experience_item_header}>
                  <div className={classes.role}>{item?.role}</div>
                  <div className={classes.since}>
                    {item?.since ? `(${item?.since})` : ""}
                  </div>
                </div>
              </div>
              {item?.experience?.map((ele, index) => {
                return (
                  <div key={index} className={classes.experience_item}>
                    <div>
                      <KeyboardArrowRightRounded
                        sx={{ color: "#d1d1d1", fontSize: "0.75rem" }}
                      />
                    </div>
                    {ele}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
