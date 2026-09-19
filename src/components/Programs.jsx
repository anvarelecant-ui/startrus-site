import React from 'react'
import { useTranslation } from 'react-i18next'
import { Check, Send, Sparkles, Star } from 'lucide-react'

export function Programs() {
  const { t } = useTranslation()
  const telegramLink = "https://t.me/callmeanv"

  const programs = [0, 1, 2]

  return (
    <section id="programs" className="py-24 relative overflow-hidden bg-slate-950/40 border-t border-slate-800/60">
      <div className="glow-subtle w-96 h-96 bg-indigo-600/15 top-10 right-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('programs.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t('programs.title')}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            {t('programs.subtitle')}
          </p>
        </div>

        {/* 3 Programs Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {programs.map((idx) => {
            const isPopular = idx === 1
            return (
              <div
                key={idx}
                className={`glass-card rounded-3xl p-8 flex flex-col justify-between relative transition-all ${
                  isPopular 
                    ? 'border-blue-500/50 shadow-2xl shadow-blue-500/20 ring-1 ring-blue-500/50 bg-slate-900/90' 
                    : 'bg-slate-900/60'
                }`}
              >
                {/* Popular Pill */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg flex items-center gap-1.5 uppercase tracking-wider">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    Eng ommabop tanlov
                  </div>
                )}

                <div>
                  {/* Level Tag */}
                  <div className="inline-block px-3 py-1 rounded-lg bg-blue-500/10 text-blue-400 font-mono text-xs font-bold mb-4">
                    {t(`programs.items.${idx}.level`)}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {t(`programs.items.${idx}.title`)}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {t(`programs.items.${idx}.desc`)}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-3 pt-4 border-t border-slate-800">
                    {[0, 1, 2, 3].map((fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-sm text-slate-200">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{t(`programs.items.${idx}.features.${fIdx}`)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="mt-8 pt-6 border-t border-slate-800">
                  <div className="text-xs text-slate-400 mb-3 text-center">
                    💰 Narx va dars jadvali shaxsiy suhbatda kelishiladi
                  </div>
                  <a
                    href={telegramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-sm transition-all ${
                      isPopular
                        ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 hover:scale-[1.02]'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700'
                    }`}
                  >
                    <Send className="w-4 h-4" />
                    <span>Darsga yozilish</span>
                  </a>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
