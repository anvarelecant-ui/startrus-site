
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { BookOpen, Zap, MessageCircle, PenTool, Gamepad2, Bookmark } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription } from './ui/Card'

export function Features() {
  const { t } = useTranslation()
  const items = t('features.items', { returnObjects: true })
  
  const icons = [
    <BookOpen className="w-8 h-8 text-[var(--color-primary)]" />,
    <Zap className="w-8 h-8 text-[var(--color-accent-yellow)]" />,
    <MessageCircle className="w-8 h-8 text-[#4CAF50]" />,
    <PenTool className="w-8 h-8 text-[var(--color-accent)]" />,
    <Gamepad2 className="w-8 h-8 text-[#9C27B0]" />,
    <Bookmark className="w-8 h-8 text-[#FF9800]" />
  ]

  return (
    <section className="py-24 relative overflow-hidden" id="features">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-[var(--color-text-dark)]"
          >
            {t('features.title')}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-none bg-slate-50">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4">
                    {icons[index % icons.length]}
                  </div>
                  <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                  <CardDescription className="text-base text-slate-600">
                    {item.desc}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
