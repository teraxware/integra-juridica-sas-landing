export function SectionHeading({ id, title, subtitle }: { id: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-12 max-w-2xl">
      <span className="mb-4 block h-0.5 w-12 bg-gold" aria-hidden="true" />
      <h2 id={id} className="text-3xl font-semibold text-primary sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
