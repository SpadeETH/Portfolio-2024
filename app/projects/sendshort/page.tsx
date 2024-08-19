"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

import LanguageContext from "../../../app/components/context/LanguageContext";
import translations from "../../../lib/translations";
import ProjectSwitcher from "../../components/ProjectSwitcher";

import { ReactCompareSlider } from "react-compare-slider";
import { useInView } from "react-intersection-observer";
import BigLines from "../../biglines";
import ProjectHeader from "../../components/ProjectHeader";

import cropicon from "../../../public/images/Icons/crop.png";
import subicon from "../../../public/images/Icons/subtile.png";
import cropimg from "../../../public/images/sendshort/cropimg.png";
import headerimage from "../../../public/images/sendshort/header.png";
import subimg from "../../../public/images/sendshort/subimg.png";

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
import milestone from "../../../public/images/sendshort/stone.png";

import AssignmentIcon from "@mui/icons-material/Assignment";
import CachedIcon from "@mui/icons-material/Cached";
import PersonIcon from "@mui/icons-material/Person";

import Footer from "@/app/components/footer";

import IconKeyInsightA from "../../../public/images/Icons/KI1.png";
import IconKeyInsightB from "../../../public/images/Icons/KI2.png";
import IconKeyInsightC from "../../../public/images/Icons/KI3.png";
import IconKeyInsightD from "../../../public/images/Icons/KI4.png";

import BackToTop from "../../components/Backtotop";

// Correctly defining the Element component
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

const SendshortProject: React.FC = () => {
  const currentProjectTag = "sendshort";
  const { language } = useContext(LanguageContext);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const pageTranslations =
    translations[language as keyof typeof translations].sendshort;
  useEffect(() => {
    window.scrollTo(0, 0); // Ensure the page starts at the top
  }, []);
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Simulate the delay for header animation completion
    const timer = setTimeout(() => setHeaderVisible(true), 1000);
    return () => clearTimeout(timer);
  }, [language]);

  if (!isClient) {
    return null; // Ou retournez un loader, spinner, etc.
  }

  const elements = [
    {
      type: "Info Crop ",
      content: (
        <>
          <div
            key={`${language}-crop`}
            className="w-full infocrop flex flex-col gap-6 mx-auto mt-[64px]"
          >
            <div className="title-infocrop flex flex-col-reverse lg:flex-row-reverse lg:items-center gap-4 lg:justify-center">
              <h1 className="font-regular aeonik text-2xl lg:text-3xl text-gray-700">
                {pageTranslations.sections.infoCrop.title}
              </h1>
              <div className="invisible lg:visible">
                {" "}
                <Image
                  src={cropicon}
                  alt="Icon"
                  className="h-[24px] w-[24px]  lg:h-[33px] lg:w-[33px] mt-[1px]"
                />
              </div>
            </div>
            <div className="w-full sub-infocrop flex flex-col-reverse mx-auto items-center">
              <div className="text-l lightgrey lg:w-[700px] lg:justify-center lg:text-center text-justify">
                {pageTranslations.sections.infoCrop.description}
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
          <div
            key={`${language}-sub`}
            className="w-full infocrop flex flex-col gap-6 mx-auto mt-[64px]"
          >
            <div className="title-infocrop flex flex-wrap lg:items-center gap-4 lg:justify-center">
              <h1 className="font-regular aeonik text-2xl lg:text-3xl text-gray-700">
                {pageTranslations.sections.infoSub.title}
              </h1>
              <div className="invisible lg:visible">
                <Image
                  src={subicon}
                  alt="Icon"
                  className="h-[24px] w-[24px]  lg:h-[33px] lg:w-[33px] mt-[1px]"
                />
              </div>
            </div>
            <div className="w-full sub-infocrop flex flex-col mx-auto items-center">
              <div className="text-l lightgrey lg:w-[700px] lg:justify-center lg:text-center text-justify">
                {pageTranslations.sections.infoSub.description}
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
          <div
            key={`${language}-shortline`}
            className="title text-xl flex flex-row lg:mx-auto lg:text-center lg:w-[400px] my-[64px] lightgrey w-80 text-left"
          >
            {pageTranslations.sections.shortline.text}
          </div>
        </>
      ),
    },
    {
      type: "Primary Objective",
      content: (
        <div
          key={`${language}-objective`}
          className="flex flex-col lg:flex-row"
        >
          <div className="txt lg:w-6/12 flex flex-col gap-y-4 justify-center">
            <div className="subheading">
              {pageTranslations.sections.primaryObjective.title}
            </div>
            <div className="heading w-100">
              {pageTranslations.sections.primaryObjective.heading}
            </div>
            <div className="pheading w-100 segoe font-normal lightgrey text-justify">
              {pageTranslations.sections.primaryObjective.description}
            </div>
          </div>
          <Image
            src={pageTranslations.sections.primaryObjective.image}
            width={1100} // Replace with the original width of your image
            height={1100} // Replace with the original height of your image
            alt="Icon"
            className="lg:w-6/12 lg ml-[0px] "
          />
        </div>
      ),
    },
    {
      type: "UXR",
      content: (
        <>
          <div
            key={`${language}-uxr`}
            className="flex flex-col items-center w-full mx-auto mt-[96px]"
          >
            <div className="titlefeature w-full flex flex-col gap-2 mb-6">
              <div className="subheading">
                {pageTranslations.sections.uxr.head}
              </div>
              <h2 className="heading w-100 text-left">
                {pageTranslations.sections.uxr.title}
              </h2>
              <hr />
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-[64px] lg:gap-6 w-full">
              {pageTranslations.sections.uxr.pillars.map((pillar, index) => (
                <div
                  key={`${language}-pillar-${index}`}
                  className="flex flex-col items-start w-5/5 lg:w-1/3 lg:px-4"
                >
                  <div className="flex items-center mb-4">
                    {index === 0 && (
                      <PersonIcon style={{ marginRight: ".5rem" }} />
                    )}
                    {index === 1 && (
                      <AssignmentIcon style={{ marginRight: ".5rem" }} />
                    )}
                    {index === 2 && (
                      <CachedIcon style={{ marginRight: ".5rem" }} />
                    )}
                    <h3 className="text-base text-gray-800 segoe font-medium text-justify">
                      {pillar.title}
                    </h3>
                  </div>
                  <ul className="w-100 segoe font-normal lightgrey flex flex-col gap-2 mb-6 ">
                    {pillar.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                  <p className="font-medium segoe text-gray-800">
                    {pillar.objective}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </>
      ),
    },
    {
      type: "text",
      content: (
        <>
          <div
            key={`${language}-researchMethodology`}
            className="flex flex-col items-center w-full mx-auto mt-[96px]"
          >
            <div className="titlefeature w-full flex flex-col gap-2 mb-6">
              <div className="subheading">
                {pageTranslations.sections.researchMethodology.title}
              </div>
              <h2 className="heading w-100 text-left">
                {pageTranslations.sections.researchMethodology.heading}
              </h2>
              <hr />
              <p className="font-regular segoe text-gray-800 text-justify">
                {pageTranslations.sections.researchMethodology.description}
              </p>
            </div>
          </div>
          <div className="imgs flex flex-col lg:flex-row justify-between gap-8">
            <div className="w-45">
              <Image src={left} alt="" className="w-45" />
            </div>
            <div className="w-45">
              <Image src={right} alt="" className="w-45" />
            </div>
          </div>
        </>
      ),
    },
    {
      type: "keyInsights",
      content: (
        <>
          <div
            key={`${language}-keyInsights`}
            className="flex flex-col items-center w-full mx-auto mt-[96px]"
          >
            <div className="titlefeature w-full flex flex-col gap-2 mb-6">
              <div className="subheading">
                {pageTranslations.sections.keyInsights.title}
              </div>
              <h2 className="heading w-100 text-left ">
                {pageTranslations.sections.keyInsights.heading}
              </h2>
              <hr />
              <p className="font-regular segoe text-gray-800 text-justify">
                {pageTranslations.sections.keyInsights.description}
              </p>
            </div>
          </div>
          <div className="steps flex flex-col gap-8">
            <div className="stepsrow1 flex flex-col lg:flex-row gap-8">
              <div className="step1 bg-zinc-50 px-8 py-6 w-full rounded-s-md gap-1 flex flex-col">
                <Image
                  src={IconKeyInsightA}
                  alt="Icon"
                  className="h-[24px] w-[24px] mt-[1px]"
                />
                <h1 className="text-lg">
                  {pageTranslations.sections.keyInsights.pillars[0].title}
                </h1>
                <p className="text-sm text-justify">
                  {pageTranslations.sections.keyInsights.pillars[0].description}
                </p>
              </div>
              <div className="step2 bg-zinc-50 px-8 py-6 w-full rounded-s-md gap-1 flex flex-col">
                <Image
                  src={IconKeyInsightB}
                  alt="Icon"
                  className="h-[24px] w-[24px] mt-[1px]"
                />
                <h1 className="text-lg">
                  {pageTranslations.sections.keyInsights.pillars[1].title}
                </h1>
                <p className="text-sm text-justify">
                  {pageTranslations.sections.keyInsights.pillars[1].description}
                </p>
              </div>
            </div>
            <div className="stepsrow2 flex flex-col lg:flex-row gap-8">
              <div className="step1 bg-zinc-50 px-8 py-6 w-full rounded-s-md gap-1 flex flex-col">
                <Image
                  src={IconKeyInsightC}
                  alt="Icon"
                  className="h-[24px] w-[24px] mt-[1px]"
                />
                <h1 className="text-lg">
                  {pageTranslations.sections.keyInsights.pillars[2].title}
                </h1>
                <p className="text-sm text-justify">
                  {pageTranslations.sections.keyInsights.pillars[2].description}
                </p>
              </div>
              <div className="step2 bg-zinc-50 px-8 py-6 w-full rounded-s-md gap-1 flex flex-col">
                <Image
                  src={IconKeyInsightD}
                  alt="Icon"
                  className="h-[24px] w-[24px] mt-[1px]"
                />
                <h1 className="text-lg">
                  {pageTranslations.sections.keyInsights.pillars[3].title}
                </h1>
                <p className="text-sm text-justify">
                  {pageTranslations.sections.keyInsights.pillars[3].description}
                </p>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      type: "keyInsights2",
      content: (
        <>
          <div
            key={`${language}-keyInsights2`}
            className="flex flex-col items-center w-full mx-auto mt-[96px]"
          >
            <div className="titlefeature w-full flex flex-col gap-2 mb-6">
              <div className="subheading">
                {pageTranslations.sections.keyInsights2.title}
              </div>
              <h2 className="lightheading w-100 text-left lightgrey font-normal">
                {pageTranslations.sections.keyInsights2.heading}
                <span className="p-2 heading w-100 text-left font-regular">
                  {pageTranslations.sections.keyInsights2.subheading}
                </span>
              </h2>
            </div>
          </div>
        </>
      ),
    },
    {
      type: "uxResearch-analyzingDesign",
      content: (
        <>
          <div
            key={`${language}-uxResearch-analyzingDesign`}
            className="flex flex-col items-center w-full mx-auto mt-[96px]"
          >
            <div className="titlefeature w-full flex flex-col gap-2 mb-6">
              <div className="subheading">
                {pageTranslations.sections.uxResearch.analyzingDesign.title}
              </div>
              <h2 className="heading w-100 text-left ">
                {pageTranslations.sections.uxResearch.analyzingDesign.heading}
              </h2>
              <hr />
              <p className="font-regular segoe text-gray-800 text-justify">
                {
                  pageTranslations.sections.uxResearch.analyzingDesign
                    .description
                }
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
      type: "uxResearch-analyzeCompetitors",
      content: (
        <>
          <div
            key={`${language}-uxResearch-analyzeCompetitors`}
            className="flex flex-col items-center w-full mx-auto mt-[96px]"
          >
            <div className="titlefeature w-full flex flex-col gap-2 mb-6">
              <div className="subheading">
                {pageTranslations.sections.uxResearch.analyzeCompetitors.title}
              </div>
              <h2 className="heading w-100 text-left ">
                {
                  pageTranslations.sections.uxResearch.analyzeCompetitors
                    .heading
                }
              </h2>
              <hr />
              <p className="font-regular segoe text-gray-800 text-justify">
                {
                  pageTranslations.sections.uxResearch.analyzeCompetitors
                    .description
                }
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
      type: "uxDesign-draftSessions",
      content: (
        <>
          <div
            key={`${language}-uxDesign-draftSessions`}
            className="flex flex-col items-center w-full mx-auto mt-[96px]"
          >
            <div className="titlefeature w-full flex flex-col gap-2 mb-6">
              <div className="subheading">
                {pageTranslations.sections.uxDesign.draftSessions.title}
              </div>
              <h2 className="heading w-100 text-left ">
                {pageTranslations.sections.uxDesign.draftSessions.heading}
              </h2>
              <hr />
              <p className="font-regular segoe text-gray-800 text-justify">
                {pageTranslations.sections.uxDesign.draftSessions.description}
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
      type: "uxDesign-solutionDesigning",
      content: (
        <>
          <div
            key={`${language}-uxDesign-solutionDesigning`}
            className="flex flex-col items-center w-full mx-auto mt-[96px]"
          >
            <div className="titlefeature w-full flex flex-col gap-2 mb-6">
              <div className="subheading">
                {pageTranslations.sections.uxDesign.solutionDesigning.title}
              </div>
              <h2 className="heading w-100 text-left ">
                {pageTranslations.sections.uxDesign.solutionDesigning.heading}
              </h2>
              <hr />
              <p className="font-regular segoe text-gray-800 text-justify">
                {
                  pageTranslations.sections.uxDesign.solutionDesigning
                    .description
                }
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
      type: "uxDesign-beforeAfter",
      content: (
        <>
          <div
            key={`${language}-uxDesign-beforeAfter`}
            className="flex flex-col items-center w-full mx-auto mt-[96px]"
          >
            <div className="titlefeature w-full flex flex-col gap-2 mb-6">
              <div className="subheading">
                {pageTranslations.sections.uxDesign.beforeAfter.title}
              </div>
              <h2 className="heading w-100 text-left ">
                {pageTranslations.sections.uxDesign.beforeAfter.heading}
              </h2>
              <hr />
              <p className="font-regular segoe text-gray-800 text-justify">
                {pageTranslations.sections.uxDesign.beforeAfter.description}
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
    {
      type: "nouveauDepart",
      content: (
        <div
          key={`${language}-nouveauDepart`}
          className="flex flex-col items-center w-full mx-auto mt-[96px]"
        >
          <div className="titlefeature w-full flex flex-col gap-2 mb-6">
            <div className="subheading">
              {pageTranslations.sections.nouveauDepart.title}
            </div>
            <h2 className="heading w-100 text-left ">
              {pageTranslations.sections.nouveauDepart.heading}
            </h2>
            <hr />
            <p className="font-regular segoe text-gray-800 text-justify">
              {pageTranslations.sections.nouveauDepart.description}
            </p>
          </div>
          <div className="img-infocrop">
            <Image
              src={pageTranslations.sections.nouveauDepart.image}
              width={0} // Replace with the original width of your image
              height={0} // Replace with the original height of your image
              layout="responsive"
              alt=""
              className="w-full"
            />
          </div>
        </div>
      ),
    },
    {
      type: "resultatsCle",
      content: (
        <div
          key={`${language}-RésultatsCle`}
          className="flex flex-col items-center w-full mx-auto mt-[96px]"
        >
          <div className="titlefeature w-full flex flex-col gap-2 mb-6">
            <div className="subheading">
              {pageTranslations.sections.resultatsCle.title}
            </div>
            <h2 className="heading w-100 text-left ">
              {pageTranslations.sections.resultatsCle.heading}
            </h2>
            <hr />
            <p className="font-regular segoe text-gray-800 text-justify">
              {pageTranslations.sections.resultatsCle.description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pageTranslations.sections.resultatsCle.stats.map((stat, index) => (
              <div
                key={`${language}-stat-${index}`}
                className="bg-white rounded-lg shadow-sm text-center bg-zinc-50 flex flex-col h-full"
              >
                <div className="highcard outline-gray-200 outline rounded-lg outline-1 p-6 flex-grow">
                  <h3 className="text-lg font-medium min-h-[48px] lg:min-h-[60px]">
                    {stat.title}
                  </h3>
                  <div className="flex flex-row justify-center items-center gap-x-2 mt-4">
                    <p className="text-gray-400 aeonik text-xl line-through mb-2">
                      {stat.old}
                    </p>
                    <p className="text-black text-4xl aeonik font-bold mb-4">
                      {stat.new}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-700 p-6 text-left flex-grow text-justify lg:min-h-[168px] ">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      type: "succes",
      content: (
        <div
          key={`${language}-Success`}
          className="flex flex-col items-center w-full mx-auto mt-[96px]"
        >
          <div className="titlefeature w-full flex flex-col gap-2 mb-6">
            <div className="subheading">
              {pageTranslations.sections.succes.title}
            </div>
            <h2 className="heading w-100 text-left ">
              {pageTranslations.sections.succes.heading}
            </h2>
            <hr />
            <p className="font-regular segoe text-gray-800 text-justify">
              {pageTranslations.sections.succes.description}
            </p>
          </div>
          <div className="img-infocrop w-full">
            <Image src={milestone} alt="" className="w-full" />
          </div>
        </div>
      ),
    },
    {
      type: "leconsPerspectives",
      content: (
        <div
          key={`${language}-LeconsPerspectives`}
          className="flex flex-col items-center w-full mx-auto mt-[96px]"
        >
          <div className="titlefeature w-full flex flex-col gap-2 mb-6">
            <div className="subheading">
              {pageTranslations.sections.leconsPerspectives.title}
            </div>
            <h2 className="heading w-100 text-left ">
              {pageTranslations.sections.leconsPerspectives.heading}
            </h2>
            <hr />
          </div>
          <div className="steps flex flex-col gap-8">
            <div className="stepsrow1 flex flex-col lg:flex-row gap-8">
              {pageTranslations.sections.leconsPerspectives.insights.map(
                (insight, index) => (
                  <div
                    key={`${language}-insight-${index}`}
                    className="step1 bg-zinc-50 px-8 py-6 w-full rounded-s-md gap-1 flex flex-col"
                  >
                    <Image
                      src={insight.icon}
                      alt="Icon"
                      width={24}
                      height={24}
                      className="h-[24px] w-[24px] mt-[1px]"
                    />
                    <h1 className="text-lg">{insight.title}</h1>
                    <p className="text-sm text-justify">
                      {insight.description}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      ),
    },
    {
      type: "designGoals",
      content: (
        <div
          key={`${language}-designGoals`}
          className="flex flex-col items-center w-full mx-auto mt-[96px]"
        >
          <div className="titlefeature w-full flex flex-col gap-2 mb-6">
            <div className="subheading">
              {pageTranslations.sections.designGoals.title}
            </div>
            <h2 className="lightheading w-100 text-left lightgrey font-normal">
              {pageTranslations.sections.designGoals.heading}
              <span className="p-2 heading w-100 text-left font-regular">
                {pageTranslations.sections.designGoals.subheading}
              </span>
            </h2>
          </div>
        </div>
      ),
    },
  ];

  return (
    <main>
      <BigLines />
      <div className="w-full mt-124 px-180 mx-auto flex flex-col gap-y-[80px]">
        <ProjectHeader
          key={`${language}-header`}
          title={pageTranslations.title}
          subtitle={pageTranslations.subtitle}
          description={pageTranslations.description}
          team={pageTranslations.team}
          tools={pageTranslations.tools}
          timeline={pageTranslations.timeline}
          disciplines={pageTranslations.disciplines}
        />

        <div className="w-full flex flex-col gap-8 mx-auto">
          <motion.div
            key={`${language}-title`}
            className="title-infocrop flex lg:items-center space-x-4 lg:justify-center apanyan"
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 1.15 }}
          >
            <h1 className="font-regular aeonik text-4xl text-gray-700">
              {pageTranslations.title2}
            </h1>
          </motion.div>

          <motion.div
            key={`${language}-subheader`}
            className="sub-header flex flex-col mx-auto gap-y-2"
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 1.225 }}
          >
            <div className="text-l lightgrey lg:w-[700px] lg:justify-center lg:text-center text-justify">
              {pageTranslations.description2}
            </div>
          </motion.div>

          <motion.div
            key={`${language}-headerimage`}
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

          <div
            key={`${language}-main-content`}
            className="Main flex flex-col mx-auto gap-y-5 w-full lg:w-[860px]"
          >
            {headerVisible &&
              elements.map((el, index) => (
                <Element key={`${language}-${index}`}>{el.content}</Element>
              ))}
          </div>
          <div className="mt-16">
            <div className="HeroWrapper flex flex-col gap-y-4">
              <h2 className="w-full calisto text-3xl greytitle leading-10">
                {pageTranslations.next.title}
              </h2>

              <p>{pageTranslations.next.subtitle}</p>
              <hr />
              <ProjectSwitcher currentProjectTag={currentProjectTag} />
              <Footer />
            </div>
          </div>
        </div>
      </div>
      <BackToTop />
    </main>
  );
};

export default SendshortProject;
