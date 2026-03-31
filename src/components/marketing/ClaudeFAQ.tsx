"use client";

import { useState } from "react";

const faqData = [
  {
    q: "Comment Claude peut m'aider a ameliorer mon CRM ?",
    a: "Claude analyse vos donnees CRM en profondeur : qualite des fiches contacts, doublons, champs vides, coherence des pipelines. Il peut auditer 500 fiches en 30 secondes et generer un rapport avec des recommandations actionnables. Connecte via MCP a HubSpot ou Salesforce, il enrichit automatiquement les contacts, corrige les erreurs et maintient votre base propre en continu.\n\nAu-dela du nettoyage, Claude structure vos workflows : scoring de leads, assignation automatique, sequences personnalisees. Il identifie les patterns dans vos deals gagnes et perdus pour optimiser votre process commercial. C'est un data analyst disponible 24/7 qui connait votre CRM sur le bout des doigts."
  },
  {
    q: "Est-ce que Claude peut remplacer un data analyst ?",
    a: "Claude ne remplace pas un data analyst, il le demultiplie. Les taches repetitives (nettoyage de donnees, reporting hebdo, extraction de KPIs) qui prenaient des heures sont faites en minutes. Votre analyste peut se concentrer sur l'interpretation strategique et les recommandations business.\n\nPour les equipes qui n'ont pas de data analyst, Claude comble le vide : il genere des dashboards, analyse les tendances, detecte les anomalies dans votre pipeline. On utilise Claude Code pour construire des outils de reporting sur-mesure connectes a votre CRM. Le resultat : des insights quotidiens sans recruter."
  },
  {
    q: "Combien de temps pour deployer Claude dans mon equipe ?",
    a: "Le deploiement depend du use case. Un premier agent simple (resumes de calls, enrichissement de contacts) est operationnel en 1 a 2 semaines. Un projet plus complexe (scoring predictif, qualification multi-criteres, dashboards custom) prend 2 a 3 semaines.\n\nLe process : on fait un audit de vos besoins en 30 minutes, on identifie les 3 use cases les plus impactants, et on deploie le premier agent en conditions reelles. Le serveur MCP est mis en place pour connecter Claude a votre stack. Formation de votre equipe incluse. Vous mesurez les resultats des la premiere semaine."
  },
  {
    q: "Claude a acces a mes donnees CRM ?",
    a: "Oui, mais de maniere controlee et securisee. Le protocole MCP (Model Context Protocol, cree par Anthropic) permet de definir exactement quelles donnees Claude peut lire et ecrire. Le serveur MCP est deploye dans votre infra ou sur un cloud dedie.\n\nConcretement : vous definissez les permissions (lecture seule sur les contacts, lecture/ecriture sur les deals, etc.). Claude n'accede qu'aux donnees autorisees. Aucune donnee n'est utilisee pour entrainer les modeles. Vous gardez le controle total et pouvez revoquer les acces a tout moment."
  },
  {
    q: "Quelle difference entre Claude et un chatbot classique ?",
    a: "Un chatbot classique suit des scripts pre-definis avec des arbres de decision rigides. Claude raisonne : il comprend le contexte, analyse des donnees complexes, genere des contenus originaux et prend des decisions nuancees. C'est la difference entre un repondeur automatique et un collaborateur intelligent.\n\nDans un contexte B2B, Claude analyse vos calls commerciaux pour en extraire des insights, redige des propositions personnalisees, identifie des patterns dans vos donnees de vente. Un chatbot vous dit 'Bonjour, comment puis-je vous aider ?'. Claude vous dit 'Ce deal a 73% de chances de closer si vous adressez l'objection budget lors du prochain call'."
  },
  {
    q: "Comment connecter Claude a HubSpot ?",
    a: "La connexion passe par le protocole MCP (Model Context Protocol). On met en place un serveur MCP qui fait le pont entre Claude et l'API HubSpot. Claude peut alors lire et ecrire dans votre CRM en temps reel : contacts, deals, tickets, activites, proprietes custom.\n\nLe setup technique est gere par notre equipe. Cote client, vous n'avez rien a installer. On configure les permissions, les workflows automatises et les agents IA selon vos besoins. L'ensemble fonctionne aussi avec Salesforce, Pipedrive, ou tout CRM disposant d'une API."
  },
  {
    q: "Est-ce que Claude est conforme RGPD ?",
    a: "Anthropic (l'editeur de Claude) propose des options conformes au RGPD : hebergement des donnees, pas d'utilisation des inputs pour l'entrainement sur les plans professionnels, politique de confidentialite transparente. Le serveur MCP peut etre deploye dans votre infrastructure europeenne.\n\nCote operationnel, on met en place les garde-fous necessaires : anonymisation des donnees sensibles avant traitement, logs d'acces, politique de retention. On travaille avec votre DPO si necessaire pour valider la conformite du dispositif."
  },
  {
    q: "Combien coute l'utilisation de Claude pour une equipe ?",
    a: "L'API Claude (Anthropic) coute entre 3 et 15 dollars par million de tokens selon le modele. Pour une equipe commerciale de 10 personnes, le cout API mensuel est generalement entre 50 et 300 euros selon les volumes de traitement. C'est negligeable compare au temps economise.\n\nA cela s'ajoute le cout de mise en place par Ceres : audit, deploiement du serveur MCP, configuration des agents, formation. C'est un investissement initial qui se rentabilise en quelques semaines. On vous fournit un ROI projete avant de demarrer."
  },
  {
    q: "Par ou commencer avec Claude pour le RevOps ?",
    a: "Commencez par un use case simple et a fort impact. Les trois points d'entree les plus courants : resumes automatiques de calls commerciaux (gain immediat de 15 min par call), enrichissement automatique des contacts (3 secondes au lieu de 30 minutes), et audit de qualite des donnees CRM (identifier les problemes en 30 secondes).\n\nNotre recommandation : reservez un appel de 30 minutes avec nous. On identifie vos 3 use cases prioritaires en fonction de votre stack, votre equipe et vos objectifs. Premier agent en production en 1-2 semaines. Vous pouvez aussi telecharger notre guide gratuit de 55 pages sur Claude pour le marketing B2B."
  },
  {
    q: "Quels resultats concrets attendre ?",
    a: "Les resultats varient selon les use cases, mais voici ce qu'on observe chez nos clients : +40% de leads traites dans l'heure (qualification IA), 15 minutes economisees par call commercial (resumes automatiques), enrichissement en 3 secondes au lieu de 30 minutes, +25% de win rate (scoring predictif).\n\nSur le plan operationnel : vos commerciaux passent 2 a 3 heures de moins par jour sur des taches administratives. Votre CRM est plus propre, vos rapports sont generes automatiquement, vos playbooks sont actualises en continu. Le ROI est mesurable des le premier mois."
  },
];

export default function ClaudeFAQ() {
  const [activeQ, setActiveQ] = useState<number | null>(null);
  const [displayedAnswer, setDisplayedAnswer] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleClick = (index: number) => {
    if (index === activeQ) return;
    setActiveQ(index);
    setDisplayedAnswer("");
    setIsTyping(true);

    const answer = faqData[index].a;
    let i = 0;
    const interval = setInterval(() => {
      i += 3;
      if (i >= answer.length) {
        setDisplayedAnswer(answer);
        setIsTyping(false);
        clearInterval(interval);
      } else {
        setDisplayedAnswer(answer.slice(0, i));
      }
    }, 8);
  };

  return (
    <div className="rounded-2xl border border-[#E8E8E8] bg-[#F8F5F0] p-6 md:p-10 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://www.google.com/s2/favicons?domain=claude.ai&sz=32"
            alt="Claude"
            width={20}
            height={20}
            className="rounded-sm"
          />
          <h3 className="text-[17px] font-semibold text-[#111]">Posez votre question</h3>
        </div>
        <p className="text-[12px] text-[#8B7355]">Cliquez sur une question pour voir la reponse.</p>
      </div>

      {/* Questions bubbles */}
      <div className="flex flex-wrap gap-2 mb-8">
        {faqData.map((item, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className={`text-left px-3.5 py-2 rounded-xl text-[11px] font-medium transition-all duration-200 ${
              activeQ === i
                ? "bg-[#111] text-white shadow-md"
                : "bg-white text-[#555] border border-[#E8E4DF] hover:border-[#D4A27F] hover:text-[#8B7355]"
            }`}
          >
            {item.q}
          </button>
        ))}
      </div>

      {/* Chat area */}
      {activeQ !== null && (
        <div className="space-y-4">
          {/* User message */}
          <div className="flex justify-end">
            <div className="bg-[#111] text-white px-4 py-2.5 rounded-2xl rounded-br-md max-w-[80%] shadow-sm">
              <p className="text-[12px] leading-[1.6]">{faqData[activeQ].q}</p>
            </div>
          </div>

          {/* Claude response */}
          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-full bg-[#D4A27F] flex items-center justify-center shrink-0 mt-0.5">
              <span className="text-[11px] font-bold text-white">C</span>
            </div>
            <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-md max-w-[85%] shadow-sm border border-[#F0EDE8]">
              <p className="text-[12px] text-[#555] leading-[1.7] whitespace-pre-line">
                {displayedAnswer}
                {isTyping && (
                  <span className="inline-block w-1.5 h-3.5 bg-[#D4A27F] ml-0.5 animate-pulse rounded-sm" />
                )}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
