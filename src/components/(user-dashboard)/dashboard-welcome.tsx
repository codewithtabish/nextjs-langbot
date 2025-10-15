// components/dashboard/WelcomeBack.tsx
"use client";

import { useUser } from "@clerk/nextjs";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function WelcomeBack() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <Card className="mb-6 shadow-md rounded-2xl">
        <CardContent className="flex items-center justify-between p-6">
          <div className="space-y-2">
            <Skeleton className="h-6 w-40" />
            <Skeleton className="h-4 w-60" />
          </div>
          <Skeleton className="w-12 h-12 rounded-full" />
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="mb-6 border p-2 rounded-2xl">
      <CardContent className="flex items-center  justify-between  flex-col">
        <div className="flex justify-center items-center  flex-col">
          <h2 className="text-2xl font-bold">
            Welcome back, {user?.firstName || "Guest"} 👋
          </h2>
          <p className="text-muted-foreground">
            Here’s a quick look at your activity.
          </p>
        </div>
      
      </CardContent>
    </div>
  );
}
