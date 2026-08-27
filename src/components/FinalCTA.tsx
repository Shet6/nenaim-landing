'use client'

import { ArrowRight } from 'lucide-react'
import SectionWrapper from '@/components/SectionWrapper'

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Grid + glow background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(rgba(248,241,231,.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(248,241,231,.055) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, rgba(34,210,184,.15), transparent 30rem)
          `,
          backgroundSize: '96px 96px, 96px 96px, auto',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-3xl md:text-5xl font-light text-[#F8F1E7] leading-tight mb-8 max-w-4xl mx-auto tracking-tight">
              Если вам{' '}
              <span className="text-[#22D2B8]">надо</span>
              {' '}
              поднять свой уровень жизни, напишите, договоримся о работе
            </p>

            <a
              href="https://t.me/shetartm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#22D2B8] text-[#071316] font-medium text-base hover:bg-[#22D2B8]/90 transition-colors tracking-wide"
            >
              Напишите в Telegram
              <ArrowRight size={16} />
            </a>
          </div>
        </SectionWrapper>
      </div>
    </section>
  )
}
