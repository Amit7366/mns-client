export const PROFILE_TABS = ["personal-info", "login-security", "verification"] as const;

export type ProfileTabId = (typeof PROFILE_TABS)[number];

export function isProfileTab(section: string): section is ProfileTabId {
  return (PROFILE_TABS as readonly string[]).includes(section);
}

export function changePasswordHref(locale: string): string {
  return `/${locale}/member/login-security/change-password`;
}

export function documentsHref(locale: string): string {
  return `/${locale}/member/verification/documents`;
}
