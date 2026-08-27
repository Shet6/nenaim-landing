'use client'

import { Check, ShieldCheck, Zap } from 'lucide-react'
import { cn, breakAnd } from '@/lib/utils'
import SectionWrapper from '@/components/SectionWrapper'

const plans = [
  {
    name: 'Без предоплаты',
    prepay: '0 ₽',
    percent: '30%',
    description: 'Нужно пройти отбор',
    badge: '',
    popular: false,
    cta: 'Пройдите отбор',
    href: '#form',
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
      'Найм ассистента',
      'Отработка возражений',
      'Коммуникация с родителями',
      'Исправление загонов',
    ],
  },
  {
    name: 'Оптимальный',
    prepay: '25 000 ₽',
    percent: '25%',
    description: 'Стартовый тариф',
    badge: 'ПОПУЛЯРНЫЙ',
    popular: true,
    cta: 'Выберите тариф',
    href: '#form',
    features: [
      'Всё, что в тарифе без предоплаты',
      'Возврат предоплаты при невыходе на результат',
      'Без отбора',
      'Пониженный процент с дохода',
    ],
  },
  {
    name: 'Премиум',
    prepay: '60 000 ₽',
    percent: '20%',
    description: 'Выделенный тариф',
    badge: '',
    popular: false,
    cta: 'Выберите тариф',
    href: '#form',
    features: [
      'Всё, что в тарифе без предоплаты',
      'Возврат предоплаты при невыходе на результат',
      'Без отбора',
      'Пониженный процент с дохода',
      'Дизайнер оформит анкету на Профи.ру',
      'Фотосессия с репетиторами',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-14 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-light text-[#F8F1E7] tracking-tight mb-4">
              Тарифы
            </h2>
            <p className="text-[rgba(248,241,231,0.62)] text-lg md:text-xl font-light max-w-2xl mx-auto">
              Выберите формат участия, который вам подходит
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={cn(
                  'relative rounded-2xl p-6 lg:p-8 transition-all duration-300 border',
                  plan.popular
                    ? 'bg-[rgba(248,241,231,0.06)] border-[#F8F1E7]/30 shadow-lg shadow-[#F8F1E7]/5 scale-105'
                    : 'bg-[rgba(248,241,231,0.03)] border-[rgba(248,241,231,0.1)] hover:border-[rgba(248,241,231,0.2)]'
                )}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 bg-[#F8F1E7] text-[#1A1A1A] text-xs font-medium px-4 py-1.5 rounded-full">
                      <Zap className="w-3.5 h-3.5" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-medium text-[#F8F1E7] mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-4xl font-light text-[#F8F1E7]">
                      {plan.prepay}
                    </span>
                    <span className="text-base text-[rgba(248,241,231,0.62)]">
                      + {plan.percent} с дохода
                    </span>
                  </div>
                  <p className="text-base text-[rgba(248,241,231,0.62)]">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#F8F1E7] shrink-0 mt-0.5" />
                      <span className="text-base text-[rgba(248,241,231,0.8)]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {index === 0 && (
                  <div className="mb-8 p-4 rounded-xl bg-[rgba(248,241,231,0.04)] border border-[rgba(248,241,231,0.1)]">
                    <p className="text-sm font-medium text-[#F8F1E7] mb-3">
                      Этапы отбора:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F8F1E7] mt-2 shrink-0" />
                        <span className="text-sm text-[rgba(248,241,231,0.72)]">
                          Мотивационное письмо
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F8F1E7] mt-2 shrink-0" />
                        <span className="text-sm text-[rgba(248,241,231,0.72)]">
                          Тестовое задание
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F8F1E7] mt-2 shrink-0" />
                        <span className="text-sm text-[rgba(248,241,231,0.72)]">
                          Собеседование
                        </span>
                      </li>
                    </ul>
                  </div>
                )}

                <a
                  href={plan.href}
                  className={cn(
                    'block w-full text-center py-3 px-6 rounded-xl text-sm font-medium transition-all duration-300',
                    plan.popular
                      ? 'bg-[#F8F1E7] text-[#1A1A1A] hover:bg-[rgba(248,241,231,0.9)]'
                      : 'bg-[rgba(248,241,231,0.08)] text-[#F8F1E7] hover:bg-[rgba(248,241,231,0.14)] border border-[rgba(248,241,231,0.15)]'
                  )}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </div>
    </section>
  )
}
