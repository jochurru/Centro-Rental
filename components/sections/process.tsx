import { processSteps } from '@/data/site'

export function Process() {
  return (
    <section
      id="nosotros"
      className="border-y border-white/[0.07] bg-[#0d0d10] section-padding scroll-mt-[74px]"
    >
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <span className="eyebrow">Así trabajamos</span>
          <h2 className="section-title mt-4">
            De la primera idea<br />
            <span className="text-white/35">al último aplauso.</span>
          </h2>
        </div>

        <div className="grid gap-3 md:grid-cols-4">
          {processSteps.map((item) => (
            <div
              key={item.number}
              className="process-card border-t border-white/15 pt-5"
            >
              <span className="text-xs text-violet-300">{item.number}</span>
              <h3 className="mt-14 text-lg font-medium tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/45">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
