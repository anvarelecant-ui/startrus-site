
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Accordion } from './ui/Accordion'

export function FAQ() {
  const { t } = useTranslation()
  const items = t('faq.items', { returnObjects: true })

  return (
    <section className="py-24 relative" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-[var(--color-text-dark)]"
          >
            {t('faq.title')}
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Accordion items={items} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
