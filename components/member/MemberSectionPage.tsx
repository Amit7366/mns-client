"use client";

import NotificationsPageContent from "@/components/member/notifications/NotificationsPageContent";
import MemberProfilePage from "@/components/member/profile/MemberProfilePage";
import {
  memberContainerWide,
  MEMBER_PAGE_BG,
  MemberEmptyState,
  MemberPageHeader,
} from "@/components/member/shared/member-ui";
import { getProfileMessages } from "@/lib/i18n/profile-messages";
import type { MemberSection } from "@/lib/member-routes";
import { isProfileTab } from "@/lib/member-profile-tabs";
import { useLocale } from "@/components/LocaleProvider";

export default function MemberSectionPage({ section }: { section: MemberSection }) {
  const { preferences } = useLocale();
  const p = getProfileMessages(preferences.locale);
  const base = `/${preferences.locale}`;

  if (section === "notification") {
    return <NotificationsPageContent />;
  }

  if (isProfileTab(section)) {
    return <MemberProfilePage activeTab={section} />;
  }

  return (
    <div className={MEMBER_PAGE_BG}>
      <MemberPageHeader
        wide
        title={p.sectionTitles[section]}
        backHref={base}
        backLabel={p.navLabel}
      />
      <div className={`${memberContainerWide} py-8 sm:py-10`}>
        <MemberEmptyState message={p.sectionPlaceholder} />
      </div>
    </div>
  );
}
