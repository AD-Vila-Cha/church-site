import { CONTACT_EMAIL, SOCIALS } from "@/components/site/contact";
import { LOCATIONS } from "@/components/site/locations";
import { getSiteUrl } from "@/lib/site";

const DAYS: Record<string, string> = { Dom: "Sunday", Seg: "Monday", Ter: "Tuesday", Qua: "Wednesday", Qui: "Thursday", Sex: "Friday", Sáb: "Saturday" };

// schema.org `Church` description, built from the same data the page shows.
export function churchJsonLd() {
  const url = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "Church",
    name: "Assembleia de Deus de Vila Chã",
    url,
    logo: `${url}/logo-icon.png`,
    image: `${url}/opengraph-image.jpg`,
    email: CONTACT_EMAIL,
    sameAs: SOCIALS.map((s) => s.href),
    location: LOCATIONS.map((loc) => ({
      "@type": "Church",
      name: `Assembleia de Deus de Vila Chã — ${loc.city}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: loc.street,
        ...(loc.postalCode && { postalCode: loc.postalCode }),
        addressLocality: loc.city,
        addressCountry: "PT",
      },
      hasMap: loc.maps,
      openingHoursSpecification: loc.services.map((s) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: DAYS[s.day],
        opens: s.time,
        description: s.type,
      })),
    })),
  };
}
