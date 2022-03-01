import React from "react";
import BackImg from "../public/images/backgroundTitle.jpg";
import Image from "next/image";

const divStyle =
  "flex justify-center items-center bg-lime-200 h-60 w-60 transition duration-300 hover:scale-105";

export default function Products({ setWasProductClicked }) {
  return (
    <div className="my-5 grid grid-cols-2 opacity-90 gap-1 bg-lime-300 p-2 shadow-xl shadow-lime-200 rounded-md transition duration-300 hover:opacity-100">
      <div className={divStyle} onClick={() => setWasProductClicked(true)}>
        <Image src={BackImg} width="200" height="200" />
      </div>
      <div className={divStyle} onClick={() => setWasProductClicked(true)}>
        <Image src={BackImg} width="200" height="200" />
      </div>
      <div className={divStyle} onClick={() => setWasProductClicked(true)}>
        <Image src={BackImg} width="200" height="200" />
      </div>
      <div className={divStyle} onClick={() => setWasProductClicked(true)}>
        <Image src={BackImg} width="200" height="200" />
      </div>
    </div>
  );
}
