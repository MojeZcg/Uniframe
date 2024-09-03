import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

export const WHATSAPP_URL =
  "https://wa.me/542614995742?text=%C2%A1Hola%21%20Estoy%20interesado%2Fa%20en%20los%20productos%20de%20Uniframe.%20%C2%BFPodr%C3%ADan%20enviarme%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20opciones%20disponibles%3F%20%C2%A1Gracias%21";

export const Routes = [
  { name: "Inicio", path: "/" },
  { name: "Tienda", path: "/store" },
  { name: "Contactanos", path: "/contact" },
];

export const contactFields = [
  {
    id: 1,
    label: "Nombre Completo",
    place: "Nombre Completo *",
    type: "text",
    isrequired: false,
  },
  {
    id: 2,
    label: "Asunto",
    place: "Asunto",
    type: "text",
    isrequired: true,
  },
];

export const Socials = [
  { id: 1, name: "Whatsapp", link: WHATSAPP_URL, icon: FaWhatsapp },
  {
    id: 2,
    name: "Facebook",
    link: "https://www.facebook.com",
    icon: FaFacebook,
  },
  {
    id: 3,
    name: "Instagram",
    link: "https://www.instagram.com/unifoto.digital/",
    icon: FaInstagram,
  },
];
