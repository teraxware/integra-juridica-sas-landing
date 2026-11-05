import { describe, expect, it } from "vitest";
import { buildPhoneLink, buildWhatsAppLink, whatsappNumber } from "@/lib/whatsapp";
import { generalMessage, messagesByArea } from "@/content/whatsappMessages";

describe("WhatsApp links", () => {
  it("builds a wa.me link with the encoded message", () => {
    expect(buildWhatsAppLink("Hola, buen día.")).toBe(`https://wa.me/${whatsappNumber}?text=Hola%2C%20buen%20d%C3%ADa.`);
  });
  it("builds a tel link with +", () => {
    expect(buildPhoneLink()).toBe(`tel:+${whatsappNumber}`);
  });
  it("every message starts with the greeting", () => {
    for (const m of [generalMessage, ...Object.values(messagesByArea)]) expect(m.startsWith("Hola, buen día.")).toBe(true);
  });
});
