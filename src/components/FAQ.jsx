import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react'

export function FAQ() {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx)
  }

  const items = [0, 1, 2, 3, 4]

  return (
    <section id="faq" className="py-24 relative overflow-hidden border-t border-slate-800/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('faq.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('faq.title')}
          </h2>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {items.map((idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 transition-colors hover:text-blue-400"
                >
                  <span className="font-bold text-base sm:text-lg text-white">
                    {t(`faq.items.${idx}.q`)}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180 text-blue-400' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4">
                    {t(`faq.items.${idx}.a`)}
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
