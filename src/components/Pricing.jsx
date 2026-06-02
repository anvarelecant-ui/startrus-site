
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Send, Star } from 'lucide-react'
import { Button } from './ui/Button'

export function Pricing() {
  const { t } = useTranslation()

  return (
    <section className="py-24 relative overflow-hidden" id="pricing">
      {/* Decorative stars */}
      <div className="absolute top-10 left-10 text-[var(--color-accent-yellow)]/20 animate-pulse">
        <Star className="w-24 h-24" fill="currentColor" />
      </div>
      <div className="absolute bottom-10 right-10 text-[var(--color-accent)]/20 animate-pulse animation-delay-2000">
        <Star className="w-32 h-32" fill="currentColor" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-dark p-10 md:p-16 rounded-[3rem] border border-white/10 shadow-2xl"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--color-accent)]/20 text-[var(--color-accent)] mb-8">
              <span className="text-5xl">✦</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              {t('pricing.title')}
            </h2>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button 
                size="lg" 
                className="text-xl px-12 py-8 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[#ff5252] hover:from-[#ff5252] hover:to-[var(--color-accent)] border-none shadow-[0_0_40px_rgba(232,53,42,0.5)] hover:shadow-[0_0_60px_rgba(232,53,42,0.8)]"
                onClick={() => window.open('https://t.me/StartRus_Bot', '_blank')}
              >
                <Send className="w-8 h-8 mr-3" />
                {t('pricing.cta')}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
