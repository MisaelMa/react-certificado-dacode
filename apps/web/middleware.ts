import { NextRequest, NextResponse } from "next/server";

import { getToken } from "next-auth/jwt";
import path from "path";
import { withAuth } from "next-auth/middleware";

export const config = {
  matcher: [
    "/",
    "/login",
    "/top_rated/:path*",
    "/popular/:path*",
    "/now_playing/:path*",
    "/upcoming/:path*",
  ],
};

function isFileUrl(pathname: string) {
  const extensionRegex = /[^/\\&?]+\.\w{2,4}(?=([?&].*$|$))/;
  const extensionMatch = pathname.match(extensionRegex);
  return extensionMatch !== null || pathname.endsWith("site.webmanifest");
}

const routes = {
  recreando: ["/", "popular", "top_rated", "now_playing", "upcoming"],
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
  console.log("pathname", pathname);

  const url = req.nextUrl.clone();

  const token = await getToken({ req });
  const isAuth = !!token;
  const isAuthPage = req.nextUrl.pathname.startsWith("/login");
  console.log("isAuth", isAuth);
  if (!isAuth) {
    return NextResponse.next();
  }

  if (isAuthPage) {
    if (isAuth) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  if (!isAuth && routes.recreando.some((route) => pathname.startsWith(route))) {
    console.log("se intento ingresar a esta ruta ", url.pathname);
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
