'use client'

import { CheckCircle, XCircle } from 'lucide-react'
import React from 'react'
import SectionWrapper from '@/components/SectionWrapper'

const forYou: React.ReactNode[] = [
  'Хотите вырасти на 100-300к/мес',
  'Любите математику, физику или информатику',
  'Не хотите работать больше 15ч в неделю',
  'Открыты к обратной связи',
  'Хотите научиться продажам',
  'Вам реально надо',
]

const notForYou = [
  'Ищете волшебную таблетку',
  'Не хотите поднимать уровень жизни',
  'Думаете, что всё очень легко',
  'Не готовы учиться и ошибаться',
  'Не любите объяснять материал',
  'Не готовы прикладывать усилия',
]

export default function Who() {
  return (
    <section id="who" className="py-14 md:py-20 relative grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-light text-[#F8F1E7] tracking-tight mb-4">
              Кому подойдет менторство
            </h2>
            <p className="text-[rgba(248,241,231,0.62)] text-lg md:text-xl font-light max-w-2xl mx-auto">
              Честно о том, кому это поможет, а кому - нет
            </p>
          </div>
        </SectionWrapper>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto items-stretch">
          {/* For you */}
          <SectionWrapper className="h-full">
            <div className="panel p-6 md:p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-[rgba(34,210,184,0.12)] flex items-center justify-center">
                  <CheckCircle size={16} className="text-[#22D2B8]" />
                </div>
                <h3 className="text-lg font-medium text-[#F8F1E7] tracking-tight">
                  Подойдёт вам, если:
                </h3>
              </div>
              <ul className="space-y-3">
                {forYou.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={14} className="text-[#22D2B8] mt-0.5 shrink-0" />
                    <span className="text-base text-[rgba(248,241,231,0.85)] font-light">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </SectionWrapper>

          {/* Not for you */}
          <SectionWrapper delay={150} className="h-full">
            <div className="panel p-6 md:p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-[rgba(239,68,68,0.12)] flex items-center justify-center">
                  <XCircle size={16} className="text-[#EF4444]" />
                </div>
                <h3 className="text-lg font-medium text-[#F8F1E7] tracking-tight">
                  Не подойдёт вам, если:
                </h3>
              </div>
              <ul className="space-y-3">
                {notForYou.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <XCircle size={14} className="text-[#EF4444] mt-0.5 shrink-0" />
                    <span className="text-base text-[rgba(248,241,231,0.85)] font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SectionWrapper>
        </div>
      </div>
    </section>
  )
}
