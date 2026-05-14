"use client";

import { useCallback, useState } from "react";
import TopNavbar from "./TopNavbar";
import SideNavigation from "./SideNavigation";
import SiteFooter from "./SiteFooter";
import CurrencyLanguageModal from "./CurrencyLanguageModal";

import { useLocale } from "./LocaleProvider";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const { t } = useLocale();
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
    <div className="flex h-full min-h-0 flex-1 flex-col overflow-hidden bg-[#0a0a0a]">
      <TopNavbar onMenuClick={toggleSidebar} menuOpen={sidebarExpanded} />

      <div className="relative flex min-h-0 flex-1 overflow-hidden">
        {sidebarExpanded ? (
          <button
            type="button"
            aria-label={t.ui.closeMenu}
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

        <main className="min-w-0 flex-1 overflow-y-auto">
          {children}
          <SiteFooter />
        </main>
      </div>
      <CurrencyLanguageModal />
    </div>
  );
}
