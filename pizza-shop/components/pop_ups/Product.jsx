import React from "react";
import Image from "next/image";

export default function Product({ img, discription }) {
  return (
    <div
      className="z-20 opacity-100 bg-lime-100 p-3 rounded-lg"
      onClick={(e) => e.stopPropagation()}
    >
      <Image src={img} />
      <h3 className="text-gray-700 transition-all font-bold text-2xl hover:text-3xl">
        {discription}
      </h3>
    </div>
  );
}
