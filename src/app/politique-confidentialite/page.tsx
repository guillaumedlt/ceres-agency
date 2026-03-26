import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialite",
  description: "Politique de confidentialite et de protection des donnees personnelles du site ceres.agency.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16">
      <div className="max-w-[700px] mx-auto px-6">
        <nav className="mb-8 flex items-center gap-2 text-[12px] text-[#999]">
          <Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span>
          <span className="text-[#666]">Politique de confidentialite</span>
        </nav>

        <h1 className="text-[28px] font-semibold text-[#111] tracking-[-0.02em] mb-8">Politique de confidentialite</h1>

        <div className="space-y-8 text-[13px] text-[#555] leading-[1.75]">
          <section>
            <h2 className="text-[15px] font-semibold text-[#111] mb-3">1. Responsable du traitement</h2>
            <p>Le responsable du traitement des donnees personnelles collectees sur le site ceres.agency est :</p>
            <div className="mt-3 rounded-xl bg-[#FAFAFA] border border-[#F2F2F2] p-4 space-y-1">
              <p className="font-semibold text-[#111]">Ceres Growth Marketing</p>
              <p>128 rue La Boetie, 75008 Paris, France</p>
              <p>Email : guillaume@ceres.agency</p>
              <p>Representant : Guillaume Delachet</p>
            </div>
          </section>

          <section>
            <h2 className="text-[15px] font-semibold text-[#111] mb-3">2. Donnees collectees</h2>
            <p>Nous collectons les donnees suivantes lorsque vous utilisez nos formulaires ou naviguez sur le site :</p>
            <div className="mt-3 space-y-2">
              {[
                { type: "Formulaires de contact et guides", data: "Prenom, nom, adresse email professionnelle, nom de l\u2019entreprise, numero de telephone (optionnel), message" },
                { type: "Navigation sur le site", data: "Adresse IP, type de navigateur, pages visitees, duree de visite, source de trafic (via cookies Google Analytics 4)" },
                { type: "Cookies HubSpot", data: "Identifiant de tracking HubSpot (hutk), historique des pages visitees, formulaires soumis, interactions avec les emails" },
              ].map((d) => (
                <div key={d.type} className="rounded-xl bg-[#FAFAFA] border border-[#F2F2F2] p-3">
                  <p className="text-[12px] font-semibold text-[#111] mb-1">{d.type}</p>
                  <p className="text-[11px] text-[#777]">{d.data}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-[15px] font-semibold text-[#111] mb-3">3. Finalites du traitement</h2>
            <p>Vos donnees sont collectees pour les finalites suivantes :</p>
            <ul className="mt-2 space-y-1.5">
              {[
                "Repondre a vos demandes de contact ou de renseignement",
                "Vous envoyer les guides et ressources telechargees",
                "Vous envoyer des informations commerciales relatives a nos services (avec votre consentement)",
                "Ameliorer notre site et nos services grace a l\u2019analyse d\u2019audience",
                "Assurer le suivi de la relation commerciale dans notre CRM (HubSpot)",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-2 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-[15px] font-semibold text-[#111] mb-3">4. Base legale du traitement</h2>
            <div className="space-y-2">
              {[
                { base: "Consentement", desc: "Pour l\u2019envoi de communications commerciales et le depot de cookies analytiques" },
                { base: "Interet legitime", desc: "Pour l\u2019analyse d\u2019audience et l\u2019amelioration de nos services" },
                { base: "Execution contractuelle", desc: "Pour le traitement de vos demandes de contact et la fourniture de nos services" },
              ].map((b) => (
                <div key={b.base} className="flex items-start gap-3">
                  <span className="text-[12px] font-semibold text-[#111] w-[140px] shrink-0">{b.base}</span>
                  <span className="text-[12px] text-[#777]">{b.desc}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-[15px] font-semibold text-[#111] mb-3">5. Destinataires des donnees</h2>
            <p>Vos donnees sont accessibles aux personnes suivantes :</p>
            <ul className="mt-2 space-y-1.5">
              {[
                "L\u2019equipe Ceres Growth Marketing (usage interne)",
                "HubSpot Inc. (CRM et marketing automation, hebergement EU)",
                "Google LLC (Google Analytics 4, mesure d\u2019audience)",
                "Vercel Inc. (hebergement du site)",
              ].map((d) => (
                <li key={d} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-2 shrink-0" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
            <p className="mt-2">Vos donnees ne sont jamais vendues a des tiers. Les sous-traitants mentionnes ci-dessus traitent vos donnees uniquement pour notre compte et conformement a nos instructions.</p>
          </section>

          <section>
            <h2 className="text-[15px] font-semibold text-[#111] mb-3">6. Duree de conservation</h2>
            <div className="space-y-2">
              {[
                { type: "Donnees de contact (formulaires)", duree: "3 ans a compter du dernier contact" },
                { type: "Donnees de navigation (cookies)", duree: "13 mois maximum" },
                { type: "Donnees clients", duree: "Duree de la relation contractuelle + 5 ans (obligations legales)" },
              ].map((d) => (
                <div key={d.type} className="flex items-start gap-3">
                  <span className="text-[12px] font-semibold text-[#111] w-[200px] shrink-0">{d.type}</span>
                  <span className="text-[12px] text-[#777]">{d.duree}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-[15px] font-semibold text-[#111] mb-3">7. Vos droits</h2>
            <p>Conformement au RGPD, vous disposez des droits suivants :</p>
            <ul className="mt-2 space-y-1.5">
              {[
                "Droit d\u2019acces : obtenir la confirmation que des donnees vous concernant sont traitees et en obtenir une copie",
                "Droit de rectification : corriger des donnees inexactes ou incompletes",
                "Droit de suppression : demander l\u2019effacement de vos donnees",
                "Droit a la portabilite : recevoir vos donnees dans un format structure et lisible",
                "Droit d\u2019opposition : vous opposer au traitement de vos donnees pour des motifs legitimes",
                "Droit de retrait du consentement : retirer votre consentement a tout moment pour les traitements bases sur le consentement",
              ].map((d) => (
                <li key={d} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-2 shrink-0" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">Pour exercer vos droits, envoyez un email a <strong className="text-[#111]">guillaume@ceres.agency</strong> en precisant votre demande et en joignant un justificatif d&apos;identite. Nous repondrons dans un delai de 30 jours.</p>
            <p className="mt-2">Vous pouvez egalement introduire une reclamation aupres de la CNIL (Commission Nationale de l&apos;Informatique et des Libertes) : <span className="text-[#4B5EFC]">www.cnil.fr</span></p>
          </section>

          <section>
            <h2 className="text-[15px] font-semibold text-[#111] mb-3">8. Cookies</h2>
            <p>Le site utilise les cookies suivants :</p>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full text-[11px]">
                <thead>
                  <tr className="border-b border-[#F2F2F2]">
                    <th className="text-left py-2 pr-3 text-[#999] font-medium">Cookie</th>
                    <th className="text-left py-2 pr-3 text-[#999] font-medium">Fournisseur</th>
                    <th className="text-left py-2 pr-3 text-[#999] font-medium">Finalite</th>
                    <th className="text-left py-2 text-[#999] font-medium">Duree</th>
                  </tr>
                </thead>
                <tbody className="text-[#555]">
                  {[
                    { cookie: "_ga, _ga_*", provider: "Google", purpose: "Mesure d\u2019audience (GA4)", duration: "13 mois" },
                    { cookie: "__hssc, __hssrc, __hstc", provider: "HubSpot", purpose: "Tracking visiteur, session", duration: "13 mois" },
                    { cookie: "hubspotutk", provider: "HubSpot", purpose: "Identification visiteur", duration: "13 mois" },
                    { cookie: "messagesUtk", provider: "HubSpot", purpose: "Chat et formulaires", duration: "13 mois" },
                  ].map((c) => (
                    <tr key={c.cookie} className="border-b border-[#F9F9F9]">
                      <td className="py-2 pr-3 font-mono text-[#111]">{c.cookie}</td>
                      <td className="py-2 pr-3">{c.provider}</td>
                      <td className="py-2 pr-3">{c.purpose}</td>
                      <td className="py-2">{c.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3">Vous pouvez configurer votre navigateur pour refuser les cookies ou etre alerte lors de leur depot. La suppression des cookies peut affecter votre experience de navigation.</p>
          </section>

          <section>
            <h2 className="text-[15px] font-semibold text-[#111] mb-3">9. Transfert hors UE</h2>
            <p>Certains de nos sous-traitants (Google, Vercel) sont situes aux Etats-Unis. Les transferts de donnees sont encadres par les clauses contractuelles types de la Commission europeenne et/ou le Data Privacy Framework (DPF) UE-US.</p>
          </section>

          <section>
            <h2 className="text-[15px] font-semibold text-[#111] mb-3">10. Modification de la politique</h2>
            <p>Cette politique de confidentialite peut etre mise a jour a tout moment. La date de derniere mise a jour est indiquee ci-dessous. Nous vous invitons a la consulter regulierement.</p>
          </section>

          <div className="pt-4 border-t border-[#F2F2F2]">
            <p className="text-[11px] text-[#CCC]">Derniere mise a jour : mars 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}
