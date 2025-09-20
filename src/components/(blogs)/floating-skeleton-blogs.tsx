"use client";

import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export default function FloatingSkeletonBlogs() {
  const placeholders = Array.from({ length: 3 }); // ✅ 3 cards to match your grid

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 font-sans">
      {/* Header Skeleton */}
      <div className="text-center mb-12">
        <Skeleton className="h-8 w-60 mx-auto mb-4 rounded-lg" />
        <Skeleton className="h-5 w-96 max-w-full mx-auto rounded-lg" />
      </div>

      {/* Blog Cards Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {placeholders.map((_, i) => (
          <Card
            key={i}
            className="rounded-xl shadow-md overflow-hidden p-0"
          >
            <Skeleton className="w-full h-[200px]" />
            <CardContent className="px-5 py-4 space-y-3">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-24 mt-2" />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
