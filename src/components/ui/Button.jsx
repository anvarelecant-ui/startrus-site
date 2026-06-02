import React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? "span" : "button"
  
  const baseClasses = "inline-flex items-center justify-center rounded-xl text-sm font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
  
  const variants = {
    default: "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] text-white hover:opacity-90 shadow-lg hover:shadow-xl hover:-translate-y-1",
    destructive: "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent)]/90 hover:shadow-lg hover:-translate-y-1",
    outline: "border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10",
    secondary: "bg-[var(--color-accent-yellow)] text-[var(--color-text-dark)] hover:bg-[var(--color-accent-yellow)]/90 shadow-md hover:-translate-y-1 hover:shadow-lg",
    ghost: "hover:bg-black/5 hover:text-accent-foreground",
    link: "text-[var(--color-primary)] underline-offset-4 hover:underline",
  }
  
  const sizes = {
    default: "h-12 px-6 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-16 rounded-xl px-12 text-xl",
    icon: "h-10 w-10",
  }

  const classes = cn(
    baseClasses,
    variants[variant || "default"],
    sizes[size || "default"],
    className
  )

  return (
    <Comp
      className={classes}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }
