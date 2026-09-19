import React from 'react'
import { useTranslation } from 'react-i18next'
import { Award, BookOpen, GraduationCap, Building2, Quote, CheckCircle2, MessageSquare } from 'lucide-react'

export function Teacher() {
  const { t } = useTranslation()
  const telegramLink = "https://t.me/callmeanv"

  const centers = [
    {
      name: t('teacher.centers.0.name'),
      role: t('teacher.centers.0.role'),
      desc: t('teacher.centers.0.desc'),
      icon: Building2,
      badge: "Toshkent"
    },
    {
      name: t('teacher.centers.1.name'),
      role: t('teacher.centers.1.role'),
      desc: t('teacher.centers.1.desc'),
      icon: GraduationCap,
      badge: "Intensiv"
    },
    {
      name: t('teacher.centers.2.name'),
      role: t('teacher.centers.2.role'),
      desc: t('teacher.centers.2.desc'),
      icon: Award,
      badge: "Hozirgi kunda",
      active: true
    }
  ]

  return (
    <section id="teacher" className="py-24 relative overflow-hidden border-t border-slate-800/60">
      <div className="glow-subtle w-96 h-96 bg-indigo-600/20 top-20 right-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-semibold mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{t('teacher.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t('teacher.name')}
          </h2>
          <p className="text-lg text-blue-400 font-medium mt-2">
            {t('teacher.title')}
          </p>
        </div>

        {/* Grid: Bio & Experience Centers */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Pedagogical Philosophy & Quotes */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-card rounded-3xl p-8 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-400" />
                <span>Pedagogik yondashuv va tajriba</span>
              </h3>

              <p className="text-slate-300 leading-relaxed">
                {t('teacher.bio_p1')}
              </p>

              <p className="text-slate-300 leading-relaxed">
                {t('teacher.bio_p2')}
              </p>

              {/* Teacher Quote Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-950/40 to-slate-900 border border-blue-500/20 relative mt-6">
                <Quote className="w-8 h-8 text-blue-400/30 absolute top-4 right-4" />
                <p className="text-slate-200 italic text-sm sm:text-base leading-relaxed relative z-10">
                  {t('teacher.quote')}
                </p>
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-slate-300">Ulday Abdibaeva</span>
                  <span>5 yillik pedagogik tajriba</span>
                </div>
              </div>
            </div>

            {/* Teaching Pillars */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card rounded-2xl p-5">
                <div className="text-2xl font-black text-blue-400 mb-1">70%</div>
                <div className="text-sm font-semibold text-white">Jonli so'zlashuv</div>
                <div className="text-xs text-slate-400 mt-1">Har bir darsda faol nutq amaliyoti</div>
              </div>

              <div className="glass-card rounded-2xl p-5">
                <div className="text-2xl font-black text-emerald-400 mb-1">1-ga-1</div>
                <div className="text-sm font-semibold text-white">To'liq individual</div>
                <div className="text-xs text-slate-400 mt-1">Katta guruhlar va navbatlarsiz</div>
              </div>
            </div>
          </div>

          {/* Right Column: Educational Centers Timeline Cards */}
          <div className="lg:col-span-6 space-y-4">
            <div className="text-sm font-bold uppercase tracking-wider text-slate-400 px-1">
              {t('teacher.centers_title')}
            </div>

            {centers.map((center, idx) => {
              const Icon = center.icon
              return (
                <div
                  key={idx}
                  className={`glass-card rounded-2xl p-6 relative overflow-hidden transition-all ${
                    center.active ? 'border-blue-500/40 shadow-lg shadow-blue-500/10' : ''
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="text-lg font-bold text-white">
                            {center.name}
                          </h4>
                          {center.active && (
                            <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full">
                              Amaldagi
                            </span>
                          )}
                        </div>
                        <div className="text-sm font-medium text-blue-400 mt-0.5">
                          {center.role}
                        </div>
                        <p className="text-sm text-slate-300 mt-2">
                          {center.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Quick Action Box */}
            <div className="pt-4">
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-bold text-white">Shaxsan maslahat kerakmi?</div>
                  <div className="text-xs text-slate-400 mt-0.5">O'qituvchi bilan Telegram orqali bog'laning</div>
                </div>
                <a
                  href={telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs px-5 py-2.5 rounded-full transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Savol berish</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
