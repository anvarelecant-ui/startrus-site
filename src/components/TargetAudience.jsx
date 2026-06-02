
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Plane } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription } from './ui/Card'

export function TargetAudience() {
  const { t } = useTranslation()
  const items = t('audience.items', { returnObjects: true })
  
  const icons = [
    <GraduationCap className="w-12 h-12 text-white" />,
    <Briefcase className="w-12 h-12 text-white" />,
    <Plane className="w-12 h-12 text-white" />
  ]
  
  const colors = [
    "bg-gradient-to-br from-blue-400 to-blue-600",
    "bg-gradient-to-br from-purple-400 to-purple-600",
    "bg-gradient-to-br from-orange-400 to-orange-600"
  ]

  return (
    <section className="py-24 relative" id="audience">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-[var(--color-text-dark)]"
          >
            {t('audience.title')}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, type: "spring" }}
            >
              <Card glass={false} className="h-full border-none shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <div className={`${colors[index]} p-8 flex justify-center items-center group-hover:scale-105 transition-transform duration-500`}>
                  {icons[index]}
                </div>
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-2xl mb-3 text-white">{item.title}</CardTitle>
                  <CardDescription className="text-base text-white/70">
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
