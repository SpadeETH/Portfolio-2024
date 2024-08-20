"use client"; // ProjectHeader.tsx
// ProjectHeader.tsx
import { motion } from "framer-motion";
import React from "react";
import styles from "../css/ProjectHeader.module.css";
import BackButton from "./BackButton";
import LanguageSwitchButton from "./LanguageSwitchButton";

interface TeamMember {
  name: string;
  role: string;
}

interface Tool {
  name: string;
}

interface Discipline {
  name: string;
}

interface HeaderProps {
  title: string;
  subtitle: string;
  description: string;
  team: TeamMember[];
  tools: Tool[];
  timeline: string;
  disciplines: Discipline[];
}

const ProjectHeader: React.FC<HeaderProps> = ({
  title,
  subtitle,
  description,
  team,
  tools,
  timeline,
  disciplines,
}) => {
  return (
    <motion.div
      className={styles.hero}
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.6 }}
    >
      <div className="HeroWrapper flex flex-col gap-y-8">
        <div className="LogoSpacer flex flex-col gap-y-5">
          <div className="flex flex-row img w-full justify-between">
            <BackButton />
            <LanguageSwitchButton />
          </div>

          <div className="flex flex-col gap-y-1">
            <motion.h1
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="calisto text-3xl text-black leading-10"
            >
              {title}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base lightgrey"
            >
              {subtitle}
            </motion.h2>
          </div>
        </div>

        <hr />
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base segoe text-slate-700 text-justify"
        >
          {description}
        </motion.p>
        <hr />
        <div className="info flex flex-col lg:flex-row space-y-8 space-x-0 lg:space-y-0 lg:space-x-8">
          <div className="team flex flex-col space-y-2">
            <motion.h3
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="team-title text-base lightgrey"
            >
              Team
            </motion.h3>
            <ul className="team-list list-none">
              {team.map((member, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="team-member text-base segoe"
                >
                  <span>{member.name}</span> -{" "}
                  <span className="team-role lightgrey segoeit">
                    {member.role}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
          <hr />
          <div className="team flex flex-col  mt-0">
            <motion.h3
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="tools-title text-base lightgrey"
            >
              Tools
            </motion.h3>
            <ul className="tools-list list-none">
              {tools.map((tool, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="tools-item text-base segoe"
                >
                  {tool.name}
                </motion.li>
              ))}
            </ul>
          </div>
          <hr />
          <div className="timeline flex flex-col space-y-2">
            <motion.h3
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="timeline-title text-base lightgrey"
            >
              Timeline
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="timeline-content text-base segoe"
            >
              {timeline}
            </motion.p>
          </div>
          <hr />
          <div className="disciplines flex flex-col space-y-2">
            <motion.h3
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="disciplines-title text-base lightgrey"
            >
              Disciplines
            </motion.h3>
            <ul className="disciplines-list list-none">
              {disciplines.map((discipline, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                  className="disciplines-item text-base segoe"
                >
                  {discipline.name}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
        <hr />
      </div>
    </motion.div>
  );
};

export default ProjectHeader;
