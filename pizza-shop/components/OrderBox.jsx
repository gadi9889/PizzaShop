import React from "react";
import { useRouter } from "next/router";

export default function OrderBox() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    e.stopPropagation();
    sessionStorage.setItem("tel", form["tel"].value);
    let tel = form["tel"].value;
    await fetch("/api/orderDetails", {
      body: JSON.stringify({ tel }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    }).then((res) => {
      if (res.status == 404) router.push(`/order/${tel}`);
      else router.push(`/order/${tel}/details`);
    });
  };

  return (
    <div className="text-blueGray-600 w-3/4 bg-slate-100 opacity-90 shadow-xl shadow-cyan-300 border-blueGray-300 p-5 rounded border flex flex-col justify-center items-center">
      <h3>leave your number</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="tel"
          name="tel"
          placeholder="Phone Number"
          pattern={"[0-9]{10}"}
          title="(only numbers 10 digits)"
          required
          className="px-2 py-3 text-center caret-blue-200 placeholder-blueGray-300 text-blueGray-600 relative rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full"
        />
        <input
          type="submit"
          value="Order"
          className="my-1 px-2 py-3 rounded text-sm border border-blueGray-300 hover:scale-110 hover:bg-indigo-100 duration-300"
        />
      </form>
    </div>
  );
}
