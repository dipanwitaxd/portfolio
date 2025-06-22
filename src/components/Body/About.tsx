import React from "react";
import classes from "./styles.module.css";
import Image from "next/image";
import profile1 from "../../../public/profile1.jpg";
import profile2 from "../../../public/profile2.jpg";
import cat from "../../../public/cat.jpg";
import architechure from "../../../public/tech1.png";
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
        <div className="font-bold text-l">Software Engineer - Frontend</div>
      </div>
      <div>
        <div className="font-bold py-2">
          Crafting Fast, Responsive & Delightful Web Experiences
        </div>
        <div className="">
          With over <span className="font-bold">4 years</span> of experience.
          I <span className="font-bold">thrive in 0→1 environments</span>,
          turning complex challenges into scalable solutions—fast. I build
          high-performance web applications using{" "}
          <span className="font-bold">React, Next.js, and TypeScript,</span>{" "}
          blending clean code with intuitive design. My focus is on creating
          <span className="font-bold">
            {" "}
            scalable, accessible interfaces
          </span>{" "}
          that look stunning and feel effortless—whether it’s a dynamic SPA or a
          server-rendered site.
        </div>
        <div className="">
          I thrive at the intersection of{" "}
          <span className="font-bold">
            UX, performance, and maintainability,
          </span>
          obsessing over details like bundle size, semantic HTML, and smooth
          interactions. My toolkit includes modern{" "}
          <span className="font-bold">CSS/SCSS,</span> component-driven
          architecture, and a relentless drive to optimize.
        </div>
        <div>
          <div className="font-bold py-2 flex gap-2 align-middle text-xl items-center">
            <StarRounded sx={{ color: "#d1d1d1" }} />
            What I Bring to the Table
          </div>
          <div className="pl-8 pb-2">
            <span className="font-bold">Rapid Delivery Expertise</span>
            <ul style={{ listStyleType: "circle", paddingLeft: "1rem" }}>
              <li>
                Spearheaded{" "}
                <span className="font-bold">
                  4 production dashboards in 1.5 weeks{" "}
                </span>
                (MVP) at Accacia, enabling real-time carbon tracking for 3+
                asset types
              </li>
              <li>
                Engineered{" "}
                <span className="font-bold">
                  mission-critical modules in 72-hour sprints
                </span>{" "}
                under tight deadlines without compromising quality
              </li>
              <li>
                Architected{" "}
                <span className="font-bold">EC BOQ system from scratch</span>{" "}
                (dynamic tables, real-time calculators, data visualizations) in
                2 months
              </li>
            </ul>
          </div>
          <div className="pl-8 pb-2">
            <span className="font-bold">Performance Optimization</span>
            <ul style={{ listStyleType: "circle", paddingLeft: "1rem" }}>
              <li>
                <span className="font-bold">70% reduction in UI bugs</span>{" "}
                through React best practices and state management enhancements
              </li>
              <li>
                <span className="font-bold">40% faster API interactions</span>{" "}
                via Tanstack Query implementation (isLoading/isError states,
                parallel queries)
              </li>
              <li>
                <span className="font-bold">15% page load improvement</span> at
                KAFQA through code refactoring and efficient state management
              </li>
            </ul>
          </div>
          <div className="pl-8 pb-2">
            <Image
              src={architechure}
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
          <div className="pl-8 pb-2">
            <span className="font-bold">Startup Accelerator Mindset</span>
            <div>
              Thrives in 0→1 environments with proven record of shipping complex
              systems under extreme deadlines
            </div>
            <ul style={{ listStyleType: "circle", paddingLeft: "1rem" }}>
              <li className="italic font-bold">
                Delivered operational emission-tracking systems in 72 hours
              </li>
              <li className="italic">
                Built foundational CRM platform at KAFQA with 30% faster future
                development
              </li>
            </ul>
          </div>
          <div className="pl-8 pb-2">
            <span className="font-bold">Performance-Obsessed Engineer</span>
            <div>
              Systematically optimizes UI/API interactions and load performance
            </div>
            <ul style={{ listStyleType: "circle", paddingLeft: "1rem" }}>
              <li className="italic">
                70% UI bug reduction | 40% API complexity decrease | 15% load
                time improvement
              </li>
            </ul>
          </div>
          <div className="pl-8 pb-2">
            <span className="font-bold">Full-Stack Frontend Approach</span>
            <div>
              Mastery beyond UI layer - API management (Tanstack), cloud
              integration (Azure), and DevOps (SonarQube 100% pass rate)
            </div>
          </div>
          <div className="pl-8 pb-2">
            <span className="font-bold">Product-Centric Innovator</span>
            <div>Builds solutions addressing real business needs:</div>
            <ul style={{ listStyleType: "circle", paddingLeft: "1rem" }}>
              <li>Carbon calculation systems for sustainability tech</li>
              <li>Meeting automation bots (50% time savings)</li>
              <li>Data-driven CRMs with Mixpanel integration</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="font-bold py-2 flex gap-2 align-middle text-xl items-center">
            <StarRounded sx={{ color: "#d1d1d1" }} />
            Why Work With Me?
          </div>
          <div>
            I don’t just write code—I solve business problems. My superpower?
            Balancing <span className="font-bold">startup speed</span> with{" "}
            <span className="font-bold">enterprise-grade craftsmanship</span> to
            ship products users love.
          </div>
        </div>
        <div className="pt-4">
          Beyond code, I love collaborating with{" "}
          <span className="font-bold">
            designers, backend teams, and product leads
          </span>{" "}
          to turn ideas into impactful solutions—on time and with precision.
          Advocating for{" "}
          <span className="font-bold">
            clean patterns, testing, and agile practices
          </span>
          keeps my work robust and future-proof.
        </div>
        <div className="pt-4">
          <div className="font-bold">
            📫 Let’s Connect and build something amazing!
          </div>
          <div>Open to:</div>
          <ul style={{ listStyleType: "circle", paddingLeft: "1rem" }}>
            <li>Collaborating on innovative frontend projects</li>
            <li>Speaking about React performance optimization</li>
            <li>Mentoring junior developers</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
