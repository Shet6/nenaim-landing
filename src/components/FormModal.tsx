'use client'

import { useState } from 'react'
import { X, Send, CheckCircle } from 'lucide-react'

interface FormModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function FormModal({ isOpen, onClose }: FormModalProps) {
  const [step, setStep] = useState<'form' | 'success'>('form')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((r) => setTimeout(r, 1000))
    setIsSubmitting(false)
    setStep('success')
  }

  const handleClose = () => {
    setStep('form')
    setName('')
    setPhone('')
    setSubject('')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-[#0E171E]/80 backdrop-blur-sm"
        onClick={handleClose}
      />

      <div className="relative w-full max-w-md panel p-6 md:p-8 animate-scale-in">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-1 text-[rgba(248,241,231,0.5)] hover:text-[#F8F1E7] transition-colors"
          aria-label="Закрыть"
        >
          <X size={20} />
        </button>

        {step === 'form' ? (
          <>
            <h3 className="text-lg font-light text-[#F8F1E7] mb-1 tracking-tight">
              Запишитесь на отбор
            </h3>
            <p className="text-sm text-[rgba(248,241,231,0.5)] font-light mb-6">
              Напишите мне в Telegram, договоримся о работе
            </p>

            <a
              href="https://t.me/shetartm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full h-12 text-sm font-medium bg-[#22D2B8] text-[#071316] hover:bg-[#22D2B8]/90 transition-colors tracking-wide"
            >
              <Send size={15} />
              Напишите в Telegram
            </a>

            <p className="text-xs text-[rgba(248,241,231,0.3)] text-center mt-4 font-light">
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
            </p>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-14 h-14 bg-[rgba(34,210,184,0.12)] flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={28} className="text-[#22D2B8]" />
            </div>
            <h3 className="text-lg font-light text-[#F8F1E7] mb-2 tracking-tight">
              Заявка отправлена!
            </h3>
            <p className="text-sm text-[rgba(248,241,231,0.5)] font-light mb-6">
              Я свяжусь с вами в ближайшее время, чтобы обсудить детали
            </p>
            <button
              onClick={handleClose}
              className="px-6 py-2.5 border border-[rgba(248,241,231,0.16)] text-[rgba(248,241,231,0.8)] text-sm font-light hover:bg-[rgba(248,241,231,0.045)] transition-colors tracking-wide"
            >
              Закрыть
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
