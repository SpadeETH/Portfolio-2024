"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import BottomTextContainer from "../app/components/BottomTextContainer";
import ButtonHoverEffect from "../app/components/ButtonHoverEffect";
import Footer from "../app/components/footer";
import ProjectHolder from "./components/ProjectHolder";
import logospade from "../public/images/logospade.png";
import BigLines from "./biglines";

export default function Home() {
  return (
    <main>
      <BigLines></BigLines>
      <div className="w-100 mt-124 px-180">
        <div className="hero flex flex-col gap-y-5">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1 }}
            className="img"
          >
            <Image src={logospade} alt="Logo Spade" width={32} height={29} />
          </motion.div>
          <div className="title">
            <motion.h2
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.1 }}
              className=" calisto  text-3xl text-black leading-10	 "
            >
              <span className="underline decoration-2">Arthur Bossuyt</span>,
              Product Designer
            </motion.h2>

            <motion.h2
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="calisto text-3xl greytitle leading-10	"
            >
              Redefining solutions with passion.
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="calisto text-3xl greytitle leading-10	"
            >
              From Vision to Excellence.
            </motion.h2>
          </div>
          <div className="social-intro flex flex-col gap-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.4 }}
              className="links"
            >
              <ButtonHoverEffect />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="intro flex flex-col gap-y-3"
            >
              <motion.h3 className="title text-base lightgrey">
                Welcome to my portfolio
              </motion.h3>
              <motion.p className="paragraph text-base albra darkgrey">
                As a passionate product designer with 2 years of experience, I
                specialize in creating intuitive digital experiences. Through my
                journey from self-learning and university to freelancing, I have
                honed my skills in designing impactful solutions for various
                projects.
              </motion.p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.6 }}
            className="projects"
          >
            <ProjectHolder />
          </motion.div>
          <BottomTextContainer />
          <Footer />
        </div>
      </div>
    </main>
  );
}
