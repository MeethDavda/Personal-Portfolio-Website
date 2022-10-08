import React from "react";
import "./About.css";

function About() {
  return (
    <div>
      <div className="flex flex-col justify-center text-center mt-5">
        <div className=" tracking-[0.11em] font-light text-[5rem] about">
          ABOUT
        </div>
        <div className="text-white tracking-[0.95em] text-[0.68rem] -mt-16 font-normal about-inn">
          ABOUT MYSELF
        </div>
      </div>

      <div className="text-white flex flex-col justify-center content-center mt-20 mx-10 font-light text-md content">
        <p>
          Hi, my name is Meeth J Davda, you can call me Meeth. Based in
          Bangalore, India, I am a full time Undergraduate Engineering student
          majoring in Computer Science, interested in design and technologies.
        </p>
        <p className="mt-4">
          I'm detail-oriented, hard-working with a focus on delivering quality
          results on time and learning new ways to improve myself and my work.
        </p>
      </div>
    </div>
  );
}

export default About;
