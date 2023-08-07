"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { signIn } from "next-auth/react";

export default function Form() {
  const [email, setEmail] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const route = useRouter();
  const searchParams = useSearchParams();

  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Realizar la validación aquí, por ejemplo, verificar si el email y la contraseña no están vacíos
    if (!email || !password || !remember) {
      alert(
        "Por favor ingresa un correo electrónico y una contraseña o acepto los terminos y condiciones"
      );
      return;
    }
    if (password.length < 8) {
      setIsPasswordValid(false);
      return;
    }
    try {
      setLoading(true);

      const res = await signIn("credentials", {
        redirect: true,
        email: email,
        password: password,
        callbackUrl: "/",
      });
      setEmail("");
      setPassword("");
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setError(error);
    }
  };

  return (
    <form className="w-[30rem] text-left" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-white">
          Correo electrónico
        </label>
        <input
          className="appearance-none bg-[#5141EA] rounded-2xl w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-bold text-white">
          Contraseña
        </label>
        <input
          className={`appearance-none bg-[#5141EA] rounded-2xl w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline ${
            !isPasswordValid ? "border-2 border-red-500" : ""
          }`}
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {!isPasswordValid && (
          <p className="text-xs italic text-red-500">
            La contraseña debe tener al menos 8 caracteres
          </p>
        )}
      </div>
      <div className="flex my-4">
        <input
          type="checkbox"
          className="w-5 h-5 mr-2 text-purple-600 rounded"
          checked={remember}
          onChange={(e) => setRemember(e.target.checked)}
        />
        <label className="text-sm text-white" htmlFor="remember">
          He leido y acepto los terminos y condiciones
        </label>
      </div>
      <button
        type="submit"
        disabled={!email || !password || !remember}
        className={` ${
          !email || !password || !remember
            ? "bg-gray-300  focus:outline-none"
            : " bg-gradient-to-r from-blue-300 to-blue-600 "
        } text-white mx-4 ml-0 px-6 py-1 rounded-3xl text-base`}
      >
        Crear Cuenta
      </button>
    </form>
  );
}
