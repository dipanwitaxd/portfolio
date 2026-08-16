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
          Senior Frontend / Full-Stack Engineer
        </div>
      </div>
      <div>
        <div className="font-bold py-2">
          Crafting Scalable, Data-Driven & AI-Powered Web Experiences
        </div>
        <div className="py-1">
          With about <span className="font-bold">5 years of experience</span>,
          I've built <span className="font-bold">React/Next.js</span> products
          in high-growth startups, extending into{" "}
          <span className="font-bold">Node.js/Nest.js</span> to own features
          end to end — from UI down through REST API contracts, PostgreSQL,
          and JWT-based auth.
        </div>
        <div className="py-1">
          I've shipped{" "}
          <span className="font-bold">4 production dashboards in 1.5 weeks</span>
          , taken a <span className="font-bold">0→1 EC BOQ module</span> to
          production in 2 months, and cut{" "}
          <span className="font-bold">UI defects 70%</span> and{" "}
          <span className="font-bold">feature build time 60%</span> by
          building out a reusable component architecture with{" "}
          <span className="font-bold">
            Material React Table, TanStack Query, and ECharts
          </span>
          .
        </div>
        <div className="py-1 pb-2">
          More recently, I've been working on{" "}
          <span className="font-bold">Net-Zero forecasting systems</span> at
          Accacia and building{" "}
          <span className="font-bold">RAG/LLM features</span> — including{" "}
          <span className="font-bold">TalentLens AI</span>, an ATS that
          critiques resumes using LangChain and hybrid retrieval.
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
            <span className="font-bold">Ownership &amp; Delivery</span>
            <ul style={{ listStyleType: "circle", paddingLeft: "1rem" }}>
              <li className="italic font-bold">
                Comfortable owning 0→1 systems end to end and moving fast under
                pressure.
              </li>
              <li className="italic">
                Built the <span className="font-bold">CRM platform at Kafqa</span>{" "}
                with 15+ reusable components, cutting future dev time{" "}
                <span className="font-bold">30%.</span>
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
            <span className="font-bold">Applied AI / RAG</span>
            <div>
              Built <span className="font-bold">TalentLens AI</span>, a
              RAG-based ATS (
              <span className="font-bold">LangChain + Llama 3.1</span>) that
              critiques resumes line by line using hybrid retrieval.
            </div>
          </div>
        </div>
        <div>
          <div className="font-bold py-2 pt-4 flex gap-2 align-middle text-xl items-center">
            🌟 How I Work
          </div>
          <div>
            I care about the outcome a feature drives, not just shipping it. I
            work closely with design, backend, and product, and I try to hold
            startup speed and code quality at the same time instead of trading
            one for the other.
          </div>
        </div>
        <div className="pt-4">
          Let’s connect and create something meaningful, whether it’s{" "}
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
