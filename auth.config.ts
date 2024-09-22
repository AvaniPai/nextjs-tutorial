import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login', //TODO: change to home page later
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnWedding = nextUrl.pathname.startsWith('/wedding');
      if (isOnWedding) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/wedding', nextUrl));
      }
      return true;
    },
    redirect({url, baseUrl}){
      return "/wedding/en/home";
    }
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
