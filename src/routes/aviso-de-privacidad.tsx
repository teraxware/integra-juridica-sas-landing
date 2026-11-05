import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { privacyPage } from "@/content/legalPages";

export const Route = createFileRoute("/aviso-de-privacidad")({
  head: () => ({
    meta: [
      { title: "Aviso de privacidad | Integra Jurídica SAS" },
      { name: "description", content: privacyPage.description },
      { property: "og:title", content: "Aviso de privacidad | Integra Jurídica SAS" },
      { property: "og:description", content: privacyPage.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <LegalPage title={privacyPage.title} sections={privacyPage.sections} />,
});
