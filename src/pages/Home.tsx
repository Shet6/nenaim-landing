'use client'

import { useState } from 'react'
import Header from '@/components/Header'

import HeroScreen from '@/components/HeroScreen'
import Trust from '@/components/Trust'
import Program from '@/components/Program'
import TutorTrack from '@/components/TutorTrack'

import Pricing from '@/components/Pricing'
import Profiles from '@/components/Profiles'
import Who from '@/components/Who'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import FormModal from '@/components/FormModal'

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  // Handle hash links for form modal
  const handleAnchorClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement
    const anchor = target.closest('a')
    if (anchor && anchor.getAttribute('href') === '#form') {
      e.preventDefault()
      setIsFormOpen(true)
    }
  }

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden" onClick={handleAnchorClick}>

      <Header />

      <main>
        <HeroScreen />
        <Trust />
        <Profiles />

        <TutorTrack />
        <Program />

        <Who />
        <Pricing />
        <FinalCTA />
      </main>

      <Footer />
      <FormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  )
}
