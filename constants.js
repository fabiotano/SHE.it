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
    title: "Subcategoria",
    titleBackend: "subCategory",
    options: [
      // **Coloración**
      "Colorazione Permanente", // Permanente
      "Colorazione Semi-Permanente", // Semi-permanente
      "Colorazione Naturale", // Natural
      "Diretta", // Directa

      // **Tratamientos de Cabello**
      "Permanenti", // Permanentes
      "Stiratura", // Alisado

      // **Tratamientos Especializados**
      "Ifix", // Tratamiento específico
      "Urbn", // Tratamiento específico
      "Botox Effect", // Efecto Botox
      "Ricostruzione", // Reconstrucción

      // **Hidratación y Nutrición**
      "Moisturizing", // Hidratación
      // "Nutrizione", // Nutrición (opcional)
      // "Idratazione", // Hidratación (opcional)

      // **Productos de Cuidado y Estilo**
      "Decolorazione", // Decoloración
      "Styling", // Estilizado
      "Districante", // Acondicionador
      "Purificante", // Purificante
      "Shampoo Solido", // Shampoo sólido

      // **Cuidado Específico del Cabello**
      "Capelli Fragili", // Cabello frágil
      "Per Tutti i Capelli", // Para todo tipo de cabello
      "Capelli Fini", // Cabello fino
      "Capelli Ricci", // Cabello rizado
      "Capelli Secchi", // Cabello seco
      "Capelli Colorati", // Cabello teñido
      "Capelli Biondi-Dec-Bianchi", // Cabello rubio y decolorado
      "Capelli Grassi", // Cabello graso

      // **Cuidado del Cuero Cabelludo**
      "Anticaduta/Antiforfora", // Anticaída/Anticaspa
      "Cute Sensible", // Cuero cabelludo sensible

      // **Protección y Cuidado Adicional**
      "Sun", // Protección solar
      "Anti-Age", // Anti-envejecimiento
      "Green Care", // Cuidado ecológico
      "Biological Waves", // Ondas biológicas
    ],
  },
  {
    title: "Precio",
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
