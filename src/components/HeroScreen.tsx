'use client'

import { ArrowRight, ChevronDown, ShieldCheck } from 'lucide-react'

export default function HeroScreen() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 md:pb-24 overflow-hidden grid-bg">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center">

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#F8F1E7] leading-[1.08] mb-6 max-w-4xl">
            Поможем студенту стать репетитором с доходом{' '}
            <span className="text-[#22D2B8] font-medium">150к+/мес</span>{' '}
            при занятости до 15ч в неделю
          </h1>

          <div className="flex flex-col sm:flex-row items-center gap-3 mb-6 mt-2">
            <a
              href="https://t.me/shetartm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#22D2B8] text-[#071316] font-medium text-base hover:bg-[#22D2B8]/90 transition-colors tracking-wide w-full sm:w-auto"
            >
              Запишитесь
              <ArrowRight size={15} />
            </a>
            <a
              href="#program"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 border border-[rgba(248,241,231,0.16)] text-[rgba(248,241,231,0.8)] text-base font-light hover:bg-[rgba(248,241,231,0.045)] transition-colors tracking-wide w-full sm:w-auto"
            >
              Посмотрите программу
              <ChevronDown size={15} />
            </a>
          </div>

          <div className="flex items-start gap-3 px-4 py-3 border border-[rgba(34,210,184,0.2)] bg-[rgba(34,210,184,0.04)] text-base font-light text-[rgba(248,241,231,0.8)] max-w-xl mx-auto">
            <ShieldCheck size={16} className="mt-0.5 shrink-0 text-[#22D2B8]" />
            <span>
              Работа по договору. Есть <span className="text-[#22D2B8] font-medium">гарантия возврата предоплаты</span> при невыходе на результат.
            </span>
          </div>

        </div>
      </div>
    </section>
  )
}
