'use client'
import React, { useState } from 'react';
import { signIn } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";

export default function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchParams = useSearchParams();

  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Realizar la validación aquí, por ejemplo, verificar si el email y la contraseña no están vacíos
    if (!email || !password || !remember) {
      alert('Por favor ingresa un correo electrónico y una contraseña.');
      return;
    }
 try {
      setLoading(true);
      setEmail('');
setPassword('')
      const res = await signIn("credentials", {
        redirect: false,
        email: email,
        password: password,
         callbackUrl: '/' ,
      });

      setLoading(false);

      console.log(res);
      if (!res?.error) {
        //router.push(callbackUrl);
      } else {
        setError("invalid email or password");
      }
    } catch (error: any) {
      setLoading(false);
      setError(error);
    }
  } 

  return (
    <form className="w-[30rem] text-left" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-white text-sm font-bold mb-2">
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
        <label className="block text-white text-sm font-bold mb-2">
          Contraseña
        </label>
        <input
          className="appearance-none bg-[#5141EA] rounded-2xl w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex my-4">
        <input
          type="checkbox"
          className="h-5 w-5 text-purple-600 rounded mr-2"
          checked={remember}
          onChange={(e) => setRemember(e.target.checked)}
        />
        <label className="text-white text-sm" htmlFor="remember">
          Recordarme
        </label>
      </div>
      <button
        type="submit"
        className="bg-gradient-to-r from-blue-300 to-blue-600 text-white mx-4 ml-0 px-6 py-1 rounded-3xl text-base"
      >
        Crear Cuenta
      </button>
    </form>
  );
}

