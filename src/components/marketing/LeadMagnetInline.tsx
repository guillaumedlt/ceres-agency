import Link from "next/link";

interface LeadMagnetInlineProps {
  title: string;
  subtitle: string;
  bullets: string[];
  ctaLabel?: string;
  /** URL de destination du CTA. Defaults to /contact. */
  ctaHref?: string;
  /** Accent color for the card. */
  color?: string;
}

export default function LeadMagnetInline({
  title,
  subtitle,
  bullets,
  ctaLabel = "Nous contacter",
  ctaHref = "/contact",
  color = "#FF7A59",
}: LeadMagnetInlineProps) {
  const isExternal = ctaHref.startsWith("http");
  const CtaTag: React.ElementType = isExternal ? "a" : Link;
  const ctaProps = isExternal
    ? { href: ctaHref, target: "_blank", rel: "noopener noreferrer" }
    : { href: ctaHref };

  return (
    <div
      className="rounded-2xl p-6 md:p-8 my-8"
      style={{
        background: `linear-gradient(135deg, ${color}10, ${color}05)`,
        border: `1px solid ${color}30`,
      }}
    >
      <div className="flex items-start gap-4">
        <div
          className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white"
          style={{ background: color }}
          aria-hidden="true"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-[15px] md:text-[17px] font-semibold text-[#111] leading-snug mb-1">
            {title}
          </h3>
          <p className="text-[12px] md:text-[13px] text-[#555] leading-[1.65]">
            {subtitle}
          </p>
        </div>
      </div>

      {bullets.length > 0 && (
        <ul className="mt-5 space-y-2">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2.5 text-[12px] md:text-[13px] text-[#555] leading-[1.6]">
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                className="shrink-0 mt-0.5"
                style={{ color }}
              >
                <path
                  d="M13.3 4.3L6 11.6L2.7 8.3"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6">
        <CtaTag
          {...ctaProps}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-[13px] font-medium transition-opacity hover:opacity-90"
          style={{ background: color }}
        >
          {ctaLabel}
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </CtaTag>
      </div>
    </div>
  );
}
