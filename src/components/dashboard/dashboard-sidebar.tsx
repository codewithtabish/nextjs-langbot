"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "../generals/(hero)/logo";

// Import your sidebar SVG icons
import { DashboardIcon, FilesIcon, ChatIcon, PricingIcon, TriggerIcon, SidebarLogo } from "./sidebar-icons";

export default function DashboardSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("DASHBOARD"); // default active item

  const menuItems = [
    { name: "DASHBOARD", icon: <DashboardIcon className="w-6 h-6" />, href: "/#" },
    { name: "Chat Files", icon: <ChatIcon className="w-6 h-6" />, href: "/en/dashboard/filebot" },
    { name: "Summarr Files", icon: <FilesIcon className="w-6 h-6" />, href: "/en/dashboard/summary" },
    { name: "Pricing", icon: <PricingIcon className="w-6 h-6" />, href: "/en/dashboard/pricing" },
    { name: "Trigger", icon: <TriggerIcon className="w-6 h-6" />, href: "/en/dashboard/trigger" },
  ];

  return (
    <div
      className={`h-screen bg-background/5 shadow-2xl border-r flex flex-col transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      }`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-center p-4 border-b border-gray-700">
        <span className="transition-all duration-500">
          <Logo/>
          {/* <DashboardIcon className='w-36 h-36'/> */}
          {/* <SidebarLogo cl /> */}
          {/* <SidebarLogo className="h-36 w-36"/> */}
        </span>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 flex flex-col gap-2 py-5 px-2">
        {menuItems.map((item) => {
          const isActive = active === item.name;
          return (
            <Link
              href={item.href}
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`relative flex items-center gap-4 p-3 rounded transition-all duration-300 cursor-pointer
                ${
                  isActive
                    ? "  font-semibold"
                    : ""
                }`}
            >
              {/* Highlight Animation */}
              {isActive && (
                <span className="absolute left-0 top-0 h-full w-1.5 bg-primary rounded-r transition-all duration-300"></span>
              )}

              {/* Icon */}
              <div
                className={`w-10 h-8 flex items-center justify-center rounded-full transition-colors duration-300 ${
                  isActive ? "bg-yellow-400 text-black" : "bg-white/10 "
                }`}
              >
                {item.icon}
              </div>

              {/* Text */}
              <span
                className={`font-medium text-sm whitespace-nowrap transition-all duration-300 ${
                  !isOpen && "hidden"
                }`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Footer / User Info */}
      <div className="p-4 flex items-center gap-3 border-t border-gray-700">
        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center ">
          U
        </div>
        <span
          className={`font-medium transition-all duration-300 ${!isOpen && "hidden"}`}
        >
          User Name
        </span>
      </div>
    </div>
  );
}
