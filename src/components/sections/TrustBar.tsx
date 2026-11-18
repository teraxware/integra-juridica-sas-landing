import { stats } from "@/content/stats";

export function TrustBar() {
  return (
    <section aria-label="Datos de la firma" className="border-y border-border bg-muted text-foreground">
      <ul className="container-site grid grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <li key={s.label} className="border-border px-4 py-6 odd:border-r lg:border-r lg:last:border-r-0">
            <span className="block font-sans text-xl font-semibold text-primary">{s.value}</span>
            <span className="mt-1 block text-xs text-muted-foreground">{s.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
