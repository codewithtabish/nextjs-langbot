"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function HeroFallback() {
  return (
    <main className="overflow-hidden">
      <section>
        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-32 lg:pt-48">
          <div className="relative z-10 mx-auto max-w-4xl text-center space-y-6">
            {/* Title Skeleton */}
            <Skeleton className="h-14 w-3/4 mx-auto rounded-md" />

            {/* Subtitle Skeleton */}
            <Skeleton className="h-6 w-2/3 mx-auto rounded-md" />
            <Skeleton className="h-6 w-1/2 mx-auto rounded-md" />

            {/* Form Skeleton */}
            <div className="mt-12 mx-auto max-w-sm">
              <Skeleton className="h-12 w-full rounded-lg" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
