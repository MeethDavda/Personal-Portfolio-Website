import React from "react";
import "./Nav.css";
import { useScrollSection } from "react-scroll-section";

function Nav() {
  const work = useScrollSection("work");
  const about = useScrollSection("about");
  const contact = useScrollSection("contact");
  const home = useScrollSection("home");

  return (
    <nav className="h-24  flex flex-row justify-between w-full nav sticky top-0 z-10 ">
      <div
        className="text-white ml-2 "
        onClick={home.onClick}
        selected={home.selected}
      >
        <svg
          width="93"
          height="113"
          viewBox="0 0 93 113"
          fill="none"
          className="h-[80px] mt-3 cursor-pointer"
        >
          <path
            d="M4.59091 18.4545H14.9091L28.7273 52.1818H29.2727L43.0909 18.4545H53.4091V65H45.3182V33.0227H44.8864L32.0227 64.8636H25.9773L13.1136 32.9545H12.6818V65H4.59091V18.4545Z"
            fill="white"
          />
          <path
            d="M64.1065 54.0909H73.2543V89.8864C73.2377 93.1676 72.5417 95.9931 71.1662 98.3629C69.7907 100.716 67.8684 102.531 65.3991 103.807C62.9465 105.066 60.0878 105.696 56.8232 105.696C53.8402 105.696 51.1555 105.166 48.7692 104.105C46.3994 103.028 44.5185 101.437 43.1264 99.3324C41.7344 97.2277 41.0384 94.6094 41.0384 91.4773H50.2109C50.2275 92.8527 50.5258 94.0376 51.1058 95.032C51.7024 96.0263 52.5227 96.7886 53.5668 97.3189C54.6108 97.8492 55.8123 98.1143 57.1712 98.1143C58.6461 98.1143 59.8973 97.8078 60.9247 97.1946C61.9522 96.5649 62.7311 95.6368 63.2614 94.4105C63.8082 93.1842 64.09 91.6761 64.1065 89.8864V54.0909Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="text-white  text-lg mr-1">
        <ul className="flex flex-row mt-6 ">
          <li
            className="m-2 cursor-pointer nav-space "
            onClick={work.onClick}
            selected={work.selected}
          >
            PROJECTS
          </li>
          <li
            className="m-2 cursor-pointer nav-space "
            onClick={about.onClick}
            selected={about.selected}
          >
            ABOUT
          </li>
          <li
            className="m-2 cursor-pointer nav-space "
            onClick={contact.onClick}
            selected={contact.selected}
          >
            CONTACT
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
