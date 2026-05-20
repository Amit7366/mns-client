"use client";

import { MemberNoData } from "@/components/member/shared/member-ui";

export default function BettingNoData({ message }: { message: string }) {
  return <MemberNoData message={message} />;
}
