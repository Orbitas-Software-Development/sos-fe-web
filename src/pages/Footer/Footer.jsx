import React from "react";
import Reveal from "../../components/Reveal";
import RevealWithoutDivEffect from "../../components/RevealWithoutDivEffect";
export default function Footer() {
  return (
    <footer class="footer p-10 border-t-4 border-gray-800 ">
      <div class="footer-content flex justify-center items-center">
        <div className="flex justify-around items-start">
          <div class="footer-logo visible mx-10">
            <div class="alien-realty-logo ">
              <RevealWithoutDivEffect>
                <img
                  src="orbitas_logo.png"
                  className="bg-slate-50  rounded-md p-2  border-red-500 border-2 "
                  alt="Alien Realty Logo"
                />{" "}
                <h3 className="text-2xl font-semibold text-slate-50 ">
                  Orbitas Software Development © 2024
                </h3>{" "}
              </RevealWithoutDivEffect>
            </div>
            <div class="orbitas-logo mt-1">
              <RevealWithoutDivEffect>
                <img
                  src="./logo-sos-name.png "
                  className="bg-slate-50  rounded-md p-2  border-red-500 border-2 "
                  alt="Orbitas Logo"
                  width={140}
                />
                <div className="mt-1">
                  <h3 className=" text-2xl font-semibold text-slate-50 ">
                    Solution of Services © 2024
                  </h3>
                </div>{" "}
              </RevealWithoutDivEffect>
            </div>
          </div>
          <div class="footer-info visible mx-10" id="email">
            <div class="footer-info-section">
              <ion-icon
                icon="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z'/></svg>"
                class="icon md"
                role="img"
              ></ion-icon>{" "}
              <Reveal>
                <h3 className="font-bold text-2xl text-red-500 ">Costa Rica</h3>{" "}
              </Reveal>
            </div>
            <div className="flex flex-col">
              <RevealWithoutDivEffect bgColor="--black">
                <a
                  className="text-lg text-gray-200"
                  href="mailto:soporte@orbitacr.com"
                >
                  alien@orbitacr.net
                </a>
              </RevealWithoutDivEffect>{" "}
              <RevealWithoutDivEffect bgColor="--black">
                <a
                  className="text-lg text-gray-200"
                  href="mailto:soporte@orbitacr.com"
                >
                  soporte@orbitacr.com
                </a>
              </RevealWithoutDivEffect>{" "}
              <RevealWithoutDivEffect bgColor="--black">
                <a
                  className="text-lg text-gray-200"
                  href="mailto:contact@orbitacr.com"
                >
                  contact@orbitacr.com
                </a>
              </RevealWithoutDivEffect>
            </div>
            <div class="footer-info-section">
              <ion-icon
                icon="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z'/></svg>"
                class="icon md"
                role="img"
              ></ion-icon>
              <Reveal>
                <h3 className="font-bold text-2xl text-red-500">Mexico</h3>
              </Reveal>
            </div>{" "}
            <RevealWithoutDivEffect bgColor="--black">
              <div>
                <a
                  className="text-lg text-gray-200"
                  href="mailto:contact_mx@orbitacr.com"
                >
                  contact_mx@orbitacr.com
                </a>
              </div>
            </RevealWithoutDivEffect>
            <div class="footer-info-section">
              <ion-icon
                icon="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z'/></svg>"
                class="icon md"
                role="img"
              ></ion-icon>{" "}
              <Reveal>
                <h3 className="font-bold text-2xl text-red-500">
                  United States
                </h3>
              </Reveal>
            </div>{" "}
            <RevealWithoutDivEffect bgColor="--black">
              <div>
                <a
                  className="text-lg text-gray-200"
                  href="mailto:contact_us@orbitacr.com"
                >
                  contact_us@orbitacr.com
                </a>
              </div>
            </RevealWithoutDivEffect>
          </div>
          <div class="footer-socials visible mx-10" id="socials">
            <Reveal>
              <h3 className="font-bold text-2xl text-red-500">
                Redes Sociales
              </h3>
            </Reveal>
            <a href="https://www.facebook.com/Orbitascr">
              <ion-icon
                icon="data:image/svg+xml;utf8,<svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z' fill-rule='evenodd'/></svg>"
                class="icon social-icon md"
                role="img"
              ></ion-icon>
            </a>
            <a href="https://www.linkedin.com/showcase/orbitas-software-development/">
              <ion-icon
                icon="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z'/></svg>"
                class="icon social-icon md"
                role="img"
              ></ion-icon>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
