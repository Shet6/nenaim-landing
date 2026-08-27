'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDown, MessageCircle, X } from 'lucide-react'
import SectionWrapper from '@/components/SectionWrapper'
import { breakAnd } from '@/lib/utils'

function processText(text: string) {
  const parts = text.split(/(\d[\dк+–\-]*)/g)
  return parts.map((part, i) => {
    if (/^\d[\dк+–\-]*$/.test(part)) {
      return <span key={i} className="text-[#22D2B8] font-medium">{part}</span>
    }
    const brResult = breakAnd(part)
    return typeof brResult === 'string' ? brResult : brResult
  })
}

const storyParagraphs = [
  'На 1-2 курсе меня откровенно не устраивало, как я живу. Я долго ездил до университета, не мог позволить себе своё жильё, путешествия, хороший сервис и многие вещи, которые хотел для себя и близких.',
  'Поэтому я начал искать способ зарабатывать и пришёл в репетиторство. Опыта преподавания у меня тогда не было вообще.',
  'На накопленные деньги я купил курс по репетиторству за 150к. Думал, что там мне дадут готовую систему, но по факту курс оказался пустышкой. Дальше пришлось разбираться самому: искать учеников, учиться продавать, собирать нормальные занятия и выстраивать подготовку.',
  'Постепенно я улучшал свой формат и вышел на доход 250к+.',
  'В какой-то момент ко мне подошёл мой друг Никита и попросил научить его зарабатывать на репетиторстве. За 3 месяца он заработал около 300к. С этого и началось менторство.',
  'Я увидел, что у меня получается держать человека в темпе, разбирать продажи и подсказывать, что конкретно нужно исправить. Начал серьёзнее развиваться как наставник.',
  'Сейчас мне доверились уже больше 70 репетиторов. Они работают, растут в доходе, получают результаты и оставляют отзывы.',
  'Сам я дошёл до дохода более 500к в месяц, при этом проводил около 5 часов уроков в неделю. Учёт и поиск учеников забрал ассистент, часть работы я передал команде кураторов.',
  'Сильно помогла и работа с моим наставником Александром Романовичем Вотяковым. Он предприниматель, преподаватель и бывший COO Школково. Я ему очень благодарен.',
  'Мне до сих пор не нравится, что у многих студентов не закрыты даже базовые потребности. Они переживают из-за денег, экономят на нормальной еде, не могут путешествовать, помогать близким и покупать то, что давно хотели.',
  'Сейчас я полностью сфокусирован на менторстве. Хочу, чтобы студенты могли зарабатывать головой, нормально жить уже во время учёбы и не откладывать всё на потом.',
  'Если вам это тоже близко, напишите мне. Посмотрим на вашу ситуацию и обсудим, что можно сделать.',
]

export default function Trust() {
  const [expanded, setExpanded] = useState(false)
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (activeVideo && videoRef.current) {
      videoRef.current.play()
    }
  }, [activeVideo])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveVideo(null)
    }
    if (activeVideo) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [activeVideo])

  return (
    <section id="trust" className="py-14 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-light text-[#F8F1E7] tracking-tight leading-tight">
              Мне это не нравится или почему я стал репетитором
            </h2>
          </div>
        </SectionWrapper>

        <div className="max-w-5xl mx-auto">
          {/* Photos row — desktop side by side, mobile smaller */}
          <div className="flex flex-row gap-4 sm:gap-6 mb-8 sm:mb-12 justify-center">
            <div className="w-1/2 sm:w-1/2 max-w-[160px] sm:max-w-[220px] mx-auto sm:mx-0">
              <div className="aspect-[3/4] border border-[rgba(248,241,231,0.16)] bg-[rgba(248,241,231,0.045)] overflow-hidden">
                <img
                  src="/uploads/24bc1781-DSC_1_0152.JPG"
                  alt="Артем Максимович"
                  className="w-full h-full object-cover"
                  onError={(e) => { const i = e.target as HTMLImageElement; i.onerror = null; i.src = 'https://placehold.co/400x533/f5f5f0/78716c?text=АМ' }}
                />
              </div>
            </div>
            <div className="w-1/2 sm:w-1/2 max-w-[160px] sm:max-w-[220px] mx-auto sm:mx-0">
              <div className="aspect-[3/4] border border-[rgba(248,241,231,0.16)] bg-[rgba(248,241,231,0.045)] overflow-hidden">
                <img
                  src="/uploads/ce7e9791-telegram-cloud-photo-size-2-5271920447601709542-y.jpg"
                  alt="Артем Максимович"
                  className="w-full h-full object-cover"
                  onError={(e) => { const i = e.target as HTMLImageElement; i.onerror = null; i.src = 'https://placehold.co/400x533/f5f5f0/78716c?text=АМ' }}
                />
              </div>
            </div>
          </div>

          {/* Story below photos */}
          <div className="flex-1 min-w-0">
            <SectionWrapper delay={100}>
              <div className="panel p-6 md:p-8 transition-all duration-500">
                <p className="text-lg md:text-xl leading-relaxed text-[#F8F1E7] font-light">
                  {processText(storyParagraphs[0])}
                </p>

                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      expanded ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="space-y-4">
                      {storyParagraphs.slice(1).map((paragraph, index) => (
                        <p
                          key={paragraph}
                          className={`text-lg md:text-xl leading-relaxed text-[#F8F1E7] ${index === storyParagraphs.length - 2 ? 'font-medium' : 'font-light'}`}
                        >
                          {processText(paragraph)}
                        </p>
                      ))}

                      <div className="flex justify-start pt-4">
                        <a
                          href="https://t.me/shetartm"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-[#22D2B8] text-[#071316] font-medium text-base hover:bg-[#22D2B8]/90 transition-colors tracking-wide"
                        >
                          <MessageCircle size={16} />
                          Напишите в Telegram
                        </a>
                      </div>
                    </div>
                    </div>
                  </div>

                  <div className="flex justify-start mt-4">
                    <button
                      onClick={() => setExpanded(!expanded)}
                      className="inline-flex items-center gap-2 text-[#22D2B8] hover:text-[#22D2B8]/80 text-base font-medium transition-colors tracking-wide"
                    >
                      {expanded ? 'Скрыть историю' : 'Подробнее обо мне'}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          expanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </SectionWrapper>
            </div>

            {/* What tutoring gave me — carousel */}
            <div className={`mt-12 md:mt-16 ${expanded ? 'block' : 'hidden'}`}>
              <SectionWrapper>
                <div className="text-center mb-8">
                  <h3 className="text-3xl md:text-4xl font-light text-[#F8F1E7] tracking-tight leading-tight">
                    Что дало мне репетиторство и может дать вам
                  </h3>
                </div>
              </SectionWrapper>

              <div className="relative">
                {/* Scrollable carousel */}
                <div id="trust-carousel" className="overflow-x-auto scrollbar-hide -mx-4 sm:-mx-6 lg:-mx-8">
                  <div className="flex gap-4 px-4 sm:px-6 lg:px-8 pb-4" style={{ scrollSnapType: 'x mandatory' }}>
                    {[
                      { video: '/uploads/54038a8d-123.mp4', text: 'Сгонял на концерт Макса Коржа' },
                      { video: '/uploads/helicopter.mp4', text: 'Полетал на вертолёте' },
                      { img: '/uploads/altai.jpg', text: 'Съездил на Алтай' },
                      { img: '/uploads/d90a767f-IMG_7626.jpeg', text: 'Свозил девушку в Стамбул' },
                      { img: '/uploads/4c024c4c-IMG_5845.jpeg', text: 'Открыл для себя сноуборд' },
                      { img: '/uploads/f4b8c8fa-telegram-cloud-photo-size-2-5415976386603719174-y.jpg', text: 'Живу в крутой квартире' },
                      { img: '/uploads/9bf1792a-telegram-cloud-photo-size-2-5289512998714607097-y.jpg', text: 'Был на Великой китайской стене' },
                      { img: '/uploads/dff79519-telegram-cloud-photo-size-2-5303334401045370302-y.jpg', text: 'Начал работать в кофейнях вместо офиса' },
                      { img: '/uploads/cad7327b-telegram-cloud-photo-size-2-5226819743346979658-y.jpg', text: 'За моим питанием следит нутрициолог' },
                      { img: '/uploads/daad6303-telegram-cloud-photo-size-2-5226554065263731343-y.jpg', text: 'Обновил себе гардероб со стилистом' },

                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex-shrink-0 w-[300px] sm:w-[360px] lg:w-[400px] relative rounded-lg overflow-hidden group"
                        style={{ scrollSnapAlign: 'start' }}
                      >
                        <div className="aspect-[3/4] relative">
                          {'video' in item ? (
                            <div className="w-full h-full relative cursor-pointer" onClick={() => setActiveVideo(item.video!)}>
                              <video
                                src={item.video}
                                className="w-full h-full object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                              />
                              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="w-14 h-14 rounded-full bg-[#071316]/70 backdrop-blur-sm flex items-center justify-center border border-[rgba(248,241,231,0.2)]">
                                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#F8F1E7"><polygon points="8,5 19,12 8,19"/></svg>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <img
                              src={item.img}
                              alt=""
                              className="w-full h-full object-cover"
                              onError={(e) => { const el = e.target as HTMLImageElement; el.onerror = null; el.src = 'https://placehold.co/400x533/f5f5f0/78716c?text=Фото' }}
                            />
                          )}
                          {/* Dark gradient overlay at bottom */}
                          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#071316]/90 via-[#071316]/40 to-transparent pointer-events-none" />
                          {/* Text on top of gradient */}
                          <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-none">
                            <p className="text-base sm:text-lg font-medium text-[#F8F1E7] leading-tight">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow buttons */}
                <button
                  onClick={() => {
                    const container = document.querySelector('#trust-carousel')
                    if (container) container.scrollBy({ left: -320, behavior: 'smooth' })
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#071316]/80 backdrop-blur-sm border border-[rgba(248,241,231,0.16)] flex items-center justify-center text-[#F8F1E7] hover:bg-[#071316] transition-colors hidden sm:flex z-10 cursor-pointer"
                  aria-label="Назад"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                </button>
                <button
                  onClick={() => {
                    const container = document.querySelector('#trust-carousel')
                    if (container) container.scrollBy({ left: 320, behavior: 'smooth' })
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#071316]/80 backdrop-blur-sm border border-[rgba(248,241,231,0.16)] flex items-center justify-center text-[#F8F1E7] hover:bg-[#071316] transition-colors hidden sm:flex z-10 cursor-pointer"
                  aria-label="Вперёд"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </button>
              </div>

              {/* Chips below carousel — grid 2-3 per row on desktop, 1 per row on mobile */}
              <div className="mt-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    'Чаще езжу на такси',
                    'Теперь помогаю родителям деньгами',
                    'Не паникую при виде блюда дороже 1000 рублей',
                    'Получаю кучу положительного фидбека от учеников и их родителей',
                    'Регулярно езжу в отпуск',
                    'Больше не хожу по магазинам, только доставка',
                    'Квартиру убирает клининг',
                    'Чувствую финансовую стабильность',
                    'Намного меньше стрессую из-за будущего',
                  ].map((chip, i) => (
                    <span
                      key={i}
                      className="w-full px-5 py-3 text-base sm:text-lg font-light tracking-wide text-[rgba(248,241,231,0.85)] bg-[rgba(248,241,231,0.045)] border border-[rgba(248,241,231,0.16)] hover:bg-[rgba(248,241,231,0.07)] transition-colors duration-300 flex items-center justify-center text-center"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
        </div>
      </div>

      {/* Video modal overlay */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#071316]/95 backdrop-blur-md"
          onClick={() => setActiveVideo(null)}
        >
          <div className="relative w-full max-w-4xl mx-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 text-[#F8F1E7]/70 hover:text-[#F8F1E7] transition-colors z-10"
              aria-label="Закрыть"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
              <video
                ref={videoRef}
                src={activeVideo}
                className="w-full h-full"
                controls
                autoPlay
                playsInline
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
