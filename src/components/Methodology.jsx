import React from 'react'
import { useTranslation } from 'react-i18next'
import { Sparkles, MessageCircle, FileCheck, Headphones, Send } from 'lucide-react'

export function Methodology() {
  const { t } = useTranslation()
  const telegramLink = "https://t.me/callmeanv"

  const stepIcons = [FileCheck, MessageCircle, Sparkles, Headphones]

  return (
    <section id="methodology" className="py-24 relative overflow-hidden border-t border-slate-800/60">
      <div className="glow-subtle w-96 h-96 bg-blue-600/15 top-1/3 left-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('methodology.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t('methodology.title')}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            {t('methodology.subtitle')}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[0, 1, 2, 3].map((idx) => {
            const Icon = stepIcons[idx]
            return (
              <div
                key={idx}
                className="glass-card rounded-3xl p-8 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-blue-400/50">
                      {t(`methodology.steps.${idx}.number`)}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3">
                    {t(`methodology.steps.${idx}.title`)}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {t(`methodology.steps.${idx}.desc`)}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Bosqich {idx + 1}
                </div>
              </div>
            )
          })}
        </div>

        {/* Interactive Bottom Banner */}
        <div className="mt-14 text-center">
          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 px-6 py-3 rounded-full transition-all"
          >
            <Send className="w-4 h-4" />
            <span>O'qituvchi bilan birinchi konsultatsiyani belgilash</span>
          </a>
        </div>

      </div>
    </section>
  )
}
