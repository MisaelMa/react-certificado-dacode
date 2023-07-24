import { Header } from "@ui/react";
import Image from "next/image";

import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <Header>
            <img
              src="/logo.png"
              width={100}
              height={100}
              alt="Picture of the author"
            />
          </Header>
          <main className=" bg-[#03067B]">
            <div className="mx-20 mt-10 mb-20">
              {["Now playing", "Popular", "Top rated", "Upcoming"].map(
                (text, index) => (
                  <a
                    href={`/${text.toLowerCase().replace(" ", "_")}`}
                    key={index}
                    className="bg-gradient-to-r from-blue-300 to-blue-600 text-white mx-4 px-6 py-1 rounded-3xl text-base"
                  >
                    {text}
                  </a>
                )
              )}
              <div className="mt-5 mb-5"></div>
              {children}
            </div>
          </main>
          <footer className="bg-[url('/footer.png')]  bg-cover h-72 bg-[#03067B] text-white flex   h-full">
            <div className="relative inset-x-0 bottom-0">
              <div className="mx-10 h-[19rem] pl-10 pt-20">
                <div className="flex ">
                  <div className="basis-4/5">
                    <h1 className="text-2xl">
                      We are coding the world of tomorrow_
                    </h1>
                    <p className="mt-5 text-sm w-[35rem]">
                      DaCodes es una de las mejores empresas de desarrollo de
                      software en México y LATAM. Lo que nos separa de los demás
                      es el nivel de involucramiento que tenemos en nuestros
                      proyectos y la pasión que tenemos por desarrollar
                      productos digitales de calidad mundial. Somos un equipo de
                      220+ dacoders especializados en la planeación, diseño,
                      desarrollo, implementación e innovación continua de
                      productos digitales disruptivos.
                    </p>
                  </div>
                  <div className="basis-1/5"></div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
