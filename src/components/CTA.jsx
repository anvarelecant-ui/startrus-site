import React from 'react'
import { useTranslation } from 'react-i18next'
import { Send, Clock, UserCheck, ShieldCheck, Sparkles } from 'lucide-react'

export function CTA() {
  const { t } = useTranslation()
  const telegramLink = "https://t.me/callmeanv"

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card rounded-3xl p-8 sm:p-14 border border-blue-500/30 bg-gradient-to-br from-blue-950/40 via-slate-900 to-indigo-950/40 text-center relative overflow-hidden shadow-2xl">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('cta.badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-2xl mx-auto leading-tight">
            {t('cta.title')}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            {t('cta.desc')}
          </p>

          <div className="pt-8">
            <a
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-lg px-8 py-4 rounded-full shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] transition-all"
            >
              <Send className="w-5 h-5" />
              <span>{t('cta.button')}</span>
            </a>
          </div>

          <div className="text-xs text-slate-400 mt-4 font-medium">
            {t('cta.price_info')}
          </div>

          {/* Micro Trust Pills */}
          <div className="mt-10 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-blue-400" />
              <span>100% individual yondashuv</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Moslashuvchan qulay jadval</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>5 yillik sinovdan o'tgan tajriba</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
