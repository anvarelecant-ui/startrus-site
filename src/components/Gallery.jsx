import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Using local images that the user will upload to public/pages/
const pages = [
  "/pages/4.png", // Обложка / Глава
  "/pages/5.png", // Содержание
  "/pages/2.png", // Словарь
  "/pages/3.png"  // Грамматика
]

export function Gallery() {
  const { t } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => setCurrentIndex((prev) => (prev + 1) % pages.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + pages.length) % pages.length)

  return (
    <section className="py-32 relative overflow-hidden" id="gallery">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white tracking-tight"
          >
            {t('gallery.title')}
          </motion.h2>
        </div>

        <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center">
          
          <button onClick={prev} className="absolute left-0 md:-left-12 z-50 p-3 bg-white/10 backdrop-blur-md shadow-xl rounded-full text-white hover:bg-[var(--color-primary)] transition-all border border-white/20">
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div className="relative w-full aspect-[3/4] md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black/40 backdrop-blur-sm">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={pages[currentIndex]}
                alt={`Book page ${currentIndex + 1}`}
                className="w-full h-full object-contain p-4"
                style={{
                  clipPath: "inset(0 0 8% 0)", // Crops the bottom 8% to remove QR codes
                  filter: "contrast(1.15) brightness(1.05) saturate(1.1)", // Enhances quality and makes text pop
                  transform: "scale(1.02)" // Slightly scales up to compensate for the cropped bottom
                }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </AnimatePresence>
          </div>

          <button onClick={next} className="absolute right-0 md:-right-12 z-50 p-3 bg-white/10 backdrop-blur-md shadow-xl rounded-full text-white hover:bg-[var(--color-primary)] transition-all border border-white/20">
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
        
        {/* Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {pages.map((_, i) => (
            <button 
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${currentIndex === i ? 'bg-[var(--color-primary-light)] scale-125' : 'bg-white/30'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
