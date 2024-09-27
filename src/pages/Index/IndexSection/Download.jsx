import React from "react";
import Reveal from "../../../components/Reveal";
import RevealWithoutDivEffect from "../../../components/RevealWithoutDivEffect";
import { motion, useScroll } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagramSquare,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
export default function Download() {
  const fadeInRight = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: "0.5",
        delay: 0.5,
        ease: "easeInOut",
      },
    },
  };
  const fade = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: "0.5",
        delay: 0.5,
        ease: "easeInOut",
      },
    },
  };
  const fadeScale = {
    initial: {
      opacity: 0,
      scale: 0.5,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: "0.55",
        delay: 0.5,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="h-[100vh] w-[100vw]  bg-white-100  features">
      <div className="grid grid-cols-3 gap-3  border-4">
        <motion.div
          variants={fade}
          initial="initial"
          animate="animate"
          className="flex justify-items-end items-end  h-[100vh] "
        >
          <div className="flex justify-evenly items-center h-[100vh] w-full bg-white flex-col side-download-div shadow-r-lg   border-r-4">
            <motion.div
              variants={{
                ...fade,
                animate: {
                  opacity: 1,
                  transition: {
                    duration: "0.55",
                    delay: 0.7,
                    ease: "easeInOut",
                  },
                },
              }}
              initial="initial"
              animate="animate"
            >
              {/*  <img width={300} src="./logo-sos-name.png" alt="" />*/}
            </motion.div>{" "}
            <motion.div
              variants={{
                ...fadeInRight,
                animate: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: "0.55",
                    delay: 0.7,
                    ease: "easeInOut",
                  },
                },
              }}
              initial="initial"
              animate="animate"
            >
              <p className="text-6xl text-center font-extrabold typed-container   leading-tight">
                <marker className="bg-[#C2AE4A] px-2 rounded">
                  Descarga SOS
                </marker>
              </p>
            </motion.div>{" "}
            <motion.div variants={fade} initial="initial" animate="animate">
              <div className=" w-full flex justify-center items-center ">
                <div className="z-10 text-center flex flex-col justify-center items-center">
                  <motion.div
                    variants={{
                      ...fadeInRight,
                      animate: {
                        x: 0,
                        opacity: 1,
                        transition: {
                          duration: "0.55",
                          delay: 0.9,
                          ease: "easeInOut",
                        },
                      },
                    }}
                    initial="initial"
                    animate="animate"
                  >
                    {/*  <div className=" mt-6">
                     <p className="font-bold mx-4 mb-4 text-center text-2xl z-10 ">
                        <mark className="px-2 py-1 font-semibold rounded bg-[#C2AE4A]">
                          Síguenos
                        </mark>
                      </p>
                      <div className="flex ">
                        <div className="text-center mx-4 hover:animate-bounce text-xl">
                          <FontAwesomeIcon
                            icon={faInstagramSquare}
                            size="2xl"
                          />
                           <p className="font-bold">Instagram</p>
                    </div>
                    <div className="text-center mx-4 hover:animate-bounce  text-xl">
                      <FontAwesomeIcon icon={faFacebook} size="2xl" />{" "}
                      <p className="font-bold">Facebook</p>
                        </div>
                      </div>
                    </div>*/}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className=""></div>
        <div className=""></div>
      </div>
    </div>
  );
}
