import Link from "next/link";
import { getPersonalInfoMessages } from "@/lib/i18n/personal-info-messages";
import type { Locale } from "@/lib/locale";

export default function PrivacyNotice({ locale }: { locale: Locale }) {
  const p = getPersonalInfoMessages(locale);

  return (
    <p className="text-[12px] leading-relaxed text-[#9ca3af] sm:text-[13px]">
      {p.privacyText}
      <Link href={`/${locale}/support`} className="text-[#178358] underline hover:text-[#1a9664]">
        {p.contactCs}
      </Link>
    </p>
  );
}
