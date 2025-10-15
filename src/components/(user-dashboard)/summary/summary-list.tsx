"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { FileText, FileType, CalendarDays } from "lucide-react";
import { ReactNode } from "react";
import { mockSummaries } from "@/constants/summary-file-data";
import { Badge } from "@/components/ui/badge";

export default function SummaryList() {
  return (
    <section className="bg-zinc-50 dark:bg-transparent py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {mockSummaries.map((file: any) => (
            <Card
              key={file.id}
              className="group shadow-md border border-zinc-200/50 dark:border-zinc-700/50 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-0"
            >
              <CardHeader className="relative p-0">
                <div className="relative w-full h-44 overflow-hidden rounded-t-xl">
                  <Image
                    src={file.previewImageUrl}
                    alt={file.fileName}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <CardDecorator>
                      <FileType className="size-5 text-zinc-700 dark:text-zinc-300" />
                    </CardDecorator>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-2">
              <h3 className=" line-clamp-2 break-words">
  {file.fileName}
</h3>


                <div className="flex items-center gap-2 mt-2 text-sm text-gray-500 dark:text-gray-400">
                  <FileText className="size-4" />
                  <span className="capitalize">{file.fileType}</span>
                </div>

                <div className="flex items-center gap-2 mt-1 text-sm text-gray-500 dark:text-gray-400">
                  <CalendarDays className="size-4" />
                  <span>
                    {new Date(file.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <Badge className="py-2 cursor-pointer my-4 " variant="outline" >
                    <p>
                        Read Summary
                    </p>
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

type CardDecoratorProps = {
  children: ReactNode;
};

const CardDecorator = ({ children }: CardDecoratorProps) => (
  <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-10 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:16px_16px] dark:opacity-50"
    />
    <div className="bg-background absolute inset-0 m-auto flex size-10 items-center justify-center border-l border-t rounded-full backdrop-blur-sm">
      {children}
    </div>
  </div>
);
