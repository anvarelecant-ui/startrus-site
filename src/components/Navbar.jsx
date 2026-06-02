
import { useTranslation } from 'react-i18next'
import { Globe } from 'lucide-react'
import { Button } from './ui/Button'

export function Navbar() {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'uz' ? 'ru' : 'uz'
    i18n.changeLanguage(newLang)
  }

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/10">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="text-[var(--color-accent)] font-black text-3xl">✦</div>
          <span className="text-2xl font-black text-[var(--color-text-dark)] tracking-tight">
            Start<span className="text-[var(--color-primary)]">Rus</span>
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-[var(--color-text-dark)]/70 hover:text-[var(--color-primary)] transition-colors"
          >
            <Globe className="w-5 h-5" />
            <span className="font-bold text-sm uppercase">{i18n.language}</span>
          </button>
          
          <Button variant="default" size="sm" onClick={() => window.open('https://t.me/StartRus_Bot', '_blank')}>
            <span className="hidden sm:inline">{i18n.t('hero.cta')}</span>
            <span className="sm:hidden">Start</span>
          </Button>
        </div>
      </div>
    </nav>
  )
}
