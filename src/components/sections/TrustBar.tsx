import { stats } from "@/content/stats";

export function TrustBar() {
  return (
    <section aria-label="Datos de la firma" className="hero-stats w-full text-foreground">
      <ul className="mx-auto grid max-w-4xl grid-cols-2 gap-y-5 sm:grid-cols-4">
        {stats.map((s) => (
          <li key={s.label} className="border-primary/20 px-3 text-center odd:border-r sm:border-r sm:last:border-r-0">
            <span className="block font-serif text-3xl font-medium text-primary">{s.value}</span>
            <span className="mt-1 block text-xs text-muted-foreground">{s.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
