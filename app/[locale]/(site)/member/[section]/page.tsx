import { notFound } from "next/navigation";
import MemberSectionPage from "@/components/member/MemberSectionPage";
import { isMemberSection } from "@/lib/member-routes";

type PageProps = {
  params: Promise<{ section: string }>;
};

export default async function MemberSectionRoute({ params }: PageProps) {
  const { section } = await params;
  if (!isMemberSection(section)) notFound();
  return <MemberSectionPage section={section} />;
}
