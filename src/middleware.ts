// middleware.ts
import { NextResponse } from 'next/server';
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isDashboardRoute = createRouteMatcher(['/dashboard(.*)']);

export default clerkMiddleware(async (auth, req) => {
  if (isDashboardRoute(req)) {
    const session = await auth(); // must await

    // 🚫 Not logged in → redirect to /en
    if (!session.userId) {
      return NextResponse.redirect(new URL('/en', req.url));
    }

    // 🚫 Logged in but not admin → also redirect
    const email = session.sessionClaims?.email as string | undefined;
    if (email !== 'kashisultan099@gmail.com') {
      return NextResponse.redirect(new URL('/en', req.url));
    }
  }

  // ✅ Otherwise continue
  return NextResponse.next();
});

export const config = {
  matcher: [
    // Important: make sure dashboard is matched!
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
