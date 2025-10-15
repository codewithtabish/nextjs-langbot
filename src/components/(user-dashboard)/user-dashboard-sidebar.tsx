"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "../generals/(hero)/logo";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { dark } from "@clerk/themes";
import {
  ChatIcon,
  DashboardIcon,
  FilesIcon,
  PricingIcon,
} from "../dashboard/sidebar-icons";
import { Separator } from "../ui/separator";

export default function UserDashboardSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("DASHBOARD");
  const { theme } = useTheme();

  const menuItems = [
    {
      name: "DASHBOARD",
      icon: <DashboardIcon className="w-5 h-5" />,
      href: "/en/user/dashboard",
    },
    {
      name: "Chat Files",
      icon: <ChatIcon className="w-5 h-5" />,
      href: "/en/user/dashboard/chat-files",
    },
    {
      name: "Summary Files",
      icon: <FilesIcon className="w-5 h-5" />,
      href: "/en/user/dashboard/summary-files",
    },
    {
      name: "Pricing",
      icon: <PricingIcon className="w-5 h-5" />,
      href: "/en/user/dashboard/pricing",
    },
  ];

  return (
    <div
      className={`fixed left-0 top-0 h-screen border-r border-border shadow-xl flex flex-col overflow-hidden transition-all duration-300 ease-in-out
        ${isOpen ? "w-64" : "w-24"}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* ===== Gradient Grid Pattern (Light) ===== */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none opacity-100 dark:opacity-0 transition-opacity duration-700"
        style={{
          backgroundImage: `
            linear-gradient(0deg, rgba(34,197,94,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,197,94,0.05) 1px, transparent 1px),
            linear-gradient(135deg, rgba(59,130,246,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* ===== Gradient Grid Pattern (Dark) ===== */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-700"
        style={{
          backgroundImage: `
            linear-gradient(0deg, rgba(34,197,94,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px),
            linear-gradient(135deg, rgba(147,51,234,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* ===== Logo Section ===== */}
      <div className="flex items-center px-4 justify-center h-20 border-b border-border  ">
        <Link href="/en" className="flex items-center justify-center">
          <Logo />
        </Link>
      </div>
      <Separator/>

      {/* ===== Navigation Menu ===== */}
      <nav className="flex-1 flex flex-col gap-2 py-6 px-3 relative z-10">
        {menuItems.map((item) => {
          const isActive = active === item.name;
          return (
            <Link
              href={item.href}
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`relative flex items-center gap-4 p-3 rounded-lg transition-all duration-300 cursor-pointer group
                ${
                  isActive
                    ? ""
                    : "hover:bg-muted/30"
                }`}
            >
              {isActive && (
                <span className="absolute left-0 top-0 h-full w-1.5 bg-primary rounded-r-lg transition-all duration-300"></span>
              )}

              <div
                className={`flex items-center justify-center rounded-md w-10 h-10 transition-colors duration-300
                  ${
                    isActive
                      ? ""
                      : "bg-muted/40 group-hover:bg-primary/10"
                  }`}
              >
                {item.icon}
              </div>

              <span
                className={`text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  !isOpen ? "opacity-0 scale-0 w-0" : "opacity-100 scale-100"
                }`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* ===== Footer / User Button ===== */}
      <div className="p-5 border-t border-border flex justify-center items-center  ">
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              baseTheme: theme === "dark" ? dark : undefined,
              variables: {
                borderRadius: "0.75rem",
                colorPrimary: theme === "dark" ? "#22d3ee" : "#6366f1",
              },
            }}
          />
        </SignedIn>
      </div>
    </div>
  );
}
