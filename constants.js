export const mainMenu = [
  {
    title: "PARRUCCHIERI",
    href: "/products?category=Capelli",
    logo: <img src="/iconos/pelo-de-mujer.png" alt="Parrucchieri Logo" />,
  },

  {
    title: "ACCESSORI",
    href: "/products?category=Accessori",
    logo: <img src="/iconos/secador-de-pelo.png" alt="Accessoori Logo" />,
  },
  {
    title: "COSMETICI",
    href: "/products?category=Cosmetici",
    logo: <img src="/iconos/cosmetici.png" alt="Cosmetici Logo" />,
  },
  {
    title: "BARBERSHOP",
    href: "/products?category=Barbershop",
    logo: <img src="/iconos/hombre.png" alt="Barbershop Logo" />,
  },
  {
    title: "ABOUT US",
    href: "us",
    logo: <img src="/iconos/equipo.png" alt="Noi Logo" />,
  },
];

export const filters = [
  {
    title: "Marca",
    titleBackend: "brand",
    options: ["Eugeneperma", "Chenice", "She"],
  },
  {
    title: "Sottocategoria",
    titleBackend: "subCategory",
    options: [
      "Permanenti",
      "Stiratura",
      "Permanente",
      "Semi-Permanente",
      "Naturale",
      "Diretta",
      "Decolorazione",
      "Complementi Tecnici",
      "Crema",
      "Mousse",
      "Spray",
      "Volume",
      "Wax",
      "Gel",
      "Nutrizione",
      "Uso Frequente",
      "Colorati",
      "Silver",
      "Antiforfora",
      "Lacca",
      "Shampoo Districante",
      "Shampoo Purificante",
      "Shampoo Solido",
      "Capelli Fragili",
      "Tutti i Capelli",
      "Capelli Fini",
      "Capelli Ricci",
      "Capelli Secchi",
      "Capelli Colorati",
      "Capelli Biondi-Dec-Bianchi",
      "Anticaduta",
      "Cute Sensibile",
      "Capelli Grassi e Forfora",
      "Sun",
    ],
  },
  {
    title: "Categoria",
    titleBackend: "category",
    options: [
      "Trattamento",
      "Colorazione",
      "Styling",
      "Cura Quotidiana",
      "Cuoio Capelluto",
      "Protezione Extra",
    ],
  },
  {
    title: "Prezzo",
    titleBackend: "price",
    options: [100000],
  },
];

export const colors = [
  {
    title: "Colore",
    titleBackend: "color",
    options: [
      "red",
      "blue",
      "green",
      "yellow",
      "black",
      "white",
      "gray",
      "brown",
      "orange",
      "pink",
      "purple",
      "silver",
      "slate",
      "forest",
      "ocean",
    ],
  },
];

export const sortOptions = [
  {
    title: "",
    value: "",
  },
  {
    title: "Prezzo più Basso",
    value: "lowToHigh",
  },
  {
    title: "Prezzo più Alto",
    value: "highToLow",
  },
  {
    title: "Da A a Z",
    value: "aToZ",
  },
  {
    title: "Da Z a A",
    value: "zToA",
  },
];
