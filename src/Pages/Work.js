import React from "react";
import Card from "../Components/Card";
import "./Work.css";
import { useTypewriter, Cursor, Typewriter } from "react-simple-typewriter";
import "react-simple-typewriter/dist/index";

function Work() {
  const { text } = useTypewriter({
    words: ["CLONES"],
    loop: 0,
    typeSpeed: 150,
    deleteSpeed: 100,
    delaySpeed: 900,
  });

  return (
    <div className="mt-20 flex flex-col">
      <div className="flex flex-col justify-center text-center work-out">
        <div className="text-white tracking-[0.11em] font-light text-8xl work ">
          WORK
        </div>
        <div className="text-white tracking-[0.53em] text-[0.68rem] -mt-14 font-normal work-inn">
          PROJECTS | FREELANCE | 3D
        </div>
      </div>

      <div className="flex  flex-wrap justify-around">
        <div className="text-white tracking-[0.2em] mt-20 text-sm font-semibold flex justify-center text-center w-full headings">
          <div>
            WEBSITE {text}
            <Cursor />
          </div>
        </div>
        <Card
          image={require("../Images/Netflix.png")}
          Ref="https://netflix-clone-1643a.web.app"
          content="A non-responsive Netflix clone with authentication functionality and Routing. Movies brought in from tmdb API. Authentication achieved using Firebase."
          tools=" React, React-router, HTML, TailwindCSS, Vanilla CSS, API’s, Firebase."
        />
        <Card
          image={require("../Images/Amazon.png")}
          Ref="https://clone-9bc6a.web.app"
          content="A non-responsive Amazon clone website  with add to card feature and complete authentication."
          tools=" React, React-router,  Context API, HTML, CSS, Firebase. "
        />

        <div className="text-white tracking-[0.2em] mt-28 text-md font-semibold flex justify-center text-center w-full headings">
          <span>
            3D AND {""}
            <Typewriter
              words={["NFT"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={150}
              deleteSpeed={100}
              delaySpeed={200}
            />
          </span>
        </div>
        <Card
          image={require("../Images/Car.png")}
          Ref="https://youtu.be/lKtrnEmS43Y"
          content="One of many 3D animation projects with complete scene and light building from scratch. A cinematic approach with visually apealing camera and light animation. "
          tools="Blender 2.92 software with Davinci resolve and Premiere Pro for post processing."
        />
        <Card
          content="A NFT project inspired from the 3D NFT space. This latest project built upon my curiosity of the NFT world. "
          image={require("../Images/NFT.png")}
          tools="blender"
          nft
        />

        <div className="text-white tracking-[0.2em] mt-28 text-lg font-semibold flex justify-center text-center w-full headings">
          <span>
            FREE
            <Typewriter
              words={["LANCE"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={150}
              deleteSpeed={100}
              delaySpeed={200}
            />
          </span>
        </div>
        <Card
          image={require("../Images/Perfume.png")}
          Ref="https://youtu.be/wF3bLds5ytM"
          content="A product animation inspired from film cinematography for a perfume based company client. Complete perfume bottle made from scratch, 3D props from internet, camera anitmation and sound."
          tools="Blender 2.92 software with Davinci resolve and Premiere Pro for post processing."
        />
        <Card
          image={require("../Images/zmr.jpeg")}
          Ref="https://youtu.be/BQUdxmAm2Z0"
          content="A product animation for a Robotics company with full customer satisfaction. Displaying the movements of the robot and design with sophisticated animations and modeling."
          tools="Blender 2.96, Davinci Resolve and Premiere Pro for post processing."
        />
      </div>
    </div>
  );
}

export default Work;
