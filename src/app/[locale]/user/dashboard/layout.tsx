"use client";

import React, { useState } from "react";
import UserDashboardSidebar from "@/components/(user-dashboard)/user-dashboard-sidebar";

const UserDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen w-screen overflow-hidden text-black dark:text-white transition-colors duration-500">
      {/* ===== Global Gradient Background Layer (Covers All Children & Scroll) ===== */}
      <div className="fixed inset-0 -z-10 h-full w-full">
        {/* Light Mode Pattern */}
        <div
          className="absolute inset-0 opacity-100 dark:opacity-0 transition-opacity duration-700"
          style={{
            backgroundColor: "#fafafa",
            backgroundImage: `
              linear-gradient(0deg, rgba(34,197,94,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34,197,94,0.05) 1px, transparent 1px),
              linear-gradient(135deg, rgba(59,130,246,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Dark Mode Pattern */}
        <div
          className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-700"
          style={{
            backgroundColor: "#0f0f0f",
            backgroundImage: `
              linear-gradient(0deg, rgba(34,197,94,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px),
              linear-gradient(135deg, rgba(147,51,234,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* ===== Sidebar (Hover Expand) ===== */}
      <div
        className="fixed top-0 left-0 h-screen z-20"
        onMouseEnter={() => setIsSidebarOpen(true)}
        onMouseLeave={() => setIsSidebarOpen(false)}
      >
        <UserDashboardSidebar />
      </div>

      {/* ===== Main Content Wrapper ===== */}
      <main
        className={`relative z-10 flex-1 min-h-screen overflow-y-auto transition-all duration-300 p-6 md:p-10 
          ${isSidebarOpen ? "ml-64" : "ml-24"}`}
      >
        {/* Ensure background applies even inside pages */}
        <div className="relative z-10 min-h-screen">
          {children}
        </div>
      </main>
    </div>
  );
};

export default UserDashboardLayout;
