import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { createElement, Fragment, type ReactNode } from 'react'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Переносит союз "и" на новую строку, только если он висит в самом конце текста (последние 4 символа) */
export function breakAnd(text: string): ReactNode {
  const regex = /\s+и\s+/g
  const matches: { index: number; length: number }[] = []
  let match
  while ((match = regex.exec(text)) !== null) {
    matches.push({ index: match.index, length: match[0].length })
  }
  if (matches.length === 0) return text

  // Переносим только если "и" в последних 4 символах — то есть реально висит в конце
  const threshold = 4
  const results: ReactNode[] = []
  let lastIndex = 0

  for (const m of matches) {
    const distanceFromEnd = text.length - (m.index + m.length)
    if (distanceFromEnd <= threshold) {
      if (m.index > lastIndex) {
        results.push(text.slice(lastIndex, m.index))
      }
      results.push(createElement(Fragment, { key: `br-${m.index}` }, createElement('br'), 'и '))
      lastIndex = m.index + m.length
    }
  }

  if (lastIndex < text.length) {
    results.push(text.slice(lastIndex))
  }

  return results.length > 0 ? results : text
}
