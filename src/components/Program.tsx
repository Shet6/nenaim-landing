import { BookOpen, Calendar, MessageCircle, Users, Star, Target, GraduationCap, Briefcase } from 'lucide-react'
import { breakAnd } from '@/lib/utils'
import SectionWrapper from '@/components/SectionWrapper'

const mentorshipFeatures = [
  { icon: BookOpen, title: 'База знаний', desc: 'с видео, инструкциями, шаблонами и материалами' },
  { icon: Calendar, title: 'Созвоны', desc: 'еженедельные обучающие встречи' },
  { icon: Users, title: 'Наставники', desc: 'с доходом 200–400к+' },
  { icon: Star, title: 'Сообщество', desc: 'репетиторов с похожими целями' },
  { icon: GraduationCap, title: 'Поддержка', desc: 'на протяжении года' },
  { icon: Briefcase, title: 'Без бездельников', desc: 'таких я буду кикать лично' },
  { icon: MessageCircle, title: 'Обратная связь', desc: 'постоянная поддержка в чатах' },
  { icon: Target, title: 'Разборы', desc: 'ваших откликов, переписок и пробных уроков' },
]

export default function Program() {
  return (
    <section id="program" className="py-14 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Что будет внутри менторства */}
        <SectionWrapper>
          <h3 className="text-3xl md:text-4xl font-light text-[#F8F1E7] text-center tracking-tight mb-6">
            В этом всём вам помогут
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 max-w-5xl mx-auto items-stretch">
            {mentorshipFeatures.map((feature, idx) => (
              <SectionWrapper key={feature.title} delay={idx * 50}>
                <div className="panel p-4 text-center h-full flex flex-col items-center justify-center gap-2">
                  <feature.icon size={20} className="text-[#22D2B8] shrink-0" />
                  <div>
                    <p className="text-base font-medium text-[#F8F1E7]">{feature.title}</p>
                    <p className="text-sm text-[rgba(248,241,231,0.5)] font-light mt-0.5">{breakAnd(feature.desc)}</p>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>

          <div className="panel max-w-5xl mx-auto mt-3 p-6 md:p-8">
            <h3 className="m-0 text-lg font-medium tracking-tight text-[#22D2B8]">Идеальный результат</h3>
            <p className="mt-2 max-w-4xl text-base font-light leading-relaxed text-[#F8F1E7]">
              Вы зарабатываете 150-300к в месяц, ведёте уроки не больше 15 часов в неделю, учётом и поиском учеников занимается ассистент
            </p>
          </div>
        </SectionWrapper>

      </div>
    </section>
  )
}
