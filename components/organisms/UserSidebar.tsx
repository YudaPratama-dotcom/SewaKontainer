"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Home, LayoutGrid, FileText, Settings, HelpCircle, Plus, LogOut } from "lucide-react";

export function UserSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const links = [
    { href: "/", label: "Home", icon: Home },
    { href: "/user/dashboard", label: "Dashboard", icon: LayoutGrid },
    { href: "/user/payments", label: "Payment History", icon: FileText },
    { href: "/user/settings", label: "Settings", icon: Settings },
    { href: "/user/support", label: "Help", icon: HelpCircle },
  ];

  return (
    <div className="user-sidebar">
      <nav className="user-nav">
        {links.map((link) => {
          const Icon = link.icon;
          // Simple check for active link, modify according to your route structure
          const isActive = pathname === link.href || (pathname === '/' && link.href === '/') ? false : pathname?.includes(link.href);
          
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`user-nav-link ${pathname === link.href ? "active" : ""}`}
            >
              <Icon size={18} />
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="user-sidebar-bottom">
        <button className="user-btn-new">
          <Plus size={16} />
          New Rental
        </button>
        
        <div style={{display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px'}}>
          <button className="user-sidebar-action">
            <HelpCircle size={18} />
            Support
          </button>
          
          <button className="user-sidebar-action" onClick={() => router.push("/pageLogin")}>
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
