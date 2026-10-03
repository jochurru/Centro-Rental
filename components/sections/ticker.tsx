import React, { Fragment } from 'react'
import { tickerItems } from '@/data/site'

export function Ticker() {
  return (
    <section className="border-y border-white/[0.07] bg-[#0d0d10] py-5">
      <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 text-[10px] uppercase tracking-[0.22em] text-white/30 lg:justify-between lg:px-8">
        {tickerItems.map((item, index) => (
          <Fragment key={item}>
            <span>{item}</span>
            {index < tickerItems.length - 1 && (
              <span className="hidden h-1 w-1 rounded-full bg-violet-400 lg:block" />
            )}
          </Fragment>
        ))}
      </div>
    </section>
  )
}
