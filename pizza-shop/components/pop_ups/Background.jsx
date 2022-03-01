import React, { useState } from "react";

export default function Background({ children, wasClicked, setWasClicked }) {
  return (
    <>
      {wasClicked && (
        <div
          onClick={() => setWasClicked(false)}
          className="absolute transition-all z-10 top-0 left-0 w-screen h-screen bg-gray-700 bg-opacity-75 flex justify-center items-center"
        >
          {children}
        </div>
      )}
    </>
  );
}
