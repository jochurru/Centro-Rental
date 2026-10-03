import { MessageCircle } from 'lucide-react'
import { GlowButton } from '@/components/common/glow-button'

export function Contact() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden border-y border-white/[0.07] bg-[#111118] py-24 md:py-32 scroll-mt-[74px]"
    >
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[140px] pointer-events-none" />
      <div className="relative mx-auto max-w-[900px] px-5 text-center">
        <span className="eyebrow">Hablemos</span>
        <h2 className="mt-6 text-balance text-[clamp(3rem,8vw,7rem)] font-medium leading-[0.92] tracking-[-0.07em]">
          Tu próximo evento <span className="hero-gradient-text">empieza acá.</span>
        </h2>
        <p className="mx-auto mt-7 max-w-[430px] text-base leading-relaxed text-white/55">
          Contanos qué tenés en mente y armamos una propuesta a la medida.
        </p>
        <GlowButton className="mt-9 px-8 py-4 text-sm">
          <MessageCircle size={17} /> Consultar por WhatsApp
        </GlowButton>
      </div>
    </section>
  )
}
