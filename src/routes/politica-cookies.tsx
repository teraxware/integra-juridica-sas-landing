import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { cookiesPage } from "@/content/legalPages";

export const Route = createFileRoute("/politica-cookies")({
  head: () => ({
    meta: [
      { title: "Política de cookies | Integra Jurídica SAS" },
      { name: "description", content: cookiesPage.description },
      { property: "og:title", content: "Política de cookies | Integra Jurídica SAS" },
      { property: "og:description", content: cookiesPage.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <LegalPage title={cookiesPage.title} sections={cookiesPage.sections} />,
});
