"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"
import { CheckCircle2 } from "lucide-react"

interface EnhancedTechCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  colorClass: string
  iconColorClass: string
  bgGradientClass: string
  delay?: number
}

export function EnhancedTechCard({
  icon: Icon,
  title,
  description,
  features,
  colorClass,
  iconColorClass,
  bgGradientClass,
  delay = 0,
}: EnhancedTechCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const featureVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: 0.1 + index * 0.1,
      },
    }),
  }

  return (
    <motion.div ref={cardRef} variants={cardVariants} initial="hidden" animate={controls} className="group">
      <div
        className={cn(
          "relative h-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300",
          "hover:shadow-xl hover:shadow-primary-500/10 hover:border-primary-500/20",
          "flex flex-col",
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background gradient */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
            bgGradientClass,
          )}
        />

        {/* Icon */}
        <div className="relative z-10 mb-6">
          <div
            className={cn(
              "flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br",
              colorClass,
              "shadow-lg",
            )}
          >
            <Icon className="h-7 w-7 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex-grow">
          <h3 className="mb-3 text-xl font-bold text-gray-900">{title}</h3>
          <p className="mb-6 text-gray-600">{description}</p>

          {/* Features */}
          <div className="space-y-2">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={featureVariants}
                initial={isInView ? "visible" : "hidden"}
                animate={isInView ? "visible" : "hidden"}
                className="flex items-center"
              >
                <CheckCircle2 className={cn("mr-2 h-4 w-4", iconColorClass)} />
                <span className="text-sm text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Learn more link */}
        <div className="relative z-10 mt-6 pt-4 border-t border-gray-100">
          <a
            href="#"
            className={cn(
              "inline-flex items-center text-sm font-medium transition-colors",
              iconColorClass,
              "hover:underline",
            )}
          >
            Learn more
            <svg
              className={cn(
                "ml-1 h-4 w-4 transition-transform duration-300",
                isHovered ? "translate-x-1" : "translate-x-0",
              )}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  )
}

