'use client'

import React, { useState } from 'react'
import { Send, CheckCircle2, MessageSquare } from 'lucide-react'
import { GlowButton } from '@/components/common/glow-button'
import { siteConfig } from '@/data/site'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [whatsappHref, setWhatsappHref] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'corporativo',
    dateLocation: '',
    details: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = encodeURIComponent(
      `Hola Centro Rental! Consulta de presupuesto:\nNombre: ${formData.name}\nTeléfono: ${formData.phone}\nEmail: ${formData.email}\nTipo de evento: ${formData.eventType}\nFecha/Locación: ${formData.dateLocation}\nDetalles: ${formData.details}`
    )
    const targetUrl = `https://wa.me/${siteConfig.whatsappPhone}?text=${message}`
    setWhatsappHref(targetUrl)
    window.open(targetUrl, '_blank')
    setSubmitted(true)
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-10 backdrop-blur-sm">
      <span className="eyebrow">Formulario web</span>
      <h3 className="mt-3 text-2xl font-medium text-white">
        Solicitá tu presupuesto
      </h3>
      <p className="mt-2 text-sm text-white/50">
        Completá los datos básicos del evento y conectate directamente con nuestro equipo técnico.
      </p>

      {submitted ? (
        <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-6 text-center">
          <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-400" />
          <h4 className="mt-3 text-lg font-medium text-white">
            ¡Consulta preparada en WhatsApp!
          </h4>
          <p className="mt-2 text-xs text-white/80">
            Se abrió WhatsApp con todos los datos técnicos de tu evento listos para enviar a nuestro equipo de guardia.
          </p>
          <div className="mt-5 flex flex-col items-center gap-3">
            <a
              href={whatsappHref || `https://wa.me/${siteConfig.whatsappPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-xs font-semibold text-black transition-colors hover:bg-[#20ba5a]"
            >
              <MessageSquare size={14} />
              Abrir WhatsApp nuevamente
            </a>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false)
                setFormData({
                  name: '',
                  phone: '',
                  email: '',
                  eventType: 'corporativo',
                  dateLocation: '',
                  details: '',
                })
              }}
              className="text-[11px] text-white/50 underline hover:text-white"
            >
              Completar otra consulta
            </button>
          </div>
        </div>
      ) : (
        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-white/80">
                Nombre y Apellido *
              </label>
              <input
                type="text"
                placeholder="Ej. Martín Gómez"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/25 focus:border-[#B5D448] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-white/80">
                Teléfono / WhatsApp *
              </label>
              <input
                type="tel"
                placeholder="+54 9 11 ..."
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/25 focus:border-[#B5D448] focus:outline-none"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-white/80">
                Email de contacto *
              </label>
              <input
                type="email"
                placeholder="nombre@empresa.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/25 focus:border-[#B5D448] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-white/80">
                Tipo de evento
              </label>
              <select
                className="mt-2 w-full rounded-xl border border-white/10 bg-[#121217] px-4 py-3 text-sm text-white focus:border-[#B5D448] focus:outline-none"
                value={formData.eventType}
                onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
              >
                <option value="corporativo">Corporativo / Congreso</option>
                <option value="recital">Recital / Festival</option>
                <option value="social">Gala / Social premium</option>
                <option value="lanzamiento">Lanzamiento de marca</option>
                <option value="alquiler">Alquiler de equipos específicos</option>
                <option value="otro">Otro tipo de producción</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium uppercase tracking-wider text-white/80">
              Fecha estimada & Locación
            </label>
            <input
              type="text"
              placeholder="Ej. 15 de Noviembre · Hotel / Salón en CABA"
              value={formData.dateLocation}
              onChange={(e) => setFormData({ ...formData, dateLocation: e.target.value })}
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/25 focus:border-[#B5D448] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-medium uppercase tracking-wider text-white/80">
              Detalles técnicos / Requerimientos
            </label>
            <textarea
              rows={4}
              placeholder="Contanos sobre las dimensiones, sonido requerido, pantallas LED, iluminación o rider técnico si disponés de uno."
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/25 focus:border-[#B5D448] focus:outline-none"
            />
          </div>

          <div className="pt-2">
            <GlowButton
              type="submit"
              showArrow={false}
              className="w-full justify-center py-4 text-sm"
            >
              <Send size={15} />
              Enviar consulta por WhatsApp
            </GlowButton>
            <p className="mt-3 text-center text-[11px] text-white/60">
              Al enviar, se abrirá WhatsApp con el resumen de tu evento para recibir atención técnica directa.
            </p>
          </div>
        </form>
      )}
    </div>
  )
}
