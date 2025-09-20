"use client";

import { Skeleton } from "@/components/ui/skeleton";
// import DashboardSidebar from "@/components/dashboard/dashboard-sidebar";

export default function Loading() {
  return (
    <div className="flex w-screen min-h-screen">
      {/* Sidebar skeleton */}
      {/* <div className="h-screen w-20 lg:w-64 bg-background/5 border-r shadow-2xl" /> */}

      {/* Main content skeleton */}
      <main className="flex-1 py-20 px-10 space-y-10">
        {/* Cards grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-40 w-full rounded-xl" />
          ))}
        </div>

        {/* Chart skeleton */}
        <Skeleton className="h-80 w-full rounded-xl" />

        {/* Bento grid skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-48 w-full rounded-xl" />
          ))}
        </div>
      </main>
    </div>
  );
}
