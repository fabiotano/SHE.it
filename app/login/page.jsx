"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <div className="text-2xs py-2 pl-3">
        <p>
          <Link href={'/'}>Home</Link> /{' '}
          <span className="text-gray-300">Accedi</span>
        </p>
      </div>
      <section className="my-6">
        <form className="w-3/4 m-auto max-w-[600px]">
          <div className="pt-6 pb-4 md:pt-9 md:pb-7 md:flex">
            <label
              id="email"
              className="text-sm md:text-base w-[140px] font-bold py-2 shrink-0 block md:mr-4 md:text-right"
            >
              Indirizzo email
            </label>
            <input
              name="email"
              className="bg-gray-100 border border-gray-200 w-full h-10 rounded-sm p-2 text-xs md:text-sm outline-none"
              type="email"
              placeholder="Inserisci la tua email"
              onChange={handleChange}
              value={form.email}
            />
          </div>

          <div className="pb-6 md:pb-9 md:flex">
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
                type={showPassword ? 'text' : 'password'}
                placeholder="Inserisci la tua password"
                onChange={handleChange}
                value={form.password}
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
              <p className="text-gray-500 text-sm md:text-base text-center hover:underline hover:text-blue-500">
                Hai dimenticato la password?
              </p>
            </Link>
          </div>

          <div className="py-5 md:py-8 md:w-[444px] ml-auto">
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-black text-white w-full h-11 rounded-sm text-xs md:text-sm hover:bg-blue-500"
            >
              Accedi
            </button>
          </div>

          <hr className="border-t border-grey-200 my-2"></hr>

          <div className="md:w-[444px] ml-auto border-t-1 py-3 md:py-6 border-black">
            <Link href="/createUser">
              <p className="text-gray-800 text-sm md:text-base text-center hover:underline hover:text-blue-500">
                Non hai un account? Crea uno qui
              </p>
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
}
