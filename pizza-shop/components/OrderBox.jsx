import React from "react";

export default function OrderBox() {
  return (
    <div className="text-blueGray-600 bg-slate-100 shadow-xl shadow-cyan-500/50 border-blueGray-300 p-5 rounded border flex flex-col justify-center items-center">
      <h3>leave your number</h3>
      <input
        type="tel"
        placeholder="Phone Number"
        className="px-2 py-3 caret-blue-200 placeholder-blueGray-300 text-blueGray-600 relative rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full"
      />
      <input
        type="button"
        value="Order"
        className="my-1 px-2 py-3 rounded text-sm border border-blueGray-300 hover:scale-110 hover:bg-indigo-100 duration-300"
      />
    </div>
  );
}
