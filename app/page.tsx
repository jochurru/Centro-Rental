'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  Menu,
  MessageCircle,
  MoveRight,
  X,
} from 'lucide-react'

const whatsappUrl = 'https://wa.me/5491100000000?text=Hola%20Centro%20Rental%2C%20quiero%20consultar%20por%20un%20evento.'

const services = [
  { number: '01', title: 'Sonido profesional', description: 'Sistemas de audio que llenan cada espacio con claridad y potencia.', image: '/sound-system.png', color: 'violet' },
  { number: '02', title: 'Iluminación', description: 'Diseñamos atmósferas que transforman la energía de tu evento.', image: '/lighting-rig.png', color: 'amber' },
  { number: '03', title: 'Pantallas LED', description: 'Contenido que impacta. Resolución y escala para hacerte ver.', image: '/led-screen.png', color: 'cyan' },
  { number: '04', title: 'Producción técnica', description: 'Una mirada integral para que todo funcione como fue pensado.', image: '/hero-event.png', color: 'rose' },
]

const equipment = [
  { title: 'Sistema Line Array', category: 'Audio', description: 'Cobertura uniforme para eventos de gran escala.', image: '/sound-system.png' },
  { title: 'Cabezal Móvil Beam', category: 'Iluminación', description: 'Precisión y movimiento para crear escenas únicas.', image: '/lighting-rig.png' },
  { title: 'Pantalla LED P3', category: 'Video', description: 'Alta definición para interiores y exteriores.', image: '/led-screen.png' },
]

const events = [
  { image: '/event-1.png', type: 'Evento corporativo', location: 'Buenos Aires', className: 'md:col-span-7 md:row-span-2' },
  { image: '/event-2.png', type: 'Festival & música', location: 'San Isidro', className: 'md:col-span-5' },
  { image: '/event-3.png', type: 'Lanzamiento de marca', location: 'Palermo', className: 'md:col-span-5' },
]

const process = [
  { number: '01', title: 'Contanos qué necesitás', text: 'Escuchamos la idea, el espacio y los objetivos de tu evento.' },
  { number: '02', title: 'Diseñamos la solución', text: 'Nuestro equipo transforma el brief en una propuesta técnica clara.' },
  { number: '03', title: 'Coordinamos todo', text: 'Logística, montaje y operación. Nos ocupamos de cada detalle.' },
  { number: '04', title: 'Tu evento está listo', text: 'Disfrutá el resultado. Nosotros estamos detrás de escena.' },
]

function GlowButton({ children, href = whatsappUrl, variant = 'primary', className = '' }: { children: React.ReactNode; href?: string; variant?: 'primary' | 'outline'; className?: string }) {
  return (
    <a href={href} className={`glow-button group ${variant === 'outline' ? 'glow-button-outline' : ''} ${className}`}>
      <span className="relative z-10 flex items-center justify-center gap-2">{children}<ArrowUpRight size={16} strokeWidth={1.8} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
    </a>
  )
}

function Logo() {
  return <a href="#inicio" className="flex items-center gap-3" aria-label="Centro Rental inicio"><span className="logo-mark"><span /><span /><span /></span><span className="text-[15px] font-semibold tracking-[-0.03em] text-white">CENTRO<span className="text-white/40">.</span>RENTAL</span></a>
}

export default function Page() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeEquipment, setActiveEquipment] = useState(0)

  return (
    <main className="min-h-screen overflow-hidden bg-[#09090b] text-[#f4f4f5]">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.06] bg-[#09090b]/70 backdrop-blur-xl">
        <div className="mx-auto flex h-[74px] max-w-[1320px] items-center justify-between px-5 lg:px-8">
          <Logo />
          <nav className="hidden items-center gap-8 lg:flex">
            {['Inicio', 'Servicios', 'Equipamiento', 'Eventos', 'Nosotros'].map((item, i) => <a key={item} href={['#inicio', '#servicios', '#equipamiento', '#eventos', '#nosotros'][i]} className="text-[12px] text-white/55 transition-colors hover:text-white">{item}</a>)}
          </nav>
          <div className="hidden lg:block"><GlowButton className="px-5 py-2.5 text-[12px]">Solicitar presupuesto</GlowButton></div>
          <button className="text-white lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Abrir menú">{mobileOpen ? <X /> : <Menu />}</button>
        </div>
        {mobileOpen && <nav className="border-t border-white/[0.06] bg-[#09090b] px-5 pb-6 pt-4 lg:hidden">{['Inicio', 'Servicios', 'Equipamiento', 'Eventos', 'Nosotros'].map((item, i) => <a onClick={() => setMobileOpen(false)} key={item} href={['#inicio', '#servicios', '#equipamiento', '#eventos', '#nosotros'][i]} className="block border-b border-white/[0.06] py-4 text-sm text-white/70">{item}</a>)}<GlowButton className="mt-5 w-full">Solicitar presupuesto</GlowButton></nav>}
      </header>

      <section id="inicio" className="relative flex min-h-[760px] items-end overflow-hidden pb-20 pt-32 lg:min-h-screen lg:pb-28">
        <img src="/hero-event.png" alt="Producción técnica de un evento con escenario e iluminación" className="absolute inset-0 h-full w-full object-cover object-center opacity-70" />
        <div className="hero-grid absolute inset-0" /><div className="absolute inset-0 bg-gradient-to-r from-[#09090b] via-[#09090b]/65 to-[#09090b]/10" /><div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-[#09090b]/35" />
        <div className="ambient-orb absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-violet-500/20 blur-[120px]" />
        <div className="relative mx-auto w-full max-w-[1320px] px-5 lg:px-8"><div className="max-w-[830px]">
          <div className="mb-7 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.28em] text-violet-300"><span className="h-px w-8 bg-violet-400" />Producción técnica para eventos</div>
          <h1 className="text-balance text-[clamp(3.3rem,8vw,7.8rem)] font-medium leading-[0.91] tracking-[-0.07em]">Hacemos que tu evento <span className="hero-gradient-text">se vea,</span><br className="hidden sm:block" /> se escuche y <span className="hero-gradient-text">se sienta.</span></h1>
          <p className="mt-8 max-w-[530px] text-base leading-relaxed text-white/60 lg:text-lg">Soluciones de sonido, iluminación, pantallas y equipamiento técnico para eventos que dejan marca.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><GlowButton className="px-6 py-3.5">Pedí tu presupuesto</GlowButton><a href="#equipamiento" className="group flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm text-white transition-all hover:border-white/50 hover:bg-white/5">Ver equipamiento <MoveRight size={15} className="transition-transform group-hover:translate-x-1" /></a></div>
        </div><div className="mt-16 flex items-center gap-5 text-[10px] uppercase tracking-[0.2em] text-white/35"><span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />Disponibilidad 2026</span><span className="h-3 w-px bg-white/20" /><span>Buenos Aires · Argentina</span></div></div>
        <div className="absolute bottom-9 right-8 hidden items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/35 lg:flex"><span>Scroll para explorar</span><span className="h-10 w-px bg-gradient-to-b from-violet-400 to-transparent" /></div>
      </section>

      <section className="border-y border-white/[0.07] bg-[#0d0d10] py-5"><div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 text-[10px] uppercase tracking-[0.22em] text-white/30 lg:justify-between lg:px-8"><span>Sonido de precisión</span><span className="hidden h-1 w-1 rounded-full bg-violet-400 lg:block" /><span>Diseño de iluminación</span><span className="hidden h-1 w-1 rounded-full bg-violet-400 lg:block" /><span>Visuales que impactan</span><span className="hidden h-1 w-1 rounded-full bg-violet-400 lg:block" /><span>Operación integral</span></div></section>

      <section id="servicios" className="section-padding mx-auto max-w-[1320px] px-5 lg:px-8"><div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><span className="eyebrow">Lo que hacemos</span><h2 className="section-title mt-4">Una solución para<br /><span className="text-white/35">cada momento.</span></h2></div><p className="max-w-[330px] text-sm leading-relaxed text-white/45">Todo lo que necesitás para crear experiencias memorables, en un solo equipo.</p></div><div className="grid gap-3 md:grid-cols-2">{services.map((service) => <a href="#contacto" key={service.number} className="service-card group relative min-h-[300px] overflow-hidden rounded-2xl border border-white/10 bg-[#111114] p-6 md:min-h-[340px]"><img src={service.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-45 transition duration-700 group-hover:scale-105 group-hover:opacity-65" /><div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/50 to-transparent" /><div className="relative flex h-full flex-col justify-between"><span className="text-xs text-white/45">{service.number}</span><div><h3 className="text-2xl font-medium tracking-tight">{service.title}</h3><p className="mt-2 max-w-[280px] text-sm leading-relaxed text-white/55">{service.description}</p><span className="mt-5 flex items-center gap-2 text-xs text-white/70 opacity-0 transition group-hover:opacity-100">Conocé más <ArrowUpRight size={14} /></span></div></div></a>)}</div></section>

      <section id="equipamiento" className="border-y border-white/[0.07] bg-[#0d0d10] section-padding"><div className="mx-auto max-w-[1320px] px-5 lg:px-8"><div className="mb-12 flex items-end justify-between"><div><span className="eyebrow">El equipo detrás</span><h2 className="section-title mt-4">Equipamiento que<br /><span className="text-white/35">hace la diferencia.</span></h2></div><a href="#contacto" className="hidden items-center gap-2 text-xs text-white/60 transition hover:text-white sm:flex">Ver todo el catálogo <ArrowUpRight size={14} /></a></div><div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]"><div className="equipment-feature group relative min-h-[420px] overflow-hidden rounded-2xl border border-white/10"><img src={equipment[activeEquipment].image} alt={equipment[activeEquipment].title} className="absolute inset-0 h-full w-full object-cover transition duration-500" /><div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent" /><div className="relative flex h-full flex-col justify-between p-6 md:p-8"><span className="self-end rounded-full border border-white/20 px-3 py-1 text-[10px] uppercase tracking-widest text-white/65">01 / 03</span><div><span className="text-xs uppercase tracking-widest text-violet-300">{equipment[activeEquipment].category}</span><h3 className="mt-2 text-3xl font-medium">{equipment[activeEquipment].title}</h3><p className="mt-2 text-sm text-white/55">{equipment[activeEquipment].description}</p><a href={whatsappUrl} className="mt-5 inline-flex items-center gap-2 text-xs text-white">Consultar disponibilidad <ArrowUpRight size={14} /></a></div></div></div><div className="flex flex-col gap-3">{equipment.map((item, i) => <button key={item.title} onClick={() => setActiveEquipment(i)} className={`group flex items-center gap-4 rounded-xl border p-3 text-left transition ${activeEquipment === i ? 'border-violet-400/60 bg-violet-500/10' : 'border-white/10 bg-[#111114] hover:border-white/25'}`}><img src={item.image} alt="" className="h-20 w-24 rounded-lg object-cover opacity-75" /><span className="flex-1"><span className="block text-[10px] uppercase tracking-widest text-white/40">{item.category}</span><span className="mt-1 block text-sm font-medium">{item.title}</span></span><ArrowUpRight size={15} className="mr-2 text-white/35 transition group-hover:text-white" /></button>)}</div></div></div></section>

      <section id="eventos" className="section-padding mx-auto max-w-[1320px] px-5 lg:px-8"><div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><span className="eyebrow">Hecho realidad</span><h2 className="section-title mt-4">Eventos que<br /><span className="text-white/35">hablan por sí solos.</span></h2></div><p className="max-w-[290px] text-sm leading-relaxed text-white/45">Una selección de proyectos donde la técnica se vuelve experiencia.</p></div><div className="grid auto-rows-[220px] gap-3 md:grid-cols-12 md:auto-rows-[190px]">{events.map((event) => <div key={event.type} className={`event-card group relative overflow-hidden rounded-2xl ${event.className}`}><img src={event.image} alt={event.type} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" /><div className="absolute bottom-5 left-5"><p className="text-sm font-medium">{event.type}</p><p className="mt-1 text-xs text-white/50">{event.location}</p></div><div className="absolute right-4 top-4 rounded-full border border-white/20 p-2 opacity-0 transition group-hover:opacity-100"><ArrowUpRight size={15} /></div></div>)}</div></section>

      <section id="nosotros" className="border-y border-white/[0.07] bg-[#0d0d10] section-padding"><div className="mx-auto max-w-[1320px] px-5 lg:px-8"><div className="mb-14 max-w-2xl"><span className="eyebrow">Así trabajamos</span><h2 className="section-title mt-4">De la primera idea<br /><span className="text-white/35">al último aplauso.</span></h2></div><div className="grid gap-3 md:grid-cols-4">{process.map((item) => <div key={item.number} className="process-card border-t border-white/15 pt-5"><span className="text-xs text-violet-300">{item.number}</span><h3 className="mt-14 text-lg font-medium tracking-tight">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-white/45">{item.text}</p></div>)}</div></div></section>

      <section className="section-padding mx-auto max-w-[1320px] px-5 lg:px-8"><div className="grid gap-8 md:grid-cols-2 md:items-end"><div><span className="eyebrow">En números</span><h2 className="section-title mt-4">Experiencia que<br /><span className="text-white/35">se nota.</span></h2></div><p className="text-sm leading-relaxed text-white/45 md:pb-2">Indicadores preparados para acompañar el crecimiento de tu próximo gran evento.</p></div><div className="mt-14 grid grid-cols-2 gap-y-10 border-y border-white/10 py-10 md:grid-cols-4 md:gap-0">{[['+XX', 'Años de experiencia'], ['+XXX', 'Eventos realizados'], ['+XX', 'Equipos disponibles'], ['+XXX', 'Clientes atendidos']].map(([number, label]) => <div key={label} className="border-white/10 md:border-l md:pl-6 first:md:border-0 first:md:pl-0"><p className="text-4xl font-medium tracking-[-0.06em] md:text-5xl">{number}</p><p className="mt-2 text-[10px] uppercase tracking-widest text-white/40">{label}</p></div>)}</div></section>

      <section id="contacto" className="relative overflow-hidden border-y border-white/[0.07] bg-[#111118] py-24 md:py-32"><div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[140px]" /><div className="relative mx-auto max-w-[900px] px-5 text-center"><span className="eyebrow">Hablemos</span><h2 className="mt-6 text-balance text-[clamp(3rem,8vw,7rem)] font-medium leading-[0.92] tracking-[-0.07em]">Tu próximo evento <span className="hero-gradient-text">empieza acá.</span></h2><p className="mx-auto mt-7 max-w-[430px] text-base leading-relaxed text-white/55">Contanos qué tenés en mente y armamos una propuesta a la medida.</p><GlowButton className="mt-9 px-8 py-4 text-sm"><MessageCircle size={17} /> Consultar por WhatsApp</GlowButton></div></section>

      <footer className="mx-auto max-w-[1320px] px-5 pb-8 pt-14 lg:px-8"><div className="flex flex-col justify-between gap-12 md:flex-row"><div><Logo /><p className="mt-5 max-w-[250px] text-sm leading-relaxed text-white/40">Producción técnica para eventos que se sienten.</p></div><div className="grid grid-cols-2 gap-x-16 gap-y-8 sm:grid-cols-3"><div><p className="eyebrow mb-4">Navegación</p><div className="flex flex-col gap-3 text-sm text-white/50"><a href="#servicios" className="hover:text-white">Servicios</a><a href="#equipamiento" className="hover:text-white">Equipamiento</a><a href="#eventos" className="hover:text-white">Eventos</a></div></div><div><p className="eyebrow mb-4">Contacto</p><div className="flex flex-col gap-3 text-sm text-white/50"><a href={whatsappUrl} className="hover:text-white">WhatsApp</a><a href="mailto:hola@centrorental.com.ar" className="hover:text-white">Email</a><span>Buenos Aires, AR</span></div></div><div><p className="eyebrow mb-4">Seguinos</p><a href="#instagram" className="flex items-center gap-2 text-sm text-white/50 hover:text-white"><span className="flex h-4 w-4 items-center justify-center rounded-[5px] border border-current text-[9px]">◎</span> Instagram</a></div></div></div><div className="mt-14 flex flex-col justify-between gap-3 border-t border-white/10 pt-5 text-[10px] uppercase tracking-widest text-white/25 sm:flex-row"><span>© 2026 Centro Rental</span><span>Todos los derechos reservados</span></div></footer>
    </main>
  )
}
