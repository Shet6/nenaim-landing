import SectionWrapper from '@/components/SectionWrapper'

export default function ARTeaching() {
  return (
    <section className="py-14 md:py-20 relative" aria-labelledby="ar-teaching-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          <div className="max-w-5xl mx-auto grid md:grid-cols-[0.78fr_1.22fr] panel overflow-hidden">
            <div className="min-h-[360px] md:min-h-full bg-[#0E171E]">
              <img
                src="/uploads/ar-votyakov.png"
                alt="Александр Романович Вотяков"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-between">
              <div>
                <h2 id="ar-teaching-title" className="text-3xl md:text-4xl font-light text-[#F8F1E7] tracking-tight leading-tight text-balance">
                  Александр Романович расскажет, как преподавать
                </h2>
                <p className="mt-5 text-xl md:text-2xl font-light leading-relaxed text-[rgba(248,241,231,0.78)]">
                  Преподавал в Школково и был там операционным директором, основал сообщество по повышению уровня жизни для сотней студентов.
                </p>
              </div>

              <dl className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8" aria-label="Опыт и аудитория Александра Романовича">
                <div className="min-h-32 p-5 bg-[rgba(34,210,184,0.09)] border border-[rgba(34,210,184,0.35)] flex flex-col justify-between">
                  <dt className="text-4xl md:text-5xl text-[#22D2B8] font-light tracking-tight whitespace-nowrap">80к+</dt>
                  <dd className="mt-4 text-sm leading-snug font-light text-[rgba(248,241,231,0.72)]">обученных учеников</dd>
                </div>
                <div className="min-h-32 p-5 bg-[rgba(248,241,231,0.045)] border border-[rgba(248,241,231,0.16)] flex flex-col justify-between">
                  <dt className="text-4xl md:text-5xl text-[#F8F1E7] font-light tracking-tight">100+</dt>
                  <dd className="mt-4 text-sm leading-snug font-light text-[rgba(248,241,231,0.72)]">лекций по саморазвитию на YouTube</dd>
                </div>
                <div className="min-h-32 p-5 bg-[rgba(248,241,231,0.045)] border border-[rgba(248,241,231,0.16)] flex flex-col justify-between">
                  <dt className="text-4xl md:text-5xl text-[#F8F1E7] font-light tracking-tight">50к+</dt>
                  <dd className="mt-4 text-sm leading-snug font-light text-[rgba(248,241,231,0.72)]">аудитория в соцсетях</dd>
                </div>
              </dl>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  )
}
