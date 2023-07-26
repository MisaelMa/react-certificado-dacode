import type { NextAuthOptions, RequestInternal } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { generateSession } from "../services/session.service";
export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      // @ts-ignore
      async authorize(
        credentials: any,
        req: Pick<RequestInternal, "body" | "query" | "headers" | "method">
      ) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }
        const token = await generateSession();
        console.log("token", token);

        /*   const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !(await compare(credentials.password, user.password))) {
          return null;
        } */

        return {
          id: 1, // user.id,
          email: credentials?.email, // user.email,
          name: "amir", // user.name, */
          randomKey: "Hey cool",
          guestSessionId: token.guest_session_id,
        };
      },
    }),
  ],
  callbacks: {
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          randomKey: token.randomKey,
          guestSessionId: token.guestSessionId,
        },
      };
    },
    jwt: ({ token, user }) => {
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id,
          randomKey: u.randomKey,
          guestSessionId: token.guestSessionId,
        };
      }
      return token;
    },
  },
};
