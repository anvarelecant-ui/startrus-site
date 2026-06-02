import { useState } from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

export function Accordion({ items, className }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, index) => (
        <div key={index} className="glass rounded-xl overflow-hidden transition-all">
          <button
            className="flex w-full items-center justify-between p-6 text-left font-bold text-[var(--color-text-dark)] hover:bg-black/5"
            onClick={() => toggle(index)}
          >
            <span className="text-lg">{item.q}</span>
            <ChevronDown
              className={cn(
                "h-6 w-6 shrink-0 transition-transform duration-300 text-[var(--color-primary)]",
                openIndex === index ? "rotate-180" : ""
              )}
            />
          </button>
          <div
            className={cn(
              "grid transition-all duration-300 ease-in-out",
              openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            )}
          >
            <div className="overflow-hidden">
              <div className="p-6 pt-0 text-[var(--color-text-dark)]/70 text-base">
                {item.a}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
