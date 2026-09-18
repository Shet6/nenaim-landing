'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Pause, Play } from 'lucide-react'
import SectionWrapper from '@/components/SectionWrapper'

const reviews = [
  {
    name: 'Роман',
    meta: 'Преподаватель английского',
    src: '/uploads/review-roman-english.mp4',
    poster: '/uploads/posters/review-roman-english.jpg',
    tags: ['Сообщество', 'Поддержка'],
  },
  {
    name: 'Юра',
    meta: 'Репетитор',
    src: '/uploads/review-yura-math.mp4',
    poster: '/uploads/posters/review-yura-math.jpg',
    tags: ['250к+/мес', 'Первые ученики'],
  },
  {
    name: 'Виктор',
    meta: 'Репетитор',
    src: '/uploads/review-viktor-math.mp4',
    poster: '/uploads/posters/review-viktor-math.jpg',
    tags: ['Первые шаги', 'Окружение'],
  },
  {
    name: 'Сергей',
    meta: 'Репетитор',
    src: '/uploads/review-sergey-informatics.mp4',
    poster: '/uploads/posters/review-sergey-informatics.jpg',
    tags: ['250к/мес', 'Новый уровень'],
  },
  {
    name: 'Карим',
    meta: 'Репетитор',
    src: '/uploads/review-karim-physics.mp4',
    poster: '/uploads/posters/review-karim-physics.jpg',
    tags: ['Атмосфера', 'Новые друзья'],
  },
  {
    name: 'Екатерина',
    meta: 'Преподаватель биологии',
    src: '/uploads/review-ekaterina.mp4',
    poster: '/uploads/posters/review-ekaterina.jpg',
    tags: ['Понятный трек', 'Пробные уроки'],
  },
  {
    name: 'Сергей',
    meta: 'Преподаватель химии',
    src: '/uploads/review-sergey-mendeleev.mp4',
    poster: '/uploads/posters/review-sergey-mendeleev.jpg',
    tags: ['Расписание заполнено', 'Поддержка'],
  },
  {
    name: 'Дмитрий',
    meta: 'Репетитор',
    src: '/uploads/review-dmitry-vasiliev.mp4',
    poster: '/uploads/posters/review-dmitry-vasiliev.jpg',
    tags: ['Быстрый рост', 'Челленджи'],
  },
  {
    name: 'Семён',
    meta: 'Репетитор',
    src: '/uploads/review-semen-math.mp4',
    poster: '/uploads/posters/review-semen-math.jpg',
    tags: ['100к/мес', 'Старт с нуля'],
  },
  {
    name: 'Настя',
    meta: 'Репетитор',
    src: '/uploads/review-nastya-math.mp4',
    poster: '/uploads/posters/review-nastya-math.jpg',
    tags: ['160-170к/мес', 'Окружение'],
  },
  {
    name: 'Ваня',
    meta: 'Репетитор',
    src: '/uploads/review-vanya-math.mp4',
    poster: '/uploads/posters/review-vanya-math.jpg',
    tags: ['350к/мес', '10 ч/нед'],
  },
  {
    name: 'Ришат',
    meta: 'Репетитор',
    src: '/uploads/review-rishat-math.mp4',
    poster: '/uploads/posters/review-rishat-math.jpg',
    tags: ['Системность', 'Рост'],
  },
  {
    name: 'Настя',
    meta: 'Преподаватель русского',
    src: '/uploads/review-nastya-russian.mp4',
    poster: '/uploads/posters/review-nastya-russian.jpg',
    tags: ['171к/мес', 'Практика'],
  },
  {
    name: 'Костя',
    meta: 'Репетитор',
    src: '/uploads/review-kostya-informatics.mp4',
    poster: '/uploads/posters/review-kostya-informatics.jpg',
    tags: ['Предпринимательство', 'Продажи'],
  },
  {
    name: 'Никита',
    meta: 'Репетитор',
    src: '/uploads/review-nikita-informatics.mp4',
    poster: '/uploads/posters/review-nikita-informatics.png',
    tags: ['Обратная связь'],
  },
]

function VideoReview({ src, poster, name }: { src: string; poster: string; name: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const animationRef = useRef<number | null>(null)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [speed, setSpeed] = useState(1)
  const [activated, setActivated] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const sync = () => {
    const video = videoRef.current
    if (!video) return
    setDuration(Number.isFinite(video.duration) ? video.duration : 0)
    setCurrentTime(video.currentTime)
  }

  const progress = duration > 0 ? Math.min(100, (currentTime / duration) * 100) : 0

  const stopTracking = () => {
    if (animationRef.current !== null) cancelAnimationFrame(animationRef.current)
    animationRef.current = null
  }

  const trackProgress = () => {
    sync()
    const video = videoRef.current
    if (video && !video.paused && !video.ended) {
      animationRef.current = requestAnimationFrame(trackProgress)
    }
  }

  const startTracking = () => {
    stopTracking()
    animationRef.current = requestAnimationFrame(trackProgress)
  }

  useEffect(() => stopTracking, [])

  useEffect(() => {
    if (!activated || !videoRef.current) return
    setLoading(true)
    videoRef.current.play().catch(() => setLoading(false))
  }, [activated])

  const toggleSpeed = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    const nextSpeed = speed === 1 ? 2 : 1
    if (videoRef.current) videoRef.current.playbackRate = nextSpeed
    setSpeed(nextSpeed)
  }

  const togglePlayback = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused || video.ended) {
      setLoading(true)
      video.play().catch(() => setLoading(false))
      return
    }
    video.pause()
  }

  return (
    <div className="relative grid aspect-square place-items-center">
      <div
        className="relative w-[86%] rounded-full p-1"
        style={{ background: `conic-gradient(#22D2B8 ${progress * 3.6}deg, rgba(248,241,231,0.2) 0)` }}
      >
        {activated ? (
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            playsInline
            preload="auto"
            aria-label={`Видеоотзыв ${name}`}
            onLoadedMetadata={sync}
            onLoadedData={() => setLoading(false)}
            onCanPlay={() => setLoading(false)}
            onError={() => setLoading(false)}
            onDurationChange={sync}
            onTimeUpdate={sync}
            onPlay={() => {
              setIsPlaying(true)
              startTracking()
            }}
            onPause={() => {
              setIsPlaying(false)
              stopTracking()
              sync()
            }}
            onEnded={() => {
              setIsPlaying(false)
              stopTracking()
              sync()
            }}
            className="block w-full aspect-square rounded-full object-cover bg-[#071316]"
          />
        ) : (
          <button
            type="button"
            onClick={() => setActivated(true)}
            aria-label={`Посмотреть видеоотзыв ${name}`}
            className="group relative block w-full aspect-square overflow-hidden rounded-full bg-[#071316]"
          >
            <img
              src={poster}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <span className="absolute inset-0 grid place-items-center bg-[#071316]/10 transition-colors group-hover:bg-[#071316]/20">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[#071316]/75 text-[#F8F1E7] backdrop-blur-sm">
                <Play size={20} fill="currentColor" className="translate-x-0.5" />
              </span>
            </span>
          </button>
        )}
        {activated && !loading && (
          <button
            type="button"
            onClick={togglePlayback}
            aria-label={isPlaying ? `Поставить видеоотзыв ${name} на паузу` : `Продолжить видеоотзыв ${name}`}
            className="absolute inset-1 grid place-items-center rounded-full bg-[#071316]/10 text-[#F8F1E7] transition-colors hover:bg-[#071316]/25"
          >
            <span className="grid h-12 w-12 place-items-center rounded-full bg-[#071316]/75 backdrop-blur-sm">
              {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={20} fill="currentColor" className="translate-x-0.5" />}
            </span>
          </button>
        )}
        {loading && (
          <span className="pointer-events-none absolute inset-1 grid place-items-center rounded-full bg-[#071316]/45 text-xs font-medium text-[#F8F1E7]">
            Загружается…
          </span>
        )}
      </div>
      {activated && (
        <button
          type="button"
          onClick={toggleSpeed}
          aria-label={speed === 1 ? 'Включить скорость 2x' : 'Вернуть скорость 1x'}
          className={`absolute right-1 top-1 z-10 min-w-8 rounded-full border px-2 py-1 text-[10px] font-semibold leading-none ${speed === 2 ? 'border-[#22D2B8] bg-[#22D2B8] text-[#071316]' : 'border-[rgba(248,241,231,0.3)] bg-[rgba(7,19,22,0.78)] text-[#F8F1E7]'}`}
        >
          {speed}×
        </button>
      )}
    </div>
  )
}

export default function Profiles() {
  return (
    <section id="profiles" className="py-14 md:py-20 relative grid-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-light text-[#F8F1E7] tracking-tight">
              За что хвалят ненайм
            </h2>
          </div>
        </SectionWrapper>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto mb-10">
          {reviews.map((review, index) => (
            <SectionWrapper key={review.src} delay={(index % 4) * 80}>
              <article className="p-1 md:p-2 text-center h-full">
                <VideoReview src={review.src} poster={review.poster} name={review.name} />
                <h3 className="text-base md:text-lg font-medium text-[#F8F1E7] mt-4">{review.name}</h3>
                {review.meta && (
                  <p className="mt-1.5 flex flex-wrap items-center justify-center gap-1.5 text-[11px] font-light text-[rgba(248,241,231,0.5)] md:text-xs">
                    <span>Преподаватель</span>
                    <span className="font-medium text-[#8CE8D9] underline decoration-[#22D2B8]/55 decoration-1 underline-offset-4">
                      {review.meta.replace('Преподаватель ', '')}
                    </span>
                  </p>
                )}
                <div className="mt-3 flex min-h-6 flex-wrap items-center justify-center gap-1.5">
                  {review.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#22D2B8]/35 bg-[#22D2B8]/10 px-2.5 py-1 text-[10px] font-medium leading-none text-[#8CE8D9] md:text-[11px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </SectionWrapper>
          ))}
        </div>

        <SectionWrapper>
          <div className="text-center">
            <div className="panel px-6 py-4 mb-6 max-w-2xl mx-auto">
              <p className="text-[#F8F1E7] text-base md:text-lg font-light leading-relaxed">
                Обязательно посмотрите{' '}
                <span className="text-[#22D2B8] font-medium">живые</span>{' '}
                отзывы, можете задать ребятам любые вопросы в ЛС
              </p>
            </div>
            <a
              href="https://t.me/shetart"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#22D2B8] text-[#071316] font-medium text-sm hover:bg-[#22D2B8]/90 transition-colors tracking-wide"
            >
              Посмотрите отзывы в TG
              <ArrowUpRight size={16} />
            </a>
          </div>
        </SectionWrapper>
      </div>
    </section>
  )
}
