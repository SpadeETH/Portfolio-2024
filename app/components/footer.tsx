import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import ButtonHoverEffect from "../../app/components/ButtonHoverEffect";
import sign from "../../public/images/Sign.png";

const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 1 }}
      className="footer flex flex-col-reverse lg:flex-row"
    >
      <ButtonHoverEffect />
      <div className="footersign max-w-full">
        <Image src={sign} alt="Logo Spade" width={205} height={49} />
        <hr />
        <p className="lightgrey">Name And Signature</p>
      </div>
    </motion.div>
  );
};
export default Footer;
