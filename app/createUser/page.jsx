"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

export default function CreateUser() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <div className="text-2xs py-2 pl-3">
        <p>
          <Link href={"/"}>Home</Link> /{" "}
          <span className="text-gray-300">Crea Utente</span>
        </p>
      </div>

      <section className="my-6">
        <form className="w-3/4 m-auto max-w-[600px]">

          <div className="pt-4 md:pt-6 pb-4 md:pb-6 md:flex">
            <label
              id="name"
              className="text-sm md:text-base w-[140px] font-bold py-2 shrink-0 block md:mr-4 md:text-right"
            >
              Sesso
            </label>
            <select
              id="tratamiento"
              className="bg-gray-100 border border-gray-200 w-full h-10 rounded-sm p-2 text-xs md:text-sm outline-none"
            >
              <option value="" disabled selected>
                Seleziona un sesso
              </option>
              <option value="sgn">Maschile</option>
              <option value="sgra">Femminile</option>
            </select>
          </div>

          <div className="pb-4 md:pb-6 md:flex">
            <label
              id="name"
              className="text-sm md:text-base w-[140px] font-bold py-2 shrink-0 block md:mr-4 md:text-right"
            >
              Nome
            </label>
            <input
              name="name"
              className="bg-gray-100 border border-gray-200 w-full h-10 rounded-sm p-2 text-xs md:text-sm outline-none"
              type="text"
            />
          </div>

          <div className="pb-4 md:pb-6 md:flex">
            <label
              id="surname"
              className="text-sm md:text-base w-[140px] font-bold py-2 shrink-0 block md:mr-4 md:text-right"
            >
              Cognome
            </label>
            <input
              name="surname"
              className="bg-gray-100 border border-gray-200 w-full h-10 rounded-sm p-2 text-xs md:text-sm outline-none"
              type="text"
            />
          </div>

          <div className="pb-4 md:pb-6 md:flex">
            <label
              id="birthdate"
              className="text-sm md:text-base w-[140px] font-bold py-2 shrink-0 block md:mr-4 md:text-right"
            >
              Data di nascita
            </label>
            <input
              name="birthdate"
              className="bg-gray-100 border border-gray-200 w-full h-10 rounded-sm p-2 text-xs md:text-sm outline-none"
              type="date"
            />
          </div>

          <div className="pb-4 md:pb-6 md:flex">
            <label
              id="email"
              className="text-sm md:text-base w-[140px] font-bold py-2 shrink-0 block md:mr-4 md:text-right"
            >
              Indirizzo email
            </label>
            <input
              name="email"
              className="bg-gray-100 border border-gray-200 w-full h-10 rounded-sm p-2 text-xs md:text-sm outline-none"
              type="text"
              placeholder="Inserisci la tua email"
            />
          </div>

          <div className="pb-8 md:pb-12 md:flex">
            <label
              id="password"
              className="text-sm md:text-base w-[140px] font-bold py-2 shrink-0 block md:mr-4 md:text-right"
            >
              Password
            </label>
            <div className="relative w-full">
              <input
                name="password"
                className="bg-gray-100 border border-gray-200 w-full h-10 rounded-sm p-2 text-xs md:text-sm outline-none"
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
            <button
              type="button"
              className="bg-blue-500 text-white w-full h-11 rounded-sm text-xs md:text-sm hover:bg-blue-500"
            >
              Crea con GOOGLE
            </button>
          </div>

          <div className="py-4 md:py-6 md:w-[444px] ml-auto">
            <button
              type="button"
              className="bg-black text-white w-full h-11 rounded-sm text-xs md:text-sm hover:bg-blue-500"
            >
              Crea account
            </button>
          </div>

          <hr className="border-t border-grey-200 my-2"></hr>

          <div className="md:w-[444px] ml-auto border-t-1 py-2 md:py-4 border-black">
            <Link href="/login">
              <p className="text-gray-800 text-sm md:text-base text-center hover:underline hover:text-blue-500">
                Hai già un account? Accedi qui
              </p>
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
}
