import React from "react";
import classes from "./styles.module.css";
import Image from "next/image";
import profile1 from "../../../public/profile1.jpg";
import profile2 from "../../../public/profile2.jpg";
import cat from "../../../public/cat.jpg";
import architecture from "../../../public/tech1.png";
import { EmojiNatureRounded, StarRounded } from "@mui/icons-material";
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
        <div className="font-bold text-2xl">Dipanwita Mandal</div>{" "}
        <div className="font-bold text-l">
          Software Engineer — Full Stack & Generative AI
        </div>
      </div>
      <div>
        <div className="font-bold py-2">
          Crafting Scalable, Data-Driven & AI-Powered Web Experiences
        </div>
        <div className="py-1">
          With over <span className="font-bold">4 years of experience</span>, I
          thrive in <span className="font-bold">0→1 environments,</span>
          transforming complex ideas into scalable, production-ready solutions.
          My expertise spans{" "}
          <span className="font-bold">React, Next.js, and Nest.js</span>,
          blending pixel-perfect frontend execution with robust backend
          architecture.
        </div>
        <div className="py-1">
          I build{" "}
          <span className="font-bold">
            high-performance, accessible interfaces
          </span>{" "}
          and <span className="font-bold">data-intensive dashboards</span> that
          balance speed, design, and reliability. My recent work focuses on{" "}
          <span className="font-bold">Net-Zero forecasting systems</span> and{" "}
          <span className="font-bold">LLM-powered features</span>
          leveraging <span className="font-bold">LangChain and RAG</span> for
          intelligent automation.
        </div>
        <div className="py-1 pb-2">
          I thrive at the intersection of{" "}
          <span className="font-bold">
            UX, performance, and maintainability
          </span>
          , obsessing over details like bundle size, caching, and responsive
          interaction flows. My toolkit includes{" "}
          <span className="font-bold">
            TypeScript, TanStack Query, ECharts, and Material React Table
          </span>
          —designed to deliver clean, modular, and scalable codebases.
        </div>
        <div>
          <div className="font-bold py-2 flex gap-2 align-middle text-xl items-center">
            <StarRounded sx={{ color: "#d1d1d1" }} />
            What I Bring to the Table
          </div>
          <div className="pl-8 pb-2">
            <span className="font-bold">Rapid Product Delivery</span>
            <ul style={{ listStyleType: "circle", paddingLeft: "1rem" }}>
              <li>
                Shipped{" "}
                <span className="font-bold">4 MVP dashboards in 1.5 weeks</span>{" "}
                at Accacia, enabling real-time carbon tracking across 3+ asset
                types.
              </li>
              <li>
                Built{" "}
                <span className="font-bold">
                  3 emissions systems in 72-hour sprints
                </span>{" "}
                with zero production rollbacks.
              </li>
              <li>
                Architected{" "}
                <span className="font-bold">EC BOQ system (0→1)</span> with live
                calculators, editable tables & visualizations in just 2 months.
              </li>
            </ul>
          </div>
          <div className="pl-8 pb-2">
            <span className="font-bold">Performance Engineering</span>
            <ul style={{ listStyleType: "circle", paddingLeft: "1rem" }}>
              <li>
                Achieved{" "}
                <span className="font-bold">70% reduction in UI defects</span>{" "}
                via ECharts live-update architecture.
              </li>
              <li>
                Cut API boilerplate by <span className="font-bold">40%</span>{" "}
                through TanStack Query integration.
              </li>
              <li>
                Standardized data-heavy tables →{" "}
                <span className="font-bold">60% faster feature delivery.</span>
              </li>
            </ul>
          </div>
          <div className="pl-8 py-2 flex item-center justify-center">
            <Image
              src={architecture}
              width={500}
              height={200}
              alt=""
              // className={classes.profile_1}
              priority
            />
          </div>
        </div>
        <div>
          <div className="font-bold py-2 text-xl">🌟 Key Differentiators</div>
          <div className="pl-8 py-2">
            <span className="font-bold">Startup Accelerator Mindset</span>
            <ul style={{ listStyleType: "circle", paddingLeft: "1rem" }}>
              <li className="italic font-bold">
                Thrives under pressure—delivering 0→1 systems with measurable
                business outcomes.
              </li>
              <li className="italic">
                Built <span className="font-bold">CRM platform (Kafqa)</span>{" "}
                with reusable React components →{" "}
                <span className="font-bold">30% faster future dev.</span>
              </li>
            </ul>
          </div>
          <div className="pl-8 py-2">
            <span className="font-bold">Full-Stack Frontend Approach</span>
            <div>
              Beyond UI: experienced in{" "}
              <span className="font-bold">
                API design (Nest.js), cloud (Azure, AWS)
              </span>
              , and <span className="font-bold">CI/CD (YAML, SonarQube)</span>{" "}
              with 100% test pass rates.
            </div>
          </div>
          <div className="pl-8 py-2">
            <span className="font-bold">AI + Product Innovator</span>
            <div>
              Bridges product and AI: built{" "}
              <span className="font-bold">TalentLens AI (RAG + Llama 3.1)</span>
              —an ATS that critiques resumes line-by-line and rewrites content
              using hybrid retrieval.
            </div>
          </div>
        </div>
        <div>
          <div className="font-bold py-2 pt-4 flex gap-2 align-middle text-xl items-center">
            <StarRounded sx={{ color: "#d1d1d1" }} />
            Why Work With Me?
          </div>
          <div>
            I don’t just build features—I build outcomes. My superpower lies in
            balancing <span className="font-bold">startup-level agility</span>{" "}
            with{" "}
            <span className="font-bold">enterprise-grade code quality.</span>I
            collaborate deeply across design, backend, and product to deliver
            user-first, data-driven solutions that scale.
          </div>
        </div>
        <div className="pt-4">
          Let’s connect and create something meaningful—whether it’s{" "}
          <span className="font-bold">
            AI-powered tools, or data-driven platforms.
          </span>
        </div>
        <div className="py-4 ">
          <div className="font-bold pb-2">
            📫 Let’s Connect and build something amazing!
          </div>
          <div className="font-bold pb-1">Open to:</div>
          <ul style={{ listStyleType: "circle", paddingLeft: "1rem" }}>
            <li>Collaborating on impactful GenAI / frontend projects</li>
            <li>Speaking about React & RAG performance</li>
            <li>Mentoring developers</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
