import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { Steps } from "@/components/sections/Steps";
import { WhyUs } from "@/components/sections/WhyUs";
import { Team } from "@/components/sections/Team";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { team } from "@/content/team";
import { faqs } from "@/content/faqs";

const title = `Integra Jurídica SAS | Abogados en ${site.city}, Colombia`;
const description = `Abogados en ${site.city}: asesoría en derecho comercial, laboral, tributario y contratos. Diagnóstico inicial sin costo. Consulte por WhatsApp.`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "@id": `${site.url}/#firma`,
      name: site.name,
      description,
      url: site.url,
      telephone: site.phoneDisplay,
      email: site.email,
      address: { "@type": "PostalAddress", streetAddress: site.address, addressLocality: site.city, addressRegion: site.region, addressCountry: "CO" },
      areaServed: "CO",
      openingHours: "Mo-Fr 08:00-17:00", // PLACEHOLDER
      priceRange: "$$",
      sameAs: site.socials.map((s) => s.href),
      makesOffer: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.description } })),
    },
    ...team.map((m) => ({
      "@type": "Person",
      name: m.name,
      jobTitle: m.role,
      worksFor: { "@id": `${site.url}/#firma` },
      knowsAbout: m.specialty,
      alumniOf: m.alumniOf,
      memberOf: "[PLACEHOLDER - Colegio de Abogados]",
      hasCredential: { "@type": "EducationalOccupationalCredential", credentialCategory: "Matrícula profesional", identifier: m.license },
    })),
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Inicio", item: site.url }] },
    {
      "@type": "WebSite",
      name: site.name,
      url: site.url,
      potentialAction: { "@type": "SearchAction", target: `${site.url}/?q={search_term_string}`, "query-input": "required name=search_term_string" },
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_CO" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: site.url }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-background focus:px-4 focus:py-2">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <TrustBar />
        <Services />
        <Steps />
        <WhyUs />
        <Team />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
