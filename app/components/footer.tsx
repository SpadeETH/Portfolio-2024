import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import sign from "../../public/images/Sign.png";
import ButtonHoverEffect from "./ButtonHoverEffect";

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
      className="footer flex flex-col justify-center lg:flex-row lg:ml-0 lg:mx-0 w-full"
    >
      <div className="flex flex-row justify-center lg:ml-0 mx-auto">
        <ButtonHoverEffect />
      </div>

      <div className="footersign w-full lg:max-w-[300px] flex flex-row justify-center lg:justify-end">
        <Image src={sign} alt="Logo Spade" width={205} height={49} />
      </div>
    </motion.div>
  );
};
export default Footer;
