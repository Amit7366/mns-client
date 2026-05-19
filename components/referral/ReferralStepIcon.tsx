type StepId = "invite" | "register" | "earn";

export default function ReferralStepIcon({ id }: { id: StepId }) {
  const box = "flex h-14 w-14 items-center justify-center rounded-xl bg-[#178358] sm:h-16 sm:w-16";

  switch (id) {
    case "invite":
      return (
        <div className={box}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
            <path
              d="M4 14l18-8-6 8 6 8-18-8z"
              fill="white"
              stroke="white"
              strokeWidth="1"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      );
    case "register":
      return (
        <div className={box}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
            <circle cx="14" cy="14" r="11" stroke="white" strokeWidth="2" />
            <path
              d="M8 14.5l4 4 8-9"
              stroke="white"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      );
    case "earn":
      return (
        <div className={`${box} rounded-[18px]`}>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden>
            <text x="15" y="21" textAnchor="middle" fill="white" fontSize="18" fontWeight="800">
              %
            </text>
          </svg>
        </div>
      );
  }
}
