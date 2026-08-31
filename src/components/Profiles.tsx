'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import SectionWrapper from '@/components/SectionWrapper'

const reviews = [
  {
    name: 'Роман',
    meta: 'Преподаватель английского языка',
    src: '/uploads/review-roman-english.mp4',
    poster: '/uploads/posters/review-roman-english.png',
  },
  {
    name: 'Юра',
    meta: 'Преподаватель математики',
    src: '/uploads/review-yura-math.mp4',
    poster: '/uploads/posters/review-yura-math.png',
  },
  {
    name: 'Виктор',
    meta: 'Преподаватель математики',
    src: '/uploads/review-viktor-math.mp4',
    poster: '/uploads/posters/review-viktor-math.png',
  },
  {
    name: 'Сергей',
    meta: 'Преподаватель информатики',
    src: '/uploads/review-sergey-informatics.mp4',
    poster: '/uploads/posters/review-sergey-informatics.png',
  },
  {
    name: 'Карим',
    meta: 'Преподаватель физики',
    src: '/uploads/review-karim-physics.mp4',
    poster: '/uploads/posters/review-karim-physics.png',
  },
  {
    name: 'Екатерина',
    meta: 'Преподаватель биологии',
    src: '/uploads/review-ekaterina.mp4',
    poster: '/uploads/posters/review-ekaterina.png',
  },
  {
    name: 'Сергей',
    meta: 'Преподаватель химии',
    src: '/uploads/review-sergey-mendeleev.mp4',
    poster: '/uploads/posters/review-sergey-mendeleev.png',
  },
  {
    name: 'Дмитрий',
    meta: 'Преподаватель математики',
    src: '/uploads/review-dmitry-vasiliev.mp4',
    poster: '/uploads/posters/review-dmitry-vasiliev.png',
  },
]

function VideoReview({ src, poster, name }: { src: string; poster: string; name: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const animationRef = useRef<number | null>(null)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [speed, setSpeed] = useState(1)

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

  const toggleSpeed = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    const nextSpeed = speed === 1 ? 2 : 1
    if (videoRef.current) videoRef.current.playbackRate = nextSpeed
    setSpeed(nextSpeed)
  }

  return (
    <div className="relative grid aspect-square place-items-center">
      <div
        className="relative w-[86%] rounded-full p-1"
        style={{ background: `conic-gradient(#22D2B8 ${progress * 3.6}deg, rgba(248,241,231,0.2) 0)` }}
      >
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          controls
          playsInline
          preload="metadata"
          aria-label={`Видеоотзыв ${name}`}
          onLoadedMetadata={sync}
          onDurationChange={sync}
          onTimeUpdate={sync}
          onPlay={startTracking}
          onPause={() => {
            stopTracking()
            sync()
          }}
          onEnded={() => {
            stopTracking()
            sync()
          }}
          className="block w-full aspect-square rounded-full object-cover bg-[#071316]"
        />
      </div>
      <button
        type="button"
        onClick={toggleSpeed}
        aria-label={speed === 1 ? 'Включить скорость 2x' : 'Вернуть скорость 1x'}
        className={`absolute right-1 top-1 z-10 min-w-8 rounded-full border px-2 py-1 text-[10px] font-semibold leading-none ${speed === 2 ? 'border-[#22D2B8] bg-[#22D2B8] text-[#071316]' : 'border-[rgba(248,241,231,0.3)] bg-[rgba(7,19,22,0.78)] text-[#F8F1E7]'}`}
      >
        {speed}×
      </button>
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
              Послушайте моих учеников
            </h2>
          </div>
        </SectionWrapper>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto mb-10">
          {reviews.map((review, index) => (
            <SectionWrapper key={review.src} delay={index * 100}>
              <article className="p-1 md:p-2 text-center h-full">
                <VideoReview src={review.src} poster={review.poster} name={review.name} />
                <h3 className="text-base md:text-lg font-medium text-[#F8F1E7] mt-4">{review.name}</h3>
                {review.meta && (
                  <p className="text-xs md:text-sm text-[rgba(248,241,231,0.58)] font-light mt-1">{review.meta}</p>
                )}
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
