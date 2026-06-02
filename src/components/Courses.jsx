import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { GraduationCap, ArrowRight } from 'lucide-react'
import { Button } from './ui/Button'

export function Courses() {
  const { t } = useTranslation()

  return (
    <section className="py-24 relative overflow-hidden" id="courses">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-dark p-10 md:p-16 rounded-[3rem] border border-white/10 shadow-xl relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[var(--color-primary-light)]/10 to-transparent pointer-events-none" />

            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--color-primary)]/20 text-[var(--color-primary-light)] mb-8 relative z-10">
              <GraduationCap className="w-10 h-10" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight relative z-10">
              {t('courses.title')}
            </h2>
            
            <p className="text-xl text-white/80 mb-10 font-medium max-w-2xl mx-auto relative z-10">
              {t('courses.desc')}
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block relative z-10"
            >
              <Button 
                size="lg" 
                className="text-lg px-10 py-7 rounded-full bg-white text-[var(--color-background)] hover:bg-slate-200 border-none shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-all font-bold"
                onClick={() => window.open('https://t.me/StartRus_Bot?start=course', '_blank')}
              >
                {t('courses.cta')}
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
