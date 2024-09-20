import { React, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Typed from "typed.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  return (
    <div className="home h-[100vh] w-[100vw]" id="home">
      <div className="grid grid-cols-3 gap-3">
        <motion.div
          variants={fade}
          initial="initial"
          animate="animate"
          className="flex justify-items-end items-end  h-[100vh]"
        >
          <div className="flex justify-evenly items-center h-[100vh] w-full bg-white flex-col ">
            <img width={300} src="./orbitas_logo.png" alt="" />
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
              <p className="text-5xl text-center font-extrabold typed-container">
                Encuentra los mejores servicios en SOS
              </p>
            </motion.div>{" "}
            <motion.div variants={fade} initial="initial" animate="animate">
              <div className=" w-full flex justify-center items-center ">
                <div className="z-10 text-center flex flex-col justify-center items-center">
                  <p className="font-bold mx-4 text-center text-2xl">
                    <mark class="px-2 text-white rounded bg-[#b38f00]">
                      Solución rápida y eficaz a cualquier problema
                    </mark>
                  </p>

                  <div className="flex justify-center mt-6">
                    <ThreeDButton text={"Registra tu negocio"} />
                  </div>
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
                        <mark class="px-2 text-white rounded bg-[#b38f00]">
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
                    </div>
                  </motion.div>
                </div>
                <div className="absolute z-0 m-0 p-0">
                  <img
                    className="tranform-up-down"
                    width={500}
                    src="/Starman-bro.png"
                    alt=""
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        <div className=" flex justify-center items-center flex-col">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.5,
            }}
          >
            <img src="./sos_logo.png" alt="" />
          </motion.div>
        </div>
        <div className="w-full flex justify-end items-end"></div>
      </div>
    </div>
  );
}
