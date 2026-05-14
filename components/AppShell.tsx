"use client";

import { useCallback, useState } from "react";
import TopNavbar from "./TopNavbar";
import SideNavigation from "./SideNavigation";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleSidebar = useCallback(() => {
    setSidebarExpanded((open) => !open);
  }, []);

  const openSidebar = useCallback(() => setSidebarExpanded(true), []);

  const handleRailItemClick = useCallback((id: string) => {
    setExpandedId(id);
    setSidebarExpanded(true);
  }, []);

  const toggleItem = useCallback((id: string) => {
    setExpandedId((current) => (current === id ? null : id));
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-[#0a0a0a]">
      <TopNavbar onMenuClick={toggleSidebar} menuOpen={sidebarExpanded} />

      <div className="relative flex min-h-0 flex-1">
        {sidebarExpanded ? (
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setSidebarExpanded(false)}
            className="absolute inset-0 z-10 bg-black/50 lg:hidden"
          />
        ) : null}

        <SideNavigation
          expanded={sidebarExpanded}
          expandedId={expandedId}
          onToggleItem={toggleItem}
          onItemClick={handleRailItemClick}
          onExpand={openSidebar}
        />

        <main className="min-w-0 flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
