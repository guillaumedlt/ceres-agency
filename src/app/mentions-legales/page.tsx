import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions legales",
  description: "Mentions legales du site ceres.agency, edite par Ceres Growth Marketing.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="relative pt-[100px] pb-16">
      <div className="max-w-[700px] mx-auto px-6">
        <nav className="mb-8 flex items-center gap-2 text-[12px] text-[#999]">
          <Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span>
          <span className="text-[#666]">Mentions legales</span>
        </nav>

        <h1 className="text-[28px] font-semibold text-[#111] tracking-[-0.02em] mb-8">Mentions legales</h1>

        <div className="space-y-8 text-[13px] text-[#555] leading-[1.75]">
          <section>
            <h2 className="text-[15px] font-semibold text-[#111] mb-3">Editeur du site</h2>
            <p>Le site ceres.agency est edite par :</p>
            <div className="mt-3 rounded-xl bg-[#FAFAFA] border border-[#F2F2F2] p-4 space-y-1">
              <p className="font-semibold text-[#111]">Ceres Growth Marketing</p>
              <p>128 rue La Boetie</p>
              <p>75008 Paris, France</p>
              <p>Email : guillaume@ceres.agency</p>
              <p>Directeur de la publication : Guillaume Delachet</p>
            </div>
          </section>

          <section>
            <h2 className="text-[15px] font-semibold text-[#111] mb-3">Hebergement</h2>
            <div className="rounded-xl bg-[#FAFAFA] border border-[#F2F2F2] p-4 space-y-1">
              <p className="font-semibold text-[#111]">Vercel Inc.</p>
              <p>440 N Baxter Street, Suite 4060</p>
              <p>Covina, CA 91723, Etats-Unis</p>
              <p>Site : vercel.com</p>
            </div>
          </section>

          <section>
            <h2 className="text-[15px] font-semibold text-[#111] mb-3">Propriete intellectuelle</h2>
            <p>L&apos;ensemble du contenu du site ceres.agency (textes, images, graphismes, logo, icones, guides, articles de blog) est la propriete exclusive de Ceres Growth Marketing ou de ses partenaires et est protege par les lois francaises et internationales relatives a la propriete intellectuelle.</p>
            <p className="mt-2">Toute reproduction, representation, modification, publication, adaptation de tout ou partie des elements du site, quel que soit le moyen ou le procede utilise, est interdite, sauf autorisation ecrite prealable de Ceres Growth Marketing.</p>
          </section>

          <section>
            <h2 className="text-[15px] font-semibold text-[#111] mb-3">Donnees personnelles</h2>
            <p>Les informations recueillies via les formulaires du site font l&apos;objet d&apos;un traitement informatique destine a repondre a vos demandes et a vous envoyer des informations commerciales. Conformement au Reglement General sur la Protection des Donnees (RGPD), vous disposez d&apos;un droit d&apos;acces, de rectification, de suppression et de portabilite de vos donnees.</p>
            <p className="mt-2">Pour exercer ces droits ou pour toute question relative au traitement de vos donnees, vous pouvez nous contacter a l&apos;adresse : guillaume@ceres.agency</p>
            <p className="mt-2">Pour en savoir plus, consultez notre <Link href="/politique-confidentialite" className="text-[#4B5EFC] hover:underline">Politique de confidentialite</Link>.</p>
          </section>

          <section>
            <h2 className="text-[15px] font-semibold text-[#111] mb-3">Cookies</h2>
            <p>Le site ceres.agency utilise des cookies pour ameliorer l&apos;experience utilisateur, mesurer l&apos;audience (Google Analytics 4) et permettre le fonctionnement des formulaires (HubSpot). Vous pouvez configurer votre navigateur pour refuser les cookies. Le refus des cookies peut limiter l&apos;acces a certaines fonctionnalites du site.</p>
          </section>

          <section>
            <h2 className="text-[15px] font-semibold text-[#111] mb-3">Limitation de responsabilite</h2>
            <p>Les informations publiees sur le site ceres.agency sont fournies a titre indicatif et sont susceptibles d&apos;etre modifiees a tout moment. Ceres Growth Marketing ne saurait etre tenue responsable des erreurs, omissions ou resultats obtenus suite a l&apos;utilisation de ces informations.</p>
            <p className="mt-2">Les liens hypertextes presents sur le site et dirigeant vers d&apos;autres sites internet ne sauraient engager la responsabilite de Ceres Growth Marketing quant au contenu de ces sites.</p>
          </section>

          <section>
            <h2 className="text-[15px] font-semibold text-[#111] mb-3">Droit applicable</h2>
            <p>Les presentes mentions legales sont regies par le droit francais. En cas de litige, les tribunaux de Paris seront seuls competents.</p>
          </section>

          <div className="pt-4 border-t border-[#F2F2F2]">
            <p className="text-[11px] text-[#CCC]">Derniere mise a jour : mars 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}
