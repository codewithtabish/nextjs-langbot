"use client"

import dynamic from "next/dynamic"

// ✅ Lazy load the actual WorkingSteps component
const WorkingSteps = dynamic(() => import("./working-setps"), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center py-20">
      <div className="w-12 h-12 rounded-full border-4 border-muted-foreground border-t-transparent animate-spin"></div>
    </div>
  ),
})

export default function WorkingStepsWrapper({ locale }: { locale: string }) {
  return <WorkingSteps locale={locale} />
}
