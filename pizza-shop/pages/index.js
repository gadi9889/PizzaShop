import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import OrderBox from "../components/OrderBox";
import Products from "../components/Products";
import Background from "../components/pop_ups/Background";
import BackImg from "../public/images/backgroundTitle.jpg";
import Product from "../components/pop_ups/Product";
import Alert from "../components/Alert";

export default function Home() {
  const [wasProductClicked, setWasProductClicked] = useState(false);
  return (
    <div className={styles.container}>
      <h1 id={styles.main_title}>Pizza Shop</h1>
      <div className="absolute bg-lime-500 h-80 w-screen top-0 left-0 -z-10" />
      <OrderBox />
      <Products setWasProductClicked={setWasProductClicked} />
      <Background
        setWasClicked={setWasProductClicked}
        wasClicked={wasProductClicked}
        children={<Product img={BackImg} discription={"Img"} />}
      />
      <div className="absolute bg-red-500 h-80 w-screen bottom-0 left-0 -z-10" />
    </div>
  );
}
