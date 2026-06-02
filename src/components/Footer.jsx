
import { useTranslation } from 'react-i18next'
import { Send } from 'lucide-react'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-transparent py-12 border-t border-white/10 relative z-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2 mb-6 md:mb-0">
          <div className="text-[var(--color-accent)] font-black text-2xl">✦</div>
          <span className="text-xl font-black text-[var(--color-text-dark)] tracking-tight">
            Start<span className="text-[var(--color-primary)]">Rus</span>
          </span>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-2">
          <a 
            href="https://t.me/StartRus_Bot" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[var(--color-primary)] hover:text-[var(--color-primary-light)] font-bold transition-colors"
          >
            <Send className="w-5 h-5" />
            @StartRus_Bot
          </a>
          <p className="text-slate-500 text-sm">
            startrus.uz © 2026. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}
