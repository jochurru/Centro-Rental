import { stats } from '@/data/site'

export function Stats() {
  return (
    <section className="section-padding mx-auto max-w-[1320px] px-5 lg:px-8">
      <div className="grid gap-8 md:grid-cols-2 md:items-end">
        <div>
          <span className="eyebrow">En números</span>
          <h2 className="section-title mt-4">
            Experiencia que<br />
            <span className="text-white/35">se nota.</span>
          </h2>
        </div>
        <p className="text-sm leading-relaxed text-white/45 md:pb-2">
          Indicadores preparados para acompañar el crecimiento de tu próximo gran evento.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-y-10 border-y border-white/10 py-10 md:grid-cols-4 md:gap-0">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="border-white/10 md:border-l md:pl-6 first:md:border-0 first:md:pl-0"
          >
            <p className="text-4xl font-medium tracking-[-0.06em] md:text-5xl">
              {stat.number}
            </p>
            <p className="mt-2 text-[10px] uppercase tracking-widest text-white/40">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
