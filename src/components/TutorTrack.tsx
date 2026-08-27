import SectionWrapper from '@/components/SectionWrapper'

const stages = [
  {
    title: 'Цель и цифры',
    text: 'Понял, сколько хочу зарабатывать, сколько стоит мой час и какая загрузка мне нужна.',
  },
  {
    title: 'Анкета и позиционирование',
    text: 'Собрал анкету на Профи.ру и рабочий Telegram. Добавил нормальные фото, регалии, цену и тексты без воды.',
  },
  {
    title: 'Поток заявок',
    text: 'Настроил поток заявок, написал свои отклики и научился оценивать их эффективность.',
  },
  {
    title: 'Переписка с родителем',
    text: 'Перестал вести переписку наугад. Умею выяснить запрос и довести подходящего ученика до пробного.',
  },
  {
    title: 'Пробный урок и оплата',
    text: 'Ученику комфортно на пробном, он понимает мои объяснения и хочет заниматься дальше. Родитель понимает, как я помогу, и оплачивает занятия.',
  },
  {
    title: 'Система занятий',
    text: 'Занятия собраны в систему. Есть план, домашка, контроль прогресса и обратная связь родителю.',
  },
  {
    title: 'Чек и новые форматы',
    text: 'Поднял цену и добавил форматы, которые не упираются в количество часов: группы, параллельные занятия и интенсивы.',
  },
  {
    title: 'Делегирование',
    text: 'Вынес учеников и цифры в CRM, передал рутину ассистенту. Больше не держу всё в голове.',
  },
]

export default function TutorTrack() {
  return (
    <section id="tutor-track" className="py-14 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          <h2 className="text-4xl md:text-6xl font-light text-[#F8F1E7] text-center tracking-[-0.04em] mb-8 md:mb-10">
            Трек репетитора
          </h2>
        </SectionWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {stages.map((stage, index) => (
            <SectionWrapper key={stage.title} delay={index * 50}>
              <article className="h-full min-h-[220px] p-5 md:p-6 border border-[rgba(248,241,231,0.16)] bg-[rgba(14,23,30,0.88)] transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(34,210,184,0.55)] hover:bg-[rgba(20,39,45,0.98)]">
                <span className="text-sm font-medium tracking-[0.12em] text-[#22D2B8]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-7 text-xl md:text-2xl font-normal tracking-tight text-[#F8F1E7] leading-tight">
                  {stage.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-[rgba(248,241,231,0.6)]">
                  {stage.text}
                </p>
              </article>
            </SectionWrapper>
          ))}
        </div>

      </div>
    </section>
  )
}
