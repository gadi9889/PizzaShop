import React, { useEffect, useState } from "react";
import styles from "../../../styles/Order.module.css";
import Background from "../../../components/pop_ups/Background";
import { useRouter } from "next/router";

export default function Details() {
  let router = useRouter();

  const [order, setOrder] = useState("");

  useEffect(async () => {
    let tel = sessionStorage.getItem("tel");
    setOrder(
      await fetch("/api/orderDetails", {
        body: JSON.stringify({ tel }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      })
        .then((res) => res.json())
        .then((data) => {
          return data.order;
        })
        .catch((err) => console.error(err))
    );
  }, []);

  const handleErase = async (tel) => {
    await fetch("/api/customer", {
      body: JSON.stringify({ tel }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    }).then(() => router.push("/"));
  };

  return (
    <Background
      wasClicked={true}
      setWasClicked={() => router.push("/")}
      children={
        <div
          className="flex flex-col gap-2 bg-amber-500 rounded-md p-4 items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <h1 id={styles.main_title}>details</h1>
          <h2>Tel:{sessionStorage.getItem("tel")}</h2>
          <div className="rounded bg-orange-300 p-5">
            <h2>Order details</h2>
            <h2>{order}</h2>
          </div>
          <input
            onClick={() => handleErase(sessionStorage.getItem("tel"))}
            type="submit"
            value="Cancel"
            className="my-1 px-2 py-1 bg-lime-400 rounded text-sm border border-blueGray-300 hover:scale-110 hover:bg-lime-500 duration-300"
          />
        </div>
      }
    />
  );
}
