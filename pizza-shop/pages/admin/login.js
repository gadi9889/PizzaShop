import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Background from "../../components/pop_ups/Background";

const styleDiv =
  "flex flex-col justify-center items-center text-center text-blueGray-600 w-1/4 bg-slate-100 opacity-90 shadow-xl shadow-cyan-300 border-blueGray-300 p-5 rounded border";

const styleInput =
  "px-2 py-3 text-center caret-blue-200 placeholder-blueGray-300 text-blueGray-600 relative rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full";

export default function Admin() {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const form = e.currentTarget;
    console.log(process.env.PASSWORD);
    if (form["username"].value == "123456") {
      if (form["password"].value == "123456") {
        router.push("/admin/control");
      }
    }
  };

  let router = useRouter();

  useEffect(async () => {
    await fetch("/api/customer", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        sessionStorage.setItem("orders", JSON.stringify([...data] || "none"));
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <Background
      wasClicked={true}
      setWasClicked={() => router.push("/")}
      children={
        <div onClick={(e) => e.stopPropagation()} className={styleDiv}>
          <form onSubmit={handleSubmit}>
            <label>username</label>
            <input
              type="text"
              name="username"
              required
              className={styleInput}
            />
            <label>password</label>
            <input
              type="password"
              name="password"
              required
              className={styleInput}
            />
            <input
              type="submit"
              value="Login"
              className="my-1 px-2 py-3 rounded text-sm border border-blueGray-300 hover:scale-110 hover:bg-indigo-100 duration-300"
            />
          </form>
        </div>
      }
    />
  );
}
