import React from 'react'
import { useTranslation } from 'react-i18next'
import { Target, Clock, ShieldCheck, Zap, UserCheck, Check, Sparkles } from 'lucide-react'

export function Advantages() {
  const { t } = useTranslation()

  const icons = [UserCheck, Target, Clock, ShieldCheck]

  return (
    <section id="advantages" className="py-24 relative overflow-hidden bg-slate-950/40 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('advantages.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t('advantages.title')}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            {t('advantages.subtitle')}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[0, 1, 2, 3].map((idx) => {
            const Icon = icons[idx]
            return (
              <div
                key={idx}
                className="glass-card rounded-3xl p-7 flex flex-col justify-between space-y-4 relative group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {t(`advantages.items.${idx}.title`)}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {t(`advantages.items.${idx}.desc`)}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs font-semibold text-blue-400">
                  <Check className="w-4 h-4 text-blue-400" />
                  <span>Kafolatlangan natija</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Visual Comparison Box: Groups vs 1-on-1 */}
        <div className="mt-16 glass-card rounded-3xl p-8 sm:p-10 border border-blue-500/20 bg-gradient-to-r from-blue-950/20 via-slate-900 to-indigo-950/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-3">
              <span className="text-xs uppercase font-bold tracking-wider text-rose-400 bg-rose-500/10 border border-rose-500/20 px-2.5 py-1 rounded-full">
                Katta guruhlarda:
              </span>
              <ul className="space-y-2 text-sm text-slate-400 pt-2">
                <li className="flex items-center gap-2">
                  <span className="text-rose-500 font-bold">✕</span> O'quvchi butun dars davomida atigi 5-10 daqiqa gapiradi
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-rose-500 font-bold">✕</span> Boshqalar oldida xato qilishdan doimiy xavotir va uyalish
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-rose-500 font-bold">✕</span> Qat'iy umumiy jadval va har bir kishiga mos bo'lmagan sur'at
                </li>
              </ul>
            </div>

            <div className="space-y-3 md:border-l md:border-slate-800 md:pl-8">
              <span className="text-xs uppercase font-bold tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                StartRus 1-ga-1 individual darslarida:
              </span>
              <ul className="space-y-2 text-sm text-slate-200 pt-2">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span> 70% vaqt faol nutq, o'qituvchining 100% e'tibori
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span> To'liq psixologik xotirjamlik va qo'llab-quvvatlash
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span> Faqat sizning maqsadlaringizga moslashtirilgan shaxsiy dastur
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
