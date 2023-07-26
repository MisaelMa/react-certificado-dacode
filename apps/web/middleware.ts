import { NextRequest, NextResponse } from "next/server";

import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import path from "path";
export const config = {
  matcher: ["/"],
};

function isFileUrl(pathname: string) {
  const extensionRegex = /[^/\\&?]+\.\w{2,4}(?=([?&].*$|$))/;
  const extensionMatch = pathname.match(extensionRegex);
  return extensionMatch !== null || pathname.endsWith("site.webmanifest");
}

const routes = {
  recreando: ["/"],
};
export default withAuth(
  async function middleware(req: NextRequest) {
    // return NextResponse
    return middlewareLocal(req);
  },
  {
    callbacks: {
      authorized({ token }) {
        return true; //token?.role === 'admin';
      },
    },
  }
);

async function middlewareLocal(req: NextRequest) {
  let { pathname, origin, search, locale } = req.nextUrl.clone();
  const url = req.nextUrl.clone();

  const token = await getToken({ req });
  const isAuth = !!token;
  const isAuthPage = req.nextUrl.pathname.startsWith("/login");
  if (isAuthPage) {
    if (isAuth) {
      return NextResponse.redirect(new URL("/", req.url));
    }
    return null;
  }

  if (!isAuth && routes.recreando.some((route) => pathname.startsWith(route))) {
    console.log("se intento ingresar a esta ruta ", url.pathname);
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
