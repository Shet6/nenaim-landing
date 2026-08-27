'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Обо мне', href: '#trust' },
  { label: 'Результаты', href: '#profiles' },
  { label: 'Программа', href: '#program' },
  { label: 'Тарифы', href: '#pricing' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-[#101D24]/90 backdrop-blur-xl border-b border-[rgba(248,241,231,0.10)]'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-medium text-[#F8F1E7] tracking-tight">ненайм</span>
              <span className="text-[10px] text-[rgba(248,241,231,0.5)] font-light tracking-wide">для репетиторов</span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[rgba(248,241,231,0.62)] hover:text-[#F8F1E7] transition-colors font-light tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://t.me/shetartm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#22D2B8] text-[#071316] text-sm font-medium hover:bg-[#22D2B8]/90 transition-colors tracking-wide"
            >
              Записаться
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-[#F8F1E7]"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Меню"
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden transition-all duration-300 overflow-hidden bg-[#101D24]/95 backdrop-blur-xl',
          isMobileOpen ? 'max-h-80 opacity-100 border-t border-[rgba(248,241,231,0.10)]' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="flex flex-col gap-2 px-4 pb-6 pt-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[rgba(248,241,231,0.62)] hover:text-[#F8F1E7] transition-colors py-2 font-light tracking-wide"
              onClick={() => setIsMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://t.me/shetartm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#22D2B8] text-[#071316] text-sm font-medium hover:bg-[#22D2B8]/90 transition-colors tracking-wide mt-2"
            onClick={() => setIsMobileOpen(false)}
          >
            Записаться
          </a>
        </nav>
      </div>
    </header>
  )
}
