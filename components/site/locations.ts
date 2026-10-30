type Service = { day: string; time: string; type: string };

type Access = { parking: string; publicTransport?: boolean };

export type Location = {
  city: string;
  address: string;
  street: string;
  postalCode?: string;
  maps: string;
  access: Access;
  services: Service[];
  mvpOnly?: boolean;
};

export const LOCATIONS: Location[] = [
  {
    city: "Vila Chã",
    mvpOnly: true,
    address: "Tv. das Pedreiras 22, 4485-702 Vila Chã",
    street: "Tv. das Pedreiras 22",
    postalCode: "4485-702",
    maps: "https://www.google.com/maps/search/?api=1&query=Igreja%20Evang%C3%A9lica%20Assembleia%20de%20Deus%20de%20Vila%20Ch%C3%A3&query_place_id=ChIJuV7aWQBDJA0R7eeYOo1JGqc",
    access: { parking: "Estacionamento gratuito" },
    services: [
      { day: "Dom", time: "10:00", type: "Culto de Celebração" },
      { day: "Dom", time: "15:00", type: "Culto de Ceia (1.º domingo do mês)" },
    ],
  },
  {
    city: "Vila do Conde",
    address: "R. Dom João III 70-84, 4480-646 Vila do Conde",
    street: "R. Dom João III 70-84",
    postalCode: "4480-646",
    maps: "https://www.google.com/maps/search/?api=1&query=Igreja%20Evang%C3%A9lica%20Assembleia%20de%20Deus%20de%20Vila%20do%20Conde&query_place_id=ChIJwyoQKoZHJA0RIPDqtzMEmRM",
    access: {
      parking: "Estacionamento nas proximidades",
      publicTransport: true,
    },
    services: [
      { day: "Qua", time: "20:30", type: "Culto de Estudo Bíblico" },
      { day: "Dom", time: "10:00", type: "Culto de Celebração" },
      { day: "Dom", time: "15:30", type: "Culto de Celebração" },
    ],
  },
  {
    city: "Barcelos",
    address: "R. Bartolomeu Dias, Ed. Panorâmico, Lj 1, 4750-159 Arcozelo",
    street: "R. Bartolomeu Dias, Ed. Panorâmico, Lj 1",
    postalCode: "4750-159",
    maps: "https://www.google.com/maps/search/?api=1&query=Igreja%20Evang%C3%A9lica%20Assembleia%20de%20Deus%20Barcelos&query_place_id=ChIJoTy1gzhTJA0RCR-mXD420lg",
    access: { parking: "Estacionamento nas proximidades" },
    services: [
      { day: "Qua", time: "10:00", type: "Culto de Estudo Bíblico" },
      { day: "Dom", time: "15:00", type: "Culto de Celebração" },
    ],
  },
];

// One line for the access row; parking and public transport share the "nas proximidades" wording.
export const accessLabel = ({ parking, publicTransport }: Access) =>
  publicTransport ? "Estacionamento e transportes públicos nas proximidades" : parking;

export const visibleLocations = (showMvp: boolean) =>
  LOCATIONS.filter((loc) => showMvp || !loc.mvpOnly);
