import { React, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Typed from "typed.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MotionGesture from "../../../components/Motion/MotionGesture";
import {
  faInstagramSquare,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import ThreeDButton from "../../../components/Button/ThreeDButton";

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
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
    <div className="home h-[100vh] w-[100vw] border-b-4 " id="home ">
      <div className="grid grid-cols-3 gap-3 ">
        <motion.div
          variants={fade}
          initial="initial"
          animate="animate"
          className="flex justify-items-end items-end  h-[100vh] "
        >
          <div className="flex justify-evenly items-center h-[100vh] w-full bg-white flex-col side-home-div shadow-r-lg  border-r-4 border-b-4">
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
              <img width={300} src="./logo-sos-name.png" alt="" />
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
                <marker className="bg-[#C2AE4A] px-2 rounded">E</marker>ncuentra
                los mejores servicios en{" "}
                <marker className="bg-[#C2AE4A] px-2 rounded">SOS</marker>
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
                    <div className=" mt-6">
                      <p className="font-bold mx-4 mb-4 text-center text-2xl z-10 ">
                        <mark className="px-2 py-1 font-semibold rounded bg-[#C2AE4A]">
                          Síguenos
                        </mark>
                      </p>
                      <div className="flex ">
                        <MotionGesture>
                          <div className="text-center mx-4  text-xl cursor-pointer">
                            <FontAwesomeIcon
                              icon={faInstagramSquare}
                              size="2xl"
                            />
                            <p className="font-bold">Instagram</p>
                          </div>
                        </MotionGesture>
                        <MotionGesture>
                          <div className="text-center mx-4 text-xl cursor-pointer">
                            <FontAwesomeIcon icon={faFacebook} size="2xl" />{" "}
                            <p className="font-bold">Facebook</p>
                          </div>
                        </MotionGesture>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        <div className=" flex justify-center items-center flex-col ">
          <div className="z-10">
            <motion.div
              variants={fadeScale}
              initial="initial"
              animate="animate"
            >
              <p className="font-bold mx-1 text-center text-4xl leading-tight">
                <mark className="px-2 py-1 text-white rounded bg-black">
                  Solución rápida y eficaz a cualquier problema
                </mark>
              </p>

              <div className="flex justify-center mt-6">
                <ThreeDButton text={"Registra tu negocio"} />
              </div>
            </motion.div>
          </div>{" "}
          <div className="absolute z-0 m-0 p-0">
            <motion.div
              variants={{
                ...fadeScale,
                animate: {
                  opacity: 1,
                  scale: 1,
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
              <img
                className="tranform-up-down"
                width={500}
                src="/Outer space-cuate.png"
                alt=""
              />
              {/*  <a href="https://storyset.com/rocket" className="text-[9px]">
                Rocket illustrations by Storyset
              </a>*/}
            </motion.div>
          </div>
        </div>
        <div className="w-full flex justify-end items-end"></div>
      </div>
    </div>
  );
}
