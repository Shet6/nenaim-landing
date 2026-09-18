'use client'

import { Check, Zap } from 'lucide-react'
import SectionWrapper from '@/components/SectionWrapper'

const tariffs = [
  {
    name: 'Без предоплаты',
    prepay: '0 ₽',
    percent: '30%',
    description: 'Нужно пройти отбор',
    cta: 'Пройти отбор',
    popular: false,
    features: [
      'Наставник',
      'База знаний',
      'Обучающие созвоны',
      'Обратная связь в чатах',
      'Сообщество репетиторов',
      'Поддержка на протяжении года',
      'Профи.ру',
      'Продажи',
      'Масштабирование',
      'Параллельные уроки',
    ],
  },
  {
    name: 'Оптимальный',
    prepay: '25 000 ₽',
    percent: '25%',
    description: 'Стартовый тариф',
    cta: 'Выберите тариф',
    popular: true,
    features: [
      'Всё, что в тарифе без предоплаты',
      'Возврат предоплаты при невыходе на результат',
      'Без отбора',
      'Пониженный процент от прироста дохода',
    ],
  },
  {
    name: 'Премиум',
    prepay: '100 000 ₽',
    percent: '20%',
    description: 'Выделенный тариф',
    cta: 'Выберите тариф',
    popular: false,
    features: [
      'Всё, что в тарифе без предоплаты',
      'Возврат предоплаты при невыходе на результат',
      'Без отбора',
      'Пониженный процент от прироста дохода',
      'Дизайнер оформит анкету на Профи.ру',
      'Фотосессия с репетиторами',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-[#F8F1E7] tracking-tight mb-4">
              Тарифы
            </h2>
            <p className="text-[rgba(248,241,231,0.62)] text-lg md:text-xl font-light max-w-2xl mx-auto">
              Выберите формат участия, который Вам подходит
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {tariffs.map((tariff) => (
              <article
                key={tariff.name}
                className={`relative flex flex-col rounded-2xl p-6 lg:p-8 border ${
                  tariff.popular
                    ? 'bg-[rgba(248,241,231,0.06)] border-[#F8F1E7]/30 shadow-lg shadow-[#F8F1E7]/5 md:scale-105'
                    : 'bg-[rgba(248,241,231,0.03)] border-[rgba(248,241,231,0.1)] hover:border-[rgba(248,241,231,0.2)]'
                }`}
              >
                {tariff.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 bg-[#F8F1E7] text-[#1A1A1A] text-xs font-medium px-4 py-1.5 rounded-full">
                      <Zap className="w-3.5 h-3.5" />
                      ПОПУЛЯРНЫЙ
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-medium text-[#F8F1E7] mb-2">{tariff.name}</h3>
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-1">
                    <span className="text-4xl font-light text-[#F8F1E7]">{tariff.prepay}</span>
                    <span className="text-base text-[rgba(248,241,231,0.72)]">
                      + {tariff.percent}{' '}
                      <span className="text-[#F8F1E7] underline decoration-[#22D2B8] decoration-1 underline-offset-4">
                        от прироста дохода
                      </span>
                    </span>
                  </div>
                  <p className="text-base text-[rgba(248,241,231,0.62)]">{tariff.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tariff.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#F8F1E7] shrink-0 mt-0.5" />
                      <span className="text-base text-[rgba(248,241,231,0.8)]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#form"
                  className={`mt-auto block w-full text-center py-3 px-6 rounded-xl text-sm font-medium transition-all duration-300 ${
                    tariff.popular
                      ? 'bg-[#F8F1E7] text-[#1A1A1A] hover:bg-[rgba(248,241,231,0.9)]'
                      : 'bg-[rgba(248,241,231,0.08)] text-[#F8F1E7] hover:bg-[rgba(248,241,231,0.14)] border border-[rgba(248,241,231,0.15)]'
                  }`}
                >
                  {tariff.cta}
                </a>
              </article>
            ))}
          </div>

          <p className="mt-7 text-center text-sm font-light text-[rgba(248,241,231,0.58)]">
            Процент считаем только с суммы, на которую вырос Ваш доход.
          </p>
        </SectionWrapper>
      </div>
    </section>
  )
}
