
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { Button } from './ui/Button'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Texture Overlay */}
      <div className="noise-overlay opacity-30 mix-blend-overlay"></div>

      {/* Content Overlay */}
      <div className="container mx-auto px-4 z-10 relative pointer-events-none">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="glass-dark p-8 md:p-12 rounded-[2.5rem] inline-block pointer-events-auto shadow-[0_0_80px_rgba(38,198,218,0.1)] border-white/10"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-accent)] to-[#ff5252] text-white mb-6 shadow-xl shadow-red-500/30"
            >
              <span className="text-4xl">✦</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
              <span className="text-gradient block">{t('hero.title')}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-10 font-medium">
              {t('hero.subtitle')}
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button 
                size="lg" 
                className="text-xl px-10 py-6 rounded-full bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-primary)] hover:opacity-90 border-none shadow-[0_0_30px_rgba(38,198,218,0.4)]"
                onClick={() => window.open('https://t.me/StartRus_Bot', '_blank')}
              >
                <Send className="w-6 h-6 mr-3" />
                {t('hero.cta')}
              </Button>
            </motion.div>
            
          </motion.div>
        </div>
      </div>
    </section>
  )
}
