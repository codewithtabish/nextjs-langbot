"use client";

import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export default function FloatingSkeleton() {
  const placeholders = Array.from({ length: 6 });

  return (
    <section className="w-full px-4 py-16 font-sans">
      {/* Header Skeleton */}
      <div className="text-center mb-12">
        <Skeleton className="h-8 w-60 mx-auto mb-4 rounded-lg" />
        <Skeleton className="h-5 w-96 max-w-full mx-auto rounded-lg" />
      </div>

      {/* Blog Cards Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {placeholders.map((_, i) => (
          <Card
            key={i}
            className="rounded-xl shadow-md overflow-hidden p-0"
          >
            <Skeleton className="w-full h-[200px]" />
            <CardContent className="px-5 py-4 space-y-3">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-1/2" />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
