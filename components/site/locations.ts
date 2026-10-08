type Service = { day: string; time: string; type: string };

export type Location = {
  city: string;
  address: string;
  street: string;
  postalCode?: string;
  maps: string;
  services: Service[];
};

export const LOCATIONS: Location[] = [
  {
    city: "Vila do Conde",
    address: "R. Dom João III 70-84, 4480-646 Vila do Conde",
    street: "R. Dom João III 70-84",
    postalCode: "4480-646",
    maps: "https://www.google.com/maps/search/?api=1&query=R.%20Dom%20Jo%C3%A3o%20III%2070-84%2C%204480-646%20Vila%20do%20Conde",
    services: [
      { day: "Qua", time: "20:30", type: "Culto de Estudo Bíblico" },
      { day: "Dom", time: "10:00", type: "Culto de Celebração" },
      { day: "Dom", time: "15:30", type: "Culto de Celebração" },
    ],
  },
  {
    city: "Barcelos",
    address: "Urbanização da Formiga, Edifício Panorâmico, Arcozelo, Barcelos",
    street: "Urbanização da Formiga, Edifício Panorâmico, Arcozelo",
    maps: "https://www.google.com/maps/search/?api=1&query=Rua%20da%20Formiga%2C%20Arcozelo%2C%20Barcelos",
    services: [
      { day: "Qua", time: "10:00", type: "Culto de Estudo Bíblico" },
      { day: "Dom", time: "15:00", type: "Culto de Celebração" },
    ],
  },
];
