// app/(components)/HeaderWrapper.tsx
import prisma from "@/lib/prisma-client";
import { HeroHeader } from "./header";
import { auth, currentUser } from "@clerk/nextjs/server";

export default async function HeaderWrapper({ locale }: { locale: string }) {
  const { userId, sessionId, getToken } = await auth(); // ✅ await is correct

  if (!userId) {
    // Not logged in → just return header without DB work
    return <HeroHeader locale={locale} />;
  }

  // Get full user details (claims)
  const user = await currentUser();

  if (!user) {
    return <HeroHeader locale={locale} />;
  }

  // check if user exists in DB
  let dbUser = await prisma.user.findUnique({
    where: { clerkId: user.id },
  });

  // if not exist → create
  if (!dbUser) {
    dbUser = await prisma.user.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0]?.emailAddress ?? "",
        fullName: `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim(),
      },
    });
  }

  return <HeroHeader locale={locale} />;
}
