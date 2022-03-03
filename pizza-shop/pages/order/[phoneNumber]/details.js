import React, { useState } from "react";
import styles from "../../styles/Order.module.css";

export default function details() {
  return (
    <Background
      wasClicked={true}
      setWasClicked={() => router.push("/")}
      children={
        <div
          className="flex flex-col gap-2 bg-amber-500 rounded-md p-2 items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <h1 id={styles.main_title}>details</h1>
        </div>
      }
    />
  );
}
