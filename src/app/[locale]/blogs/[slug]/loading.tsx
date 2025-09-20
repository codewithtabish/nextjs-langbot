"use client";

import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export default function BlogPageSkeleton() {
  const related = Array.from({ length: 3 });
  const paragraphs = Array.from({ length: 12 }); // longer content
  const links = Array.from({ length: 5 });

  return (
    <div className="w-full flex flex-col md:flex-row gap-10 py-20 px-4 md:px-8">
      {/* ---------- LEFT: Main Content ---------- */}
      <div className="flex-1 min-w-0 space-y-6">
        {/* Banner – full width */}
        <Skeleton className="w-full h-[350px] rounded-xl" />

        {/* Title + Short description */}
        <div className="space-y-4">
          <Skeleton className="h-9 w-4/5 rounded" />
          <Skeleton className="h-5 w-3/4 rounded" />
        </div>

        {/* Long content */}
        <div className="space-y-5 pt-6">
          {paragraphs.map((_, i) => (
            <Skeleton key={i} className="h-5 w-full rounded" />
          ))}
        </div>

        {/* Related Blogs */}
        <div className="pt-12 space-y-5">
          <Skeleton className="h-7 w-56 rounded" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((_, i) => (
              <Card key={i} className="overflow-hidden rounded-xl shadow">
                <Skeleton className="w-full h-40" />
                <CardContent className="p-4 space-y-3">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-2/3" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- RIGHT: Sidebar ---------- */}
      <aside className="w-full md:w-72 space-y-6">
        <Skeleton className="h-7 w-36 mx-auto rounded" />
        <div className="space-y-4">
          {links.map((_, i) => (
            <Skeleton key={i} className="h-5 w-full rounded" />
          ))}
        </div>
      </aside>
    </div>
  );
}
