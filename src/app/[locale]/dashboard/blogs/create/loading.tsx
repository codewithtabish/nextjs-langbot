"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex w-screen min-h-screen">
      {/* Sidebar skeleton */}
      <aside className="hidden md:flex flex-col w-64 border-r bg-background/5 p-4 space-y-6">
        {Array.from({ length: 7 }).map((_, i) => (
          <Skeleton key={i} className="h-8 w-full rounded-lg" />
        ))}
      </aside>

      {/* Main section */}
      <main className="flex-1 px-6 py-10 space-y-6">
        {/* Header row */}
        <div className="flex justify-between items-center">
          <Skeleton className="h-8 w-48 rounded-lg" />  {/* Page title */}
          <Skeleton className="h-10 w-32 rounded-md" />  {/* Create Blog button */}
        </div>

        {/* Table skeleton */}
        <div className="overflow-hidden border rounded-xl">
          {/* Table header */}
          <div className="grid grid-cols-3 bg-muted/20 p-4">
            <Skeleton className="h-6 w-28" />
            <Skeleton className="h-6 w-28" />
            <Skeleton className="h-6 w-28" />
          </div>

          {/* Table rows */}
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="grid grid-cols-3 items-center p-4 border-t"
            >
              <Skeleton className="h-6 w-60" />
              <Skeleton className="h-6 w-40" />
              <Skeleton className="h-6 w-24" />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
