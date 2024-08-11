"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ReactCompareSlider } from "react-compare-slider";
import { useInView } from "react-intersection-observer";
import BigLines from "../../biglines";
import ProjectHeader from "../../components/ProjectHeader";

import Opti from "../../../public/images/bitloom/opti.png";
import headerimage from "../../../public/images/bitloom/header.png";
import Track from "../../../public/images/bitloom/track.png";
import Coins from "../../../public/images/Bitloom/coins.png";
import Competitor from "../../../public/images/Bitloom/competitor.png";
import Niche from "../../../public/images/Bitloom/niche.png";

import Actual from "../../../public/images/sendshort/ActualDesign.png";
import after from "../../../public/images/sendshort/after.png";
import before from "../../../public/images/sendshort/before.png";
import Concu from "../../../public/images/sendshort/Concu.png";
import Design from "../../../public/images/sendshort/Design.png";
import Draft from "../../../public/images/sendshort/Draft.png";
import eafter from "../../../public/images/sendshort/Edit After.png";
import ebefore from "../../../public/images/sendshort/Edit Before.png";
import left from "../../../public/images/sendshort/leftResearch.png";
import lafter from "../../../public/images/sendshort/Login After.png";
import lbefore from "../../../public/images/sendshort/Login Before.png";
import right from "../../../public/images/sendshort/rightResearch.png";

import AssignmentIcon from "@mui/icons-material/Assignment";
import CachedIcon from "@mui/icons-material/Cached";
import PersonIcon from "@mui/icons-material/Person";

import IconKeyInsightA from "../../../public/images/Icons/KI1.png";
import IconKeyInsightB from "../../../public/images/Icons/KI2.png";
import IconKeyInsightC from "../../../public/images/Icons/KI3.png";
import IconKeyInsightD from "../../../public/images/Icons/KI4.png";

const BitloomProject: React.FC = () => {
  const [headerVisible, setHeaderVisible] = useState(false);

  const project = {
    title: "Bitloom Crypto Tracking App",
    subtitle: "A landing page collection from 2022",
    description:
      "Avec deux amis nous nous sommes lancé dans la réalisation d’une application mobile de portfolio répondant à des problématiques bien spécifiques. Cette application est aujourd’hui en cours de développement, le produit n’est pas arrivé a son terme mais je le trouve interessant à partager.",
    team: [
      { name: "Theo Villano", role: "(PM)" },
      { name: "Guillaume Chalons", role: "(Branding)" },
      { name: "Thomas Le Borgne", role: "(Developer)" },
      { name: "Arthur Bossuyt", role: "(UX/UI)" },
    ],
    tools: [{ name: "Figma" }, { name: "FigJam" }],
    timeline: "Q2 2024 - En Cours",
    disciplines: [{ name: "Mobile App" }, { name: "UI/UX Design" }],
  };

  const elements = [
    {
      type: "Info Crop ",
      content: (
        <>
          <div className=" w-full infocrop flex flex-col gap-6 mx-auto mt-[64px]">
            <div className="title-infocrop flex flex-wrap lg:items-center gap-4 lg:justify-center">
              <h1 className="font-regular aeonik text-2xl lg:text-3xl text-gray-700">
                Track all your wallet in same place
              </h1>
            </div>
            <div className="w-full sub-infocrop flex flex-col mx-auto items-center">
              <div className="text-l lightgrey lg:w-[700px] lg:justify-center lg:text-center">
                Tag your notes with customizable visual cues to help you take
                notes and remember them. Tags are customizable by name, color,
                shape to add more information to suit your needs as a student.
              </div>
            </div>
            <div className="img-infocrop">
              <Image src={Track} alt="" className=" rounded-[3rem]	w-[860px]" />
            </div>
          </div>
        </>
      ),
    },
    {
      type: "Info sub ",
      content: (
        <>
          <div className=" w-full infocrop flex flex-col gap-6 mx-auto mt-[64px]">
            <div className="title-infocrop flex flex-wrap lg:items-center gap-4 lg:justify-center">
              <h1 className="font-regular aeonik text-2xl lg:text-3xl text-gray-700">
                Optimized for Decentralized Finance tracking
              </h1>
            </div>
            <div className="w-full sub-infocrop flex flex-col mx-auto items-center">
              <div className="text-l lightgrey lg:w-[700px] lg:justify-center lg:text-center">
                Tag your notes with customizable visual cues to help you take
                notes and remember them. Tags are customizable by name, color,
                shape to add more information to suit your needs as a student.
              </div>
            </div>
            <div className="img-infocrop">
              <Image src={Opti} alt="" className=" rounded-[3rem]	w-[860px]" />
            </div>
          </div>
        </>
      ),
    },
    {
      type: "shortline",
      content: (
        <>
          <div className="title text-xl flex flex-row mx-auto lg:text-center lg:w-[400px] my-[64px] lightgrey">
            MVP was good for it’s first utility <br /> but to scale we had to
            reimagine it and make it more attractive.
          </div>
        </>
      ),
    },
    {
      type: "Primary Objective",
      content: (
        <div className="flex flex-col lg:flex-row">
          <div className="txt lg:w-7/12 flex flex-col gap-y-4 justify-center">
            <div className="subheading">INTRODUCTION</div>
            <div className="heading w-100">
              Where does Bitloom idea came from ?
            </div>
            <div className="pheading w-100 segoe font-normal lightgrey">
              As a Web 3 Enjoyer we’ve used a lot of different Crypto Tracker to
              keep an eye and monitoring our wallets.
            </div>
            <div className="pheading w-100 segoe font-normal lightgrey">
              But each one have their own problem with our usage of the tools
              which led us to the creation of a product that fit our niche
              needs.{" "}
            </div>
            <hr />
            <div className="w-100 text-base font-medium lightgrey">
              According to SkyQuest, the global Decentralized Finance Market
              size was valued at $22 billion in 2022{" "}
              <span className="darkgrey">
                {" "}
                and is projected to grow $48.02 billion by 2031
              </span>
            </div>
            <div className="pheading w-100 segoe font-normal lightgrey">
              It makes it the good timing to build product arround it
            </div>
          </div>
          <Image src={Coins} alt="Icon" className="lg:w-5/12 lg ml-[0px] " />
        </div>
      ),
    },
    {
      type: "UXR",
      content: (
        <>
          <div className="flex flex-col items-center w-full mx-auto mt-[96px]">
            <div className="titlefeature w-full flex flex-col gap-2 mb-6">
              <div className="subheading">UXR</div>
              <h2 className="heading w-100 text-left">
                Three main discovery pillars for our approach
              </h2>
              <hr />
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-[64px] lg:gap-6 w-full">
              <div className="flex flex-col items-start w-4/5 lg:w-1/3 lg:pr-4">
                <div className="flex items-center mb-4">
                  <PersonIcon style={{ marginRight: ".5rem" }} />
                  <h3 className="text-base text-gray-800 segoe font-medium">
                    Global User Experience
                  </h3>
                </div>
                <p className="w-100 segoe font-normal lightgrey flex flex-col gap-2 mb-6">
                  We need to have a Multi-Wallet analysis because most of the
                  people use several wallet for different usage whether it is
                  for security or just for efficviency
                </p>
              </div>
              <div className="flex flex-col items-start w-4/5 lg:w-1/3 lg:px-4">
                <div className="flex items-center mb-4">
                  <AssignmentIcon style={{ marginRight: ".5rem" }} />
                  <h3 className="text-base text-gray-800 segoe font-medium">
                    Global User Experience
                  </h3>
                </div>
                <p className="w-100 segoe font-normal lightgrey flex flex-col gap-2 mb-6">
                  Most of the tracker do not take in consideration Centralized
                  Exchange, we do think that it’s important to take it in
                  consideration for a better service
                </p>
              </div>
              <div className="flex flex-col items-start w-4/5 lg:w-1/3 lg:px-4">
                <div className="flex items-center mb-4">
                  <CachedIcon style={{ marginRight: ".5rem" }} />
                  <h3 className="text-base text-gray-800 segoe font-medium">
                    Global User Experience
                  </h3>
                </div>
                <p className="w-100 segoe font-normal lightgrey flex flex-col gap-2 mb-6">
                  Most of the tracker do not take in consideration Centralized
                  Exchange, we do think that it’s important to take it in
                  consideration for a better service
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-[64px] lg:gap-6 w-full">
              <div className="flex flex-col items-start w-4/5 lg:w-1/3 lg:pr-4">
                <div className="flex items-center mb-4">
                  <PersonIcon style={{ marginRight: ".5rem" }} />
                  <h3 className="text-base text-gray-800 segoe font-medium">
                    Global User Experience
                  </h3>
                </div>
                <p className="w-100 segoe font-normal lightgrey flex flex-col gap-2 mb-6">
                  We need to have a Multi-Wallet analysis because most of the
                  people use several wallet for different usage whether it is
                  for security or just for efficviency
                </p>
              </div>
              <div className="flex flex-col items-start w-4/5 lg:w-1/3 lg:px-4">
                <div className="flex items-center mb-4">
                  <AssignmentIcon style={{ marginRight: ".5rem" }} />
                  <h3 className="text-base text-gray-800 segoe font-medium">
                    Global User Experience
                  </h3>
                </div>
                <p className="w-100 segoe font-normal lightgrey flex flex-col gap-2 mb-6">
                  Most of the tracker do not take in consideration Centralized
                  Exchange, we do think that it’s important to take it in
                  consideration for a better service
                </p>
              </div>
              <div className="flex flex-col items-start w-4/5 lg:w-1/3 lg:px-4">
                <div className="flex items-center mb-4">
                  <CachedIcon style={{ marginRight: ".5rem" }} />
                  <h3 className="text-base text-gray-800 segoe font-medium">
                    Global User Experience
                  </h3>
                </div>
                <p className="w-100 segoe font-normal lightgrey flex flex-col gap-2 mb-6">
                  Most of the tracker do not take in consideration Centralized
                  Exchange, we do think that it’s important to take it in
                  consideration for a better service
                </p>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      type: "text",
      content: (
        <>
          <div className="flex flex-col items-center w-full mx-auto mt-[96px]">
            <div className="titlefeature w-full flex flex-col gap-2 mb-6">
              <div className="subheading">UX RESEARCH</div>
              <h2 className="heading w-100 text-left ">
                Analyze all competitors
              </h2>
              <hr />
              <p className="font-regular segoe text-gray-800">
                Considering our goals we tried to compare ourselves to
                competitors, we want some advanced functionnality while keep
                everything user friendly, it may looks hard voir impossible but
                we can achieve this by focusing on what really important.
              </p>
            </div>
          </div>
          <div className="img-infocrop">
            <Image src={Competitor} alt="" className="w-full" />
          </div>
        </>
      ),
    },
    {
      type: "text",
      content: (
        <>
          <div className="flex flex-col items-center w-full mx-auto mt-[96px]">
            <div className="titlefeature w-full flex flex-col gap-2 mb-6">
              <div className="subheading">RESEARCH METHODOLOGY</div>
              <h2 className="heading w-100 text-left ">
                Interview Niche users{" "}
              </h2>
              <hr />

              <div className="flex flex-col gap-y-2">
                <p className="font-regular segoe text-gray-800">
                  We interviewed nearly 30 people from web3 sphere asking them a
                  few question such as :
                </p>

                <ul className="font-regular segoe text-gray-800 list-disc ml-[12px]">
                  <li>Name 3 weekness of your actual tracker ?</li>
                  <li>
                    What Game changer features could make you leave your actual
                    tracker ?
                  </li>
                </ul>
                <p className="font-regular segoe text-gray-800">
                  Here are summerized results :
                </p>
              </div>
            </div>
          </div>
          <div className="img-infocrop">
            <Image src={Niche} alt="" className="w-full" />
          </div>
        </>
      ),
    },
    {
      type: "text",
      content: (
        <>
          <div className="flex flex-col items-center w-full mx-auto mt-[96px]">
            <div className="titlefeature w-full flex flex-col gap-2 mb-6">
              <div className="subheading">KEY INSIGHTS</div>
              <h2 className="heading w-100 text-left ">
                Too many useless steps & poor visual experience
              </h2>
              <hr />
              <p className="font-regular segoe text-gray-800">
                One of the main problems we faced is a poor user interface that
                made people struggle on some steps. On top of that, we noticed
                that there were some unnecessary steps that could be removed.
              </p>
            </div>
          </div>
          <div className="steps flex flex-col gap-8">
            <div className="stepsrow1 flex flex-col lg:flex-row gap-8">
              <div className="step1 bg-zinc-100 px-8 py-6 w-full rounded-s-md gap-1	flex flex-col">
                <Image
                  src={IconKeyInsightA}
                  alt="Icon"
                  className="h-[24px] w-[24px] mt-[1px]"
                />
                <h1 className="text-lg">Poor User Interface</h1>
                <p className="text-sm">
                  Old interface was made by dev, it was correct, but it was
                  missing something to reach the next step and be more premium.
                </p>
              </div>
              <div className="step2 bg-zinc-100 px-8 py-6 w-full rounded-s-md gap-1	flex flex-col">
                <Image
                  src={IconKeyInsightB}
                  alt="Icon"
                  className="h-[24px] w-[24px] mt-[1px]"
                />
                <h1 className="text-lg">Useless Steps</h1>
                <p className="text-sm">
                  Some people were struggling with the number of steps to
                  achieve simple tasks, like during video import.
                </p>
              </div>
            </div>
            <div className="stepsrow2 flex flex-col lg:flex-row gap-8">
              <div className="step1 bg-zinc-100 px-8 py-6 w-full rounded-s-md gap-1	flex flex-col">
                <Image
                  src={IconKeyInsightC}
                  alt="Icon"
                  className="h-[24px] w-[24px] mt-[1px]"
                />
                <h1 className="text-lg">Features Unexplained</h1>
                <p className="text-sm">
                  During interviews, we asked people to try to find and explain
                  all the features of SendShort. Some struggled to find it all.
                </p>
              </div>
              <div className="step2 bg-zinc-100 px-8 py-6 w-full rounded-s-md gap-1	flex flex-col">
                <Image
                  src={IconKeyInsightD}
                  alt="Icon"
                  className="h-[24px] w-[24px] mt-[1px]"
                />
                <h1 className="text-lg">Unorganized File Gestion</h1>
                <p className="text-sm">
                  We faced another problem with 2 people interviewed who made
                  more shorts than others (+50 Shorts). There is no system for
                  file organization.
                </p>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      type: "text",
      content: (
        <>
          <div className="flex flex-col items-center w-full mx-auto mt-[96px]">
            <div className="titlefeature w-full flex flex-col gap-2 mb-6">
              <div className="subheading">KEY INSIGHTS</div>
              <h2 className="lightheading w-100 text-left lightgrey font-normal">
                The main goal of this redesign was to create a place where
                videomaker can feel confortable.
                <span className="p-2 heading w-100 text-left font-regular">
                  Every features should be clear, explained & easy to use for
                  everyone.
                </span>
              </h2>
            </div>
          </div>
        </>
      ),
    },
    {
      type: "text",
      content: (
        <>
          <div className="flex flex-col items-center w-full mx-auto mt-[96px]">
            <div className="titlefeature w-full flex flex-col gap-2 mb-6">
              <div className="subheading">UX RESEARCH</div>
              <h2 className="heading w-100 text-left ">
                Analyzing Actual Design{" "}
              </h2>
              <hr />
              <p className="font-regular segoe text-gray-800">
                Tags consist of three main interface experiences: tags visual
                design on the notebook, popup to add a tag, and writing within
                an expandable tag/resolving tags.
              </p>
            </div>
          </div>
          <div className="img-infocrop">
            <Image src={Actual} alt="" className="w-full" />
          </div>
        </>
      ),
    },
    {
      type: "text",
      content: (
        <>
          <div className="flex flex-col items-center w-full mx-auto mt-[96px]">
            <div className="titlefeature w-full flex flex-col gap-2 mb-6">
              <div className="subheading">UX RESEARCH</div>
              <h2 className="heading w-100 text-left ">
                Analyze All Competitors{" "}
              </h2>
              <hr />
              <p className="font-regular segoe text-gray-800">
                Tags consist of three main interface experiences: tags visual
                design on the notebook, popup to add a tag, and writing within
                an expandable tag/resolving tags.
              </p>
            </div>
          </div>
          <div className="img-infocrop">
            <Image src={Concu} alt="" className="w-full" />
          </div>
        </>
      ),
    },
    // Ajoutez d'autres éléments ici
  ];
  interface ElementProps {
    children: React.ReactNode;
  }
  const Element: React.FC<ElementProps> = ({ children }) => {
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
      <div className="w-full mt-124 px-180 mx-auto flex flex-col gap-y-[80px]">
        <ProjectHeader
          title={project.title}
          subtitle={project.subtitle}
          description={project.description}
          team={project.team}
          tools={project.tools}
          timeline={project.timeline}
          disciplines={project.disciplines}
        />

        <div className="w-full flex flex-col gap-8 mx-auto">
          <motion.div
            className="title-infocrop flex lg:items-center space-x-4 lg:justify-center"
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 1.15 }}
          >
            <h1 className="font-regular aeonik text-4xl text-gray-700">
              SendShort App
            </h1>
          </motion.div>

          <motion.div
            className="sub-header flex flex-col mx-auto gap-y-2"
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 1.225 }}
          >
            <div className="text-l lightgrey lg:w-[700px] lg:justify-center lg:text-center">
              Tag your notes with customizable visual cues to help you take
              notes and remember them. Tags are customizable by name, color,
              shape to add more information to suit your needs as a student.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="disciplines-item text-base segoe"
          >
            <Image
              src={headerimage}
              alt="Icon"
              className="aspect-[3/1] w-100 mt-[1px]"
            />
          </motion.div>

          <div className="Main flex flex-col  mx-auto gap-y-5 w-full lg:w-[860px] mt-124">
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

export default BitloomProject;
