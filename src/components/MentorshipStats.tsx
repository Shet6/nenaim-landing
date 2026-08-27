import SectionWrapper from '@/components/SectionWrapper'

const metrics = [
  { value: '76', label: 'активных менти*' },
  { value: '9,23 из 10', label: 'средняя оценка созвонов' },
  { value: '9,44 из 10', label: 'средняя оценка наставников' },
  { value: '95%', label: 'вопросов получают ответ в течение часа' },
]

const praise = [
  { value: 69, label: 'помощь и обратная связь' },
  { value: 52, label: 'понятная система' },
  { value: 44, label: 'контроль и мотивация' },
  { value: 40, label: 'окружение' },
  { value: 37, label: 'практические разборы' },
  { value: 34, label: 'быстрый результат' },
]

export default function MentorshipStats() {
  return (
    <section id="stats" className="py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          <h2 className="text-3xl md:text-4xl font-light text-[#F8F1E7] text-center tracking-tight mb-8">
            Менторство в цифрах
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {metrics.map((metric) => (
              <div
                key={metric.value}
                className="panel px-4 py-5 md:px-5 md:py-6"
              >
                <p className="text-2xl md:text-3xl font-medium text-[#22D2B8] tracking-tight leading-none">
                  {metric.value}
                </p>
                <p className="mt-3 text-sm md:text-base font-light text-[rgba(248,241,231,0.72)] leading-snug">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 panel px-4 py-5 md:px-6 md:py-6">
            <h3 className="text-lg md:text-xl font-medium text-[#F8F1E7] tracking-tight">
              Что чаще всего отмечали
            </h3>
            <p className="mt-1 mb-5 text-sm font-light text-[rgba(248,241,231,0.5)]">
              Доля ответов, в которых упоминалась тема
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
              {praise.map((item) => (
                <div key={item.label}>
                  <div className="flex items-baseline justify-between gap-3 mb-2">
                    <span className="text-sm font-light text-[rgba(248,241,231,0.78)] leading-tight">
                      {item.label}
                    </span>
                    <span className="text-sm font-medium text-[#22D2B8] shrink-0">
                      {item.value}% ответов
                    </span>
                  </div>
                  <div className="h-1.5 bg-[rgba(248,241,231,0.09)] overflow-hidden">
                    <div
                      className="h-full bg-[#22D2B8]"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-4 text-xs md:text-sm font-light text-[rgba(248,241,231,0.46)] leading-relaxed max-w-5xl">
            *Количество активных менти на 21 августа 2026 года. Статистика обратной связи собрана по 89 ответам и отзывам. Один ответ мог относиться к нескольким темам. Скорость ответа посчитана по 919 прямым ответам на вопросы менти в основном Telegram-чате за период с 7 августа 2025 года по 21 июня 2026 года.
          </p>
        </SectionWrapper>
      </div>
    </section>
  )
}
