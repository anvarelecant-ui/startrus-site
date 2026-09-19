import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Send, Globe, Menu, X } from 'lucide-react'

export function Navbar() {
  const { t, i18n } = useTranslation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const languages = [
    { code: 'uz', label: "O'zbek" },
    { code: 'ru', label: 'Русский' },
    { code: 'en', label: 'English' }
  ]

  const changeLang = (code) => {
    i18n.changeLanguage(code)
    setMobileMenuOpen(false)
  }

  const telegramLink = "https://t.me/callmeanv"

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
            SR
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1">
              Start<span className="text-blue-500">Rus</span>
            </span>
            <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">
              Individual Ta'lim
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#teacher" className="hover:text-blue-400 transition-colors">
            {t('nav.about')}
          </a>
          <a href="#advantages" className="hover:text-blue-400 transition-colors">
            {t('nav.advantages')}
          </a>
          <a href="#methodology" className="hover:text-blue-400 transition-colors">
            {t('nav.methodology')}
          </a>
          <a href="#programs" className="hover:text-blue-400 transition-colors">
            {t('nav.programs')}
          </a>
          <a href="#faq" className="hover:text-blue-400 transition-colors">
            {t('nav.faq')}
          </a>
        </nav>

        {/* Actions (Language Switcher + Telegram Button) */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Selector */}
          <div className="flex items-center bg-slate-800/80 border border-slate-700/60 rounded-full p-1 text-xs font-semibold">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLang(lang.code)}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  i18n.language === lang.code
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {lang.code.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Primary CTA */}
          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-semibold px-4 py-2.5 rounded-full shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all hover:scale-[1.02]"
          >
            <Send className="w-4 h-4" />
            <span>{t('nav.contact')}</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile Language Switcher Mini */}
          <div className="flex items-center bg-slate-800/80 border border-slate-700/60 rounded-full p-0.5 text-[11px] font-semibold mr-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLang(lang.code)}
                className={`px-2 py-0.5 rounded-full transition-all ${
                  i18n.language === lang.code
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {lang.code.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-t border-slate-800 px-4 pt-3 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-base font-medium text-slate-300">
            <a 
              href="#teacher" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-400 transition-colors"
            >
              {t('nav.about')}
            </a>
            <a 
              href="#advantages" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-400 transition-colors"
            >
              {t('nav.advantages')}
            </a>
            <a 
              href="#methodology" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-400 transition-colors"
            >
              {t('nav.methodology')}
            </a>
            <a 
              href="#programs" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-400 transition-colors"
            >
              {t('nav.programs')}
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-400 transition-colors"
            >
              {t('nav.faq')}
            </a>
          </nav>

          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 rounded-xl shadow-lg shadow-blue-600/30"
          >
            <Send className="w-4 h-4" />
            <span>{t('nav.contact')}</span>
          </a>
        </div>
      )}
    </header>
  )
}
