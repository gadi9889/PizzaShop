import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";
import OrderBox from "../components/OrderBox";

export default function Home() {
  return (
    <div className={styles.container}>
      <h2>Pizza Shop</h2>
      <div className="absolute bg-lime-300 h-96 w-screen top-0 left-0 -z-10" />
      <OrderBox />
    </div>
  );
}
