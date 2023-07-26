import { Header } from "@ui/react";
import Image from "next/image";

import "./globals.css";
import { NextAuthProvider } from "./providers";
import { getServerSession } from "next-auth";

import { authOptions } from "../common/lib/auth";
import { ButtonList } from "./components/Button";
import Dropdown from "./components/Dropdown";
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const { user } = session || {};

  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          <div className="flex flex-col min-h-screen">
            <Header>
              <div className="flex w-[8rem] ">
                <img src="/logo.png" alt="Imagen" className="ml-16 " />
              </div>

              <Dropdown></Dropdown>
            </Header>
            <main className=" bg-[#03067B]">
              <div className="mx-20 mt-10 mb-20">
                {user &&
                  ["Now playing", "Popular", "Top rated", "Upcoming"].map(
                    (text, index) => (
                      <ButtonList
                        href={`/${text.toLowerCase().replace(" ", "_")}`}
                        index={index}
                        key={index}
                        text={text}
                      />
                    )
                  )}
                <div className="mt-5 mb-5"></div>
                {children}
              </div>
            </main>
            <footer className="bg-[url('/footer.png')]  bg-cover h-72 bg-[#03067B] text-white flex   h-full">
              <div className="relative inset-x-0 bottom-0">
                <div className="mx-10 h-[19rem] pl-10 pt-10">
                  <div className="flex ">
                    <div className="basis-4/5">
                      <h1 className="text-2xl">
                        We are coding the world of tomorrow_
                      </h1>
                      <p className="mt-5 text-sm w-[35rem]">
                        DaCodes es una de las mejores empresas de desarrollo de
                        software en México y LATAM. Lo que nos separa de los
                        demás es el nivel de involucramiento que tenemos en
                        nuestros proyectos y la pasión que tenemos por
                        desarrollar productos digitales de calidad mundial.
                        Somos un equipo de 220+ dacoders especializados en la
                        planeación, diseño, desarrollo, implementación e
                        innovación continua de productos digitales disruptivos.
                      </p>
                      <img
                        src="/grupo.png"
                        alt=""
                        className="mt-2"
                        style={{ maxWidth: "60%" }}
                      />
                    </div>
                    <div className="basis-1/5"></div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </NextAuthProvider>
      </body>
    </html>
  );
}
