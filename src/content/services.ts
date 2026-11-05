// Archivo editable por el cliente: áreas de práctica.
import type { AreaKey } from "./whatsappMessages";

export const services: { key: AreaKey; icon: "building" | "briefcase" | "receipt" | "scroll"; title: string; description: string; cta: string }[] = [
  {
    key: "comercial",
    icon: "building",
    title: "Derecho Comercial y Societario",
    description: "Constitución de sociedades, reformas, acuerdos entre socios y cumplimiento de obligaciones mercantiles.",
    cta: "Consultar por WhatsApp",
  },
  {
    key: "laboral",
    icon: "briefcase",
    title: "Derecho Laboral",
    description: "Contratos de trabajo, liquidaciones, despidos y procesos disciplinarios, para empleadores y trabajadores.",
    cta: "Consultar por WhatsApp",
  },
  {
    key: "tributario",
    icon: "receipt",
    title: "Derecho Tributario y Fiscal",
    description: "Respuesta a requerimientos de la DIAN, revisión de obligaciones y planeación tributaria dentro de la ley.",
    cta: "Consultar por WhatsApp",
  },
  {
    key: "contratos",
    icon: "scroll",
    title: "Contratos y Resolución de Conflictos",
    description: "Redacción y revisión de contratos, conciliación, cobros y representación en procesos judiciales.",
    cta: "Consultar por WhatsApp",
  },
];
