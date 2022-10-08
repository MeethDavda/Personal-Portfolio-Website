import React, { useState } from "react";
import "./Card.css";
import Tilt from "react-tilt";

function Card(props) {
  const [nft, setNft] = useState(false);
  function handle() {
    setNft(!nft);
  }

  return (
    <div className="flex justify-between  content-center flex-col mt-10 mx-10  mb-10">
      <Tilt
        className="Tilt ease-in-out"
        options={{ max: 25 }}
        // style={{ height: 250, width: 250 }}
      >
        <img
          src={props.image}
          alt="netflix"
          className="h-[199px] object-contain rounded-md image Tilt-inner ease-in-out"
        />{" "}
      </Tilt>

      <div className="text-slate-300 flex font-normal text-base mt-6 mb-8 w-[300px] card-content flex-col">
        {props.content}
        <br />
        <div className="mt-4 text-base font-medium text-white">
          TOOLS : {props.tools}
        </div>
      </div>
      <button className="text-white tracking-[0.06em] font-normal  w-auto m-auto py-2 px-5 rounded-sm">
        {!props.nft ? (
          <a href={props.Ref} target="_blank" rel="noreferrer">
            VIEW PROJECT
          </a>
        ) : (
          <p onClick={handle}>VIEW PROJECT</p>
        )}
      </button>
      {nft && (
        <div className="nft-image">
          <span onClick={handle}>&times;</span>
          <img src={props.image} alt="nft" />
        </div>
      )}
    </div>
  );
}

export default Card;
