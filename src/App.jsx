import React, { use, useState } from "react";
import { FaGithub } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "remixicon/fonts/remixicon.css";
function App() {
  let [showContent, SetShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          SetShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", (e) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;

      gsap.to(".landing .text", {
        x: `${xMove * 0.05}%`,
        ease: "power1.out",
        duration: 0.5,
      });
      gsap.to(".imagesdiv .sky", {
        x: `${xMove * 0.07}%`,
        ease: "power1.out",
        duration: 0.5,
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full">
          <div className="landing w-full h-screen  ">
            <nav className="w-full h-[10vh]  flex items-center justify-between px-10 bg-black opacity-60  fixed top-0 left-0 z-[100] ">
              <div className="logo text-white text-2xl font-bold cursor-pointer">
                VI | Rockstar
              </div>
              <div className="github-icon text-white flex items-center hover:text-gray-400 transition-all duration-300 cursor-pointer">
                <a
                  href="https://github.com/A-JA-Y/GTA6-Web"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="scale-[1.3]" />
                </a>
              </div>
            </nav>

            <div className="textdiv absolute top-0 left-0 text-[8rem] sm:text-[9.5rem] font-extrabold z-[80] scroll-snap-start flex flex-col items-center justify-center w-full h-screen leading-none opacity-80 text-white">
              <div className="text flex flex-col items-center justify-center">
                <h1 className="sm:pr-40">grand</h1>
                <h1 className="sm:pl-20">theft</h1>
                <h1 className="sm:pr-40">auto</h1>
              </div>
            </div>

            <div className="imagesdiv w-full h-screen relative overflow-hidden ">
              <img
                src="./sky.png"
                alt="Sky"
                className=" sky w-full h-full object-cover absolute scale-125"
              />
              <img
                src="./bg.png"
                alt="Background"
                className=" bg w-full h-full object-cover absolute"
              />
              <img
                src="./girlbg.png"
                alt="Background"
                className=" girl absolute  shadow-black drop-shadow-2xl sm:-bottom-[85%] left-1/2 -translate-x-1/2 z-[110] bottom-10 sm:scale-100 scale-125 "
              />
            </div>

            <div className="btmbar w-full h-[10vh] z-[200]  bg-gradient-to-t from-black to-transparent fixed bottom-0 left-0  py-14 px-10 ">
              <div className="flex items-center  gap-4 text-white ">
                <i className="ri-arrow-down-line sm:text-3xl"></i>
                <h3 className="font-[arial] hidden sm:block  text-xl ">
                  Scroll Down
                </h3>
              </div>

              <img
                src="./ps5.png"
                alt="PS5"
                className="absolute top-1/2 left-1/2 -translate-x-1/2  h-[60px] "
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
