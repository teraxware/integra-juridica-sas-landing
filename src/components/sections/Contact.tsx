import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { contact, site } from "@/content/site";
import { generalMessage } from "@/content/whatsappMessages";
import { buildPhoneLink, buildWhatsAppLink } from "@/lib/whatsapp";
import { WhatsAppButton, WhatsAppIcon } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";

export function Contact() {
  const items = [
    { icon: Phone, label: contact.labels.phone, value: site.phoneDisplay, href: buildPhoneLink() },
    { icon: WhatsAppIcon, label: contact.labels.whatsapp, value: site.phoneDisplay, href: buildWhatsAppLink(generalMessage), external: true },
    { icon: Mail, label: contact.labels.email, value: site.email, href: `mailto:${site.email}` },
    { icon: MapPin, label: contact.labels.address, value: site.address },
    { icon: Clock, label: contact.labels.hours, value: site.hours },
  ];
  return (
    <section id="contacto" className="section-y bg-primary-hover text-primary-foreground" aria-labelledby="contacto-title">
      <div className="container-site grid gap-12 lg:grid-cols-2">
        <div>
          <span className="mb-4 block h-0.5 w-12 bg-gold" aria-hidden="true" />
          <h2 id="contacto-title" className="text-3xl font-semibold sm:text-4xl">{contact.title}</h2>
          <p className="mt-4 text-lg text-primary-foreground/80">{contact.text}</p>
          <dl className="mt-8 grid gap-5">
            {items.map(({ icon: Icon, label, value, href, external }) => (
              <div key={label} className="flex items-start gap-4">
                <Icon className="mt-1 size-5 shrink-0 text-gold" aria-hidden="true" />
                <div>
                  <dt className="text-sm text-primary-foreground/65">{label}</dt>
                  <dd className="font-medium break-words">
                    {href ? (
                      <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="hover:text-gold">{value}</a>
                    ) : value}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
        <div className="self-center rounded-md bg-background p-7 text-foreground shadow-soft sm:p-9">
          <p className="text-lg">{contact.cardText}</p>
          <div className="mt-7 flex flex-col gap-3">
            <WhatsAppButton message={generalMessage} variant="whatsapp" size="lg" className="w-full">{contact.whatsappCta}</WhatsAppButton>
            <Button asChild variant="outline" size="lg" className="w-full">
              <a href={buildPhoneLink()}><Phone aria-hidden="true" />{contact.phoneCta}</a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">{contact.note}</p>
        </div>
      </div>
    </section>
  );
}
