import { Facebook, Instagram, Youtube } from "@/components/site/SocialIcons";

export const CONTACT_EMAIL = "geral@advilacha.pt";

export const PHONE_DISPLAY = "+351 961 208 312";
export const PHONE_URL = "tel:+351961208312";
export const WHATSAPP_URL = `https://wa.me/351961208312?text=${encodeURIComponent(
  "Olá! Gostaria de falar com a Assembleia de Deus de Vila Chã.",
)}`;

export const SOCIALS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/assembleiadedeusvilacha",
    icon: Instagram,
    className: "bg-[linear-gradient(45deg,#f9ce34_0%,#ee2a7b_55%,#6228d7_100%)]",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/assembleiadedeusvilacha",
    icon: Facebook,
    className: "bg-[#3b5998]",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@umcaminho-advilacha7822",
    icon: Youtube,
    className: "bg-[#ff0000]",
  },
];
