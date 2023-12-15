"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <div className="text-2xs py-2 pl-3">
        <p>
          <Link href={"/"}>Home</Link> /{" "}
          <span className="text-gray-300">Accedi</span>
        </p>
      </div>
      <section className="my-6">
        <form className="w-3/4 m-auto max-w-[600px]">
          <div className="pt-6 pb-4 md:flex">
            <label
              id="email"
              className="text-sm w-[140px] font-bold py-2 shrink-0 block md:mr-4 md:text-right"
            >
              Indirizzo email
            </label>
            <input
              name="email"
              className="bg-gray-100 border border-gray-200 w-full h-10 rounded-sm p-2 text-xs outline-none"
              type="text"
              placeholder="Inserisci la tua email"
            />
          </div>

          <div className="pb-7 md:flex">
            <label
              id="password"
              className="text-sm w-[140px] font-bold py-2 shrink-0 block md:mr-4 md:text-right"
            >
              Password
            </label>
            <div className="relative w-full">
              <input
                name="password"
                className="bg-gray-100 border border-gray-200 w-full h-10 rounded-sm p-2 text-xs outline-none"
                type={showPassword ? "text" : "password"}
                placeholder="Inserisci la tua password"
              />
              <FontAwesomeIcon
                className="absolute right-4 top-3 h-3 cursor-pointer"
                icon={showPassword ? faEye : faEyeSlash}
                onClick={togglePasswordVisibility}
              />
            </div>
          </div>

          <div className="md:w-[444px] ml-auto">
            <Link href="/forgot-password">
              <p className="text-gray-500 text-sm text-center hover:underline">
                Hai dimenticato la password?
              </p>
            </Link>
          </div>

          <div className="py-5 md:w-[444px] ml-auto">
            <button
              type="button"
              className="bg-black text-white w-full h-11 rounded-sm text-xs hover:bg-blue-500"
            >
              Accedi
            </button>
          </div>

          <hr className="border-t border-grey-200 m-4"></hr>

          <div className="md:w-[444px] ml-auto border-t-1 border-black">
            <Link href="/createUser">
              <p className="text-gray-800 text-sm text-center hover:underline">
                Non hai un account? Crea uno qui
              </p>
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
}
