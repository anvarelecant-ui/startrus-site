import React from 'react'
import { useTranslation } from 'react-i18next'
import { Send, Heart } from 'lucide-react'

export function Footer() {
  const { t } = useTranslation()
  const telegramLink = "https://t.me/callmeanv"

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-sm">
                SR
              </div>
              <span className="text-xl font-extrabold text-white">
                Start<span className="text-blue-500">Rus</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              {t('footer.desc')}
            </p>
          </div>

          {/* Social / Contact */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="text-xs text-slate-400">
              {t('footer.contact_label')}
            </span>
            <a
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-blue-500 text-slate-200 hover:text-white px-4 py-2 rounded-full text-xs font-semibold transition-all"
            >
              <Send className="w-3.5 h-3.5 text-blue-400" />
              <span>@callmeanv</span>
            </a>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} StartRus.uz. {t('footer.rights')}
          </div>
          <div className="flex items-center gap-1 text-[11px]">
            <span>Ulday Abdibaeva bilan individual ta'lim</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
