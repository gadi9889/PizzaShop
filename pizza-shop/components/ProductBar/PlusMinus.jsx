import React, { useState } from "react";

export default function PlusMinus({ id, setProductBarArr, productBarArr }) {
  return (
    <div className="grid grid-flow-col gap-1 ">
      <input
        type="button"
        value="+"
        className="px-2 border-black  bg-slate-200 rounded hover:scale-110"
        onClick={() => setProductBarArr(id, 1)}
      />
      <p className="px-2 border border-black  bg-slate-200 rounded">
        {productBarArr[id]}
      </p>
      <input
        type="button"
        value="-"
        className="px-2 border-black  bg-slate-200 rounded hover:scale-110"
        onClick={() => {
          if (productBarArr[id] > 0) {
            setProductBarArr(id, -1);
          }
        }}
      />
    </div>
  );
}
