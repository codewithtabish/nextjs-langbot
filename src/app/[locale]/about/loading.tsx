'use client'

import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div className="w-screen px-4 py-10 md:px-6 md:py-20 flex flex-col items-center">
      {/* Back Button */}
      <div className="w-full max-w-6xl mb-10">
        <Skeleton className="h-10 w-32 rounded-xl" />
      </div>

      {/* Title & Subtitle */}
      <div className="w-full max-w-4xl text-center space-y-6 mb-16">
        <Skeleton className="h-12 w-3/4 mx-auto rounded-xl" />
        <Skeleton className="h-4 w-2/3 mx-auto rounded-xl" />
        <Skeleton className="h-4 w-1/2 mx-auto rounded-xl" />
      </div>

      {/* Mission & Vision */}
      <div className="grid gap-10 md:grid-cols-2 w-full max-w-6xl mb-20">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="space-y-4 p-6">
            <Skeleton className="h-10 w-10 mx-auto rounded-full" />
            <Skeleton className="h-6 w-1/2 mx-auto rounded-xl" />
            <Skeleton className="h-4 w-3/4 mx-auto rounded-xl" />
            <Skeleton className="h-4 w-2/3 mx-auto rounded-xl" />
            <Skeleton className="h-4 w-1/2 mx-auto rounded-xl" />
          </div>
        ))}
      </div>

      {/* Values */}
      <div className="w-full max-w-6xl text-center space-y-10">
        <Skeleton className="h-8 w-1/3 mx-auto rounded-xl" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="space-y-3 p-6">
              <Skeleton className="h-8 w-8 mx-auto rounded-full" />
              <Skeleton className="h-5 w-2/3 mx-auto rounded-xl" />
              <Skeleton className="h-4 w-3/4 mx-auto rounded-xl" />
              <Skeleton className="h-4 w-1/2 mx-auto rounded-xl" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
