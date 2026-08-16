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
      company: "Hyperverge",
      role: "Software Development Engineer 2",
      dateOfJoining: "Dec 2025",
      since: "5 months",
      dateOfLeaving: "May 2026",
      skills: "Next.js · Node.js · Typescript · Playwright",
      description: "",
      experience: [
        <div>
          Delivered{" "}
          <span className={classes.bold_font}>
            full-stack workflow and notification features across
          </span>{" "}
          frontend and backend, including{" "}
          <span className={classes.bold_font}>@mention alerts</span> for task
          comments
          <span className={classes.bold_font}>(in-app, email, Slack)</span> and
          fixes for{" "}
          <span className={classes.bold_font}>
            external counterparty approval
          </span>
          using token-based access validation →{" "}
          <span className={classes.bold_font}>
            cut approval turnaround ~12%.
          </span>
        </div>,
        <div>
          Built a{" "}
          <span className={classes.bold_font}>
            customizable multi-chart dashboard feature
          </span>{" "}
          where users can add, resize, and reposition up to{" "}
          <span className={classes.bold_font}>50 charts</span> across multiple
          dashboards, with per-chart metric, currency, granularity, sorting,
          and filter options that adapt dynamically to the chart type
          selected.
        </div>,
        <div>
          Enhanced the{" "}
          <span className={classes.bold_font}>CLM product experience</span> by
          building{" "}
          <span className={classes.bold_font}>
            approval reordering and searchable condition/user selectors
          </span>
          , and improved shared UI coverage through{" "}
          <span className={classes.bold_font}>Storybook</span>.
        </div>,
        <div>
          Improved{" "}
          <span className={classes.bold_font}>
            document and template workflows
          </span>{" "}
          by fixing{" "}
          <span className={classes.bold_font}>
            doc-landing activity log state issues
          </span>
          , adding <span className={classes.bold_font}>skeleton loaders</span>,
          and implementing{" "}
          <span className={classes.bold_font}>
            public-to-private template conversion
          </span>{" "}
          with{" "}
          <span className={classes.bold_font}>
            unit tests and E2E coverage.
          </span>
        </div>,
      ],
    },
    {
      id: 2,
      company: "Accacia",
      role: "Software Engineer – Fullstack",
      dateOfJoining: "Feb 2023",
      since: "2 years 10 months",
      dateOfLeaving: "Dec 2025",
      skills:
        "Next.js · Nest.js · React.js · ECharts · TanStack Query · Material React Table · Supabase",
      description:
        "At Accacia, I’ve led full-stack development for decarbonization and Net-Zero forecasting systems that power real-time carbon reporting across multi-asset portfolios.",
      experience: [
        <div>
          <span className={classes.bold_font}>Rapid MVP Delivery:</span> Shipped{" "}
          <span className={classes.bold_font}>
            4 MVP dashboards in 1.5 weeks and 3 emissions-tracking
            systems in 72 hours with zero production rollbacks,
          </span>{" "}
          enabling real-time carbon reporting across 3+ asset types.
        </div>,
        <div>
          <span className={classes.bold_font}>0→1 Product Development:</span>{" "}
          Built EC BOQ from scratch - a cost-estimation module with{" "}
          <span className={classes.bold_font}>
            editable tables, live calculators, and charts,
          </span>{" "}
          partnering on <span className={classes.bold_font}>
            PostgreSQL/SQL schema design and REST API contracts
          </span>{" "}
          → delivered to production in 2 months,{" "}
          <span className={classes.bold_font}>cut integration issues 25%.</span>
        </div>,
        <div>
          <span className={classes.bold_font}>Frontend Optimization:</span>{" "}
          Integrated <span className={classes.bold_font}>TanStack Query</span>{" "}
          for API caching/sync, cutting boilerplate by{" "}
          <span className={classes.bold_font}>40%</span> and improving perceived
          app latency.
        </div>,
        <div>
          <span className={classes.bold_font}>UI Component Library:</span>{" "}
          Engineered reusable{" "}
          <span className={classes.bold_font}>Material React Table</span>{" "}
          components for large datasets, reducing feature build time{" "}
          <span className={classes.bold_font}>60%</span> and standardizing UI/UX
          across dashboards.
        </div>,
        <div>
          <span className={classes.bold_font}>Form Automation:</span> Built a
          <span className={classes.bold_font}>JSON-driven form engine</span>{" "}
          supporting 10+ dynamic field types, cutting future form work{" "}
          <span className={classes.bold_font}>65%</span>.
        </div>,
        <div>
          <span className={classes.bold_font}>Real-Time Visualization:</span>{" "}
          Added{" "}
          <span className={classes.bold_font}>
            ECharts-based live data visuals
          </span>
          , reducing UI defects by{" "}
          <span className={classes.bold_font}>70%</span> through real-time
          feedback loops.
        </div>,
        <div>
          <span className={classes.bold_font}>Collaboration & Mentorship:</span>{" "}
          Mentored 2 junior engineers, led{" "}
          <span className={classes.bold_font}>
            code reviews and component standards
          </span>{" "}
          → <span className={classes.bold_font}>team velocity increased 20%.</span>
        </div>,
      ],
      highlightProject: [
        <div>
          <span className={classes.bold_font}>
            Net Zero Target & Forecasting (Next.js + Nest.js)
          </span>{" "}
          - Configured baseline/target years, target cascades, and
          cost-abatement curves; built strategy dashboards enabling live
          decarbonization insights.
        </div>,
        <div>
          <span className={classes.bold_font}>
            On1y Homes (React + Supabase)
          </span>{" "}
          - Built a full-fledged interior design platform for project listings
          and client interactions, gaining{" "}
          <span className={classes.bold_font}>
            500+ active users in month 1.
          </span>
        </div>,
        <div>
          <span className={classes.bold_font}>
            Studio.On1yHomes (AI Interior Analysis)
          </span>{" "}
          - Added{" "}
          <span className={classes.bold_font}>
            AI-driven space optimization
          </span>{" "}
          and{" "}
          <span className={classes.bold_font}>automated design reports</span>,
          cutting report generation time by{" "}
          <span className={classes.bold_font}>50%.</span>
        </div>,
      ],
    },
    {
      id: 3,
      company: "KAFQA",
      role: "Senior Software Development Engineer",
      dateOfJoining: "Jun 2022",
      since: "7 months",
      dateOfLeaving: "Dec 2022",
      skills: "React.js · Mixpanel · Next.js",
      description:
        "Developed performance analytics and automation tools for Kafqa’s internal platforms and CRM ecosystem.",
      experience: [
        <div>
          <span className={classes.bold_font}>Integrated Mixpanel</span> with{" "}
          <span className={classes.bold_font}>
            100% coverage of critical click events
          </span>{" "}
          → enabled data-driven roadmap decisions.
        </div>,
        <div>
          Established the foundation of a{" "}
          <span className={classes.bold_font}>CRM platform</span> with{" "}
          <span className={classes.bold_font}>15+ reusable React components</span>{" "}
          → reducing future dev time by <span className={classes.bold_font}>30%.</span>
        </div>,
        <div>
          Optimized frontend performance via refactors and state management →
          page load <span className={classes.bold_font}>–15%.</span>
        </div>,
      ],
    },
    {
      id: 4,
      company: "Kickdrum",
      role: "Software Development Engineer",
      dateOfJoining: "July 2021",
      since: "11 months",
      dateOfLeaving: "May 2022",
      skills: "React.js · .NET Core · Azure Pipelines · CI/CD · SonarQube",
      description:
        "Delivered frontend components and automation workflows for enterprise-grade applications.",
      experience: [
        <div>
          Delivered a{" "}
          <span className={classes.bold_font}>meeting-recording bot UI</span>{" "}
          in React.js → automated attendance, cutting manual attendance time{" "}
          <span className={classes.bold_font}>50%.</span>
        </div>,
        <div>
          Built Chrome extension features that{" "}
          <span className={classes.bold_font}>
            auto-summarized discussions
          </span>{" "}
          → cutting document creation time{" "}
          <span className={classes.bold_font}>40%</span> through
          auto-highlighting.
        </div>,
        <div>
          Designed and tested an{" "}
          <span className={classes.bold_font}>Azure YAML CI/CD pipeline</span>{" "}
          for a .NET 3 project → <span className={classes.bold_font}>
            100% pass rate
          </span>{" "}
          across 50+ SonarQube test scenarios, with{" "}
          <span className={classes.bold_font}>85%+ test coverage.</span>
        </div>,
      ],
    },
    {
      id: 5,
      company: "KiiT University",
      role: "BTech in Computer Science and Communication Engineering",
      dateOfJoining: "2017",
      since: "8.47 CGPA",
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
              <div className="pb-2">
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
              <div className="pb-2 font-bold">{item.skills}</div>
              {item?.description && (
                <div className="pb-4">{item.description}</div>
              )}
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
              {item?.highlightProject && (
                <div className="py-2 font-bold">Highlighted Projects:</div>
              )}
              {item?.highlightProject?.map((ele, index) => {
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
