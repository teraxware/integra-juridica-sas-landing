import { stats } from "@/content/stats";

export function TrustBar() {
  return (
    <section aria-label="Datos de la firma" className="border-t border-gold/30 bg-primary-hover text-primary-foreground">
      <ul className="container-site grid grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <li key={s.label} className="border-primary-foreground/15 px-4 py-8 text-center odd:border-r lg:border-r lg:last:border-r-0">
            <span className="block font-serif text-3xl font-semibold text-gold">{s.value}</span>
            <span className="mt-1 block text-sm text-primary-foreground/80">{s.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
