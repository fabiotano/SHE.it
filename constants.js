import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from '@fortawesome/free-solid-svg-icons';

export const mainMenu = [
  { title: "PARRUCCHIERI", href: "/products?category=Capelli" , logo: <img src="/iconos/pelo-de-mujer.png" alt="Parrucchieri Logo" /> },
  // { title: "COSMETICI", href: "products"},
  // { title: "BARBERIA", href: "products" },
  { title: "ACCESSORI", href: "/products?category=Accessori" , logo: <img src="/iconos/secador-de-pelo.png" alt="Accessoori Logo" /> },
  { title: "COSMETICI", href: "/products?category=Cosmetici" , logo: <img src="/iconos/cosmetici.png" alt="Cosmetici Logo" /> },
  { title: "BARBERSHOP", href: "/products?category=Barbershop" , logo: <img src="/iconos/hombre.png" alt="Barbershop Logo" /> },
  { title: "ABOUT US", href: "us", logo: <img src="/iconos/equipo.png" alt="Noi Logo" /> },
  // { title: "COSMETICI", href: "products"},
  // { title: "BARBERIA", href: "products" },
];

export const filters = [
  {
    title: "Marcas",
    titleBackend: "brand",
    options: ["Eugeneperma", "Chenice", "She"],
  },
  {
    title: "Subcategoria",
    titleBackend: "subCategory",
    options: [
      "Permanente",
      "Semi-Permanente",
      "Stiratura",
      "Naturale",
      "Diretta",
      // "Decolorazione",
      // "Complementi Tecnici",
      // "Nutrizione",
      // "Idratazione",
      // "Volume",
      // "Colore",
      // "Silver",
      // "Anti Forfora",
      // "Styling",
      // "Districante",
      // "Purificante",
      // "Shampoo Solido",
      // "Capelli Fragili",
      // "Tutti Tipi di Capelli",
      // "Capelli Fini",
      // "Capelli Ricci",
      // "Capelli Secchi",
      // "Capelli Grassi",
      // "",
      // "Anticaduta",
      // "Cute Sensible",
      // "Sun",
      // "Anti-Age",
      // "Green Care",
      // "Biological Waves",
      "Ifix",
      "Urbn",
      "Botox Effect",
      "Moisturizing",
      "Ricostruzione",
      "Altro"
    ],
  },
  {
    title: "Precio",
    titleBackend: "price",
    options: [100000],
  },
];

export const sortOptions = [
  {
    title: "Menor precio",
    value: "lowToHigh",
  },
  {
    title: "Mayor precio",
    value: "highToLow",
  },
  {
    title: "A a Z",
    value: "aToZ",
  },
  {
    title: "Z a A",
    value: "zToA",
  },
];
