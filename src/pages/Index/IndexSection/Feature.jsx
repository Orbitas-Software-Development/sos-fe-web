import React from "react";
import Reveal from "../../../components/Reveal";
import RevealWithoutDivEffect from "../../../components/RevealWithoutDivEffect";
export default function Feature() {
  return (
    <div className="h-auto w-[100vw] flex justify-start items-center flex-col bg-white-100  py-[100px] features">
      <div className="flex justify-center items-center ">
        <Reveal>
          <div class="ten">
            <h1 className="">Beneficios</h1>
          </div>
        </Reveal>
      </div>
      <div className="flex w-full h-full bg-[#C2AE4A]">
        <div className="flex-1  flex justify-center items-center">
          <div className="w-[300px] ">
            <RevealWithoutDivEffect>
              <img src="Service 24_7-rafiki.png" alt="" />{" "}
              {/* https://storyset.com/illustration/service-247/rafiki*/}
            </RevealWithoutDivEffect>
            <Reveal>
              <div>
                <h1 className="text-center text-2xl font-bold ">
                  Servicio las 24 horas
                </h1>{" "}
              </div>
            </Reveal>{" "}
            <Reveal>
              <div>
                <p className="text-xl text-center">
                  Puedes contactar a un técnico cuando lo necesites
                </p>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="flex-1  flex justify-center items-center ">
          <div className="w-[300px] ">
            <RevealWithoutDivEffect>
              <img src="Manage money-pana.png" alt="" />{" "}
              {/*https://storyset.com/illustration/manage-money/pana*/}
            </RevealWithoutDivEffect>
            <Reveal>
              <div>
                <h1 className="text-center text-2xl font-bold">
                  Servicio de calidad al mejor precio
                </h1>{" "}
              </div>{" "}
            </Reveal>{" "}
            <Reveal>
              <div>
                {" "}
                <p className="text-xl text-center">
                  Encontraras a los mejores tecnicos por un precio increible
                </p>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="flex-1  flex justify-center items-center ">
          <div className="w-[300px] ">
            <RevealWithoutDivEffect>
              <img src="Performance overview-amico.png" alt="" />
              {/*https://storyset.com/illustration/fast-loading/rafiki*/}
            </RevealWithoutDivEffect>
            <Reveal>
              <div>
                <h1 className="text-center text-2xl font-bold">
                  Rapidéz y eficiencia en el servicio
                </h1>
              </div>{" "}
            </Reveal>{" "}
            <Reveal>
              <div>
                <p className="text-xl text-center">
                  La mejor solución en el menor tiempo
                </p>
              </div>
            </Reveal>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
