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
    title: "Categoria",
    titleBackend: "category",
    options: [
      {
        label: "Trattamento",
        value: "treatment",
        subcategories: [
          { label: "Permanenti", value: "permanent" },
          { label: "Stiratura", value: "straightening" },
          { label: "Permanente", value: "permanent-treatment" },
          { label: "Semi-Permanente", value: "semi-permanent" },
          { label: "Nutrizione", value: "nutrition" },
          { label: "Anticaduta", value: "anti-hair-loss" },
          { label: "Cute Sensibile", value: "sensitive-scalp" },
          {
            label: "Capelli Grassi e Forfora",
            value: "oily-hair-and-dandruff",
          },
        ],
      },
      {
        label: "Styling",
        value: "styling",
        subcategories: [
          { label: "Crema", value: "cream" },
          { label: "Mousse", value: "mousse" },
          { label: "Spray", value: "spray" },
          { label: "Volume", value: "volume" },
          { label: "Wax", value: "wax" },
          { label: "Gel", value: "gel" },
        ],
      },
      {
        label: "Colorazione",
        value: "coloring",
        subcategories: [
          { label: "Naturale", value: "natural" },
          { label: "Diretta", value: "direct" },
          { label: "Decolorazione", value: "bleaching" },
          { label: "Complementi Tecnici", value: "technical-complements" },
        ],
      },
      {
        label: "Cura Quotidiana",
        value: "daily-care",
        subcategories: [
          { label: "Uso Frequente", value: "frequent-use" },
          { label: "Colorati", value: "colored" },
          { label: "Silver", value: "silver" },
          { label: "Antiforfora", value: "anti-dandruff" },
        ],
      },
      {
        label: "Cuoio Capelluto",
        value: "scalp",
        subcategories: [
          { label: "Shampoo Districante", value: "detangling-shampoo" },
          { label: "Shampoo Purificante", value: "purifying-shampoo" },
          { label: "Shampoo Solido", value: "solid-shampoo" },
        ],
      },
      {
        label: "Protezione Extra",
        value: "extra-protection",
        subcategories: [{ label: "Sun", value: "sun" }],
      },
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
    title: "Da A a Z",
    value: "aToZ",
  },
  {
    title: "Da Z a A",
    value: "zToA",
  },
  {
    title: "Prezzo più Basso",
    value: "lowToHigh",
  },
  {
    title: "Prezzo più Alto",
    value: "highToLow",
  },
];
