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
                  В менторстве будет блок по преподаванию от АР
                </h2>
                <p className="mt-5 text-lg md:text-xl font-light leading-relaxed text-[rgba(248,241,231,0.72)]">
                  Разберёте, как строить занятия, чтобы ученик понимал материал, видел свой прогресс и оставался с вами надолго.
                </p>
              </div>

              <dl className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8" aria-label="Опыт и аудитория Александра Романовича">
                <div className="min-h-28 p-4 bg-[rgba(34,210,184,0.09)] border border-[rgba(34,210,184,0.35)] flex flex-col justify-between">
                  <dt className="text-4xl md:text-5xl text-[#22D2B8] font-light tracking-tight">100+</dt>
                  <dd className="mt-3 text-sm leading-snug font-light text-[rgba(248,241,231,0.72)]">лекций по саморазвитию на YouTube</dd>
                </div>
                <div className="min-h-28 p-4 bg-[rgba(248,241,231,0.045)] border border-[rgba(248,241,231,0.16)] flex flex-col justify-between">
                  <dt className="text-4xl md:text-5xl text-[#F8F1E7] font-light tracking-tight">30k</dt>
                  <dd className="mt-3 text-sm leading-snug font-light text-[rgba(248,241,231,0.72)]">подписчиков на YouTube</dd>
                </div>
                <div className="min-h-28 p-4 bg-[rgba(248,241,231,0.045)] border border-[rgba(248,241,231,0.16)] flex flex-col justify-between">
                  <dt className="text-4xl md:text-5xl text-[#F8F1E7] font-light tracking-tight">7k</dt>
                  <dd className="mt-3 text-sm leading-snug font-light text-[rgba(248,241,231,0.72)]">подписчиков в Telegram</dd>
                </div>
                <div className="min-h-28 p-4 bg-[rgba(248,241,231,0.045)] border border-[rgba(248,241,231,0.16)] flex flex-col justify-between">
                  <dt className="text-3xl md:text-4xl text-[#22D2B8] font-light tracking-tight">80 000+</dt>
                  <dd className="mt-3 text-sm leading-snug font-light text-[rgba(248,241,231,0.72)]">обученных учеников</dd>
                </div>
                <div className="min-h-28 p-4 bg-[rgba(248,241,231,0.045)] border border-[rgba(248,241,231,0.16)] flex flex-col justify-between">
                  <dt className="text-xl md:text-2xl text-[#F8F1E7] font-light tracking-tight">Клуб Е</dt>
                  <dd className="mt-3 text-sm leading-snug font-light text-[rgba(248,241,231,0.72)]">основатель</dd>
                </div>
                <div className="min-h-28 p-4 bg-[rgba(248,241,231,0.045)] border border-[rgba(248,241,231,0.16)] flex flex-col justify-between">
                  <dt className="text-xl md:text-2xl text-[#F8F1E7] font-light tracking-tight">Школково</dt>
                  <dd className="mt-3 text-sm leading-snug font-light text-[rgba(248,241,231,0.72)]">бывший COO</dd>
                </div>
              </dl>

              <div className="mt-7 pt-6 border-t border-[rgba(248,241,231,0.16)]">
                <p className="text-lg text-[#F8F1E7] font-light leading-snug">
                  <span className="text-[#22D2B8]">Александр Романович Вотяков</span> - преподаватель и предприниматель.
                </p>
                <p className="mt-4 text-base font-light text-[rgba(248,241,231,0.52)] leading-relaxed">
                  Он мой наставник, и его опыт преподавания теперь будет внутри менторства.
                </p>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  )
}
