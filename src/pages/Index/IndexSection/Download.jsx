import { React, useState } from "react";
import Reveal from "../../../components/Reveal";
import RevealWithoutDivEffect from "../../../components/RevealWithoutDivEffect";
import { motion, useScroll } from "framer-motion";

import { faAndroid, faApple } from "@fortawesome/free-brands-svg-icons";

import TextButton from "../../../components/Button/TextButton";
import MotionGesture from "../../../components/Motion/MotionGesture";
export default function Download() {
  const [platformImage, setPlatformImage] = useState("");
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
    <div className="h-[100vh] w-[100vw]  bg-white-100  download">
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
                  Descargar SOS
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

        <div className=" flex justify-center items-center">
          <div className=" flex justify-center items-center flex-col ">
            {" "}
            <div className="z-10">
              <motion.div
                variants={fadeScale}
                initial="initial"
                animate="animate"
              >
                <p className="font-bold mx-1 my-6 text-center text-4xl leading-tight"></p>
                <div className="flex justify-center flex-col items-center">
                  <p className="text-5xl text-center font-extrabold typed-container   leading-tight">
                    <marker className="bg-black px-2 rounded text-white">
                      E
                    </marker>
                    scoje tu plataforma{" "}
                    <marker className="bg-black px-2 rounded text-white">
                      favorita
                    </marker>
                  </p>
                  <div
                    className="mt-6 w-[150px]"
                    onMouseEnter={() => setPlatformImage("/ios-logo.png")}
                  >
                    {/*https://es.vecteezy.com/arte-vectorial/21496368-ios-icono-logo-software-telefono-manzana-simbolo-con-nombre-negro-diseno-movil-vector-ilustracion*/}
                    <MotionGesture>
                      <TextButton
                        text={"iOS"}
                        bgColor="bg-white"
                        textColor=" bg-gray-300"
                        icon={faApple}
                      />
                    </MotionGesture>
                  </div>
                  <div
                    className=" mt-6 w-[150px]"
                    onMouseEnter={() => setPlatformImage("/android-logo.png")}
                  >
                    {/* }https://es.m.wikipedia.org/wiki/Archivo:Android_logo_2019_%28stacked%29.svg*/}
                    <MotionGesture>
                      <TextButton
                        text={"Android"}
                        bgColor="bg-green-500"
                        icon={faAndroid}
                      />
                    </MotionGesture>
                  </div>
                </div>
              </motion.div>
            </div>
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
                {/*  <a href="https://storyset.com/rocket" className="text-[9px]">
                Rocket illustrations by Storyset
              </a>*/}
              </motion.div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          {" "}
          <img
            className="tranform-up-down"
            width={550}
            src={platformImage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
