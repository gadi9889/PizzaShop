import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Background from "../../components/pop_ups/Background";

export default function control() {
  let router = useRouter();

  const [orders, setOrders] = useState(
    JSON.parse(sessionStorage.getItem("orders"))
  );

  useEffect(async () => {
    await fetch("/api/customer", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setOrders([...data]));
  });

  const handleErase = async (tel) => {
    await fetch("/api/customer", {
      body: JSON.stringify({ tel }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => setOrders([...data]));
  };

  return (
    <Background
      wasClicked={true}
      setWasClicked={() => router.push("/")}
      children={
        <div>
          {orders.map((order, i) => {
            return (
              <div
                onClick={(e) => e.stopPropagation()}
                className="rounded p-5 bg-slate-200"
              >
                <h2>
                  Tel:
                  {order.tel}
                </h2>
                <div className="rounded p-5 bg-slate-300">
                  Order:
                  {order.order}
                </div>
                <input
                  onClick={() => handleErase(order.tel)}
                  type="submit"
                  value="-"
                  className="my-1 px-2 py-3 bg-lime-300 rounded text-sm border border-blueGray-300 hover:scale-110 hover:bg-lime-400 duration-300"
                />
              </div>
            );
          })}
        </div>
      }
    />
  );
}
