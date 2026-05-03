"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutGrid, Package, Users, BarChart2, LogOut } from "lucide-react";

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const links = [
    { href: "/pageAdminDashboarad", label: "Dashboard", icon: LayoutGrid },
    { href: "/pageAdminInventory", label: "Inventory", icon: Package },
    { href: "/pageAdminUserManagement", label: "Users", icon: Users },
    { href: "/pageAdminReports", label: "Reports", icon: BarChart2 },
  ];

  return (
    <div className="admin-sidebar">
      <div className="admin-sidebar-top">
        <div className="admin-sidebar-logo">
          <h1 className="admin-sidebar-title">
            Operations
          </h1>
          <p className="admin-sidebar-subtitle">Industrial Portal</p>
        </div>

        <nav className="admin-nav">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`admin-nav-link ${isActive ? "active" : ""}`}
              >
                <Icon size={18} />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="admin-sidebar-bottom">
        <button className="admin-signout" onClick={() => router.push("/pageLogin")}>
          <LogOut size={18} />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
}
