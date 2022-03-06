import React, { useState } from "react";
import ProductBar from "../../components/ProductBar/ProductBar";
import styles from "../../styles/Order.module.css";
import BackgroundOrder from "../../public/images/BackgroundOrder.jpg";
import Background from "../../components/pop_ups/Background";
import { useRouter } from "next/router";

export default function PhoneNumber() {
  const [productBarArr, setProductBarArr] = useState([0, 0, 0, 0]);
  const [render, setRender] = useState(false);

  const router = useRouter();

  const updateProductArr = (id, action) => {
    productBarArr[id] += action;
    setProductBarArr(productBarArr);
    setRender(!render);
  };

  const saveOrder = async () => {
    let tel = sessionStorage.getItem("tel");
    let order = productBarArr.toString();
    await fetch("/api/customer", {
      body: JSON.stringify({ tel, order }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    router.push(`/order/${tel}/details`);
  };
  return (
    <Background
      wasClicked={true}
      setWasClicked={() => router.push("/")}
      children={
        <div
          className="flex flex-col gap-2 bg-amber-500 rounded-md p-2 items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <h1 id={styles.main_title}>Place Your Order</h1>
          <ProductBar
            id={0}
            setProductBarArr={updateProductArr}
            productBarArr={productBarArr}
          />
          <ProductBar
            id={1}
            setProductBarArr={updateProductArr}
            productBarArr={productBarArr}
          />
          <ProductBar
            id={2}
            setProductBarArr={updateProductArr}
            productBarArr={productBarArr}
          />
          <ProductBar
            id={3}
            setProductBarArr={updateProductArr}
            productBarArr={productBarArr}
          />
          <input
            type="submit"
            value="Order"
            className="bg-cyan-500 transition-all hover:shadow-md hover:shadow-cyan-500/50 rounded font-bold text-white px-2 py-1"
            onClick={() => saveOrder()}
          />
        </div>
      }
    />
  );
}
