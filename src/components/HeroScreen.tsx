'use client'

export default function HeroScreen() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 md:pb-24 overflow-hidden grid-bg">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center">

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#F8F1E7] leading-[1.08] max-w-4xl">
            Поможем студенту стать репетитором с доходом{' '}
            <span className="text-[#22D2B8] font-medium">150к+/мес</span>{' '}
            при занятости до 15ч в неделю
          </h1>
        </div>
      </div>
    </section>
  )
}
