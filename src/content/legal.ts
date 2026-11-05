// Archivo editable por el cliente: bloque legal obligatorio del pie de página.
import { site } from "./site";

export const legal = {
  companyName: "Integra Jurídica SAS",
  nit: "NIT: [PLACEHOLDER]",
  license: "Matrícula en Archivo: [XXXXX]", // PLACEHOLDER
  address: `Dirección: ${site.address}`,
  hours: `Horario de atención al público: ${site.hours}`,
  contactLine: `Teléfono: ${site.phoneDisplay}  |  Correo: ${site.email}`,
  disclaimer:
    "La información de este sitio es orientativa y no constituye asesoría jurídica. La relación abogado-cliente se perfecciona únicamente mediante encargo formal.",
  privacyLabel: "Aviso de privacidad",
  cookiesLabel: "Política de cookies",
  copyright: `© ${new Date().getFullYear()} Integra Jurídica SAS. Todos los derechos reservados.`,
};
