import SectionWrapper from '@/components/SectionWrapper'

const results = [
  'Поставишь цель',
  'Упакуешь анкету и отклики на Профи.ру',
  'Настроишь поток заявок от учеников',
  'Научишься правильно переписываться с родителями',
  'Будешь проводить пробные уроки, после которых покупают',
  'Построишь программу обучения, чтобы эффективно преподавать',
  'Масштабируешься от индивидуальных к групповым и параллельным занятиям',
  'Научишься делегировать задачи и начнёшь работать с ассистентом',
]

export default function TutorTrack() {
  return (
    <section id="tutor-track" className="py-14 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          <h2 className="text-4xl md:text-6xl font-light text-[#F8F1E7] text-center tracking-[-0.04em] mb-8 md:mb-10">
            Чего ты достигнешь
          </h2>
        </SectionWrapper>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3">
          {results.map((result, index) => (
            <SectionWrapper key={result} delay={index * 45}>
              <div className="h-full flex items-center gap-4 px-5 py-4 md:px-6 md:py-5 border border-[rgba(248,241,231,0.16)] bg-[rgba(14,23,30,0.64)] transition-colors duration-200 hover:border-[rgba(34,210,184,0.52)] hover:bg-[rgba(20,39,45,0.8)]">
                <span className="shrink-0 w-2 h-2 rounded-full bg-[#22D2B8]" aria-hidden="true" />
                <p className="text-lg md:text-xl font-light leading-snug tracking-tight text-[#F8F1E7]">
                  {result}
                </p>
              </div>
            </SectionWrapper>
          ))}
        </div>

        <SectionWrapper delay={380}>
          <div className="max-w-6xl mx-auto mt-3 px-5 py-6 md:px-7 md:py-7 border border-[rgba(34,210,184,0.48)] bg-[rgba(34,210,184,0.08)] text-center">
            <p className="text-2xl md:text-3xl font-light tracking-tight text-[#F8F1E7] text-balance">
              Начнешь зарабатывать <span className="text-[#22D2B8]">100-300к</span> на репетиторстве
            </p>
          </div>
        </SectionWrapper>

      </div>
    </section>
  )
}
