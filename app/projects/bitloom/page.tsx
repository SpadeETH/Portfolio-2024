"use client";
import {
  AccountBalanceWallet,
  AutoAwesomeMotion,
  GppGood,
  Insights,
  Layers,
  Restore,
  ShapeLine,
  Toll,
  TrendingUp,
  Tune,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import LanguageContext from "../../../app/components/context/LanguageContext";
import translations from "../../../lib/translations";

import { useInView } from "react-intersection-observer";
import BigLines from "../../biglines";
import ProjectHeader from "../../components/ProjectHeader";

import Coins from "../../../public/images/Bitloom/coins.png";
import Competitor from "../../../public/images/Bitloom/competitor.png";
import Design from "../../../public/images/Bitloom/design.png";
import Draft from "../../../public/images/Bitloom/draft.png";
import headerimage from "../../../public/images/Bitloom/header.png";
import Niche from "../../../public/images/Bitloom/niche.png";
import Opti from "../../../public/images/Bitloom/opti.png";
import Track from "../../../public/images/Bitloom/track.png";

import Footer from "@/app/components/footer";
import ProjectSwitcher from "@/app/components/ProjectSwitcher";
import BackToTop from "../../components/Backtotop";
// Define the Element component with animations
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

const BitloomProject: React.FC = () => {
  const iconfoissix: { [key: string]: React.ElementType } = {
    AutoAwesomeMotion: AutoAwesomeMotion,
    ShapeLine: ShapeLine,
    GppGood: GppGood,
    Insights: Insights,
    Toll: Toll,
    Restore: Restore,
    // Add other icons as needed
  };

  const iconMap: { [key: string]: React.ElementType } = {
    OrganizationIcon: AccountBalanceWallet,
    PriceIcon: TrendingUp,
    DiversityIcon: Layers,
    SimplificationIcon: Tune,
    // Add other icons as needed
  };
  const currentProjectTag = "bitloom";
  const { language } = useContext(LanguageContext);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const pageTranslations =
    translations[language as keyof typeof translations].bitloom;
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
      type: "Track Wallets",
      content: (
        <div
          key={`${language}-track-wallets`}
          className="w-full infocrop flex flex-col gap-6 mx-auto mt-[64px]"
        >
          <div className="title-infocrop flex flex-wrap lg:items-center gap-4 lg:justify-center">
            <h1 className="font-regular aeonik text-2xl lg:text-3xl text-gray-700">
              {pageTranslations.sections.trackWallet.title}
            </h1>
          </div>
          <div className="w-full sub-infocrop flex flex-col mx-auto items-center">
            <div className="text-l lightgrey lg:w-[700px] lg:justify-center lg:text-center">
              {pageTranslations.sections.trackWallet.description}
            </div>
          </div>
          <div className="img-infocrop">
            <Image src={Track} alt="" className="rounded-[3rem]	w-[860px]" />
          </div>
        </div>
      ),
    },
    {
      type: "Optimized DeFi Tracking",
      content: (
        <div
          key={`${language}-optimized-defi`}
          className="w-full infocrop flex flex-col gap-6 mx-auto mt-[128px] mb-[128px]"
        >
          <div className="title-infocrop flex flex-wrap lg:items-center gap-4 lg:justify-center">
            <h1 className="font-regular aeonik text-2xl lg:text-3xl text-gray-700">
              {pageTranslations.sections.optimizeDefi.title}
            </h1>
          </div>
          <div className="w-full sub-infocrop flex flex-col mx-auto items-center">
            <div className="text-l lightgrey lg:w-[700px] lg:justify-center lg:text-center">
              {pageTranslations.sections.optimizeDefi.description}
            </div>
          </div>
          <div className="img-infocrop">
            <Image src={Opti} alt="" className="rounded-[3rem]	w-[860px]" />
          </div>
        </div>
      ),
    },

    {
      type: "Primary Objective",
      content: (
        <div className="flex flex-col lg:flex-row">
          <div className="txt lg:w-7/12 flex flex-col gap-y-4 justify-center">
            <div className="subheading">
              {pageTranslations.sections.primaryObjective.title}
            </div>
            <div className="heading w-100">
              {pageTranslations.sections.primaryObjective.heading}
            </div>
            <div className="pheading w-100 segoe font-normal lightgrey">
              {pageTranslations.sections.primaryObjective.description1}
            </div>
            <div className="pheading w-100 segoe font-normal lightgrey">
              {pageTranslations.sections.primaryObjective.description2}
            </div>
            <hr />
            <div className="w-100 text-base font-medium lightgrey">
              {pageTranslations.sections.primaryObjective.descriptionBoldGrey}{" "}
              <span className="darkgrey">
                {pageTranslations.sections.primaryObjective.descriptionBold}
              </span>
            </div>
            <div className="pheading w-100 segoe font-normal lightgrey">
              {pageTranslations.sections.primaryObjective.description4}
            </div>
          </div>
          <Image src={Coins} alt="Icon" className="lg:w-5/12 lg ml-[0px]" />
        </div>
      ),
    },
    {
      type: "UXR",
      content: (
        <>
          <div className="flex flex-col items-center w-full mx-auto mt-[96px]">
            <div className="titlefeature w-full flex flex-col gap-2 mb-6">
              <div className="subheading">
                {pageTranslations.sections.uxr.feur}
              </div>
              <h2 className="heading w-100 text-left">
                {pageTranslations.sections.uxr.title}
              </h2>
              <hr />
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-[64px] lg:gap-6 w-full">
              {pageTranslations.sections.uxr.pillars
                .slice(0, 3)
                .map((pillar, index) => {
                  const IconComponent = iconfoissix[pillar.icon];
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-start w-full lg:w-1/3 lg:px-4 mb-8 lg:mb-0"
                    >
                      <div className="flex items-center mb-4 h-[48px]">
                        {IconComponent && (
                          <IconComponent style={{ marginRight: ".5rem" }} />
                        )}
                        <h3 className="text-base text-gray-800 segoe font-medium flex items-center">
                          {pillar.title}
                        </h3>
                      </div>
                      <p className="w-100 segoe font-normal lightgrey flex flex-col gap-2 mb-6">
                        {pillar.description}
                      </p>
                      <p className="font-medium segoe text-gray-800">
                        {pillar.objective}
                      </p>
                    </div>
                  );
                })}
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-[64px] lg:gap-6 w-full mt-8">
              {pageTranslations.sections.uxr.pillars
                .slice(3, 6)
                .map((pillar, index) => {
                  const IconComponent = iconfoissix[pillar.icon];
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-start w-full lg:w-1/3 lg:px-4 mb-8 lg:mb-0"
                    >
                      <div className="flex items-center mb-4 h-[48px]">
                        {IconComponent && (
                          <IconComponent style={{ marginRight: ".5rem" }} />
                        )}
                        <h3 className="text-base text-gray-800 segoe font-medium flex items-center">
                          {pillar.title}
                        </h3>
                      </div>
                      <p className="w-100 segoe font-normal lightgrey flex flex-col gap-2 mb-6">
                        {pillar.description}
                      </p>
                      <p className="font-medium segoe text-gray-800">
                        {pillar.objective}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
        </>
      ),
    },
    {
      type: "UXResearch",
      content: (
        <div
          key={`${language}-UXResearch`}
          className="flex flex-col items-center w-full mx-auto mt-[96px]"
        >
          <div className="titlefeature w-full flex flex-col gap-2 mb-6">
            <div className="subheading">
              {pageTranslations.sections.uxresearch.title}
            </div>
            <h2 className="heading w-100 text-left">
              {pageTranslations.sections.uxresearch.heading}
            </h2>
            <hr />
            <p className="font-regular segoe text-gray-800">
              {pageTranslations.sections.uxresearch.description}
            </p>
          </div>
          <div className="imgs flex flex-col lg:flex-row justify-between gap-8">
            <div className="w-45">
              <Image src={Competitor} alt="" className="w-100" />
            </div>
          </div>
        </div>
      ),
    },
    {
      type: "Research Methodology",
      content: (
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
            <div className="flex flex-col gap-y-2">
              <p className="font-regular segoe text-gray-800">
                {pageTranslations.sections.researchMethodology.description1}
              </p>

              <ul className="font-regular segoe text-gray-800 list-disc ml-[12px]">
                <li>
                  {pageTranslations.sections.researchMethodology.description2}
                </li>
                <li>
                  {pageTranslations.sections.researchMethodology.description3}
                </li>
              </ul>
              <p className="font-regular segoe text-gray-800">
                {pageTranslations.sections.researchMethodology.description4}
              </p>
            </div>
          </div>
          <div className="imgs flex flex-col lg:flex-row justify-between gap-8">
            <div className="w-45">
              <Image src={Niche} alt="" className="w-100" />
            </div>
          </div>
        </div>
      ),
    },
    {
      type: "Key Insights",
      content: (
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
            <p className="font-regular segoe text-gray-800">
              {pageTranslations.sections.keyInsights.description}
            </p>
          </div>
          <div className="steps flex flex-col gap-8">
            <div className="stepsrow1 flex flex-col lg:flex-row gap-8">
              <div className="step1 bg-zinc-100 px-8 py-6 w-full rounded-s-md gap-1 flex flex-col">
                {/* Utilisation de l'icône via iconMap */}
                {React.createElement(iconMap["OrganizationIcon"], {
                  className: "h-[24px] w-[24px] mt-[1px]",
                })}
                <h1 className="text-lg">
                  {pageTranslations.sections.keyInsights.pillars[0].title}
                </h1>
                <p className="text-sm">
                  {pageTranslations.sections.keyInsights.pillars[0].description}
                </p>
              </div>
              <div className="step2 bg-zinc-100 px-8 py-6 w-full rounded-s-md gap-1 flex flex-col">
                {/* Utilisation de l'icône via iconMap */}
                {React.createElement(iconMap["PriceIcon"], {
                  className: "h-[24px] w-[24px] mt-[1px]",
                })}
                <h1 className="text-lg">
                  {pageTranslations.sections.keyInsights.pillars[1].title}
                </h1>
                <p className="text-sm">
                  {pageTranslations.sections.keyInsights.pillars[1].description}
                </p>
              </div>
            </div>
            <div className="stepsrow2 flex flex-col lg:flex-row gap-8">
              <div className="step1 bg-zinc-100 px-8 py-6 w-full rounded-s-md gap-1 flex flex-col">
                {/* Utilisation de l'icône via iconMap */}
                {React.createElement(iconMap["DiversityIcon"], {
                  className: "h-[24px] w-[24px] mt-[1px]",
                })}
                <h1 className="text-lg">
                  {pageTranslations.sections.keyInsights.pillars[2].title}
                </h1>
                <p className="text-sm">
                  {pageTranslations.sections.keyInsights.pillars[2].description}
                </p>
              </div>
              <div className="step2 bg-zinc-100 px-8 py-6 w-full rounded-s-md gap-1 flex flex-col">
                {/* Utilisation de l'icône via iconMap */}
                {React.createElement(iconMap["SimplificationIcon"], {
                  className: "h-[24px] w-[24px] mt-[1px]",
                })}
                <h1 className="text-lg">
                  {pageTranslations.sections.keyInsights.pillars[3].title}
                </h1>
                <p className="text-sm">
                  {pageTranslations.sections.keyInsights.pillars[3].description}
                </p>
              </div>
            </div>
          </div>
        </div>
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
              <p className="font-regular segoe text-gray-800">
                {pageTranslations.sections.uxDesign.draftSessions.description}
              </p>
            </div>
          </div>
          <div className="img-infocrop">
            <Image src={Draft} alt="" className=" w-full" />
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
              <p className="font-regular segoe text-gray-800">
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
            <p className="font-regular segoe text-gray-800">
              {pageTranslations.sections.leconsPerspectives.description}
            </p>
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
                    <p className="text-sm">{insight.description}</p>
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
            className="title-infocrop flex lg:items-center space-x-4 lg:justify-center"
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
            <div className="text-l lightgrey lg:w-[700px] lg:justify-center lg:text-center">
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
            className="Main flex flex-col mx-auto gap-y-5 w-full lg:w-[860px] mt-124"
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
            </div>
          </div>
        </div>

        <Footer />
      </div>
      <BackToTop />
    </main>
  );
};

export default BitloomProject;
