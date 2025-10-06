"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function HeaderFallback() {
  return (
    <header className="fixed top-0 left-0 w-full z-30">
      <nav className="w-full">
        <div className="mx-auto mt-2 px-4 sm:px-6 lg:px-12 flex items-center justify-between py-3 lg:py-4 max-w-6xl rounded-2xl border shadow-sm bg-background/80 backdrop-blur-lg">
          {/* Left: Logo */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Skeleton className="h-8 w-24 rounded-md" />
          </div>

          {/* Center Nav (Desktop) */}
          <ul className="hidden lg:flex gap-8 text-sm">
            <Skeleton className="h-5 w-12" />
            <Skeleton className="h-5 w-12" />
            <Skeleton className="h-5 w-12" />
            <Skeleton className="h-5 w-12" />
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Skeleton className="h-10 w-24 rounded-lg" />
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
        </div>
      </nav>
    </header>
  );
}
