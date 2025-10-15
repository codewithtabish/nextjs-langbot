"use client";

import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface TabItem {
  id: string;
  title: string;
  icon?: LucideIcon;
  color: string;
}

interface SmoothTabHeaderProps {
  items: TabItem[];
  defaultTabId?: string;
  className?: string;
  activeColor?: string;
  onChange?: (tabId: string) => void;
}

export default function SmoothTabHeader({
  items,
  defaultTabId = items[0].id,
  className,
  activeColor = "bg-[#1F9CFE]",
  onChange,
}: SmoothTabHeaderProps) {
  const [selected, setSelected] = React.useState<string>(defaultTabId);
  const [dimensions, setDimensions] = React.useState({ width: 0, left: 0 });

  const buttonRefs = React.useRef<Map<string, HTMLButtonElement>>(new Map());
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    const updateDimensions = () => {
      const selectedButton = buttonRefs.current.get(selected);
      const container = containerRef.current;
      if (selectedButton && container) {
        const rect = selectedButton.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        setDimensions({
          width: rect.width,
          left: rect.left - containerRect.left,
        });
      }
    };
    requestAnimationFrame(() => updateDimensions());
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [selected]);

  const handleTabClick = (tabId: string) => {
    setSelected(tabId);
    onChange?.(tabId);
  };

  const selectedItem = items.find((item) => item.id === selected);

  return (
    <div
      ref={containerRef}
      role="tablist"
      aria-label="Smooth tabs header"
      className={cn(
        "flex items-center justify-between gap-1 py-1 mt-6 relative",
        "bg-background/60 backdrop-blur border rounded-xl",
        "w-fit mx-auto px-2 shadow-sm",
        className
      )}
    >
      {/* Sliding Highlight Background */}
      <motion.div
        className={cn(
          "absolute rounded-lg z-[1]",
          selectedItem?.color || activeColor
        )}
        initial={false}
        animate={{
          width: dimensions.width - 8,
          x: dimensions.left + 4,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
        style={{ height: "calc(100% - 8px)", top: "4px" }}
      />

      <div className="flex gap-1 relative z-[2]">
        {items.map((item) => {
          const isSelected = selected === item.id;
          return (
            <motion.button
              key={item.id}
              ref={(el) => {
                if (el) buttonRefs.current.set(item.id, el);
                else buttonRefs.current.delete(item.id);
              }}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => handleTabClick(item.id)}
              className={cn(
                "relative flex items-center justify-center gap-1 rounded-lg px-3 py-1.5",
                "text-sm font-medium transition-all duration-300",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                isSelected
                  ? "text-white"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
            >
              {item.icon && <item.icon size={16} />}
              <span className="truncate">{item.title}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
