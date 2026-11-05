// Archivo editable por el cliente: mensajes que se precargan en WhatsApp.

export const generalMessage =
  "Hola, buen día. Quiero solicitar una consulta con Integra Jurídica SAS. " +
  "Mi nombre es [escriba su nombre] y mi consulta es sobre [escriba el tema]. ";

export const messagesByArea = {
  comercial: "Hola, buen día. Necesito asesoría en derecho comercial o societario. Mi nombre es [escriba su nombre] y el asunto es [escriba el tema]. ",
  laboral: "Hola, buen día. Necesito asesoría en derecho laboral. Mi nombre es [escriba su nombre] y mi situación es [escriba el tema]. ",
  tributario: "Hola, buen día. Quiero consultar sobre un asunto tributario o fiscal. Mi nombre es [escriba su nombre] y el tema es [escriba el tema]. ",
  contratos: "Hola, buen día. Necesito ayuda con un contrato o con la resolución de un conflicto. Mi nombre es [escriba su nombre] y el asunto es [escriba el tema]. ",
};

export type AreaKey = keyof typeof messagesByArea;
