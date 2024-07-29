"use client";
import React, { useState, useEffect } from "react";
import BigLines from "../../biglines";
import ProjectHeader from "../../components/ProjectHeader";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import subicon from "../../../public/images/Icons/subtile.png";
import cropicon from "../../../public/images/Icons/crop.png";
import cropimg from "../../../public/images/sendshort/cropimg.png";
import subimg from "../../../public/images/sendshort/subimg.png";

import postit from "../../../public/images/sendshort/postit.png";

const SendshortProject: React.FC = () => {
  const [headerVisible, setHeaderVisible] = useState(false);

  const project = {
    title: "SendShort Product Design",
    subtitle: "The tool that enhance content creator workflow",
    description:
      "J’ai eu l’occasion de participer avec Sendshort à la refonte totale de leur Produit / Site Internet. L’objectif étant de faciliter au maximum la création de vidéo au format vertical via l’intelligence artificielle.",
    team: [
      { name: "Dylan Williams", role: "(PM)" },
      { name: "Logan Victorien", role: "(Branding)" },
      { name: "Thomas Le Borgne", role: "(UX)" },
      { name: "Arthur Bossuyt", role: "(UX/UI)" },
    ],
    tools: [{ name: "Figma" }, { name: "Webflow" }],
    timeline: "Q1 2023 - Q2 2023",
    disciplines: [{ name: "User Research" }, { name: "Visual Design" }],
  };

  const elements = [
    {
      type: "Info Crop ",
      content: (
        <>
          <div className="infocrop flex flex-col gap-6 mx-auto my-[64px]">
            <div className="title-infocrop flex items-center space-x-4 justify-center">
              <h1 className="font-regular aeonik text-3xl text-gray-700">
                Crop videos
              </h1>
              <Image
                src={cropicon}
                alt="Icon"
                className="h-[33px] w-[33px] mt-[1px]"
              />
              <h1 className="font-regular aeonik text-3xl text-gray-700">
                to vertical format
              </h1>
            </div>
            <div className="sub-infocrop">
              <div className="aeonik text-xl lightgrey w-[700px] justify-center text-center">
                Tag your notes with customizable visual cues to help you take
                notes and remember them. Tags are customizable by name, color,
                shape to add more information to suit your needs as a student.
              </div>
            </div>
            <div className="img-infocrop">
              <Image
                src={cropimg}
                alt=""
                className="shadow-lg rounded-xl	w-[800px]"
              />
            </div>
          </div>
        </>
      ),
    },
    {
      type: "Info sub ",
      content: (
        <>
          <div className="infocrop flex flex-col gap-6 mx-auto my-[64px]">
            <div className="title-infocrop flex items-center space-x-4 justify-center">
              <h1 className="font-regular aeonik text-3xl text-gray-700">
                Let IA Subtitle
              </h1>
              <Image
                src={subicon}
                alt="Icon"
                className="h-[33px] w-[33px] mt-[1px]"
              />
              <h1 className="font-regular aeonik text-3xl text-gray-700">
                your videos
              </h1>
            </div>
            <div className="sub-infocrop">
              <div className="aeonik text-xl lightgrey w-[700px] justify-center text-center">
                Tag your notes with customizable visual cues to help you take
                notes and remember them. Tags are customizable by name, color,
                shape to add more information to suit your needs as a student.
              </div>
            </div>
            <div className="img-infocrop">
              <Image
                src={subimg}
                alt=""
                className="shadow-lg rounded-xl	w-[800px]"
              />
            </div>
          </div>
        </>
      ),
    },
    {
      type: "shortline",
      content: (
        <>
          <div className="title text-xl flex flex-row mx-auto text-center w-[400px] lightgrey">
            MVP was good for it’s first utility <br /> but to scale we had to
            reimagine it and make it more attractive.
          </div>
        </>
      ),
    },
    {
      type: "Primary Objective",
      content: (
        <div className="flex flex-row">
          <div className="txt w-6/12 flex flex-col gap-y-4 justify-center">
            <div className="subheading">Primary Objective</div>
            <div className="heading w-9/12">
              Understand how visual design improvements can enhance user
              engagement and satisfaction.
            </div>
            <div className="pheading w-9/12 segoe font-normal">
              We tried to Identify specific pain points in the current app’s
              design that hinder usability and discover user preferences for
              visual aesthetics.
            </div>
          </div>
          <Image src={postit} alt="Icon" className="w-6/12" />
        </div>
      ),
    },
    {
      type: "UXR",
      content: (
        <>
          <div className="txt w-6/12 flex flex-col gap-y-4 justify-center">
            <div className="subheading">Primary Objective</div>
            <div className="heading w-9/12">
              Understand how visual design improvements can enhance user
              engagement and satisfaction.
            </div>
            <div className="pheading w-9/12 segoe font-normal">
              We tried to Identify specific pain points in the current app’s
              design that hinder usability and discover user preferences for
              visual aesthetics.
            </div>
          </div>
        </>
      ),
    },

    {
      type: "text",
      content: (
        <>
          <div className="title text-base lightgrey">
            Unveiling Beauty and Solving Challenges
          </div>
          <p className="paragraph text-base darkgrey">
            I believe design is a tool that reveals and enhances the inherent
            beauty in our world. Beyond aesthetics, it crafts intuitive
            solutions for digital interfaces and physical products, addressing
            complex challenges with clarity and empathy. Design plays a crucial
            role in creating a brighter future by innovating thoughtfully and
            ensuring our solutions resonate deeply with users.
          </p>
        </>
      ),
    },

    // Ajoutez d'autres éléments ici
  ];

  const Element = ({ children }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.2,
    });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        animate={{
          opacity: inView ? 1 : 0,
          y: inView ? 0 : 20,
          filter: inView ? "blur(0px)" : "blur(8px)",
        }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bloctext env"
      >
        {children}
      </motion.div>
    );
  };

  useEffect(() => {
    // Simulate the delay for header animation completion
    const timer = setTimeout(() => setHeaderVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <BigLines />
      <div className="w-100 mt-124 px-180 mx-auto flex flex-col gap-y-[80px]">
        <ProjectHeader
          title={project.title}
          subtitle={project.subtitle}
          description={project.description}
          team={project.team}
          tools={project.tools}
          timeline={project.timeline}
          disciplines={project.disciplines}
        />
        <div className="w-100 flex mx-auto">
          <div className="Main flex flex-col gap-y-5 w-[860px] mt-124">
            {headerVisible &&
              elements.map((el, index) => (
                <Element key={index}>{el.content}</Element>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default SendshortProject;
