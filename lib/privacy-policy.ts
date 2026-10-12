import { CONTACT_EMAIL } from "@/components/site/contact";

// PROTOTYPE: every value in CONTROLLER is made-up. Replace with the church's real
// legal details (confirm with the pastoral team) before the policy goes public.
export const CONTROLLER = {
  name: "Associação Exemplo da Igreja de Vila Chã",
  nif: "500 000 000",
  address: "Rua Exemplo, 123, 4480-000 Vila do Conde",
  email: CONTACT_EMAIL,
};

export const POLICY_UPDATED = "2026-10-12";

type Block = { title: string; paragraphs?: string[]; items?: string[] };

// Kept as plain data so it maps onto a Sanity schema (and an EN version) later.
export const POLICY_INTRO =
  "Esta política explica que dados pessoais tratamos quando visita este site, porquê, durante quanto tempo e como pode exercer os seus direitos ao abrigo do RGPD.";

export const POLICY_SECTIONS: Block[] = [
  {
    title: "Quem é o responsável pelo tratamento",
    paragraphs: [
      `${CONTROLLER.name}, NIF ${CONTROLLER.nif}, com sede em ${CONTROLLER.address}. Para qualquer questão sobre dados pessoais, contacte ${CONTROLLER.email}.`,
    ],
  },
  {
    title: "Que dados tratamos e porquê",
    items: [
      "Registos do servidor (endereço IP, página visitada, data e hora, browser): para garantir a segurança e o funcionamento do site. Fundamento: interesse legítimo.",
      "Estatísticas de visitas, anónimas e sem cookies: para perceber que conteúdos são úteis e melhorá-los. Fundamento: interesse legítimo.",
      "Mensagens que nos envie voluntariamente por email ou WhatsApp: para lhe respondermos. Fundamento: o seu consentimento, dado ao contactar-nos.",
    ],
  },
  {
    title: "Cookies",
    paragraphs: [
      "Este site não usa cookies de rastreio nem de publicidade. Por isso não mostramos um aviso de cookies.",
    ],
  },
  {
    title: "Com quem partilhamos",
    items: [
      "Vercel Inc. (alojamento do site e estatísticas), na qualidade de subcontratante.",
      "WhatsApp (Meta), apenas se escolher contactar-nos por essa via; aplica-se a política de privacidade deles.",
      "As ligações para Instagram, Facebook e YouTube levam-no a sites de terceiros, com políticas próprias.",
    ],
  },
  {
    title: "Durante quanto tempo guardamos",
    paragraphs: [
      "Os registos do servidor são conservados por um período curto, definido pelo alojamento. As mensagens que nos envie são guardadas apenas o tempo necessário para lhe responder e, depois, apagadas.",
    ],
  },
  {
    title: "Os seus direitos",
    paragraphs: [
      `Pode pedir o acesso, a retificação ou o apagamento dos seus dados, limitar ou opor-se ao tratamento e retirar o consentimento a qualquer momento, escrevendo para ${CONTROLLER.email}. Tem também o direito de apresentar reclamação à Comissão Nacional de Proteção de Dados (cnpd.pt).`,
    ],
  },
];
