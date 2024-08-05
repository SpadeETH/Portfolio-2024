"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ReactCompareSlider } from "react-compare-slider";
import { useInView } from "react-intersection-observer";
import BigLines from "../../biglines";
import ProjectHeader from "../../components/ProjectHeader";

import cropicon from "../../../public/images/Icons/crop.png";
import subicon from "../../../public/images/Icons/subtile.png";
import cropimg from "../../../public/images/sendshort/cropimg.png";
import headerimage from "../../../public/images/sendshort/header.png";
import subimg from "../../../public/images/sendshort/subimg.png";

import postit from "../../../public/images/sendshort/postit.png";

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
          <div className="infocrop flex flex-col gap-6 mx-auto mt-[64px]">
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
            <div className="sub-infocrop flex flex-col mx-auto">
              <div className="text-l lightgrey w-[700px] justify-center text-center">
                Tag your notes with customizable visual cues to help you take
                notes and remember them. Tags are customizable by name, color,
                shape to add more information to suit your needs as a student.
              </div>
            </div>
            <div className="img-infocrop">
              <Image
                src={cropimg}
                alt=""
                className="shadow-lg rounded-xl	w-[860px]"
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
            <div className="sub-infocrop flex flex-col mx-auto">
              <div className="text-l lightgrey w-[700px] justify-center text-center">
                Tag your notes with customizable visual cues to help you take
                notes and remember them. Tags are customizable by name, color,
                shape to add more information to suit your needs as a student.
              </div>
            </div>
            <div className="img-infocrop">
              <Image
                src={subimg}
                alt=""
                className="shadow-lg rounded-xl	w-[860px]"
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
            <div className="heading w-100">
              Understand how visual design improvements can enhance user
              engagement and satisfaction.
            </div>
            <div className="pheading w-100 segoe font-normal lightgrey">
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
          <div className="flex flex-col items-center w-full mx-auto mt-[96px]">
            <div className="titlefeature w-full flex flex-col gap-2 mb-6">
              <div className="subheading">UXR</div>
              <h2 className="heading w-100 text-left">
                Three main discovery pillars for our approach
              </h2>
              <hr />
            </div>

            <div className="flex flex-row justify-between gap-6 w-full">
              <div className="flex flex-col items-start w-1/3 ">
                <div className="flex items-center mb-4">
                  <PersonIcon style={{ marginRight: ".5rem" }} />
                  <h3 className="text-base text-gray-800 segoe font-medium">
                    Global User Experience
                  </h3>
                </div>
                <ul className="w-100 segoe font-normal lightgrey flex flex-col gap-2 mb-6">
                  <li>
                    How can we simplify the user journey and reduce friction
                    points?
                  </li>
                  <li>
                    What are the common pain points users face while using the
                    app?
                  </li>
                  <li>How can we improve user satisfaction and engagement?</li>
                </ul>
                <p className="font-medium segoe text-gray-800">
                  Objective: Enhance the overall user experience by making the
                  app intuitive, efficient, and nice to use.
                </p>
              </div>
              <div className="flex flex-col items-start w-1/3 px-4">
                <div className="flex items-center mb-4">
                  <AssignmentIcon style={{ marginRight: ".5rem" }} />
                  <h3 className="text-base text-gray-800 segoe font-medium">
                    Global User Experience
                  </h3>
                </div>
                <ul className="w-100 segoe font-normal lightgrey flex flex-col gap-2 mb-6">
                  <li>
                    What elements can enhance the visual appeal of the app?
                  </li>
                  <li>
                    How can we create a consistent and intuitive interface?
                  </li>
                  <li>
                    What are the best practices for designing our app’s
                    features?
                  </li>
                </ul>
                <p className="font-medium segoe text-gray-800">
                  Objective: Improve the visual design of the app to make it
                  more appealing and easy to use.
                </p>
              </div>
              <div className="flex flex-col items-start w-1/3 px-4">
                <div className="flex items-center mb-4">
                  <CachedIcon style={{ marginRight: ".5rem" }} />
                  <h3 className="text-base text-gray-800 segoe font-medium">
                    Global User Experience
                  </h3>
                </div>
                <ul className="w-100 segoe font-normal lightgrey flex flex-col gap-2 mb-6">
                  <li>
                    Are all the features easy to understand and easy to use?
                  </li>
                  <li>What features can be missing on actual product?</li>
                  <li>
                    What are the common problem / issue you faced using
                    SendShort?
                  </li>
                </ul>
                <p className="font-medium segoe text-gray-800">
                  Objective: Ensure the app’s features are robust, intuitive,
                  and meet user needs effectively.
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
              <div className="subheading">RESEARCH METHODOLOGY</div>
              <h2 className="heading w-100 text-left">
                Qualitative over quantitative
              </h2>
              <hr />
              <p className="font-regular segoe text-gray-800">
                We had a lot of data from analytics and a/b testing that were
                here since the MVP, we chosen to complete it with a short user
                interview to make sure that we had enough information to go.
              </p>
            </div>
          </div>
          <div className="imgs flex flex-row justify-between">
            <Image
              src={left}
              alt=""
              className=""
              style={{ width: "45%", height: "45%", aspectRatio: "1.841" }}
            />
            <Image
              src={right}
              alt=""
              className="w-45"
              style={{ width: "45%", height: "45%", aspectRatio: "1.841" }}
            />
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
            <div className="stepsrow1 flex flex-row gap-8">
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
            <div className="stepsrow2 flex flex-row gap-8">
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
                  Features should be clear, explained & easy to use for
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
    {
      type: "text",
      content: (
        <>
          <div className="flex flex-col items-center w-full mx-auto mt-[96px]">
            <div className="titlefeature w-full flex flex-col gap-2 mb-6">
              <div className="subheading">UX DESIGN</div>
              <h2 className="heading w-100 text-left ">Draft Sessions </h2>
              <hr />
              <p className="font-regular segoe text-gray-800">
                Tags consist of three main interface experiences: tags visual
                design on the notebook, popup to add a tag, and writing within
                an expandable tag/resolving tags.
              </p>
            </div>
          </div>
          <div className="img-infocrop">
            <Image src={Draft} alt="" className="w-full" />
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
              <div className="subheading">UX DESIGN</div>
              <h2 className="heading w-100 text-left ">Solution Designing </h2>
              <hr />
              <p className="font-regular segoe text-gray-800">
                Tags consist of three main interface experiences: tags visual
                design on the notebook, popup to add a tag, and writing within
                an expandable tag/resolving tags.
              </p>
            </div>
          </div>
          <div className="img-infocrop">
            <Image src={Design} alt="" className="w-full" />
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
              <div className="subheading">UX DESIGN</div>
              <h2 className="heading w-100 text-left ">Before / After</h2>
              <hr />
              <p className="font-regular segoe text-gray-800">
                Tags consist of three main interface experiences: tags visual
                design on the notebook, popup to add a tag, and writing within
                an expandable tag/resolving tags.
              </p>
            </div>
          </div>
          <div className="img-infocrop">
            <Tabs defaultValue="home" className="w-full">
              <TabsList>
                <TabsTrigger value="home">Home</TabsTrigger>
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="edit">Edit</TabsTrigger>
              </TabsList>

              <TabsContent value="home">
                {" "}
                <ReactCompareSlider
                  className="rounded-lg"
                  itemOne={<Image src={before} alt="" className="w-full" />}
                  itemTwo={<Image src={after} alt="" className="w-full" />}
                />
              </TabsContent>
              <TabsContent value="login">
                <ReactCompareSlider
                  className="rounded-lg"
                  itemOne={<Image src={lbefore} alt="" className="w-full" />}
                  itemTwo={<Image src={lafter} alt="" className="w-full" />}
                />
              </TabsContent>
              <TabsContent value="edit">
                <ReactCompareSlider
                  className="rounded-lg"
                  itemOne={<Image src={ebefore} alt="" className="w-full" />}
                  itemTwo={<Image src={eafter} alt="" className="w-full" />}
                />
              </TabsContent>
            </Tabs>
          </div>
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

        <div className="w-100 flex flex-col gap-8 mx-auto">
          <motion.div
            className="title-infocrop flex items-center space-x-4 justify-center"
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
            <div className="text-l lightgrey w-[700px] justify-center text-center">
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

          <div className="Main flex flex-col  mx-auto gap-y-5 w-[860px] mt-124">
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
