import { MemberPageHeader } from "@/components/member/shared/member-ui";

export { BackIcon } from "@/components/member/shared/member-ui";

export default function MemberPersonalHeader({
  title,
  backHref,
  backLabel,
}: {
  title: string;
  backHref: string;
  backLabel: string;
}) {
  return <MemberPageHeader title={title} backHref={backHref} backLabel={backLabel} />;
}
