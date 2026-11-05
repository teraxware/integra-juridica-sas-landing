export const whatsappNumber = "573000000000"; // PLACEHOLDER: solo dígitos,
                                               // código de país, sin + ni guiones

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function buildPhoneLink(): string {
  return `tel:+${whatsappNumber}`;
}
