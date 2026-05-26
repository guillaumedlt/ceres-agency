const defaultLogos = [
  "Alan",
  "TotalEnergies",
  "Spendesk",
  "Qonto",
  "Swile",
  "Kameleoon",
  "Beedeez",
  "Dougs",
  "Iroko",
  "Ringover",
];

const defaultStats = [
  { value: "250+", label: "missions livrees" },
  { value: "9 ans", label: "d'experience RevOps" },
  { value: "4.9/5", label: "satisfaction client" },
  { value: "Diamond", label: "Partner HubSpot" },
];

interface TrustStripProps {
  logos?: string[];
  stats?: { value: string; label: string }[];
  className?: string;
}

export default function TrustStrip({
  logos = defaultLogos,
  stats = defaultStats,
  className = "",
}: TrustStripProps) {
  return (
    <div className={`my-8 rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-6 ${className}`}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-5">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-[20px] md:text-[26px] font-bold text-[#111] tracking-[-0.02em] leading-none">
              {s.value}
            </div>
            <div className="text-[10px] md:text-[11px] text-[#999] mt-1.5 leading-tight">
              {s.label}
            </div>
          </div>
        ))}
      </div>
      <div className="pt-5 border-t border-[#F2F2F2]">
        <p className="text-[10px] uppercase tracking-wider text-[#999] font-semibold mb-3 text-center">
          Ils nous font confiance
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-5 md:gap-x-7 gap-y-2">
          {logos.map((l) => (
            <span
              key={l}
              className="text-[12px] md:text-[13px] text-[#666] font-medium opacity-65 hover:opacity-100 transition-opacity"
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
