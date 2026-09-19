import React from 'react'
import { useTranslation } from 'react-i18next'
import { Send, ArrowRight, CheckCircle, Award, Sparkles, UserCheck, ShieldCheck } from 'lucide-react'

export function Hero() {
  const { t } = useTranslation()
  const telegramLink = "https://t.me/callmeanv"

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="glow-subtle w-96 h-96 bg-blue-600 top-10 left-1/4" />
      <div className="glow-subtle w-96 h-96 bg-indigo-500 top-40 right-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs sm:text-sm font-semibold">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>{t('hero.badge')}</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              {t('hero.title_start')}{' '}
              <span className="gradient-text block sm:inline">
                {t('hero.title_highlight')}
              </span>{' '}
              {t('hero.title_end')}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {t('hero.desc')}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-base px-7 py-4 rounded-full shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] transition-all"
              >
                <Send className="w-5 h-5" />
                <span>{t('hero.cta_primary')}</span>
              </a>

              <a
                href="#programs"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-base font-semibold px-6 py-4 rounded-full transition-all"
              >
                <span>{t('hero.cta_secondary')}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Trust Markers / Stats */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-white">
                  {t('hero.stat1_value')}
                </div>
                <div className="text-xs text-slate-400 font-medium">
                  {t('hero.stat1_label')}
                </div>
              </div>

              <div className="space-y-1 border-x border-slate-800 px-3">
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-400">
                  {t('hero.stat2_value')}
                </div>
                <div className="text-xs text-slate-400 font-medium">
                  {t('hero.stat2_label')}
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">
                  {t('hero.stat3_value')}
                </div>
                <div className="text-xs text-slate-400 font-medium">
                  {t('hero.stat3_label')}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Teacher Showcase Badge Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md glass-card rounded-3xl p-6 sm:p-8 relative">
              {/* Floating Status Badge */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-700/60">
                <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Qabul ochiq · 1-ga-1
                </div>
                <div className="text-xs text-slate-400 font-medium flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  Kafolatlangan metodika
                </div>
              </div>

              {/* Teacher Identity Presentation (No photo - Elegant Monogram / Academic Emblem) */}
              <div className="py-6 flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white text-3xl font-black shadow-xl shadow-blue-500/20 ring-4 ring-blue-500/30">
                    UA
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-amber-500 text-slate-950 p-1.5 rounded-lg shadow-md">
                    <Award className="w-4 h-4" />
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Ulday Abdibaeva
                </h2>
                <p className="text-sm text-blue-400 font-medium mt-1">
                  Rus tili bo'yicha professional repetitor
                </p>
                <div className="flex items-center gap-1 mt-2 text-xs text-slate-400">
                  <UserCheck className="w-3.5 h-3.5 text-slate-400" />
                  <span>5 yillik muvaffaqiyatli pedagogik tajriba</span>
                </div>
              </div>

              {/* Verified Experience Centers */}
              <div className="space-y-2.5 pt-2 border-t border-slate-700/60">
                <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  Tajriba markazlari:
                </div>
                
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span className="text-sm font-semibold text-slate-200">«Hong Kong» o'quv markazi</span>
                  </div>
                  <span className="text-[11px] text-slate-400">O'zbekiston</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span className="text-sm font-semibold text-slate-200">«Success Academy»</span>
                  </div>
                  <span className="text-[11px] text-slate-400">Intensiv</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-sm font-semibold text-slate-200">«Fitrat» o'quv markazi</span>
                  </div>
                  <span className="text-[11px] text-emerald-400 font-medium">Faoliyatda</span>
                </div>
              </div>

              {/* Direct Link button */}
              <div className="pt-6">
                <a
                  href={telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 text-blue-300 hover:text-white py-3 rounded-xl text-sm font-semibold transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Ustoz bilan Telegramda bog'lanish</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
