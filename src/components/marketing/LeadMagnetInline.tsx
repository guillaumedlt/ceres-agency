"use client";

import { useState } from "react";

interface LeadMagnetInlineProps {
  title: string;
  subtitle: string;
  bullets: string[];
  ctaLabel?: string;
  successMessage?: string;
  /** HubSpot form ID. Defaults to the contact form. */
  formId?: string;
  /** Additional context sent to HubSpot (which guide / which page). */
  sourcePage?: string;
  /** Accent color for the card. */
  color?: string;
}

const PORTAL_ID = "2703445";
const DEFAULT_FORM_ID = "c7a632d2-943b-4245-ac61-9b00953b63e0";

export default function LeadMagnetInline({
  title,
  subtitle,
  bullets,
  ctaLabel = "Recevoir par email",
  successMessage = "Merci ! Vous recevez le document dans les 2 minutes.",
  formId = DEFAULT_FORM_ID,
  sourcePage,
  color = "#FF7A59",
}: LeadMagnetInlineProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setErrorMsg("Email invalide");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${formId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fields: [
              { name: "email", value: email },
              ...(sourcePage
                ? [{ name: "lead_magnet_source", value: sourcePage }]
                : []),
            ],
            context: {
              pageUri: typeof window !== "undefined" ? window.location.href : "",
              pageName: sourcePage || (typeof document !== "undefined" ? document.title : ""),
            },
          }),
        }
      );

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || `HTTP ${res.status}`);
      }
      setStatus("ok");
    } catch (err) {
      setStatus("error");
      setErrorMsg("Une erreur est survenue. Reessayez ou contactez-nous directement.");
    }
  }

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

      <form onSubmit={handleSubmit} className="mt-5 flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          required
          placeholder="Votre email professionnel"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          disabled={status === "loading" || status === "ok"}
          className="flex-1 px-4 py-3 rounded-lg border border-[#E8E8E8] bg-white text-[14px] text-[#111] placeholder:text-[#999] focus:outline-none focus:border-[#111] disabled:opacity-60"
          aria-label="Votre email professionnel"
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "ok"}
          className="px-5 py-3 rounded-lg text-white text-[13px] font-medium transition-opacity disabled:opacity-60 hover:opacity-90"
          style={{ background: color }}
        >
          {status === "loading" ? "Envoi..." : status === "ok" ? "Envoye" : ctaLabel}
        </button>
      </form>

      {status === "ok" && (
        <p className="mt-3 text-[12px] text-[#22C55E] font-medium flex items-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13.3 4.3L6 11.6L2.7 8.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
          {successMessage}
        </p>
      )}
      {status === "error" && (
        <p className="mt-3 text-[12px] text-[#EF4444]">{errorMsg}</p>
      )}

      <p className="mt-3 text-[10px] text-[#999]">
        Pas de spam. Vos donnees ne sont jamais revendues. Desinscription en 1 clic.
      </p>
    </div>
  );
}
