export function AuthField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[14px] font-medium text-white">{label}</span>
      {children}
    </label>
  );
}

export function authInputClass(focused?: boolean) {
  return `w-full rounded-md border bg-[#1f1f1f] px-3 py-3 text-[14px] text-white outline-none placeholder:text-[#6b7280] ${
    focused ? "border-[#178358]" : "border-[#2a2a2a] focus:border-[#178358]"
  }`;
}
