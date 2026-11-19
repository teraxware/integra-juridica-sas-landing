import { Link } from "@tanstack/react-router";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import horizontalLogo from "@/assets/integra-logo-horizontal.png.asset.json";
import verticalLogo from "@/assets/integra-logo-vertical.png.asset.json";

export function Logo({ inverted = false, cover = false }: { inverted?: boolean; cover?: boolean }) {
  return (
    <Link to="/" className={cn("flex shrink-0 items-center", inverted && "text-brand-foreground")} aria-label={site.homeLabel}>
      {cover ? <picture>
        <source media="(max-width: 639px)" srcSet={verticalLogo.url} />
        <img src={horizontalLogo.url} alt={site.name} width={1920} height={594} className="hero-logo object-contain" />
      </picture> : <img src={horizontalLogo.url} alt={site.name} width={1920} height={594} className="h-auto w-36 object-contain sm:w-44" />}
    </Link>
  );
}
