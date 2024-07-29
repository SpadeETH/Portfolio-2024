import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BottomTextContainer = () => {
  // Utilisation de useInView pour détecter la visibilité des éléments
  const { ref: envRef, inView: envInView } = useInView({
    triggerOnce: true, // Détecte une seule fois
    threshold: 0.5, // Déclenche quand l'élément est à 50% visible
  });

  const { ref: unvRef, inView: unvInView } = useInView({
    triggerOnce: true, // Détecte une seule fois
    threshold: 0.5, // Déclenche quand l'élément est à 50% visible
  });

  // Animation des éléments quand ils deviennent visibles
  useEffect(() => {
    if (envInView) {
      // Ajoutez ici les actions d'animation si nécessaire
    }
  }, [envInView]);

  useEffect(() => {
    if (unvInView) {
      // Ajoutez ici les actions d'animation si nécessaire
    }
  }, [unvInView]);

  return (
    <div className="bottomtextcontainer">
      <motion.div
        ref={envRef}
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        animate={{
          opacity: envInView ? 1 : 0,
          y: envInView ? 0 : 20,
          filter: envInView ? "blur(0px)" : "blur(8px)",
        }}
        transition={{ duration: 0.6 }}
        className="bloctext env"
      >
        <div className="title text-base lightgrey">
          Thriving in Collaborative Environments
        </div>
        <p className="paragraph text-base darkgrey">
          I thrive in collaborative environments where designers, developers,
          and stakeholders unite to innovate and solve challenges. With a
          background spanning design & development, I bridge gaps and ensure
          seamless communication across teams. I embrace teamwork for its role
          in continuous learning and personal growth, aiming to deliver
          transformative solutions by embracing diverse perspectives.
        </p>
      </motion.div>
      <motion.div
        ref={envRef}
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        animate={{
          opacity: envInView ? 1 : 0,
          y: envInView ? 0 : 20,
          filter: envInView ? "blur(0px)" : "blur(8px)",
        }}
        transition={{ duration: 0.6 }}
        className="bloctext env"
      >
        <div className="title text-base lightgrey">
          Unveiling Beauty and Solving Challenges{" "}
        </div>
        <div className="paragraph text-base darkgrey">
          I believe design is a tool that reveals and enhances the inherent
          beauty in our world. Beyond aesthetics, it crafts intuitive solutions
          for digital interfaces and physical products, addressing complex
          challenges with clarity and empathy. Design plays a crucial role in
          creating a brighter future by innovating thoughtfully and ensuring our
          solutions resonate deeply with users.
        </div>
      </motion.div>
    </div>
  );
};

export default BottomTextContainer;
