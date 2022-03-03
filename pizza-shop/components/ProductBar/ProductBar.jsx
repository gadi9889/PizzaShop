import React from "react";
import PlusMinus from "./PlusMinus";

export default function ProductBar({ id, setProductBarArr, productBarArr }) {
  return (
    <div className="w-96 rounded-lg bg-amber-300/50 flex flex-row justify-between p-5">
      <p>P1</p>
      <PlusMinus
        id={id}
        setProductBarArr={setProductBarArr}
        productBarArr={productBarArr}
      />
    </div>
  );
}
