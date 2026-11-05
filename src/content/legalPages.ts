// Archivo editable por el cliente: textos del aviso de privacidad y de la política de cookies.
import { site } from "./site";

export type LegalSection = { heading: string; paragraphs?: string[]; list?: string[]; link?: { label: string; href: string } };

export const privacyPage: { title: string; description: string; sections: LegalSection[] } = {
  title: "Aviso de privacidad",
  description: "Cómo Integra Jurídica SAS trata los datos personales que usted comparte al contactarnos, conforme a la Ley 1581 de 2012.",
  sections: [
    {
      heading: "Responsable del tratamiento",
      list: [
        "Integra Jurídica SAS",
        "NIT: [PLACEHOLDER]",
        `Domicilio: ${site.address}`,
        `Teléfono: ${site.phoneDisplay}`,
        `Correo electrónico: ${site.email}`,
      ],
    },
    {
      heading: "Qué datos recogemos",
      paragraphs: [
        "Este sitio no tiene formularios ni registra consultas en una base de datos.",
        "Solo tratamos información cuando usted decide escribirnos por WhatsApp o contactarnos por los medios indicados. Esa información se maneja con reserva profesional.",
      ],
    },
    {
      heading: "A qué datos podemos acceder",
      list: [
        "Su número de teléfono.",
        "Su nombre.",
        "El contenido del mensaje que nos envía.",
        "Los datos estrictamente necesarios para responder su consulta.",
      ],
    },
    {
      heading: "Finalidades",
      list: [
        "Atender su consulta.",
        "Gestionar la relación profesional, si se formaliza.",
        "Cumplir las obligaciones legales y deontológicas del ejercicio de la abogacía.",
      ],
    },
    {
      heading: "Base jurídica",
      paragraphs: ["Su autorización y el cumplimiento de las obligaciones legales y deontológicas aplicables."],
    },
    {
      heading: "Plazo de conservación",
      paragraphs: [
        "Conservamos la información mientras se atiende su consulta y, si se formaliza el encargo, conforme a las normas de conservación documental del oficio.",
      ],
    },
    {
      heading: "Sus derechos",
      paragraphs: [
        `Usted puede conocer, actualizar, rectificar y suprimir sus datos, revocar la autorización y acceder a ellos escribiendo a ${site.email}. Respondemos dentro de los 10 días hábiles.`,
      ],
    },
    {
      heading: "Registro Nacional de Bases de Datos",
      paragraphs: [
        "Tratamos los datos personales de nuestros clientes conforme a la Ley 1581 de 2012 y las normas deontológicas del oficio. La base de datos correspondiente se encuentra inscrita en el Registro Nacional de Bases de Datos Personales de la SIC.",
      ],
      link: { label: "Consultar el Registro Nacional de Bases de Datos (SIC)", href: "https://rnbd.sic.gov.co" },
    },
    {
      heading: "Transferencia a terceros",
      paragraphs: [
        "Si usted decide escribirnos por WhatsApp, la conversación se registra en la plataforma de WhatsApp, de la compañía Meta Platforms, sujeta a sus propias políticas de privacidad.",
        "Si prefiere no usar WhatsApp, puede escribirnos por correo electrónico o llamarnos.",
      ],
    },
  ],
};

export const cookiesPage: { title: string; description: string; sections: LegalSection[] } = {
  title: "Política de cookies",
  description: "Integra Jurídica SAS solo usa almacenamiento técnico indispensable. Este sitio no instala cookies de publicidad ni de seguimiento.",
  sections: [
    {
      heading: "Qué son las cookies",
      paragraphs: [
        "Las cookies son pequeños archivos que un sitio web guarda en su navegador para recordar información sobre su visita.",
      ],
    },
    {
      heading: "Qué usa este sitio",
      paragraphs: [
        "Este sitio usa únicamente almacenamiento técnico indispensable del navegador, por ejemplo para recordar que usted ya aceptó el aviso de privacidad.",
        "No instalamos cookies de publicidad ni de seguimiento.",
      ],
    },
    {
      heading: "Cambios futuros",
      paragraphs: [
        "Si en el futuro incorporamos herramientas de analítica, le pediremos su consentimiento previo y mostraremos un aviso visible para que pueda aceptarlas o rechazarlas.",
      ],
    },
  ],
};
