import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <div className="flex flex-col justify-center text-center mt-14">
        <div className=" tracking-[0.04em] font-light text-[4.6rem] contact">
          CONTACT
        </div>
        <div className="text-white tracking-[1.5em] text-[0.68rem] -mt-16 font-normal contact-inn">
          APPROACH ME
        </div>
      </div>

      <div className="text-white flex flex-row justify-between content-center mt-20 flex-wrap text-center text-3xl links">
        <div className=" w-72 mx-auto my-8">
          SOCIALS
          <div className="text-white mt-4 cursor-pointer flex flex-row justify-center content-center">
            <a
              href="https://www.instagram.com/meethdavda/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon className="scale-150 my-5 mx-6" />
            </a>

            <a
              href="https://linkedin.com/in/meeth-davda-101685223"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon className="scale-150 my-5 mx-6" />
            </a>
            <a
              href="https://github.com/MeethDavda"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon className="scale-150 my-5 mx-6" />
            </a>
          </div>
        </div>
        <div className=" w-72 mx-auto my-4 flex flex-col ">
          EMAIL
          <p className="text-[1.2rem] font-extralight mt-4">
            mjdavda02@gmail.com
          </p>
        </div>
        <div className=" w-72 mx-auto my-5 flex flex-col ">
          FIVERR
          <a
            href="https://www.fiverr.com/s2/9d18f6a819 "
            className="text-[1.2rem] font-extralight mt-3"
            target="_blank"
            rel="noreferrer"
          >
            www.fiverr.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
