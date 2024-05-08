import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

export const WHATSAPP_URL =
  "https://wa.me/542614995742?text=Hola%21%2C%20estoy%20interesado%20en%20los%20productos%20que%20ofrece%20Uniframe.%20%C2%BFPodr%C3%ADan%20proporcionarme%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20productos%3F";

export const Routes = [
  { name: "Inicio", path: "/" },
  { name: "Tienda", path: "/store" },
  { name: "Contactanos", path: "/contact" },
  { name: "Nosotros", path: "/about" },
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

export async function fetchProducts() {
  const res = await fetch("http://localhost:3000/api/products/");
  const data = await res.json();
  return data;
}

export async function fetchTopProducts() {
  const res = await fetch("http://localhost:3000/api/products/top/", {
    method: "GET",
    next: {
      revalidate: 5000,
    },
  });
  const data = await res.json();
  return data;
}
