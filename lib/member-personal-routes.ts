export function fullLegalNameHref(locale: string): string {
  return `/${locale}/member/personal-info/full-legal-name`;
}

export function dateOfBirthHref(locale: string): string {
  return `/${locale}/member/personal-info/date-of-birth`;
}

export function phoneHref(locale: string): string {
  return `/${locale}/member/personal-info/phone`;
}

export function phoneVerifyHref(locale: string): string {
  return `/${locale}/member/personal-info/phone/verify`;
}

export function emailHref(locale: string): string {
  return `/${locale}/member/personal-info/email`;
}

export function emailVerifyHref(locale: string): string {
  return `/${locale}/member/personal-info/email/verify`;
}

export const PENDING_PHONE_KEY = "member-pending-phone";
export const PENDING_EMAIL_KEY = "member-pending-email";

/** Demo OTP for phone/email verification until API is connected. */
export const DEMO_VERIFICATION_CODE = "123456";
