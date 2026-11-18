import { Link } from "@tanstack/react-router";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

// PLACEHOLDER: reemplace este logo de texto por la imagen real de la firma.
export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" className="flex shrink-0 items-center gap-3 whitespace-nowrap" aria-label={`${site.name}, inicio`}>
      <span
        aria-hidden="true"
        className={cn(
          "flex size-10 items-center justify-center rounded-full border-2 font-serif text-lg font-semibold",
          inverted ? "border-brand-accent text-brand-accent" : "border-primary text-primary",
        )}
      >
        IJ
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn("font-sans text-base font-semibold", inverted ? "text-brand-foreground" : "text-primary")}>
          {site.shortName}
        </span>
        <span className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold">SAS · Abogados</span>
      </span>
    </Link>
  );
}
